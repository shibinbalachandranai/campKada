export interface Product {
  slug: string;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  images: string[];
  category: string;
  tags?: string[];
}

export interface Rental {
  slug: string;
  name: string;
  description: string;
  pricePerDay: number;
  available: boolean;
  images: string[];
  category: string;
  tags?: string[];
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  images: string[];
  highlights?: string[];
}

// TODO Phase 2: split by domain (Product, Order, Booking)
