import { Test, TestingModule } from '@nestjs/testing';
import { MenuService } from './menu.service';
import { PrismaService } from '../prisma/prisma.service';

describe('MenuService tests', () => {
  let menuService: MenuService;

  let menu1 = { id: 1, nome: 'Menu 1', descricao: "descricao1", imageUrl: 'url1' };
  let menu2 = { id: 2, nome: 'Menu 2', descricao: "descricao2", imageUrl: 'url2' };
  let menu3 = { id: 3, nome: 'Menu 3', descricao: "descricao3", imageUrl: 'url3' };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [MenuService, PrismaService],
    }).compile();

    menuService = moduleFixture.get<MenuService>(MenuService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return all menus', async () => {
    const menus = [menu1, menu2, menu3];

    menuService.getAllMenu = jest.fn().mockReturnValueOnce(menus);

    const result = await menuService.getAllMenu();
    expect(result).toEqual(menus);
    expect(result).toHaveLength(3);
  });
});
