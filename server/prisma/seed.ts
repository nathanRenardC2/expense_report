import {reports} from './reports'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log(`Start seeding ...`)
    for (const report of reports) {
        await prisma.report.create({
            data: report
        })
    }
    console.log(`Seeding finished.`)
}

main().catch(e => {
    console.log(e)
    process.exit(1)
}
).finally(async () => {
    await prisma.$disconnect()
}
)
     