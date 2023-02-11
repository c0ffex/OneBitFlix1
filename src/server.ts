import express from 'express'
import { adminJs, adminJsRouter } from './adminjs';
import { sequelize } from './database';
require('dotenv').config();

const app = express()

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection established')
  })
  console.log(`Server started succesfully at port ${PORT}`)
})