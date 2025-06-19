import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text, Image, Flex, Icon, Tag, Divider, useColorModeValue, Spinner, Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MdPerson, MdAccessTime } from 'react-icons/md';
import api from '../services/api';

interface NewsDetail {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  author: string;
  imageUrl: string;
  category?: string;
  tags?: string[];
}

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const iconColor = useColorModeValue('gray.700', 'gray.300');
  const tagColor = useColorModeValue('gray', 'whiteAlpha');
  const dividerColor = useColorModeValue('gray.300', 'gray.700');
  const textColor = useColorModeValue('black', 'white');

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    api.get(`/news/${id}`)
      .then(response => {
        const item = response.data;
        setNews({
          ...item,
          publishedAt: item.published_at,
          imageUrl: item.image_url,
          tags: item.tags || [],
        });
      })
      .catch(() => setError('Erro ao carregar detalhes da notícia.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Center py={20}><Spinner size="xl" /></Center>;
  }
  if (error || !news) {
    return <Center py={20}><Text color="red.400">{error || 'Notícia não encontrada.'}</Text></Center>;
  }

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
            {format(new Date(news.publishedAt), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
          </Text>
        </Flex>
      </Flex>
      <Image src={news.imageUrl} alt={news.title} borderRadius="lg" w="full" h="400px" objectFit="cover" mb={6} />
      {news.tags && news.tags.length > 0 && (
        <Flex gap={2} mb={6}>
          {news.tags.map((tag) => (
            <Tag key={tag} colorScheme={tagColor} size="md">
              {tag}
            </Tag>
          ))}
        </Flex>
      )}
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