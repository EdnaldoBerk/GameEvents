import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';

const TermsPage = () => (
  <Container maxW="800px" py={8}>
    <Heading as="h1" size="xl" mb={6}>Termos</Heading>
    <Text fontSize="lg" mb={4}>
      Ao utilizar o GameEvents, você concorda com nossos Termos de Uso. É proibido o uso indevido da plataforma, como envio de informações falsas ou uso para fins ilícitos. Reservamo-nos o direito de alterar os termos a qualquer momento.
    </Text>
  </Container>
);

export default TermsPage; 