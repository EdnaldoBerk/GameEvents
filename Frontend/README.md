# GameEvents Frontend

Centralize notícias, eventos e campeonatos de eSports em uma plataforma moderna, responsiva e acessível.

## 📦 Stack Utilizada
- **React 18 + TypeScript**
- **Vite** (build e dev server)
- **Chakra UI** (UI e tema customizado)
- **React Router DOM** (roteamento)
- **Axios** (requisições HTTP)
- **React Query** (gerenciamento de dados assíncronos)
- **date-fns** (datas)
- **ESLint + Prettier** (qualidade e padronização de código)

## 🚀 Como rodar o projeto

```bash
# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev

# Lint e formatação
npm run lint      # Verifica problemas de lint
npm run lint:fix  # Corrige problemas automaticamente
npm run format    # Formata o código com Prettier
```

Acesse: [http://localhost:5173](http://localhost:5173)

## 🗂️ Estrutura de Pastas

```
Frontend/
  ├─ src/
  │   ├─ components/
  │   │   ├─ features/   # Cards de domínio (NewsCard, EventCard, TournamentCard)
  │   │   ├─ layout/     # Header, Footer
  │   │   └─ ui/         # BaseCard, Card genérico
  │   ├─ mocks/          # Dados mockados para desenvolvimento
  │   ├─ pages/          # Páginas (Home, Detalhes, Listagens)
  │   ├─ services/       # API (Axios)
  │   ├─ styles/         # Temas alternativos (legado)
  │   ├─ types/          # Tipos TypeScript centralizados
  │   └─ theme.ts        # Tema Chakra customizado
  ├─ index.html          # Entry point
  └─ package.json        # Scripts e dependências
```

## 🖥️ Principais Componentes
- **Header/Footer:** Navegação principal, links e alternância de tema (claro/escuro).
- **BaseCard:** Card reutilizável para notícias, eventos e campeonatos.
- **NewsCard/EventCard/TournamentCard:** Cards específicos, usando BaseCard.
- **Páginas:**
  - `HomePage`: Destaques de notícias, eventos e campeonatos.
  - `EventsPage`, `TournamentsPage`, `NewsPage`: Listagens.
  - `EventDetailPage`, `TournamentDetailPage`, `NewsDetailPage`: Detalhes completos.

## 🎨 Tema Customizado
- Paleta: preto, branco e tons de cinza.
- Suporte a modo claro/escuro.
- Fontes: Montserrat (heading), Inter (body).
- Componentes Chakra customizados para Button, Heading, Link, Card.

## 🧩 Dados Mockados
- Localizados em `src/mocks/index.ts`.
- Tipos centralizados em `src/types/index.ts`.
- Permite desenvolvimento frontend independente do backend.

## 📋 Boas Práticas
- **Responsividade:** Layout adaptado para mobile, tablet e desktop.
- **Acessibilidade:** Uso de cores com contraste, navegação por teclado, semântica HTML.
- **Qualidade:** ESLint e Prettier configurados.
- **Arquitetura modular:** Separação clara de responsabilidades.

## 🔗 Integração com Backend
- Serviço de API centralizado em `src/services/api.ts`.
- Base URL: `http://localhost:3001` (ajuste conforme necessário).
- Pronto para consumir endpoints reais ou mocks.

## 🤝 Contribuição
1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha feature'`
4. Push para o fork: `git push origin minha-feature`
5. Abra um Pull Request

## 📄 Licença
Este projeto é open source, sob a licença MIT. 