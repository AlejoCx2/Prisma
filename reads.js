const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const read = async () => {
  /* const usuarios = await prisma.user.findMany({
    include: {
      personal_data: true,
      projects: true
    },
  });
  console.log(usuarios); */

  /* const datosPersonales = await prisma.personal_data.findUnique({
    where: {
      id: 2,
    },
    select: {
      name: true,
      mail: true,
    },
  });
  console.log(datosPersonales); */

  /* const usuarp = await prisma.user.findMany({
    where: {
      usernaname: {
        startsWith: "A",
      },
      projects: {
        some: {
          name: {
            endsWith: "5",
          },
        },
      },
    },
  });
  console.log(usuarp); */
};

read()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
