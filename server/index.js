import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: '*',
    allowedHeaders: '*',
    methods: '*',
  }),
)

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

console.log(prisma)
