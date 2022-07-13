"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
class UsuarioController {
    constructor(app) {
        this.getUsuarios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield usuario_1.default.findAll();
            res.json(usuarios);
        });
        this.getUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield usuario_1.default.findByPk(id);
            if (usuario) {
                res.json(usuario);
            }
            else {
                res.status(404).json(`No existe un usuario con el id: ${id}`);
            }
        });
        this.postUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                const existeEmail = yield usuario_1.default.findOne({
                    where: {
                        email: body.email
                    }
                });
                if (existeEmail) {
                    return res.status(400).json({ msg: `ya existe un usuario con el email: ${body.email}` });
                }
                const usuario = yield usuario_1.default.create(body);
                res.json(usuario);
            }
            catch (error) {
                res.status(500).json({ msg: 'Hable con el administador' });
            }
        });
        this.putUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { body } = req;
            try {
                const usuario = yield usuario_1.default.findByPk(id);
                if (!usuario) {
                    return res.status(400).json({ msg: `No existe un usuario con el id: ${id}` });
                }
                yield usuario.update(body);
                res.json(usuario);
            }
            catch (error) {
                res.status(500).json({ msg: 'Hable con el administador' });
            }
        });
        this.deleteUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const usuario = yield usuario_1.default.findByPk(id);
                if (!usuario) {
                    return res.status(400).json({ msg: `No existe un usuario con el id: ${id}` });
                }
                yield usuario.destroy();
                res.json(usuario);
            }
            catch (error) {
                res.status(500).json({ msg: 'Hable con el administador' });
            }
        });
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