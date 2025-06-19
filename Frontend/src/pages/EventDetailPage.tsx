import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text, Image, Flex, Icon, Button, useColorModeValue, Spinner, Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MdLocationOn, MdEventAvailable, MdGames } from 'react-icons/md';
import api from '../services/api';

interface EventDetail {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  game: string;
  type: string;
  imageUrl: string;
  status: string;
}

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const iconColor = useColorModeValue('gray.700', 'gray.300');
  const boxBg = useColorModeValue('gray.100', 'gray.800');
  const boxText = useColorModeValue('black', 'white');

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    api.get(`/events/${id}`)
      .then(response => {
        const item = response.data;
        setEvent({
          ...item,
          imageUrl: item.image_url,
        });
      })
      .catch(() => setError('Erro ao carregar detalhes do evento.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Center py={20}><Spinner size="xl" /></Center>;
  }
  if (error || !event) {
    return <Center py={20}><Text color="red.400">{error || 'Evento não encontrado.'}</Text></Center>;
  }

  return (
    <Container maxW="1200px" py={8}>
      <Heading as="h1" size="xl" mb={6}>{event.title}</Heading>
      <Flex direction="column" gap={6}>
        <Image src={event.imageUrl} alt={event.title} borderRadius="lg" w="full" h="400px" objectFit="cover" />
        <Flex direction="column" gap={4}>
          <Flex align="center" gap={2}>
            <Icon as={MdEventAvailable} color={iconColor} />
            <Text fontSize="lg">
              {format(new Date(event.date), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
            </Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={MdLocationOn} color={iconColor} />
            <Text fontSize="lg">{event.location}</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={MdGames} color={iconColor} />
            <Text fontSize="lg">{event.game}</Text>
          </Flex>
        </Flex>
        <Box bg={boxBg} p={6} borderRadius="lg">
          <Heading as="h2" size="md" mb={4} color={boxText}>Sobre o Evento</Heading>
          <Text fontSize="lg" lineHeight="1.8" color={boxText}>
            {event.description}
          </Text>
        </Box>
        <Button size="lg" variant="solid" alignSelf="center">
          Inscrever-se no Evento
        </Button>
      </Flex>
    </Container>
  );
};

export default EventDetailPage; 