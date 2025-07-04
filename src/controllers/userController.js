import { safeParse } from "zod/v4-mini"
import * as userServices from "../services/userServices.js"
import z from "zod"

export const getAll = async (req, res)=>{
    const users = await userServices.getAllUsers()
    if(users){
        return res.status(200).json({users: users})
    }
    return res.json({msg: "Nenhum user encontrado"})
}

export const getOne = async (req, res)=>{
    const { id } = req.params.id

    const user = await userServices.getOneUser(id)
    if(user){
        return res.json({user: user})
    }
    return res.json({msg: "Nenhum user encontrado"})
}

export const post = async (req, res)=>{
    const validatorData = z.object({
        nome: z.string(),
        idade: z.string(),
        salario: z.number()
    })

    const dataUser = validatorData.safeParse(req.body)

    if(!dataUser.success){
        res.json({msg: "Dados inválidos"})
    }

    const user = await userServices.postUser(dataUser.data)
    if(user){
        return res.json({user: user})
    }
    return res.json({msg: "Não foi possível cadastrar o usuário"})
}

export const delet = async (req, res)=>{
    const { id } = req.params.id

    const user = await userServices.deleteUser(id)
    if(user){
        return res.json({user: user})
    }
    return res.json({msg: "Nenhum user encontrado"})
}

export const up = async (req, res) => {
    const { id } = req.params.id

    const validatorData = z.object({
        nome: z.string().optional(),
        idade: z.string().optional(),
        salario: z.number().optional()
    })

    const dataUser = validatorData.safeParse(req.body)

    if(!dataUser.success){
        res.json({msg: "Dados inválidos"})
    }

    const user = await userServices.updateUser(id, dataUser.data)
    if(user){
        return res.json({user: user})
    }
    return res.json({msg: "Não foi possível deletar"})
}