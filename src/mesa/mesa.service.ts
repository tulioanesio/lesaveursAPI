import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MesaService {
  constructor(private prisma: PrismaService) {}

  async getAllMesas() {
    return await this.prisma.mesa.findMany();
  }
}
