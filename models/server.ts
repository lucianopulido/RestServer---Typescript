import express, {Express} from 'express'
import cors from 'cors'
import {UsuarioController} from "../controller/UsuarioController";

require('dotenv').config()

export class Server {

    private readonly app: Express
    private readonly port: string

    private usuarioController: UsuarioController

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '8080'
        this.middleware()
        this.usuarioController = new UsuarioController(this.app)
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