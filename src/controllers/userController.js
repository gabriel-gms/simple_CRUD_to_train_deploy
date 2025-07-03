import { safeParse } from "zod/v4-mini"
import * as userServices from "../services/userServices.js"
import z from "zod"

export const getAll = async (req, res)=>{
    const users = await userServices.getAllUsers()
    if(!users){
        return res.status(200).json({users: users})
    }
    return res.json({msg: "Nenhum user encontrado"})
}

export const getOne = async (req, res)=>{
    const { id } = req.params.id

    const user = await userServices.getOneUser(id)
    if(!user){
        return res.json({user: user})
    }
    return res.json({msg: "Nenhum user encontrado"})
}

export const post = async (req, res)=>{
    const validator = z.object({
        nome: z.string(),
        idade: z.string(),
        salario: z.number()
    })

    const data = safeParse(validator)
    
}