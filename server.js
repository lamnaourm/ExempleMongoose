import express from 'express'
import dotenv from 'dotenv'
import personne from './routes/Personne.js'

const app = express()
app.use(express.json())
dotenv.config()

const port = process.env.PORT || 3000

mongoose.connect(process.env.URL_MONGOOSE)
.then(() => {
    console.log('Coonected to mongo')
})
.catch((err) => {
    console.log('Unable to connect to mongo')
})

app.use('/', personne)

app.listen(port)