import React from 'react';
import { Text, Flex, Icon, Link } from '@chakra-ui/react';
import { BaseCard } from '../ui/BaseCard';
import { Tournament } from '../../types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MdDateRange, MdPeople, MdOutlineEmojiEvents } from 'react-icons/md';
import { Link as RouterLink } from 'react-router-dom';

interface TournamentCardProps {
  tournament: Tournament;
}

export const TournamentCard = ({ tournament }: TournamentCardProps) => {
  return (
    <BaseCard
      imageUrl={tournament.imageUrl || 'https://via.placeholder.com/400x200?text=Tournament+Image'}
      imageAlt={tournament.name}
      title={tournament.name}
      secondaryInfo={[
        <Flex align="center" key="game">
          <Icon as={MdOutlineEmojiEvents} mr={2} color="gray.500" />
          <Text fontSize="sm" color="gray.500">
            Jogo: {tournament.game}
          </Text>
        </Flex>,
        <Flex align="center" key="date">
          <Icon as={MdDateRange} mr={2} color="gray.500" />
          <Text fontSize="sm" color="gray.500">
            Período: {format(new Date(tournament.startDate), 'dd/MM', { locale: ptBR })} - {format(new Date(tournament.endDate), 'dd/MM', { locale: ptBR })}
          </Text>
        </Flex>,
        <Flex align="center" key="participants">
          <Icon as={MdPeople} mr={2} color="gray.500" />
          <Text fontSize="sm" color="gray.500">
            Participantes: {tournament.participants}
          </Text>
        </Flex>,
        <Text fontSize="md" fontWeight="bold" key="prize">
          Premiação: {tournament.prizePool}
        </Text>,
        <Text fontSize="sm" color="gray.600" key="status">
          Status: {tournament.status}
        </Text>
      ]}
      action={
        <Link as={RouterLink} to={`/tournaments/${tournament.id}`} fontSize="sm" fontWeight="bold">
          Detalhes do Campeonato
        </Link>
      }
    />
  );
}; 