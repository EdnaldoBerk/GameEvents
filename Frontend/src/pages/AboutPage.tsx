import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';

const AboutPage = () => (
  <Container maxW="800px" py={8}>
    <Heading as="h1" size="xl" mb={6}>Sobre</Heading>
    <Text fontSize="lg" mb={4}>
      O GameEvents é uma plataforma dedicada a reunir informações sobre eventos, campeonatos e notícias do universo dos games. Nosso objetivo é conectar jogadores, organizadores e fãs, facilitando o acesso a tudo que acontece no cenário gamer.
    </Text>
  </Container>
);

export default AboutPage; 