import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { ReservaModule } from '../src/reserva/reserva.module';

describe('Reservas E2E', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ReservaModule, AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    prisma = app.get(PrismaService);

    await prisma.reserva.deleteMany();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create a reserva', async () => {
    const res = await request(app.getHttpServer())
      .post('/reserva')
      .send({
        nome: 'Tulio',
        email: 'tulioluv@gmail.com',
        telefone: '48984122665',
        data: new Date(),
        mesaId: 44,
      })
      .expect(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body.email).toBe('tulioluv@gmail.com');
  });

  it('should return a list of reservas', async () => {
    const res = await request(app.getHttpServer()).get('/reserva/dashboard').expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
