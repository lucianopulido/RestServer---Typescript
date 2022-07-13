"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
class UsuarioController {
    constructor(app) {
        this.getUsuarios = (req, res) => {
            res.json({
                msg: 'getUsuarios'
            });
        };
        this.getUsuario = (req, res) => {
            const { id } = req.params;
            res.json({
                msg: 'getUsuario',
                id
            });
        };
        this.postUsuario = (req, res) => {
            const { body } = req;
            res.json({
                msg: 'postUsuario',
                body
            });
        };
        this.putUsuario = (req, res) => {
            const { id } = req.params;
            const { body } = req;
            res.json({
                msg: 'putUsuario',
                body
            });
        };
        this.deleteUsuario = (req, res) => {
            const { id } = req.params;
            res.json({
                msg: 'deleteUsuario',
                id
            });
        };
        this.basePath = '/api/usuarios';
        app.get(`${this.basePath}/`, this.getUsuarios.bind(this));
        app.get(`${this.basePath}/:id`, this.getUsuario.bind(this));
        app.post(`${this.basePath}/`, this.postUsuario.bind(this));
        app.put(`${this.basePath}/:id`, this.putUsuario.bind(this));
        app.delete(`${this.basePath}/:id`, this.deleteUsuario.bind(this));
    }
}
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map