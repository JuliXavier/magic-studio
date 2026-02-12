import { Zap, Download, Smartphone, Camera, Utensils, ShoppingBag, Shirt, Brain, Target, Clapperboard, Wine, Gem } from 'lucide-react';
import { PricingPlan } from './types';

export const TRANSFORMATIONS = [
  {
    id: 'food',
    label: 'Gastronomia',
    // Certifique-se de salvar estas imagens em public/assets/
    before: '/assets/gastronomia-antes.jpg', 
    after: '/assets/gastronomia-depois.jpg', 
  },
  {
    id: 'fashion',
    label: 'Moda',
    before: '/assets/moda-antes.jpg', 
    after: '/assets/moda-depois.jpg',
  },
  {
    id: 'beauty',
    label: 'Cosméticos',
    before: '/assets/cosmeticos-antes.jpg', 
    after: '/assets/cosmeticos-depois.jpg',
  }
];

export const STEPS = [
  {
    icon: <Camera size={32} className="text-cyan-400" />,
    title: "Você envia a foto",
    description: "Envie a foto do seu produto ou serviço. Não precisa ser profissional, apenas nítida."
  },
  {
    icon: <Brain size={32} className="text-cyan-400" />,
    title: "IA + Refinamento Manual",
    description: "Aplicamos engenharia visual estratégica para reconstruir luz, textura e cenário."
  },
  {
    icon: <Download size={32} className="text-cyan-400" />,
    title: "Receba pronta para vender",
    description: "Você recebe a imagem em alta resolução, pronta para uso digital ou impresso."
  }
];

export const NICHES = [
  {
    title: "Restaurantes",
    icon: <Utensils className="mb-4 text-cyan-400" size={32} />,
    description: "Appetite appeal máximo. Correção de cor e suculência.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Moda",
    icon: <Shirt className="mb-4 text-pink-400" size={32} />,
    description: "Caimento perfeito e aplicação em modelos realistas.",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Bebidas",
    icon: <Wine className="mb-4 text-purple-400" size={32} />,
    description: "Reflexos cristalinos, 'suor' na garrafa e ambientação premium.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "E-commerce",
    icon: <ShoppingBag className="mb-4 text-blue-400" size={32} />,
    description: "Fundo infinito puro ou cenários contextualizados.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Cosméticos",
    icon: <Gem className="mb-4 text-rose-400" size={32} />,
    description: "Texturas de pele e produto com nitidez cinematográfica.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Criadores",
    icon: <Clapperboard className="mb-4 text-yellow-400" size={32} />,
    description: "Thumbnails e fotos de feed com qualidade de estúdio.",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800&auto=format&fit=crop"
  }
];

export const PRICING: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'R$ 49',
    description: 'Para testar e aprovar.',
    features: [
      '10 Fotos transformadas',
      'Resolução HD',
      'Entrega em 24h',
      'Suporte via E-mail'
    ],
    recommended: false
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'R$ 129',
    description: 'O favorito de criadores.',
    features: [
      '50 Fotos transformadas',
      'Resolução 4K Ultra',
      'Correção de pele avançada',
      'Entrega em 12h',
      'Suporte Prioritário'
    ],
    recommended: true
  },
  {
    id: 'catalog',
    name: 'Catálogo',
    price: 'R$ 399',
    description: 'Para lojas e agências.',
    features: [
      '200 Fotos transformadas',
      'Resolução Máxima (RAW)',
      'Ajustes de IA personalizados',
      'API Access (Beta)',
      'Gerente de Conta'
    ],
    recommended: false
  }
];