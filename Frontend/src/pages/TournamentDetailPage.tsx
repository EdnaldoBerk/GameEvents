import React from 'react';
import { Box, Container, Heading, Text, Image, Flex, Icon, Button, Grid, Badge, useColorModeValue } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MdLocationOn, MdEventAvailable, MdGames, MdPeople, MdEmojiEvents } from 'react-icons/md';
import { tournamentDetailMock } from '../mocks';

const TournamentDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  const iconColor = useColorModeValue('gray.700', 'gray.300');
  const boxBg = useColorModeValue('gray.100', 'gray.800');
  const boxText = useColorModeValue('black', 'white');
  const badgeColor = useColorModeValue('gray', 'whiteAlpha');

  return (
    <Container maxW="1200px" py={8}>
      <Heading as="h1" size="xl" mb={6}>{tournamentDetailMock.title}</Heading>
      <Flex direction="column" gap={6}>
        <Image src={tournamentDetailMock.imageUrl} alt={tournamentDetailMock.title} borderRadius="lg" w="full" h="400px" objectFit="cover" />
        
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Flex direction="column" gap={4}>
            <Flex align="center" gap={2}>
              <Icon as={MdEventAvailable} color={iconColor} />
              <Text fontSize="lg">
                {format(new Date(tournamentDetailMock.date), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
              </Text>
            </Flex>
            
            <Flex align="center" gap={2}>
              <Icon as={MdLocationOn} color={iconColor} />
              <Text fontSize="lg">{tournamentDetailMock.location}</Text>
            </Flex>
            
            <Flex align="center" gap={2}>
              <Icon as={MdGames} color={iconColor} />
              <Text fontSize="lg">{tournamentDetailMock.game}</Text>
            </Flex>
          </Flex>

          <Flex direction="column" gap={4}>
            <Flex align="center" gap={2}>
              <Icon as={MdEmojiEvents} color={iconColor} />
              <Text fontSize="lg">Premiação: {tournamentDetailMock.prizePool}</Text>
            </Flex>
            
            <Flex align="center" gap={2}>
              <Icon as={MdPeople} color={iconColor} />
              <Text fontSize="lg">
                Equipes: {tournamentDetailMock.currentTeams}/{tournamentDetailMock.maxTeams}
              </Text>
            </Flex>
            
            <Badge colorScheme={badgeColor} fontSize="md" p={2} alignSelf="start">
              Formato: {tournamentDetailMock.format}
            </Badge>
          </Flex>
        </Grid>

        <Box bg={boxBg} p={6} borderRadius="lg">
          <Heading as="h2" size="md" mb={4} color={boxText}>Sobre o Torneio</Heading>
          <Text fontSize="lg" lineHeight="1.8" color={boxText}>
            {tournamentDetailMock.description}
          </Text>
        </Box>

        <Button size="lg" variant="solid" alignSelf="center">
          Inscrever Equipe
        </Button>
      </Flex>
    </Container>
  );
};

export default TournamentDetailPage; 