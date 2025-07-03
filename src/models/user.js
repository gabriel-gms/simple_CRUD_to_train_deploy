import mongoose from "mongoose"

const User = mongoose.model('User', {
    name: String,
    idade: String,
    salario: String,
})

export default User