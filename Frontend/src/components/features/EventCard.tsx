import React from 'react';
import { Text, Flex, Icon, Button } from '@chakra-ui/react';
import { BaseCard } from '../ui/BaseCard';
import { GameEvent } from '../../types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MdLocationOn, MdEventAvailable } from 'react-icons/md';
import { Link as RouterLink } from 'react-router-dom';

interface EventCardProps {
  event: GameEvent;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <BaseCard
      imageUrl={event.imageUrl}
      imageAlt={event.title}
      title={event.title}
      secondaryInfo={[
        <Flex align="center" key="date">
          <Icon as={MdEventAvailable} mr={2} color="gray.500" />
          <Text fontSize="sm" color="gray.500">
            {format(new Date(event.date), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
          </Text>
        </Flex>,
        <Flex align="center" key="location">
          <Icon as={MdLocationOn} mr={2} color="gray.500" />
          <Text fontSize="sm" color="gray.500">
            {event.location}
          </Text>
        </Flex>
      ]}
      description={event.description}
      action={
        <Button
          as={RouterLink}
          to={`/events/${event.id}`}
          colorScheme="blue"
          variant="solid"
          size="sm"
          fontWeight="bold"
        >
          Ver Detalhes
        </Button>
      }
    />
  );
}; 