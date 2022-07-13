import {Express, Request, Response} from "express";

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

    getUsuarios = (req: Request, res: Response) => {
        res.json({
            msg: 'getUsuarios'
        })
    }

    getUsuario = (req: Request, res: Response) => {

        const {id} = req.params

        res.json({
            msg: 'getUsuario',
            id
        })
    }

    postUsuario = (req: Request, res: Response) => {
        const {body} = req

        res.json({
            msg: 'postUsuario',
            body
        })
    }

    putUsuario = (req: Request, res: Response) => {
        const {id} = req.params
        const {body} = req

        res.json({
            msg: 'putUsuario',
            body
        })
    }

    deleteUsuario = (req: Request, res: Response) => {
        const {id} = req.params

        res.json({
            msg: 'deleteUsuario',
            id
        })
    }
}
