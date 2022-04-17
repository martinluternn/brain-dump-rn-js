import {
    Sequelize
} from "sequelize";

const db = new Sequelize('sequelize_db', 'postgres', 'qwerty', {
    host: 'localhost',
    dialect: 'postgres'
});

export default db;