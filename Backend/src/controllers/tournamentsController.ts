import { Request, Response } from 'express';
import { getAllTournaments } from '../repository/tournamentsRepository';

export async function getTournaments(req: Request, res: Response) {
  try {
    const tournaments = await getAllTournaments();
    res.status(200).json(tournaments);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar campeonatos', error });
  }
} 