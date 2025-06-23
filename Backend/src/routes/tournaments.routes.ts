import { Router } from 'express';
import { getTournaments, getTournamentDetail } from '../controllers/tournamentsController';

const router = Router();

router.get('/', getTournaments);
router.get('/:id', getTournamentDetail);

export default router; 