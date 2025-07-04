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

export const postUser = (userData)=>{
    try {
        return user.create(userData)
    } catch (error) {
        return false
    }
}

export const deleteUser = (id)=>{
    try {
        return user.deleteOne(id)
    } catch (error) {
        return false
    }
}

export const updateUser = (id, data)=>{
    try {
        return user.updateOne(id, data)
    } catch (error) {
        return false
    }
}