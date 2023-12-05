import { Router } from 'express'
import { getAllTickets, createNewTicket, findSingleTicket, deleteTicket } from '../controllers/ticketController.js'

export const router = Router()

router.get('/', getAllTickets)
router.post('/create', createNewTicket)
router.get('/:id', findSingleTicket )
router.delete('/delete/:id', deleteTicket)


export const ticketRoutes = router