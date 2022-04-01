import {
    Sequelize
} from "sequelize";
import db from "../config/database.js";

const {
    DataTypes
} = Sequelize;

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});

export default User;