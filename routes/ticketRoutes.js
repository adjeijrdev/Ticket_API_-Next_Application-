import { Router } from 'express'
import { getAllTickets, createNewTicket, findSingleTicket } from '../controllers/ticketController.js'

export const router = Router()

router.get('/', getAllTickets)
router.post('/create', createNewTicket)
router.get('/:id', findSingleTicket )


export const ticketRoutes = router