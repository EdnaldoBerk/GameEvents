import React from 'react';
import { Box, Container, Text, Stack, Link, useColorModeValue } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

export const Footer = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const color = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box as="footer" py={8} bg={bg} color={color} mt="auto">
      <Container maxW="1200px">
        <Stack spacing={8} align="center">
          <Stack direction="row" spacing={6}>
            <Link href="#" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="#" isExternal>
              <FaInstagram size="24px" />
            </Link>
            <Link href="#" isExternal>
              <FaDiscord size="24px" />
            </Link>
          </Stack>
          
          <Text textAlign="center" fontSize="sm">
            © {new Date().getFullYear()} GameEvents. Todos os direitos reservados.
          </Text>
          
          <Stack direction="row" spacing={6}>
            <Link href="/about">Sobre</Link>
            <Link href="/privacy">Privacidade</Link>
            <Link href="/terms">Termos</Link>
            <Link href="/contact">Contato</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}; 