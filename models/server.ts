import express, {Express} from 'express'
import cors from 'cors'
import {UsuarioController} from "../controller/UsuarioController";
import {db} from "../db/connection";

require('dotenv').config()

export class Server {

    private readonly app: Express
    private readonly port: string

    private usuarioController: UsuarioController

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '8080'
        this.dbConnection()
        this.middleware()
        this.usuarioController = new UsuarioController(this.app)
    }

    async dbConnection() {
        try {
            await db.authenticate()
            console.log('Database online')
        } catch (error: any) {
            throw new Error(error)
        }
    }

    middleware() {
        //CORS
        this.app.use(cors())
        //Lectura del Body
        this.app.use(express.json())
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutando en el puerto: ', this.port)
        })
    }
}