import { Module } from '@nestjs/common';
import { ReservaService } from './reserva/reserva.service';
import { ReservaModule } from './reserva/reserva.module';
import { MesaModule } from './mesa/mesa.module';
import { PrismaService } from './prisma/prisma.service';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [ReservaModule, MesaModule, MenuModule,],
  controllers: [],
  providers: [ReservaService, PrismaService],
})
export class AppModule {}
