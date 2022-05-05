const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const deletes = async () => {
  /* const projetDelete = await prisma.projects.delete({
    where: {
      id: 1,
    },
  });
  console.log(projetDelete); */

  /* const projetDelete = await prisma.user.deleteMany({
    where: {
      usernaname: {
        contains: "o",
      },
    },
  });
  console.log(projetDelete); */

  /* const projetDelete = await prisma.projects.deleteMany({
    where: {
      OR: [{ leader_id: 1 }, { leader_id: 2 }],
    },
  });
  console.log(projetDelete); */

  /* const projetDelete = await prisma.personal_data.deleteMany({
    where: {
      OR: [{ user_id: 1 }, { user_id: 2 }],
    },
  });
  console.log(projetDelete); */

  const projetDelete = await prisma.projects.deleteMany({});
  console.log(projetDelete);
};

deletes()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
