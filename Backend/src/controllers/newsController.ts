import { Request, Response } from 'express';
import { getAllNews, getNewsById } from '../repository/newsRepository';

export async function getNews(req: Request, res: Response) {
  try {
    const news = await getAllNews();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notícias', error });
  }
}

export async function getNewsDetail(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }
    const news = await getNewsById(id);
    if (!news) {
      return res.status(404).json({ message: 'Notícia não encontrada' });
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notícia', error });
  }
} 