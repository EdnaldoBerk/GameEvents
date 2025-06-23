import React, { useEffect, useState } from 'react';
import { Container, Heading, Box, SimpleGrid, Spinner, Center, Text } from '@chakra-ui/react';
import { TournamentCard } from '../components/features/TournamentCard';
import api from '../services/api';
import { Tournament } from '../types';

const TournamentsPage = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      .catch(() => setError('Erro ao carregar campeonatos.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxW="1200px" py={8}>
      <Heading as="h1" size="xl" mb={6}>Campeonatos</Heading>
      <Box>
        {loading ? (
          <Center><Spinner size="lg" /></Center>
        ) : error ? (
          <Center><Text color="red.400">{error}</Text></Center>
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

export default TournamentsPage; 