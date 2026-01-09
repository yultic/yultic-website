// lib/prisma.ts
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
  pool: Pool | undefined
}

// Validar DATABASE_URL
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set')
}

// Crear pool de PostgreSQL
const pool =
  globalForPrisma.pool ??
  new Pool({
    connectionString: databaseUrl,
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.pool = pool

// Crear adapter
const adapter = new PrismaPg(pool)

// Crear cliente de Prisma
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
