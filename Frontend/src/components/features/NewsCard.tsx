import React from 'react';
import { Text, Link } from '@chakra-ui/react';
import { BaseCard } from '../ui/BaseCard';
import { News } from '../../types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link as RouterLink } from 'react-router-dom';

interface NewsCardProps {
  news: News;
}

export const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <BaseCard
      imageUrl={news.imageUrl}
      imageAlt={news.title}
      title={news.title}
      secondaryInfo={[
        <Text fontSize="sm" color="gray.500" mb={2} key="author-date">
          Por {news.author} em {format(new Date(news.publishedAt), 'dd/MM/yyyy', { locale: ptBR })}
        </Text>
      ]}
      description={news.content}
      action={
        <Link as={RouterLink} to={`/news/${news.id}`} fontSize="sm" fontWeight="bold">
          Ler Mais
        </Link>
      }
    />
  );
}; 