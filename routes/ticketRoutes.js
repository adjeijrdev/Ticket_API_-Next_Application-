import { Router } from 'express'
import { getAllTickets, createNewTicket } from '../controllers/ticketController.js'

export const router = Router()

router.get('/', getAllTickets)
router.post('/create', createNewTicket)


export const ticketRoutes = router