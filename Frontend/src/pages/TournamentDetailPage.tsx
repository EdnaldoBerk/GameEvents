import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text, Image, Flex, Icon, Button, Grid, Badge, useColorModeValue, Spinner, Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MdLocationOn, MdEventAvailable, MdGames, MdPeople, MdEmojiEvents } from 'react-icons/md';
import api from '../services/api';

interface TournamentDetail {
  id: string;
  name: string;
  game: string;
  startDate: string;
  endDate: string;
  prizePool: string;
  participants: number;
  status: string;
  registrationDeadline: string;
  imageUrl: string;
  location?: string;
  description?: string;
  currentTeams?: number;
  maxTeams?: number;
  format?: string;
}

const TournamentDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [tournament, setTournament] = useState<TournamentDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const iconColor = useColorModeValue('gray.700', 'gray.300');
  const boxBg = useColorModeValue('gray.100', 'gray.800');
  const boxText = useColorModeValue('black', 'white');
  const badgeColor = useColorModeValue('gray', 'whiteAlpha');

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    api.get(`/tournaments/${id}`)
      .then(response => {
        const item = response.data;
        setTournament({
          ...item,
          startDate: item.start_date,
          endDate: item.end_date,
          prizePool: item.prize_pool,
          registrationDeadline: item.registration_deadline,
          imageUrl: item.image_url,
        });
      })
      .catch(() => setError('Erro ao carregar detalhes do campeonato.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Center py={20}><Spinner size="xl" /></Center>;
  }
  if (error || !tournament) {
    return <Center py={20}><Text color="red.400">{error || 'Campeonato não encontrado.'}</Text></Center>;
  }

  return (
    <Container maxW="1200px" py={8}>
      <Heading as="h1" size="xl" mb={6}>{tournament.name}</Heading>
      <Image src={tournament.imageUrl} alt={tournament.name} borderRadius="lg" w="full" h="400px" objectFit="cover" />
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Flex direction="column" gap={4}>
          <Flex align="center" gap={2}>
            <Icon as={MdEventAvailable} color={iconColor} />
            <Text fontSize="lg">
              {format(new Date(tournament.startDate), 'dd/MM/yyyy', { locale: ptBR })} - {format(new Date(tournament.endDate), 'dd/MM/yyyy', { locale: ptBR })}
            </Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={MdLocationOn} color={iconColor} />
            <Text fontSize="lg">{tournament.location}</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={MdGames} color={iconColor} />
            <Text fontSize="lg">{tournament.game}</Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap={4}>
          <Flex align="center" gap={2}>
            <Icon as={MdEmojiEvents} color={iconColor} />
            <Text fontSize="lg">Premiação: {tournament.prizePool}</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={MdPeople} color={iconColor} />
            <Text fontSize="lg">
              Participantes: {tournament.participants}
            </Text>
          </Flex>
          {tournament.format && (
            <Badge colorScheme={badgeColor} fontSize="md" p={2} alignSelf="start">
              Formato: {tournament.format}
            </Badge>
          )}
        </Flex>
      </Grid>
      <Box bg={boxBg} p={6} borderRadius="lg" mt={6}>
        <Heading as="h2" size="md" mb={4} color={boxText}>Sobre o Campeonato</Heading>
        <Text fontSize="lg" lineHeight="1.8" color={boxText}>
          {tournament.description}
        </Text>
      </Box>
      <Flex justify="center" mt={6}>
        <Button size="lg" variant="solid">
          Inscrever Equipe
        </Button>
      </Flex>
    </Container>
  );
};

export default TournamentDetailPage; 