import { ReactNode } from 'react';

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface TransformationItem {
  id: string;
  beforeImg: string;
  afterImg: string; // Ideally different, but for demo we manipulate same source or use similar
  category: string;
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface NicheCardProps {
  title: string;
  image: string;
  description: string;
}