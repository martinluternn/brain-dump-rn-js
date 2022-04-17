import {
    Sequelize
} from "sequelize";
import db from "../config/database.js";

const {
    DataTypes
} = Sequelize;

const UserLike = db.define('user_like', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    category: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default UserLike;