import { Ticket } from "../module/ticketModel.js";

export const getAllTickets = async (req, res)=>{
    try{
        const tickets = await Ticket.find()

        if(!tickets){
            return res.status(400).json({"message": "no tickets found"}) 
        }

        return res.status(200).json(tickets)

    }catch(e){
        res.status(505).json({"message": "Internal server Error"})
    }
}

export const createNewTicket = async(req, res)=>{
   try{
    const { title, body, priority, user_email } = req.body;

    const ticket = await Ticket.create({ title, body, priority, user_email });

    return res.status(201).json({message: "New ticket added!"})

   }catch(e){
    res.status(505).json({"message": "Internal server Error", e})
   }
}

export const findSingleTicket = async(req, res)=>{
    try{
        const TicketId = req.params.id

        const singleTicket = await Ticket.findOne({ _id: TicketId })

        if(!singleTicket){
            return res.status(404).json({"message": `ticket with ID: ${TicketId} was not found` })
        }

        return res.status(200).json(singleTicket)

        }catch(e){

            res.status(500).json({ message: "Internal server Eeror!, " + e.message })

    }
}

export const deleteTicket = async (req, res) => {
    try{
        const ticketId = req.params.id

        const deleteTicket = await Ticket.findByIdAndDelete({ _id: ticketId })

        if(!deleteTicket){
             res.status(304).json({ message: "could not delete ticket"})
        }

        return res.status(200).json({ message: "ticket deleted successfully" })

    }catch(e){
        return res.status(500).json({ message : "Internal server Eeror," + e})
    }
}