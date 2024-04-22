import express from 'express'
import mongoose from 'mongoose'
import personne from './routes/Personne.js'

const app = express()
app.use(express.json())

const port = process.env.port || 3000

mongoose.connect(process.env.URL_MONGOOSE)
.then(() => {
    console.log('Coonected to mongo')
})
.catch((err) => {
    console.log('Unable to connect to mongo')
})

app.use('/', personne)

app.listen(port)