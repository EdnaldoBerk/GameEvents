import React from 'react';
import { Box, Container, Heading, Text, Image, Flex, Icon, Tag, Divider, useColorModeValue } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MdPerson, MdAccessTime } from 'react-icons/md';
import { newsDetailMock } from '../mocks';

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Remover: // Aqui virá a lógica para buscar os detalhes da notícia pelo ID
  const news = newsDetailMock;

  const iconColor = useColorModeValue('gray.700', 'gray.300');
  const tagColor = useColorModeValue('gray', 'whiteAlpha');
  const dividerColor = useColorModeValue('gray.300', 'gray.700');
  const textColor = useColorModeValue('black', 'white');

  return (
    <Container maxW="800px" py={8}>
      <Heading as="h1" size="xl" mb={4}>{news.title}</Heading>
      
      <Flex gap={4} mb={6}>
        <Flex align="center" gap={2}>
          <Icon as={MdPerson} color={iconColor} />
          <Text color={textColor}>{news.author}</Text>
        </Flex>
        
        <Flex align="center" gap={2}>
          <Icon as={MdAccessTime} color={iconColor} />
          <Text color={textColor}>
            {format(new Date(news.date), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
          </Text>
        </Flex>
      </Flex>

      <Image src={news.imageUrl} alt={news.title} borderRadius="lg" w="full" h="400px" objectFit="cover" mb={6} />
      
      <Flex gap={2} mb={6}>
        {news.tags.map((tag) => (
          <Tag key={tag} colorScheme={tagColor} size="md">
            {tag}
          </Tag>
        ))}
      </Flex>

      <Divider mb={6} borderColor={dividerColor} />

      <Box>
        {news.content.split('\n').map((paragraph, index) => (
          <Text key={index} fontSize="lg" lineHeight="1.8" mb={4} color={textColor}>
            {paragraph}
          </Text>
        ))}
      </Box>
    </Container>
  );
};

export default NewsDetailPage; 