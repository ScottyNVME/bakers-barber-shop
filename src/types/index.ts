export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessHours {
  [day: string]: string;
}
