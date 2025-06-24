import React from 'react';
import {
  Box,
  Flex,
  Button,
  Heading,
  useColorMode,
  useColorModeValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  useDisclosure,
  Show,
  Hide
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const buttonBg = useColorModeValue('gray.100', 'gray.800');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLinks = (
    <>
      <Link to="/events">
        <Button variant="ghost" w="full">Eventos</Button>
      </Link>
      <Link to="/tournaments">
        <Button variant="ghost" w="full">Campeonatos</Button>
      </Link>
      <Link to="/news">
        <Button variant="ghost" w="full">Notícias</Button>
      </Link>
    </>
  );

  return (
    <Box as="header" py={{ base: 2, md: 4 }} px={{ base: 2, md: 8 }} borderBottom="1px" borderColor={borderColor} bg={bg} color={color}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Link to="/">
          <Heading size={{ base: 'md', md: 'lg' }} color={color}>GameEvents</Heading>
        </Link>
        {/* Desktop Menu */}
        <Show above="md">
          <Flex gap={4} align="center">
            {NavLinks}
            <Button onClick={toggleColorMode} bg={buttonBg} color={color} _hover={{ bg: borderColor }}>
              {colorMode === 'light' ? <FaMoon /> : <FaSun />}
            </Button>
          </Flex>
        </Show>
        {/* Mobile Menu */}
        <Hide above="md">
          <IconButton
            aria-label="Abrir menu"
            icon={<FaBars />}
            variant="ghost"
            onClick={onOpen}
            color={color}
            fontSize="xl"
          />
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg={bg} color={color}>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="stretch">
                  {NavLinks}
                  <Button onClick={toggleColorMode} bg={buttonBg} color={color} _hover={{ bg: borderColor }} w="full">
                    {colorMode === 'light' ? <FaMoon /> : <FaSun />}
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Hide>
      </Flex>
    </Box>
  );
}; 