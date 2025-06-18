import React from 'react';
import { ChakraProvider, Box, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { theme } from './theme';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import TournamentsPage from './pages/TournamentsPage';
import NewsPage from './pages/NewsPage';
import EventDetailPage from './pages/EventDetailPage';
import TournamentDetailPage from './pages/TournamentDetailPage';
import NewsDetailPage from './pages/NewsDetailPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Router>
          <Box minH="100vh" display="flex" flexDirection="column">
            <Header />
            <Box flex="1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/events/:id" element={<EventDetailPage />} />
                <Route path="/tournaments" element={<TournamentsPage />} />
                <Route path="/tournaments/:id" element={<TournamentDetailPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:id" element={<NewsDetailPage />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App; 