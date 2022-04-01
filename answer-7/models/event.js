import {
    Sequelize
} from "sequelize";
import db from "../config/database.js";

const {
    DataTypes
} = Sequelize;

const Event = db.define('events', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    start_datetime: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false
});

export default Event;