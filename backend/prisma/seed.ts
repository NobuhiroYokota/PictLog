import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();


const postData: Prisma.UserCreateInput[]= [
    {
        name: 'yamada',
        email:'example11@gmail.com',
    },
];

async function main() {
    for (const data of postData) {
      await prisma.user.create({
        data,
      });
    }
  }
  
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });