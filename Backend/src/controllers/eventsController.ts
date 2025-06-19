import { Request, Response } from 'express';
import { getAllEvents } from '../repository/eventsRepository';

export async function getEvents(req: Request, res: Response) {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar eventos', error });
  }
} 