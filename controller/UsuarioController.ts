import {Express, Request, Response} from "express";
import Usuario from '../models/usuario';

export class UsuarioController {

    private readonly basePath: string

    constructor(app: Express) {
        this.basePath = '/api/usuarios'
        app.get(`${this.basePath}/`, this.getUsuarios.bind(this))
        app.get(`${this.basePath}/:id`, this.getUsuario.bind(this))
        app.post(`${this.basePath}/`, this.postUsuario.bind(this))
        app.put(`${this.basePath}/:id`, this.putUsuario.bind(this))
        app.delete(`${this.basePath}/:id`, this.deleteUsuario.bind(this))


    }

    getUsuarios = async (req: Request, res: Response) => {
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    }

    getUsuario = async (req: Request, res: Response) => {

        const {id} = req.params

        const usuario = await Usuario.findByPk(id)
        if (usuario) {
            res.json(usuario)
        } else {
            res.status(404).json(`No existe un usuario con el id: ${id}`)
        }
    }

    postUsuario = async (req: Request, res: Response) => {
        const {body} = req


        try {
            const existeEmail = await Usuario.findOne({
                where: {
                    email: body.email
                }
            })

            if (existeEmail) {
                return res.status(400).json({msg: `ya existe un usuario con el email: ${body.email}`})
            }
            const usuario = await Usuario.create(body);
            res.json(usuario)
        } catch (error) {
            res.status(500).json({msg: 'Hable con el administador'})
        }

    }

    putUsuario = async (req: Request, res: Response) => {
        const {id} = req.params
        const {body} = req

        try {
            const usuario = await Usuario.findByPk(id)

            if (!usuario) {
                return res.status(400).json({msg: `No existe un usuario con el id: ${id}`})
            }

            await usuario.update(body)
            res.json(usuario)
        } catch (error) {
            res.status(500).json({msg: 'Hable con el administador'})
        }
    }

    deleteUsuario = async (req: Request, res: Response) => {
        const {id} = req.params

        try {
            const usuario = await Usuario.findByPk(id)

            if (!usuario) {
                return res.status(400).json({msg: `No existe un usuario con el id: ${id}`})
            }

            await usuario.destroy()
            res.json(usuario)
        } catch (error) {
            res.status(500).json({msg: 'Hable con el administador'})
        }
    }
}
