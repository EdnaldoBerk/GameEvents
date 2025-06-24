import express from 'express';
import cors from 'cors';
import database from './database';
import newsRoutes from './routes/news.routes';
import eventsRoutes from './routes/events.routes';
import tournamentsRoutes from './routes/tournaments.routes';
import inscriptionsRoutes from './routes/inscriptions.routes';
import { getAllInscriptions } from './repository/inscriptionsRepository';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

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
app.use('/inscriptions', inscriptionsRoutes);

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  
  try {
    const inscriptions = await getAllInscriptions();
    console.log('\n=== INSCRIÇÕES EXISTENTES NO BANCO ===');
    if (inscriptions.length === 0) {
      console.log('📭 Nenhuma inscrição encontrada no banco.');
    } else {
      console.log(`📊 Total de inscrições: ${inscriptions.length}`);
      inscriptions.forEach((inscription, index) => {
        console.log(`\n📋 Inscrição #${index + 1}:`);
        console.log(`   📝 ID: ${inscription.id}`);
        console.log(`   👤 Nome: ${inscription.nome_completo}`);
        console.log(`   📧 Email: ${inscription.email}`);
        console.log(`   🆔 CPF: ${inscription.cpf}`);
        console.log(`   📱 Telefone: ${inscription.telefone}`);
        console.log(`   🎯 Evento ID: ${inscription.evento_id || 'Não especificado'}`);
        console.log(`   ⏰ Data: ${inscription.created_at}`);
      });
    }
    console.log('========================================\n');
  } catch (error) {
    console.log('❌ Erro ao carregar inscrições existentes:', error);
  }
}); 