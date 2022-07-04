"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
require('dotenv').config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutando en el puerto: ', this.port);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map