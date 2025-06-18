export interface GameEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  game: string;
  type: 'tournament' | 'news' | 'event';
  imageUrl: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface News {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  author: string;
  imageUrl: string;
  category: string;
}

export interface Tournament {
  id: string;
  name: string;
  game: string;
  startDate: string;
  endDate: string;
  prizePool: string;
  participants: number;
  status: 'registration' | 'ongoing' | 'completed';
  registrationDeadline: string;
} 