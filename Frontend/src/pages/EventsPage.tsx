import React from 'react';
import { Container, Heading, Box } from '@chakra-ui/react';

const EventsPage = () => (
  <Container maxW="1200px" py={8}>
    <Heading as="h1" size="xl" mb={6}>Eventos</Heading>
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading fontSize="xl">Lista de Eventos</Heading>
    </Box>
  </Container>
);

export default EventsPage; 