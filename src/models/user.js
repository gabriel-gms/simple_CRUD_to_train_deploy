import mongoose from "mongoose"

const User = mongoose.model('User', {
    nome: String,
    idade: String,
    salario: String,
})

export default User