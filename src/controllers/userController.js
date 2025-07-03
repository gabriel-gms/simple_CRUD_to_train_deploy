import * as userServices from "../services/userServices.js"

export const getAll = async (req, res)=>{
    const users = await userServices.getAllUsers()
    if(!users){
        return res.status(200).json({users: users})
    }
    return res.json({msg: "Nenhum user encontrado"})
}