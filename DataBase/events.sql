CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    date TIMESTAMP NOT NULL,
    location TEXT NOT NULL,
    game TEXT NOT NULL,
    type TEXT NOT NULL, -- 'event'
    image_url TEXT,
    status TEXT -- 'upcoming', 'ongoing', 'completed'
);

INSERT INTO events (title, description, date, location, game, type, image_url, status)
VALUES
(
  'Game On Summit 2024',
  'A maior conferência de desenvolvimento de jogos do ano, com palestras e workshops.',
  '2024-04-20T09:00:00Z',
  'São Paulo, Brasil',
  'Multi-plataforma',
  'event',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'upcoming'
),
(
  'Arena Gamer Fest - Edição Verão',
  'Festival de jogos com torneios de eSports, cosplays e área de free-play.',
  '2024-05-15T10:00:00Z',
  'Rio de Janeiro, Brasil',
  'Diversos',
  'event',
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
  'upcoming'
),
(
  'Lançamento Exclusivo: Cyberpunk 2077 - Phantom Liberty',
  'Evento de lançamento e demonstração da nova expansão de Cyberpunk 2077.',
  '2024-06-01T19:00:00Z',
  'Online',
  'Cyberpunk 2077',
  'event',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  'upcoming'
);

UPDATE events
SET image_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAy24ps5Q_WxLmTdW6fs4fqHi0YzbuTatbQg&s'
WHERE id = 2;