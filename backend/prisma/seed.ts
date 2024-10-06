import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();


const postData: Prisma.UserCreateInput[]= [
    {
        name: 'yamada',
        email:'example11@gmail.com',
        password:'0123',
        posts : {
          create:[
            {
              imageUrl:"https://example.com/images/post1.jpg"
            },
            {
              imageUrl : "https://example.com/images/post2.jpg"
            }
          ]
        }
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