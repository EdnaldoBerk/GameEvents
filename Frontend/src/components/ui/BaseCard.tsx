import React from 'react';
import { Box, Image, Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react';

interface BaseCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  secondaryInfo?: React.ReactNode[];
  description?: string | React.ReactNode;
  action?: React.ReactNode;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  secondaryInfo = [],
  description,
  action,
}) => {
  const borderColor = useColorModeValue('gray.300', 'gray.700');
  return (
    <Box borderRadius="md" overflow="hidden" boxShadow="md" bg="inherit" p={4} borderWidth="1px" borderColor={borderColor}>
      <Image src={imageUrl} alt={imageAlt} borderRadius="md" mb={4} objectFit="cover" h="180px" w="full" />
      <Heading as="h3" size="md" mb={2} noOfLines={2}>
        {title}
      </Heading>
      <Stack spacing={1} mb={2}>
        {secondaryInfo.map((info, idx) => (
          <Box key={idx}>{info}</Box>
        ))}
      </Stack>
      {description && (
        <Text fontSize="md" noOfLines={3} mb={2}>
          {description}
        </Text>
      )}
      {action && <Box mt={4} textAlign="right">{action}</Box>}
    </Box>
  );
}; 