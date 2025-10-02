import { Test, TestingModule } from '@nestjs/testing';
import { ReservaService } from './reserva.service';
import { PrismaService } from '../prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';

describe('ReservaService tests', () => {
  let reservaService: ReservaService;

  let reserva1 = {
    id: 1,
    nome: 'John Doe',
    email: 'john.doe@example.com',
    telefone: '123456789',
    data: new Date(),
    mesa: {
      id: 1,
      numero: 5,
      capacidade: 4,
    },
    mesaId: 1,
  };

  let reserva2 = {
    id: 2,
    nome: 'Jane Smith',
    email: 'jane.smith@example.com',
    telefone: '987654321',
    data: new Date(),
    mesa: {
      id: 2,
      numero: 10,
      capacidade: 6,
    },
    mesaId: 2,
  };

  let reserva3 = {
    id: 3,
    nome: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    telefone: '555555555',
    data: new Date(),
    mesa: {
      id: 3,
      numero: 15,
      capacidade: 8,
    },
    mesaId: 3,
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [ReservaService, PrismaService],
    }).compile();

    reservaService = moduleFixture.get<ReservaService>(ReservaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(reservaService).toBeDefined();
  });

  it('should create a reserva', async () => {
    reservaService.create = jest.fn().mockReturnValueOnce(reserva1);

    const result = await reservaService.create(reserva1);
    expect(result).toEqual(reserva1);
    expect(reserva1.id).toBe(1);
  });

  it('should throw BadRequestException if the table is already reserved for the day', async () => {
    reservaService.create = jest.fn().mockResolvedValueOnce(reserva1);

    try {
      await reservaService.create(reserva1);
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
      expect(e.message).toBe('Esta mesa já está reservada neste dia.');
    }
  });

  it('should return all reservas', async () => {
    const reservas = [reserva1, reserva2, reserva3];

    reservaService.getAllReservas = jest.fn().mockReturnValueOnce(reservas);

    const result = await reservaService.getAllReservas();
    expect(result).toEqual(reservas);
    expect(result).toHaveLength(3);
  });


});
