const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async () => {
  /* const user = await prisma.user.create({
    data: {
      usernaname: "AlejoCx2",
      password: "admin",
    },
  });
  console.log(user); */

  /* const p_data = await prisma.personal_data.create({
    data: {
      identification: "1193477073",
      name: "Alejandro",
      lastname: "Caicedo",
      mail: "alejandro@gmail.com",
      phone: "3153990050",
      user_id: 1,
    },
  });
  console.log(p_data); */

  const proyects = await prisma.projects.createMany({
    data: [
      {
        name: "Proyecto_1",
        description: "Descripcion 1",
        start_date: new Date("4/13/2022"),
        leader_id: 1,
      },
      {
        name: "Proyecto_2",
        description: "Descripcion 2",
        start_date: new Date("2/24/2022"),
        leader_id: 1,
      },
      {
        name: "Proyecto_3",
        description: "Descripcion 3",
        start_date: new Date("11/3/2021"),
        leader_id: 1,
      },
    ],
  });
  console.log(proyects);
};

create()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
