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

import userRouter from './routers/usersRouter.js'
app.use('/users', userRouter)

app.listen(3001, () => {
  console.log('Server running on port 3001')
})
