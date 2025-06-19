import express from 'express';
import cors from 'cors';
import database from './database';
import newsRoutes from './routes/news.routes';
import eventsRoutes from './routes/events.routes';
import tournamentsRoutes from './routes/tournaments.routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Endpoint de teste de conexão com o banco
app.get('/health', async (req, res) => {
  try {
    const result = await database.query('SELECT NOW()');
    res.status(200).json({ status: 'ok', time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Database connection failed', error });
  }
});

app.use('/news', newsRoutes);
app.use('/events', eventsRoutes);
app.use('/tournaments', tournamentsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 