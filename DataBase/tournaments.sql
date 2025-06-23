CREATE TABLE tournaments (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    game TEXT NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    prize_pool TEXT,
    participants INTEGER,
    status TEXT, -- 'registration', 'ongoing', 'completed'
    registration_deadline TIMESTAMP,
    image_url TEXT
);

INSERT INTO tournaments (name, game, start_date, end_date, prize_pool, participants, status, registration_deadline, image_url)
VALUES
(
  'Copa Ignition de League of Legends',
  'League of Legends',
  '2024-03-25T18:00:00Z',
  '2024-03-30T22:00:00Z',
  'R$ 10.000,00',
  16,
  'ongoing',
  '2024-03-20T23:59:59Z',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
),
(
  'Desafio Apex Legends Pro',
  'Apex Legends',
  '2024-04-05T15:00:00Z',
  '2024-04-07T20:00:00Z',
  'R$ 5.000,00',
  32,
  'registration',
  '2024-04-01T23:59:59Z',
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
),
(
  'Campeonato Mundial de CS2',
  'Counter-Strike 2',
  '2024-05-10T10:00:00Z',
  '2024-05-12T18:00:00Z',
  'R$ 20.000,00',
  8,
  'registration',
  '2024-05-05T23:59:59Z',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80'
);

UPDATE tournaments
SET image_url = 'https://noticias.maisesports.com.br/wp-content/uploads/2022/11/campeoes-lol-copa-800x450.jpg'
WHERE id = 1;