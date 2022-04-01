import {
    Sequelize
} from "sequelize";
import db from "../config/database.js";

const {
    DataTypes
} = Sequelize;

const TicketType = db.define('ticket_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    event_id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    capacity: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default TicketType;