import React, { useEffect, useState } from 'react';
import { Container, Heading, Box, SimpleGrid, Spinner, Center, Text } from '@chakra-ui/react';
import { NewsCard } from '../components/features/NewsCard';
import api from '../services/api';
import { News } from '../types';

const NewsPage = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get('/news')
      .then(response => {
        const newsData = response.data.map((item: News & { published_at?: string, image_url?: string }) => ({
          ...item,
          publishedAt: item.published_at,
          imageUrl: item.image_url,
        }));
        setNews(newsData);
      })
      .catch(() => setError('Erro ao carregar notícias.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxW="1200px" py={8}>
      <Heading as="h1" size="xl" mb={6}>Notícias</Heading>
      <Box>
        {loading ? (
          <Center><Spinner size="lg" /></Center>
        ) : error ? (
          <Center><Text color="red.400">{error}</Text></Center>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {news.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Container>
  );
};

export default NewsPage; 