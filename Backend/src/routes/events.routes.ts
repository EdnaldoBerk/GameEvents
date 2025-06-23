import { Router } from 'express';
import { getEvents, getEventDetail } from '../controllers/eventsController';

const router = Router();

router.get('/', getEvents);
router.get('/:id', getEventDetail);

export default router; 