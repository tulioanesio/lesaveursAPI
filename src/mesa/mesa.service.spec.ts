import { Test, TestingModule } from "@nestjs/testing";
import { before } from "node:test";
import { MesaService } from "./mesa.service";
import { PrismaService } from "../prisma/prisma.service";

describe('MesaService tests', () => {
    let mesaService: MesaService;

    let mesa1 = { id: 1, numero: 5, capacidade: 4 };
    let mesa2 = { id: 2, numero: 10, capacidade: 6 };
    let mesa3 = { id: 3, numero: 15, capacidade: 8 };

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            providers: [MesaService, PrismaService],
        }).compile();

        mesaService = moduleFixture.get<MesaService>(MesaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return all mesas', async () => {
        const mesas = [mesa1, mesa2, mesa3];

        mesaService.getAllMesas = jest.fn().mockReturnValueOnce(mesas);

        const result = await mesaService.getAllMesas();
        expect(result).toEqual(mesas);
        expect(result).toHaveLength(3);
    });

});
