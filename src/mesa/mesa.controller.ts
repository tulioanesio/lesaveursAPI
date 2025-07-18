import { Body, Controller, Get } from '@nestjs/common';
import { MesaService } from './mesa.service';

@Controller('mesas')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Get()
  findAll() {
    return this.mesaService.getAllMesas();
  }
}
