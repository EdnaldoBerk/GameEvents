import { Request, Response } from 'express';
import { getAllNews } from '../repository/newsRepository';

export async function getNews(req: Request, res: Response) {
  try {
    const news = await getAllNews();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notícias', error });
  }
} 