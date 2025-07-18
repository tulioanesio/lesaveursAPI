// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Array de mesas
  const mesas = [
    { numero: 1, capacidade: 2 },
    { numero: 2, capacidade: 4 },
    { numero: 3, capacidade: 2 },
    { numero: 4, capacidade: 6 },
    { numero: 5, capacidade: 4 },
    { numero: 6, capacidade: 4 },
    { numero: 7, capacidade: 8 },
    { numero: 8, capacidade: 2 },
    { numero: 9, capacidade: 2 },
    { numero: 10, capacidade: 4 },
    { numero: 11, capacidade: 6 },
  ];

  // Criação em massa
  for (const mesa of mesas) {
    await prisma.mesa.upsert({
      where: { numero: mesa.numero },
      update: {},
      create: {
        ...mesa,
        disponivel: true,
      },
    });
  }

  console.log('Mesas inseridas com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
