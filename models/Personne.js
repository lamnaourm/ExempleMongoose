import { Schema, model } from "mongoose";


const personneSchema = Schema({
    nom:String,
    prenom:String,
    age:{type:Number, required:true}
})

export default model('personne' , personneSchema)