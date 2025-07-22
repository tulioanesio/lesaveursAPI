import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const createMesas = await prisma.mesa.createMany({
    data: [
      { numero: 1, capacidade: 2 },
      { numero: 2, capacidade: 4 },
      { numero: 3, capacidade: 2 },
      { numero: 4, capacidade: 6 },
      { numero: 5, capacidade: 2 },
      { numero: 6, capacidade: 4 },
      { numero: 7, capacidade: 8 },
    ],
    skipDuplicates: true,
  });

  const createMenus = await prisma.menu.createMany({
    data: [
      {
        nome: 'Risotto de Camarão',
        descricao:
          'Arroz cremoso com camarões frescos, toque de limão siciliano e ervas finas.',
        imageUrl:
          'https://www.terrasantacamaroes.com.br/public/images/produtos/36d9ae22e9113136ac4a47dbdcfc710c.webp',
      },
      {
        nome: 'Filé Mignon ao Molho Roti',
        descricao:
          'Medalhão de filé mignon grelhado, servido com molho roti e batatas rústicas.',
        imageUrl:
          'https://ogimg.infoglobo.com.br/rio/bairros/24027895-2cc-ee2/FT1086A/84801464_BA-Rio-de-Janeiro-RJ-25-09-2019-Toque-de-ChefChef-Francisco-Candido-do-Bistro-Varietta-D.jpg',
      },
      {
        nome: 'Salmão Grelhado com Aspargos',
        descricao:
          'Salmão fresco grelhado, acompanhado de aspargos salteados e purê de batata.',
        imageUrl:
          'https://img.freepik.com/fotos-gratis/salmao-assado-adornado-com-espargos-e-tomates-com-ervas_2829-14516.jpg',
      },
      {
        nome: 'Ravioli de Ricota e Espinafre',
        descricao:
          'Massa artesanal recheada com ricota e espinafre, servida ao molho pomodoro.',
        imageUrl:
          'https://cdn.awsli.com.br/2500x2500/2617/2617861/produto/236952411/pasta-agnolotti-de-ricota-com-espinafre-1-xnxjy5cvcy.jpg',
      },
      {
        nome: 'Polvo à Lagareiro',
        descricao:
          'Polvo assado ao azeite, servido com batatas ao murro e alho confitado.',
        imageUrl:
          'https://lialobao.com/wp-content/uploads/2020/11/Polvo-a-Lagareiro.jpg',
      },
      {
        nome: 'Magret de Pato ao Molho de Framboesa',
        descricao:
          'Peito de pato grelhado, servido com molho de framboesa e legumes salteados.',
        imageUrl:
          'https://static1.squarespace.com/static/5ba7a02a7fdcb8cb9072e572/5ba7a36171c10b701702757f/5bb100768165f5f83cd68d41/1538326965539/peito+pato+com+molho+de+framboesas+e+arroz+vermelho.JPG?format=1500w',
      },
      {
        nome: 'Cordeiro ao Vinho Tinto',
        descricao:
          'Carré de cordeiro assado, acompanhado de molho de vinho tinto e risoto de parmesão.',
        imageUrl:
          'https://www.rbsdirect.com.br/imagesrc/16698296.jpg?w=700',
      },
      {
        nome: 'Tiramisu Clássico',
        descricao:
          'Sobremesa italiana de camadas de biscoito, café, creme mascarpone e cacau.',
        imageUrl:
          'https://receitasde.com.br/wp-content/uploads/2024/09/Tiramisu.jpg',
      },
      {
        nome: 'Negroni',
        descricao: 'Drink clássico italiano com gin, vermute rosso e Campari.',
        imageUrl:
          'https://www.liquor.com/thmb/KPTRXSVO7vyx7O2fPyNkLh9JQPo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mezcal-negroni-1500x1500-primary-6f6c472050a949c8a55aa07e1b5a2d1b.jpg',
      },
      {
        nome: 'Mojito',
        descricao:
          'Coquetel refrescante cubano com rum, hortelã, limão e água com gás.',
        imageUrl:
          'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/1398497884aa01cd7885491d99688a69.jpeg?itok=wrP-oR5a',
      },
      {
        nome: 'Aperol Spritz',
        descricao:
          'Drink italiano com Aperol, prosecco e água com gás, servido com laranja.',
        imageUrl:
          'https://s02.video.glbimg.com/x240/13189597.jpg',
      },
      {
        nome: 'Old Fashioned',
        descricao:
          'Coquetel clássico americano com bourbon, açúcar, angostura e laranja.',
        imageUrl:
          'https://cdn.loveandlemons.com/wp-content/uploads/2022/11/old-fashioned-recipe.jpg',
      },
    ],
    skipDuplicates: true,
  });
  console.log(
    `${createMesas.count} mesas e ${createMenus.count} menus inseridos com sucesso!`,
  );
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
