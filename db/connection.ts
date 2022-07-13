import {Sequelize} from 'sequelize'

export const db = new Sequelize('api_rest_typescript', 'root', 'Emprendamos2022@', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
    define:{
        timestamps:false
    }
})