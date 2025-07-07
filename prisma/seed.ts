import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      password: 'password' // ❗️for demo only — not hashed
    }
  })
}

main()
  .then(() => console.log('Seed complete'))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect())
