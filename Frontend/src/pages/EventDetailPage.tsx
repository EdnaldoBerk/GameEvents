import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text, Image, Flex, Icon, Button, useColorModeValue, Spinner, Center, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, FormControl, FormLabel, Input, useDisclosure, useToast } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MdLocationOn, MdEventAvailable, MdGames } from 'react-icons/md';
import api from '../services/api';

interface EventDetail {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  game: string;
  type: string;
  imageUrl: string;
  status: string;
}

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({ cpf: '', email: '', nome: '', telefone: '' });
  const [formError, setFormError] = useState('');
  const [success, setSuccess] = useState(false);

  const iconColor = useColorModeValue('gray.700', 'gray.300');
  const boxBg = useColorModeValue('gray.100', 'gray.800');
  const boxText = useColorModeValue('black', 'white');

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    api.get(`/events/${id}`)
      .then(response => {
        const item = response.data;
        setEvent({
          ...item,
          imageUrl: item.image_url,
        });
      })
      .catch(() => setError('Erro ao carregar detalhes do evento.'))
      .finally(() => setLoading(false));
  }, [id]);

  // Função para formatar CPF
  function formatCPF(value: string) {
    // Remove tudo que não for número
    let cpf = value.replace(/\D/g, '');
    // Limita a 11 dígitos
    cpf = cpf.slice(0, 11);
    // Aplica a máscara
    if (cpf.length > 9) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (cpf.length > 6) {
      return cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (cpf.length > 3) {
      return cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }
    return cpf;
  }

  // Função para formatar telefone brasileiro
  function formatTelefone(value: string) {
    let tel = value.replace(/\D/g, '');
    tel = tel.slice(0, 11);
    if (tel.length > 10) {
      // Celular com 9 dígitos
      return tel.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (tel.length > 6) {
      // Fixo ou celular com 8 dígitos
      return tel.replace(/(\d{2})(\d{4,5})(\d{0,4})/, '($1) $2-$3');
    } else if (tel.length > 2) {
      return tel.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }
    return tel;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'cpf') {
      setForm({ ...form, cpf: formatCPF(value) });
    } else if (name === 'telefone') {
      setForm({ ...form, telefone: formatTelefone(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validação de CPF: 11 dígitos numéricos
    const cpfNumbers = form.cpf.replace(/\D/g, '');
    if (cpfNumbers.length !== 11) {
      setFormError('CPF deve conter 11 números.');
      return;
    }
    // Validação de telefone: 10 ou 11 dígitos numéricos
    const telNumbers = form.telefone.replace(/\D/g, '');
    if (telNumbers.length < 10 || telNumbers.length > 11) {
      setFormError('Telefone deve conter 10 ou 11 números.');
      return;
    }
    if (!form.email || !form.nome) {
      setFormError('Preencha todos os campos.');
      return;
    }
    setFormError('');
    try {
      await api.post('/inscriptions', {
        cpf: cpfNumbers,
        email: form.email,
        nomeCompleto: form.nome,
        telefone: telNumbers,
        eventoId: event?.id
      });
      setSuccess(true);
      onClose();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setFormError(err.response.data.message);
      } else {
        setFormError('Erro ao realizar inscrição. Tente novamente.');
      }
    }
  };

  if (loading) {
    return <Center py={20}><Spinner size="xl" /></Center>;
  }
  if (error || !event) {
    return <Center py={20}><Text color="red.400">{error || 'Evento não encontrado.'}</Text></Center>;
  }

  return (
    <Container maxW="1200px" py={8}>
      <Heading as="h1" size="xl" mb={6}>{event.title}</Heading>
      <Flex direction="column" gap={6}>
        <Image src={event.imageUrl} alt={event.title} borderRadius="lg" w="full" h="400px" objectFit="cover" />
        <Flex direction="column" gap={4}>
          <Flex align="center" gap={2}>
            <Icon as={MdEventAvailable} color={iconColor} />
            <Text fontSize="lg">
              {format(new Date(event.date), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
            </Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={MdGames} color={iconColor} />
            <Text fontSize="lg">{event.game}</Text>
          </Flex>
        </Flex>
        <Box bg={boxBg} p={6} borderRadius="lg">
          <Heading as="h2" size="md" mb={4} color={boxText}>Sobre o Evento</Heading>
          <Text fontSize="lg" lineHeight="1.8" color={boxText}>
            {event.description}
          </Text>
        </Box>
        <Button size="lg" variant="solid" alignSelf="center" onClick={onOpen}>
          Inscrever-se no Evento
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inscrição no Evento</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isRequired mb={3}>
                <FormLabel>CPF</FormLabel>
                <Input name="cpf" value={form.cpf} onChange={handleChange} placeholder="000.000.000-00" />
              </FormControl>
              <FormControl isRequired mb={3}>
                <FormLabel>Email</FormLabel>
                <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="exemplo@email.com" />
              </FormControl>
              <FormControl isRequired mb={3}>
                <FormLabel>Nome Completo</FormLabel>
                <Input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome Completo" />
              </FormControl>
              <FormControl isRequired mb={3}>
                <FormLabel>Telefone</FormLabel>
                <Input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(99) 99999-9999" />
              </FormControl>
              {formError && <Text color="red.400" fontSize="sm">{formError}</Text>}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Enviar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      {success && (
        <Center pos="fixed" top={0} left={0} w="100vw" h="100vh" zIndex={2000} bg="blackAlpha.700">
          <Box bg="white" p={8} borderRadius="lg" boxShadow="lg">
            <Heading size="md" color="green.500" mb={2}>Inscrição concluída!</Heading>
            <Text color="black">Sua inscrição foi realizada com sucesso.</Text>
          </Box>
        </Center>
      )}
    </Container>
  );
};

export default EventDetailPage; 