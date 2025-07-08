import mongoose from "mongoose"

const User = mongoose.model('User', {
    nome: String,
    idade: Number,
    salario: Number,
})

export default User