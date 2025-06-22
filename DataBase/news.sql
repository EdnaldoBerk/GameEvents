CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    published_at TIMESTAMP NOT NULL,
    author TEXT NOT NULL,
    category TEXT,
    image_url TEXT -- URL da imagem
);
INSERT INTO news (id,title, content, published_at, author, category, image_url)
VALUES (
   1,	
  'Novo patch de Valorant traz grandes mudanças!',
  'O mais recente patch de Valorant, 7.08, introduz ajustes significativos em agentes populares como Jett e Raze, além de otimizações no mapa Breeze e um novo sistema de ranking competitivo. Jogadores esperam que as mudanças equilibrem o meta e ofereçam novas estratégias. Prepare-se para uma experiência de jogo renovada e intensa com as novidades que prometem agitar o cenário competitivo!',
  '2024-03-10T10:00:00Z',
  'Equipe GameEvents',
  'Valorant',
  'https://s2-techtudo.glbimg.com/OHIlaFUs4xtmrrRvhttx8hY4Ta8=/0x0:1024x576/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/y/B/TFLQeIRbevvafUESalfg/pasted-image-0-8.jpg'
);
INSERT INTO news (id, title, content, published_at, author, category, image_url)
VALUES (
    2,
    'Rainbow Six Siege anuncia novo operador e mapa para Temporada Y9S3',
    'A Ubisoft revelou as novidades da próxima temporada de Rainbow Six Siege, intitulada Y9S3. O destaque é a adição de um novo operador vindo do Brasil, com habilidades focadas em vigilância e mobilidade. Além disso, o jogo ganhará um novo mapa urbano ambientado em uma favela reformulada. A temporada também trará balanceamentos em operadores antigos e melhorias no sistema de matchmaking.',
    NOW(),
    'Equipe GameNews',
    'FPS',
    'https://meups.com.br/wp-content/uploads/2024/02/rainbow-six-siege-1.jpg'
);

INSERT INTO news (id, title, content, published_at, author, category, image_url)
VALUES (
    3,
    'League of Legends: Atualização 14.12 traz rework no Skarner e novo evento de verão',
    'A Riot Games lançou o patch 14.12 de League of Legends, que traz o aguardado rework visual e de habilidades do campeão Skarner. Além disso, um novo evento de verão com temática tropical chegou ao jogo, oferecendo novas skins e recompensas no Passe de Evento. A comunidade já está reagindo positivamente às mudanças e à nova narrativa do campeão reformulado.',
    NOW(),
    'Equipe LoLEsportsBR',
    'MOBA',
    'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b'
);

     UPDATE news
     SET image_url = 'https://s2-techtudo.glbimg.com/OHIlaFUs4xtmrrRvhttx8hY4Ta8=/0x0:1024x576/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/y/B/TFLQeIRbevvafUESalfg/pasted-image-0-8.jpg'
     WHERE id = 1;

	 DELETE FROM news WHERE id = 3;
SELECT * FROM news;