import { Router } from 'express';
import { createInscriptionController, getAllInscriptionsController } from '../controllers/inscriptionsController';

const router = Router();

// GET /inscriptions - Listar todas as inscrições
router.get('/', getAllInscriptionsController);

// POST /inscriptions - Criar nova inscrição
router.post('/', createInscriptionController);

export default router; 