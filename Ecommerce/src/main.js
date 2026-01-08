import express from 'express'
import { sequelize } from './config/database.js'
import authRouter from './route/auth/index.js'
import errorMiddleware from './middleware/error.middleware.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(errorMiddleware)

sequelize.authenticate() //to connect to the database 
  .then(() => console.log('DB CONNECTED'))
  .catch(err => console.error('DB ERROR:', err))

app.get('/', (req, res) => {
  res.send('Hello this is from my backend')
})

app.use('/auth',authRouter)

app.listen(3000, () => {
  console.log('Server is running at port 3000')
})
