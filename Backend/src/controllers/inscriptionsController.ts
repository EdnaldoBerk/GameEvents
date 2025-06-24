import { Request, Response } from 'express';
import { createInscription, getInscriptionByCpf, getInscriptionByEmail, getAllInscriptions, Inscription } from '../repository/inscriptionsRepository';

// Função para validar CPF (formato básico)
function validateCpf(cpf: string): boolean {
  const cleanCpf = cpf.replace(/\D/g, '');
  
  if (cleanCpf.length !== 11) {
    return false;
  }
  
  if (/^(\d)\1{10}$/.test(cleanCpf)) {
    return false;
  }
  
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCpf.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCpf.charAt(9))) {
    return false;
  }
  
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCpf.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCpf.charAt(10))) {
    return false;
  }
  
  return true;
}

// Função para validar email
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para validar telefone
function validatePhone(telefone: string): boolean {
  const cleanPhone = telefone.replace(/\D/g, '');
  
  return cleanPhone.length === 10 || cleanPhone.length === 11;
}

export async function createInscriptionController(req: Request, res: Response) {
  try {
    const { cpf, email, nomeCompleto, telefone, eventoId } = req.body;
    
    console.log('\n🔄 Nova tentativa de inscrição recebida:');
    console.log(`👤 Nome: ${nomeCompleto}`);
    console.log(`📧 Email: ${email}`);
    console.log(`🎯 Evento ID: ${eventoId || 'Não especificado'}`);
    
    if (!cpf || !email || !nomeCompleto || !telefone) {
      return res.status(400).json({ 
        message: 'Todos os campos obrigatórios devem ser preenchidos' 
      });
    }
    
    if (!validateCpf(cpf)) {
      return res.status(400).json({ 
        message: 'CPF inválido' 
      });
    }
    
    if (!validateEmail(email)) {
      return res.status(400).json({ 
        message: 'Email inválido' 
      });
    }
    
    if (!validatePhone(telefone)) {
      return res.status(400).json({ 
        message: 'Telefone inválido (deve ter 10 ou 11 dígitos)' 
      });
    }
    
    if (!nomeCompleto.trim()) {
      return res.status(400).json({ 
        message: 'Nome completo não pode estar vazio' 
      });
    }
    
    const cleanCpf = cpf.replace(/\D/g, '');
    const cleanTelefone = telefone.replace(/\D/g, '');
    
    const existingCpf = await getInscriptionByCpf(cleanCpf);
    if (existingCpf) {
      console.log(`❌ Tentativa de inscrição com CPF duplicado: ${cleanCpf}`);
      return res.status(409).json({ 
        message: 'CPF já está inscrito' 
      });
    }
    
    const existingEmail = await getInscriptionByEmail(email);
    if (existingEmail) {
      console.log(`❌ Tentativa de inscrição com email duplicado: ${email}`);
      return res.status(409).json({ 
        message: 'Email já está inscrito' 
      });
    }
    
    const inscriptionData: Inscription = {
      cpf: cleanCpf,
      email: email.toLowerCase().trim(),
      nome_completo: nomeCompleto.trim(),
      telefone: cleanTelefone,
      evento_id: eventoId ? Number(eventoId) : undefined
    };
    
    const inscription = await createInscription(inscriptionData);
    
    console.log('\n=== NOVA INSCRIÇÃO REALIZADA ===');
    console.log(`📝 ID: ${inscription.id}`);
    console.log(`👤 Nome: ${inscription.nome_completo}`);
    console.log(`📧 Email: ${inscription.email}`);
    console.log(`🆔 CPF: ${inscription.cpf}`);
    console.log(`📱 Telefone: ${inscription.telefone}`);
    console.log(`🎯 Evento ID: ${inscription.evento_id || 'Não especificado'}`);
    console.log(`⏰ Data: ${inscription.created_at}`);
    console.log('================================\n');
    
    res.status(201).json({
      message: 'Inscrição realizada com sucesso!',
      inscription: {
        id: inscription.id,
        cpf: inscription.cpf,
        email: inscription.email,
        nome_completo: inscription.nome_completo,
        telefone: inscription.telefone,
        evento_id: inscription.evento_id,
        created_at: inscription.created_at
      }
    });
    
  } catch (error) {
    console.error('Erro ao criar inscrição:', error);
    res.status(500).json({ 
      message: 'Erro interno do servidor ao processar inscrição' 
    });
  }
}

export async function getAllInscriptionsController(req: Request, res: Response) {
  try {
    const inscriptions = await getAllInscriptions();
    
    console.log('\n=== TODAS AS INSCRIÇÕES CADASTRADAS ===');
    if (inscriptions.length === 0) {
      console.log('📭 Nenhuma inscrição encontrada.');
    } else {
      inscriptions.forEach((inscription, index) => {
        console.log(`\n📋 Inscrição #${index + 1}:`);
        console.log(`   📝 ID: ${inscription.id}`);
        console.log(`   👤 Nome: ${inscription.nome_completo}`);
        console.log(`   📧 Email: ${inscription.email}`);
        console.log(`   🆔 CPF: ${inscription.cpf}`);
        console.log(`   📱 Telefone: ${inscription.telefone}`);
        console.log(`   🎯 Evento ID: ${inscription.evento_id || 'Não especificado'}`);
        console.log(`   ⏰ Data: ${inscription.created_at}`);
      });
    }
    console.log('========================================\n');
    
    res.status(200).json(inscriptions);
  } catch (error) {
    console.error('Erro ao buscar inscrições:', error);
    res.status(500).json({ 
      message: 'Erro interno do servidor ao buscar inscrições' 
    });
  }
} 