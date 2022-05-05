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

  /* const proyects = await prisma.projects.createMany({
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
  console.log(proyects); */

  /* const userAnidado = await prisma.user.create({
    data: {
      usernaname: "Carlos",
      password: "secret",
      personal_data: {
        create: {
          identification: "16614670",
          name: "Carlos",
          lastname: "Tovar",
          mail: "calrostovar@hotmail.com",
          phone: "313131313131",
        },
      },
    },
  });
  console.log(userAnidado); */

  const userAnidado = await prisma.user.create({
    data: {
      usernaname: "Angel",
      password: "notsecretpass",
      personal_data: {
        create: {
          identification: "31896359",
          name: "Juan Jose",
          lastname: "Angel",
          mail: "jjangel@outlook.com",
          phone: "315151515151",
        },
      },
      projects: {
        create: [
          {
            name: "Proyecto_4",
            description: "Descripcion 4",
            start_date: new Date("5/5/2022"),
          },
          {
            name: "Proyecto_5",
            description: "Descripcion 5",
            start_date: new Date("6/6/2022"),
          },
        ],
      },
    },
  });
  console.log(userAnidado);
};



create()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
