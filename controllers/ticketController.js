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

    }catch{

    }
}