import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface CardProps extends BoxProps {
  children: React.ReactNode;
}

export const Card = ({ children, ...rest }: CardProps) => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: 'translateY(-2px)',
        shadow: 'lg',
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}; 