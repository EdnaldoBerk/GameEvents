import { GameEvent, News, Tournament } from '../types';

export const sampleNews: News[] = [
  {
    id: '1',
    title: 'Novo patch de Valorant traz grandes mudanças!',
    content: 'O mais recente patch de Valorant, 7.08, introduz ajustes significativos em agentes populares como Jett e Raze, além de otimizações no mapa Breeze e um novo sistema de ranking competitivo. Jogadores esperam que as mudanças equilibrem o meta e ofereçam novas estratégias. Prepare-se para uma experiência de jogo renovada e intensa com as novidades que prometem agitar o cenário competitivo!',
    publishedAt: '2024-03-10T10:00:00Z',
    author: 'Equipe GameEvents',
    imageUrl: 'https://cdn.discordapp.com/attachments/1174163901633544275/1257404456956627968/News.png?ex=668383f9&is=66823279&hm=a403d15c7e1990c79ecf9119934988e040f90117b3f9b87e2f5b9d3b76541f53&',
    category: 'Valorant',
  },
  {
    id: '2',
    title: 'Overwatch 2: Novos Heróis e Evento de Temporada Revelados!',
    content: 'A Blizzard surpreende com a adição de dois novos heróis e um evento de temporada exclusivo em Overwatch 2. Os novos personagens prometem agitar a dinâmica das partidas, enquanto o evento especial oferece recompensas e desafios únicos. Fique por dentro das atualizações que estão transformando o universo de Overwatch!',
    publishedAt: '2024-03-09T14:30:00Z',
    author: 'GameNews Team',
    imageUrl: 'https://cdn.discordapp.com/attachments/1174163901633544275/1257404457497750598/News_1.png?ex=668383f9&is=66823279&hm=557348912e75e9f80a4aa19ee40f91e9bf7238202206775f0a0499e714441400&',
    category: 'Overwatch',
  },
  {
    id: '3',
    title: 'Fortnite: Colaboração Inesperada e Novo Modo de Jogo!',
    content: 'Fortnite anuncia uma colaboração surpreendente com uma franquia icônica, trazendo skins e itens exclusivos para o jogo. Além disso, um novo modo de jogo promete revolucionar a experiência Battle Royale, adicionando elementos inovadores e desafios emocionantes. Mergulhe nesta aventura e descubra todas as surpresas que o mundo de Fortnite preparou para você!',
    publishedAt: '2024-03-08T18:00:00Z',
    author: 'Epic Games News',
    imageUrl: 'https://cdn.discordapp.com/attachments/1174163901633544275/1257404457229316106/News_2.png?ex=668383f9&is=66823279&hm=1e65ce459d81640a417641f391b1076b1f2679c16962f92476b7e6d45e1b1236&',
    category: 'Fortnite',
  },
];

export const sampleEvents: GameEvent[] = [
  {
    id: 'e1',
    title: 'Game On Summit 2024',
    description: 'A maior conferência de desenvolvimento de jogos do ano, com palestras e workshops.',
    date: '2024-04-20T09:00:00Z',
    location: 'São Paulo, Brasil',
    game: 'Multi-plataforma',
    type: 'event',
    imageUrl: 'https://cdn.discordapp.com/attachments/1174163901633544275/1257404554316886076/Event_1.png?ex=66838411&is=66823291&hm=4943f9a72134a65a3d0d6a2f3f721d743a1cf5532599723dd13c0b561c280540&',
    status: 'upcoming',
  },
  {
    id: 'e2',
    title: 'Arena Gamer Fest - Edição Verão',
    description: 'Festival de jogos com torneios de eSports, cosplays e área de free-play.',
    date: '2024-05-15T10:00:00Z',
    location: 'Rio de Janeiro, Brasil',
    game: 'Diversos',
    type: 'event',
    imageUrl: 'https://cdn.discordapp.com/attachments/1174163901633544275/1257404554707089458/Event_2.png?ex=66838411&is=66823291&hm=42a38c201889c440a3d3c1264c1b97b0a3eb2786b46098059885827364cf1221&',
    status: 'upcoming',
  },
  {
    id: 'e3',
    title: 'Lançamento Exclusivo: Cyberpunk 2077 - Phantom Liberty',
    description: 'Evento de lançamento e demonstração da nova expansão de Cyberpunk 2077.',
    date: '2024-06-01T19:00:00Z',
    location: 'Online',
    game: 'Cyberpunk 2077',
    type: 'event',
    imageUrl: 'https://cdn.discordapp.com/attachments/1174163901633544275/1257404555076326441/Event_3.png?ex=66838411&is=66823291&hm=d04771746244f07e9c991e4b85c184c7e6c986c7526978508e67a6a4276709a3&',
    status: 'upcoming',
  },
];

export const sampleTournaments: Tournament[] = [
  {
    id: 't1',
    name: 'Copa Ignition de League of Legends',
    game: 'League of Legends',
    startDate: '2024-03-25T18:00:00Z',
    endDate: '2024-03-30T22:00:00Z',
    prizePool: 'R$ 10.000,00',
    participants: 16,
    status: 'ongoing',
    registrationDeadline: '2024-03-20T23:59:59Z',
  },
  {
    id: 't2',
    name: 'Desafio Apex Legends Pro',
    game: 'Apex Legends',
    startDate: '2024-04-05T15:00:00Z',
    endDate: '2024-04-07T20:00:00Z',
    prizePool: 'R$ 5.000,00',
    participants: 32,
    status: 'registration',
    registrationDeadline: '2024-04-01T23:59:59Z',
  },
  {
    id: 't3',
    name: 'Campeonato Mundial de CS2',
    game: 'Counter-Strike 2',
    startDate: '2024-05-10T10:00:00Z',
    endDate: '2024-05-12T18:00:00Z',
    prizePool: 'R$ 20.000,00',
    participants: 8,
    status: 'registration',
    registrationDeadline: '2024-05-05T23:59:59Z',
  },
];

// Mocks detalhados para páginas de detalhe
export const eventDetailMock = {
  id: 'e1',
  title: 'Game On Summit 2024',
  description: 'A maior conferência de desenvolvimento de jogos do ano, com palestras e workshops.',
  date: '2024-04-20T09:00:00Z',
  location: 'São Paulo, Brasil',
  game: 'Multi-plataforma',
  type: 'event',
  imageUrl: 'https://cdn.discordapp.com/attachments/1174163901633544275/1257404554316886076/Event_1.png?ex=66838411&is=66823291&hm=4943f9a72134a65a3d0d6a2f3f721d743a1cf5532599723dd13c0b561c280540&',
  status: 'upcoming',
};

export const tournamentDetailMock = {
  id: 't1',
  title: 'CS:GO Championship 2024',
  description: 'Torneio oficial de Counter-Strike 2 com premiação em dinheiro.',
  date: '2024-05-15T14:00:00Z',
  location: 'Rio de Janeiro, Brasil',
  game: 'Counter-Strike 2',
  type: 'tournament',
  imageUrl: 'https://cdn.discordapp.com/attachments/1174163901633544275/1257404554316886076/Event_1.png?ex=66838411&is=66823291&hm=4943f9a72134a65a3d0d6a2f3f721d743a1cf5532599723dd13c0b561c280540&',
  status: 'upcoming',
  prizePool: 'R$ 10.000',
  maxTeams: 16,
  currentTeams: 8,
  format: '5v5',
};

export const newsDetailMock = {
  id: 'n1',
  title: 'Nova Atualização do Valorant Traz Modo Competitivo Reformulado',
  content: `A Riot Games anunciou hoje uma grande atualização para o Valorant, trazendo mudanças significativas no modo competitivo. As principais alterações incluem:\n\n1. Novo sistema de ranqueamento\n- Introdução de novos ranks\n- Sistema de progressão mais preciso\n- Recompensas sazonais melhoradas\n\n2. Mudanças no mapa\n- Ajustes no mapa Split\n- Novas posições de spawn\n- Melhorias na performance\n\n3. Balanceamento de agentes\n- Ajustes no Jett\n- Buffs no Cypher\n- Novas mecânicas para o Sova\n\nA atualização estará disponível a partir do próximo mês, e os jogadores já podem se preparar para as mudanças.`,
  date: '2024-03-15T10:00:00Z',
  author: 'João Silva',
  category: 'Notícias',
  imageUrl: 'https://cdn.discordapp.com/attachments/1174163901633544275/1257404554316886076/Event_1.png?ex=66838411&is=66823291&hm=4943f9a72134a65a3d0d6a2f3f721d743a1cf5532599723dd13c0b561c280540&',
  tags: ['Valorant', 'Atualização', 'Competitivo'],
}; 