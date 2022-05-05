const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const update = async () => {
  
    /* const userUpdate = await prisma.user.update({
    where: {
      id: 1, //unique
    },
    data: {
      password: "newPassAdmin",
    },
  });
  console.log(userUpdate); */

  /* const userUpdate = await prisma.user.updateMany({
    where: {
      password:{
          contains: 'secret'
      }
    },
    data: {
      password: "notSecret",
    },
  });
  console.log(userUpdate); */

  const userUpdate = await prisma.user.upsert({
    where: {
      usernaname: 'newUser'
    },
    update: {
      password: "newPass",
    },
    create:{
        usernaname: 'newUser',
        password:'newPass'
    }
  });
  console.log(userUpdate);

};

update()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
