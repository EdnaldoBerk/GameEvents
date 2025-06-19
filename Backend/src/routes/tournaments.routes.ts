import { Router } from 'express';
import { getTournaments } from '../controllers/tournamentsController';

const router = Router();

router.get('/', getTournaments);

export default router; 