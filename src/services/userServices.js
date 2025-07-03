import user from "../models/user.js"

export const getAllUsers = ()=>{
    try {
        return user.find()
    } catch (error) {
        return false 
    }
}