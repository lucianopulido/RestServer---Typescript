"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('api_rest_typescript', 'root', 'Emprendamos2022@', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
    define: {
        timestamps: false
    }
});
//# sourceMappingURL=connection.js.map