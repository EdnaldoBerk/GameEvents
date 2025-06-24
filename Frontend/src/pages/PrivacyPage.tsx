import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';

const PrivacyPage = () => (
  <Container maxW="800px" py={8}>
    <Heading as="h1" size="xl" mb={6}>Privacidade</Heading>
    <Text fontSize="lg" mb={4}>
      Respeitamos a sua privacidade! Seus dados são utilizados apenas para fins de inscrição e comunicação sobre eventos. Não compartilhamos suas informações com terceiros. Para saber mais, consulte nossa Política de Privacidade completa.
    </Text>
  </Container>
);

export default PrivacyPage; 