import React, { useEffect, useState } from 'react';
import { Container, Heading, Box, SimpleGrid, Spinner, Center, Text } from '@chakra-ui/react';
import { EventCard } from '../components/features/EventCard';
import api from '../services/api';
import { GameEvent } from '../types';

const EventsPage = () => {
  const [events, setEvents] = useState<GameEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get('/events')
      .then(response => {
        const eventsData = response.data.map((item: GameEvent & { image_url?: string }) => ({
          ...item,
          imageUrl: item.image_url,
        }));
        setEvents(eventsData);
      })
      .catch(() => setError('Erro ao carregar eventos.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxW="1200px" py={8}>
      <Heading as="h1" size="xl" mb={6}>Eventos</Heading>
      <Box>
        {loading ? (
          <Center><Spinner size="lg" /></Center>
        ) : error ? (
          <Center><Text color="red.400">{error}</Text></Center>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {events.map((eventItem) => (
              <EventCard key={eventItem.id} event={eventItem} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Container>
  );
};

export default EventsPage; 