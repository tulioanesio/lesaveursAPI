import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { CreateReservaDTO } from './dtos/create-reserva.dto';

@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post()
  async create(@Body() body: CreateReservaDTO) {
    return this.reservaService.create(body);
  }

  @Get('dashboard')
  findAll() {
    return this.reservaService.getAllReservas();
  }
}
