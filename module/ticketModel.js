import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    body: {
        type:String,
        required: true,
        min: 25
    },
    priority:{
        type: String,
        true: true,
    },
    user_email:{
        type:String,
        required: true,
    }

})

export const Ticket = mongoose.model('Ticket', ticketSchema)