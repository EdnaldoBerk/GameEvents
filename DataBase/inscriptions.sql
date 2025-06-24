CREATE TABLE inscriptions (
    id SERIAL PRIMARY KEY,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    nome_completo TEXT NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    evento_id INTEGER REFERENCES events(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cpf_length CHECK (LENGTH(cpf) = 11),
    CONSTRAINT telefone_length CHECK (LENGTH(telefone) >= 10 AND LENGTH(telefone) <= 11)
);

-- Índices para melhor performance
CREATE INDEX idx_inscriptions_cpf ON inscriptions(cpf);
CREATE INDEX idx_inscriptions_email ON inscriptions(email);
CREATE INDEX idx_inscriptions_evento_id ON inscriptions(evento_id); 