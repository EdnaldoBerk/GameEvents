import React from 'react';
import { Box, Flex, Button, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const buttonBg = useColorModeValue('gray.100', 'gray.800');

  return (
    <Box as="header" py={4} px={8} borderBottom="1px" borderColor={borderColor} bg={bg} color={color}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Link to="/">
          <Heading size="lg" color={color}>GameEvents</Heading>
        </Link>
        
        <Flex gap={4} align="center">
          <Link to="/events">
            <Button variant="ghost">Eventos</Button>
          </Link>
          <Link to="/tournaments">
            <Button variant="ghost">Campeonatos</Button>
          </Link>
          <Link to="/news">
            <Button variant="ghost">Notícias</Button>
          </Link>
          <Button onClick={toggleColorMode} bg={buttonBg} color={color} _hover={{ bg: borderColor }}>
            {colorMode === 'light' ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}; 