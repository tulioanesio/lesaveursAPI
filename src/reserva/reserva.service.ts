import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReservaDTO } from './dtos/create-reserva.dto';
import { startOfDay } from 'date-fns'

@Injectable()
export class ReservaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateReservaDTO) {
    const dataFormatada = startOfDay(new Date(data.data));

    const reservaExistente = await this.prisma.reserva.findFirst({
      where: {
        mesaId: data.mesaId,
        data: dataFormatada,
      },
    });

    if (reservaExistente) {
      throw new BadRequestException('Esta mesa já está reservada neste dia.');
    }

    const reserva = await this.prisma.reserva.create({
      data,
    });
    return reserva;
  }

  async getAllReservas() {
    return await this.prisma.reserva.findMany();
  }
}
