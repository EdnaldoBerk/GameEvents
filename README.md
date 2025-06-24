# GameEvents

Centralize notícias, eventos e campeonatos de eSports em uma plataforma moderna, responsiva e acessível.

---

## 📑 Sumário
- [Visão Geral](#visão-geral)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Frontend](#frontend)
- [Backend](#backend)
- [Banco de Dados](#banco-de-dados)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## 👀 Visão Geral
Este repositório é um monorepo contendo:
- **Frontend**: Aplicação React para visualização de notícias, eventos e campeonatos de eSports.
- **Backend**: API REST em Node.js/Express para servir dados ao frontend, incluindo sistema de inscrições.
- **Database**: Scripts SQL para criação e popularização do banco de dados PostgreSQL.

### 🖼️ Screenshots da Aplicação

![Página Inicial - Modo Claro](imagem1.png)
*Página inicial da aplicação em modo claro*

![Página de Eventos - Modo Escuro](iamgem2.png)
*Página de eventos em modo escuro*

---

## 🗂️ Estrutura do Projeto
```
GameEvents/
  ├─ Frontend/      # Aplicação React (Vite, Chakra UI, etc)
  ├─ Backend/       # API Node.js/Express + TypeScript
  └─ DataBase/      # Scripts SQL para PostgreSQL
```

---

## 🖥️ Frontend

### 📦 Stack Utilizada
- **React 18 + TypeScript**
- **Vite** (build e dev server)
- **Chakra UI** (UI e tema customizado)
- **React Router DOM** (roteamento)
- **Axios** (requisições HTTP)
- **React Query** (gerenciamento de dados assíncronos)
- **date-fns** (datas)
- **ESLint + Prettier** (qualidade e padronização de código)

### 🚀 Como rodar o Frontend

```bash
cd Frontend
npm install
npm run dev
```
Acesse: [http://localhost:5173](http://localhost:5173)

### 🗂️ Estrutura de Pastas (Frontend)
```
src/
  components/
    features/   # Cards de domínio (NewsCard, EventCard, TournamentCard)
    layout/     # Header, Footer
    ui/         # BaseCard (card genérico reutilizável)
  mocks/        # Dados mockados para desenvolvimento
  pages/        # Páginas (Home, Detalhes, Listagens, Páginas Estáticas)
  services/     # API (Axios)
  styles/       # Temas alternativos (legado)
  types/        # Tipos TypeScript centralizados
  theme.ts      # Tema Chakra customizado
```

### Principais Componentes
- **Header/Footer:** Navegação principal, links e alternância de tema (claro/escuro).
- **BaseCard:** Card reutilizável para notícias, eventos e campeonatos.
- **NewsCard/EventCard/TournamentCard:** Cards específicos, usando BaseCard.

### Páginas Disponíveis
- **Páginas Principais:**
  - `HomePage` - Página inicial com destaques
  - `EventsPage` - Listagem de eventos
  - `TournamentsPage` - Listagem de campeonatos
  - `NewsPage` - Listagem de notícias
- **Páginas de Detalhes:**
  - `EventDetailPage` - Detalhes de um evento
  - `TournamentDetailPage` - Detalhes de um campeonato
  - `NewsDetailPage` - Detalhes de uma notícia
- **Páginas Estáticas:**
  - `AboutPage` - Sobre a plataforma
  - `ContactPage` - Informações de contato
  - `PrivacyPage` - Política de privacidade
  - `TermsPage` - Termos de uso

### Navegação
- **Header:** Links para Eventos, Campeonatos e Notícias + alternância de tema
- **Footer:** Links para redes sociais (Twitter, Instagram, Discord) e páginas estáticas (Sobre, Privacidade, Termos, Contato)

### Tema Customizado
- Paleta: preto, branco e tons de cinza.
- Suporte a modo claro/escuro.
- Fontes: Montserrat (heading), Inter (body).
- Componentes Chakra customizados.

### Dados Mockados
- Localizados em `src/mocks/index.ts`.
- Tipos centralizados em `src/types/index.ts`.
- Permite desenvolvimento frontend independente do backend.

### Boas Práticas
- **Responsividade:** Layout adaptado para mobile, tablet e desktop.
- **Acessibilidade:** Uso de cores com contraste, navegação por teclado, semântica HTML.
- **Qualidade:** ESLint e Prettier configurados.
- **Arquitetura modular:** Separação clara de responsabilidades.

### Integração com Backend
- Serviço de API centralizado em `src/services/api.ts`.
- Base URL: `http://localhost:3001` (ajuste conforme necessário).
- Pronto para consumir endpoints reais ou mocks.

---

## 🛠️ Backend

### Stack Utilizada
- **Node.js + Express**
- **TypeScript**
- **PostgreSQL**

### Como rodar o Backend

```bash
npm install
npm run backend
```
O servidor será iniciado em [http://localhost:3001](http://localhost:3001)

### Funcionalidades
- **API REST** para notícias, eventos e campeonatos
- **Sistema de inscrições** para eventos
- **Logs detalhados** de inscrições ao iniciar o servidor
- **Health check** para verificar conexão com banco de dados

### Configuração do Banco de Dados
- O backend espera um banco PostgreSQL rodando em `postgresql://postgres:1234@localhost:5432/GameEvents` (ajuste em `Backend/src/database.ts` se necessário).
- Certifique-se de rodar os scripts SQL da pasta `DataBase/` antes de iniciar o backend.

---

## 📡 Endpoints da API

### Notícias (`/news`)
- **GET `/news`** — Lista todas as notícias
- **GET `/news/:id`** — Detalhe de uma notícia específica

### Eventos (`/events`)
- **GET `/events`** — Lista todos os eventos
- **GET `/events/:id`** — Detalhe de um evento específico

### Campeonatos (`/tournaments`)
- **GET `/tournaments`** — Lista todos os campeonatos
- **GET `/tournaments/:id`** — Detalhe de um campeonato específico

### Inscrições (`/inscriptions`)
- **GET `/inscriptions`** — Lista todas as inscrições
- **POST `/inscriptions`** — Cria uma nova inscrição

### Health Check
- **GET `/health`** — Verifica se o backend e o banco de dados estão funcionando

---

## 🗄️ Banco de Dados

- Scripts SQL para criar e popular tabelas de notícias, eventos, campeonatos e inscrições.
- Localizados em `DataBase/news.sql`, `DataBase/events.sql`, `DataBase/tournaments.sql`, `DataBase/inscriptions.sql`.

### Tabelas Disponíveis
- **`news`** — Notícias do mundo dos eSports
- **`events`** — Eventos e conferências
- **`tournaments`** — Campeonatos e torneios
- **`inscriptions`** — Inscrições de usuários em eventos

### Como usar
1. Certifique-se de ter o PostgreSQL instalado e rodando.
2. Crie o banco de dados `GameEvents`:
   ```sql
   CREATE DATABASE "GameEvents";
   ```
3. Execute os scripts SQL na ordem desejada:
   ```bash
   psql -U postgres -d GameEvents -f DataBase/news.sql
   psql -U postgres -d GameEvents -f DataBase/events.sql
   psql -U postgres -d GameEvents -f DataBase/tournaments.sql
   psql -U postgres -d GameEvents -f DataBase/inscriptions.sql
   ```

---

## 🤝 Contribuição
1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha feature'`
4. Push para o fork: `git push origin minha-feature`
5. Abra um Pull Request

---

## 📄 Licença
Este projeto é open source, sob a licença MIT. 