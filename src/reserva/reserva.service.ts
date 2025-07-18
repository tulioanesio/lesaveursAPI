import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReservaDTO } from './dtos/create-reserva.dto';

@Injectable()
export class ReservaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateReservaDTO) {
    const reserva = await this.prisma.reserva.create({
      data,
    });
    return reserva;
  }
}
