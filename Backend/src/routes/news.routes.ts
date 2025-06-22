import { Router } from 'express';
import { getNews, getNewsDetail } from '../controllers/newsController';

const router = Router();

router.get('/', getNews);
router.get('/:id', getNewsDetail);

export default router; 