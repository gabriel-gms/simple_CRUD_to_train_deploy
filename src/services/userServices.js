import user from "../models/user.js"

export const getAllUsers = ()=>{
    try {
        return user.find()
    } catch (error) {
        return false 
    }
}

export const getOneUser = (id)=>{
    try {
        return user.findById(id)
    } catch (error) {
        return false
    }
}