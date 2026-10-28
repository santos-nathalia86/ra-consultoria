import { BicepsFlexed, CalendarCheck, Dumbbell, HeartPulse, PersonStanding } from 'lucide-react';

// Conteúdo central do site. Para atualizar textos, preços, contatos ou imagens,
// edite apenas este arquivo — os componentes leem tudo daqui.

export const brand = {
  name: 'RA Movimento',
  description: 'Consultoria Online de Treinamento Personalizado',
  slogan: ['Seu movimento.', 'Sua evolução.', 'Seus resultados.'],
  professional: 'Renata de Andrade',
  education: 'Bacharel em Educação Física pela Universidade Paulista (UNIP)',
  cref: '168883-G/SP',
  // URL completa do perfil oficial. Deixe vazio para ocultar o link no rodapé.
  instagram: '',
};

// O número fica no arquivo .env (VITE_WHATSAPP_NUMBER), fora do repositório.
// Formato: código do país + DDD + número, só dígitos. Ex.: 5511900000000
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? '';

function formatPhone(digits) {
  const match = digits.match(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/);
  return match ? `+${match[1]} ${match[2]} ${match[3]}-${match[4]}` : digits;
}

export const whatsapp = {
  number: whatsappNumber,
  display: formatPhone(whatsappNumber),
  messages: {
    general:
      'Olá, Renata! Conheci a RA Movimento pelo site e gostaria de saber mais sobre a consultoria online.',
    monthly:
      'Olá, Renata! Tenho interesse no plano mensal da RA Movimento. Pode me explicar como funciona?',
    quarterly:
      'Olá, Renata! Tenho interesse no plano trimestral da RA Movimento. Pode me explicar como funciona?',
  },
};

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#planos', label: 'Planos' },
];

// Fotos do site. Arquivos próprios ficam em /public/images e são referenciados
// como '/images/nome-do-arquivo.jpg'. As de hero e goals ainda são temporárias
// (Unsplash) e não mostram a Renata — por isso os textos alternativos são neutros.
export const images = {
  hero: {
    src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1100&q=75',
    alt: 'Mulher de costas segurando uma barra com anilhas em uma academia',
  },
  about: {
    src: '/images/renata.jpg',
    alt: 'Renata de Andrade sentada em um banco de musculação, tirando uma foto no espelho da academia',
  },
  goals: {
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=75',
    alt: 'Mão segurando um haltere em um suporte de academia',
  },
};

export const credentials = [
  { value: '7 anos', label: 'de experiência profissional' },
  { value: '13 anos', label: 'de vivência pessoal com a musculação' },
  { value: 'UNIP', label: 'Bacharel em Educação Física' },
];

export const benefits = [
  {
    title: 'Treinamento individualizado',
    text: 'Cada planejamento parte da sua história, dos seus objetivos e do seu momento atual.',
  },
  {
    title: 'Adaptado à sua rotina e aos seus equipamentos',
    text: 'Academia completa, condomínio ou casa: o treino considera o tempo e os recursos que você realmente tem.',
  },
  {
    title: 'Técnica aliada à experiência prática',
    text: 'Formação em Educação Física somada a anos de prática dentro e fora da sala de musculação.',
  },
  {
    title: 'Acompanhamento e suporte pelo WhatsApp',
    text: 'Um canal direto para tirar dúvidas e manter a orientação durante o processo.',
  },
  {
    title: 'Ajustes conforme o plano contratado',
    text: 'O treino evolui junto com você, com revisões de acordo com as condições do seu plano.',
  },
  {
    title: 'Atenção às necessidades individuais',
    text: 'Limitações, preferências e histórico são levados em conta em cada decisão do planejamento.',
  },
];

export const steps = [
  {
    title: 'Avaliação inicial e anamnese',
    text: 'Um questionário detalhado para entender sua rotina, seus objetivos e seu histórico.',
  },
  {
    title: 'Planejamento personalizado',
    text: 'Seu plano de treino é montado a partir das informações da avaliação.',
  },
  {
    title: 'Entrega pelo MFIT Personal',
    text: 'Você recebe o treino no aplicativo, com os exercícios e as orientações organizados.',
  },
  {
    title: 'Acompanhamento pelo WhatsApp',
    text: 'Suporte para dúvidas durante a execução do planejamento.',
  },
  {
    title: 'Ajustes e progressão',
    text: 'O treino é ajustado conforme a sua evolução e as condições do plano.',
  },
];

// Ícones da biblioteca Lucide (https://lucide.dev/icons).
export const goals = [
  { label: 'Emagrecimento e composição corporal', icon: PersonStanding },
  { label: 'Hipertrofia e definição muscular', icon: Dumbbell },
  { label: 'Força e condicionamento físico', icon: BicepsFlexed },
  { label: 'Saúde e qualidade de vida', icon: HeartPulse },
  { label: 'Autonomia e consistência', icon: CalendarCheck },
];

// Itens comuns aos dois planos, conforme a apresentação da consultoria.
export const planIncludes = [
  'Treino personalizado para o seu objetivo e a sua rotina',
  'Planejamento adaptado ao seu nível e aos equipamentos disponíveis',
  'Treinos pelo aplicativo MFIT Personal',
  'Acompanhamento e suporte pelo WhatsApp',
];

export const plans = [
  {
    id: 'monthly',
    name: 'Mensal',
    price: '150',
    period: 'por mês',
    cta: 'Tenho interesse no plano mensal',
  },
  {
    id: 'quarterly',
    name: 'Trimestral',
    price: '400',
    period: 'por três meses',
    cta: 'Tenho interesse no plano trimestral',
  },
];
