import Event from "../models/event.js";
import TicketType from "../models/ticket_type.js";
import Transaction from "../models/transaction.js";
import UserLike from "../models/user_like.js";
import { Op } from 'sequelize'

export const getAllEvents = async (req, res) => {
    try {
        const event = await Event.findAll({
            where: {
                start_datetime: {
                    [Op.between]: [new Date(), new Date(new Date().setDate(new Date().getDate() + 60))]
                }
            }, raw: true
        });
        const transaction = await Transaction.findAll({
            raw: true
        })
        const ticketType = await TicketType.findAll({
            raw: true
        })
        const userLike = await UserLike.findAll({
            raw: true
        })

        // filter event that category like by user
        const tempEvent = []
        event.forEach((ev, index) => {
            userLike.forEach((us, index) => {
                if (us.category == ev.category && tempEvent.find((data) => data.category == ev.category) == null)
                    tempEvent.push(ev)
            })
        })

        //calculate rest of capacity that have on each ticket and get remaining ticket
        ticketType.forEach((tk, index) => {
            tk.remainingCapacity = tk.capacity
            transaction.forEach((tr, index) => {
                if (tk.id == tr.ticket_type_id) {
                    tk.remainingCapacity -= 1
                }
            })
        })

        // remove ticket that sold out
        ticketType.splice(ticketType.findIndex(function (i) {
            return i.remainingCapacity == 0;
        }), 1);

        // return full response
        tempEvent.forEach((ev, index) => {
            ev.ticket_types = []
            const findTicket = ticketType.find((data) => data.event_id == ev.id)
            if (findTicket != null) {
                findTicket.name = ev.name + " Ticket " + findTicket.event_id
                findTicket.event_id = undefined
                ev.ticket_types.push(findTicket)
            }
        })

        res.send(tempEvent);
    } catch (err) {
        console.log(err);
    }
}