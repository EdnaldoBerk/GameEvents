import React, { useEffect, useState } from 'react';
import { Container, Heading, Box, SimpleGrid, Spinner, Center, Text } from '@chakra-ui/react';
import { NewsCard } from '../components/features/NewsCard';
import { EventCard } from '../components/features/EventCard';
import { TournamentCard } from '../components/features/TournamentCard';
import api from '../services/api';
import { News, GameEvent, Tournament } from '../types';

const HomePage = () => {
  const [news, setNews] = useState<News[]>([]);
  const [events, setEvents] = useState<GameEvent[]>([]);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingTournaments, setLoadingTournaments] = useState(true);
  const [errorNews, setErrorNews] = useState<string | null>(null);
  const [errorEvents, setErrorEvents] = useState<string | null>(null);
  const [errorTournaments, setErrorTournaments] = useState<string | null>(null);

  useEffect(() => {
    api.get('/news')
      .then(response => {
        const newsData = response.data.map((item: News & { published_at?: string, image_url?: string }) => ({
          ...item,
          publishedAt: item.published_at,
          imageUrl: item.image_url,
        }));
        setNews(newsData);
      })
      .catch(() => setErrorNews('Erro ao carregar notícias.'))
      .finally(() => setLoadingNews(false));
  }, []);

  useEffect(() => {
    api.get('/events')
      .then(response => {
        const eventsData = response.data.map((item: GameEvent & { image_url?: string }) => ({
          ...item,
          imageUrl: item.image_url,
        }));
        setEvents(eventsData);
      })
      .catch(() => setErrorEvents('Erro ao carregar eventos.'))
      .finally(() => setLoadingEvents(false));
  }, []);

  useEffect(() => {
    api.get('/tournaments')
      .then(response => {
        const tournamentsData = response.data.map((item: Tournament & {
          start_date?: string,
          end_date?: string,
          prize_pool?: string,
          registration_deadline?: string,
          image_url?: string
        }) => ({
          ...item,
          startDate: item.start_date,
          endDate: item.end_date,
          prizePool: item.prize_pool,
          registrationDeadline: item.registration_deadline,
          imageUrl: item.image_url,
        }));
        setTournaments(tournamentsData);
      })
      .catch(() => setErrorTournaments('Erro ao carregar campeonatos.'))
      .finally(() => setLoadingTournaments(false));
  }, []);

  return (
    <Container maxW="1200px" py={8}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">Bem-vindo ao GameEvents</Heading>
      <Box mb={10}>
        <Heading as="h2" size="lg" mb={4}>Últimas Notícias</Heading>
        {loadingNews ? (
          <Center><Spinner size="lg" /></Center>
        ) : errorNews ? (
          <Center><Text color="red.400">{errorNews}</Text></Center>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {news.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </SimpleGrid>
        )}
      </Box>
      <Box mb={10}>
        <Heading as="h2" size="lg" mb={4}>Próximos Eventos</Heading>
        {loadingEvents ? (
          <Center><Spinner size="lg" /></Center>
        ) : errorEvents ? (
          <Center><Text color="red.400">{errorEvents}</Text></Center>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {events.map((eventItem) => (
              <EventCard key={eventItem.id} event={eventItem} />
            ))}
          </SimpleGrid>
        )}
      </Box>
      <Box>
        <Heading as="h2" size="lg" mb={4}>Campeonatos em Destaque</Heading>
        {loadingTournaments ? (
          <Center><Spinner size="lg" /></Center>
        ) : errorTournaments ? (
          <Center><Text color="red.400">{errorTournaments}</Text></Center>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {tournaments.map((tournamentItem) => (
              <TournamentCard key={tournamentItem.id} tournament={tournamentItem} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Container>
  );
};

export default HomePage; 