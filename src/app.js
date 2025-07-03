import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import routes from "./routes/routes.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/ping', (req, res)=>{
    res.status(200).json({
        msg:"pong"
    })
})

app.use('/', routes)

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a5ywztt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    app.listen(process.env.PORT)
    console.log("Servidor rodando")
})
.catch((error)=>{
    res.json({msg: error})
})