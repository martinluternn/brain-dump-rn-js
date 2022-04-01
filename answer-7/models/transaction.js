import {
    Sequelize
} from "sequelize";
import db from "../config/database.js";

const {
    DataTypes
} = Sequelize;

const Transaction = db.define('transactions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    ticket_type_id: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

export default Transaction;