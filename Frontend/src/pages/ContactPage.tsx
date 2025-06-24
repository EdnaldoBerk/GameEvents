import React from 'react';
import { Container, Heading, Text, Link } from '@chakra-ui/react';

const ContactPage = () => (
  <Container maxW="800px" py={8}>
    <Heading as="h1" size="xl" mb={6}>Contato</Heading>
    <Text fontSize="lg" mb={4}>
      Tem dúvidas, sugestões ou precisa de suporte? Entre em contato conosco pelo e-mail{' '}
      <Link href="mailto:contato@gameevents.com" color="blue.500">contato@gameevents.com</Link> ou preencha nosso formulário de contato. Estamos prontos para ajudar!
    </Text>
  </Container>
);

export default ContactPage; 