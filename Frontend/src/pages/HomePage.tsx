import React from 'react';
import { Container, Heading, Box, SimpleGrid } from '@chakra-ui/react';
import { NewsCard } from '../components/features/NewsCard';
import { EventCard } from '../components/features/EventCard';
import { TournamentCard } from '../components/features/TournamentCard';
import { sampleNews, sampleEvents, sampleTournaments } from '../mocks';

const HomePage = () => (
  <Container maxW="1200px" py={8}>
    <Heading as="h1" size="xl" mb={6} textAlign="center">Bem-vindo ao GameEvents</Heading>
    <Box mb={10}>
      <Heading as="h2" size="lg" mb={4}>Últimas Notícias</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {sampleNews.map((newsItem) => (
          <NewsCard key={newsItem.id} news={newsItem} />
        ))}
      </SimpleGrid>
    </Box>
    <Box mb={10}>
      <Heading as="h2" size="lg" mb={4}>Próximos Eventos</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {sampleEvents.map((eventItem) => (
          <EventCard key={eventItem.id} event={eventItem} />
        ))}
      </SimpleGrid>
    </Box>
    <Box>
      <Heading as="h2" size="lg" mb={4}>Campeonatos em Destaque</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {sampleTournaments.map((tournamentItem) => (
          <TournamentCard key={tournamentItem.id} tournament={tournamentItem} />
        ))}
      </SimpleGrid>
    </Box>
  </Container>
);

export default HomePage; 