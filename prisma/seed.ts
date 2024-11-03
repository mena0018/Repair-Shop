import { generateUserList } from '@/lib/helper';
import prisma from '@/prisma/singleton';

const seed = async () => {
  const users = generateUserList();

  for (const user of users) {
    await prisma.user.create({ data: user });
  }
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
