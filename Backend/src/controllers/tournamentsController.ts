import { Request, Response } from 'express';
import { getAllTournaments, getTournamentById } from '../repository/tournamentsRepository';

export async function getTournaments(req: Request, res: Response) {
  try {
    const tournaments = await getAllTournaments();
    res.status(200).json(tournaments);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar campeonatos', error });
  }
}

export async function getTournamentDetail(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }
    const tournament = await getTournamentById(id);
    if (!tournament) {
      return res.status(404).json({ message: 'Torneio não encontrado' });
    }
    res.status(200).json(tournament);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar torneio', error });
  }
} 