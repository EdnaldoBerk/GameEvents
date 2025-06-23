import { Request, Response } from 'express';
import { getAllEvents, getEventById } from '../repository/eventsRepository';

export async function getEvents(req: Request, res: Response) {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar eventos', error });
  }
}

export async function getEventDetail(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }
    const event = await getEventById(id);
    if (!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar evento', error });
  }
} 