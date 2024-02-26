import express from 'express'
import modelPersonne from './models/Personne.js'


const routes = express.Router()

routes.post('/personne', (req, res) => {
    const personne = req.body;

    const model = modelPersonne(personne)
    model.save()
    
    res.end();
})

routes.get('/all', (req, res) => {
    modelPersonne.find({})
        .then((personnes) => {
            res.json(personnes)
        })
        .catch((err) => {
            res.sendStatus(510)
        })
})


export default routes;