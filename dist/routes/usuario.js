"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const UsuarioController_1 = require("../controller/UsuarioController");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.get('/', UsuarioController_1.getUsuarios);
exports.userRoutes.get('/:id', UsuarioController_1.getUsuario);
exports.userRoutes.post('/', UsuarioController_1.postUsuario);
exports.userRoutes.put('/:id', UsuarioController_1.putUsuario);
exports.userRoutes.delete('/:id', UsuarioController_1.deleteUsuario);
//# sourceMappingURL=usuario.js.map