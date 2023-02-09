import express from 'express'
import { sequelize } from './database';
require('dotenv').config();
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('hi')
  })
  console.log(`Server started succesfully at port ${PORT}`)
})