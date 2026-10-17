export type PromptCategory =
  | "all"
  | "poetry"
  | "short-stories"
  | "memory-and-time"
  | "identity"
  | "relationships"
  | "the-ordinary"
  | "experimental";

export interface Prompt {
  id: string;
  number: number;
  title: string;
  category: PromptCategory;
  categoryLabel: string;
  text: string;
  spark: string;
  suggestedForm: string;
  featured?: boolean;
}

export type PieceType = "poetry" | "prose";

export interface Piece {
  slug: string;
  title: string;
  author: string;
  authorAge: string;
  type: PieceType;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string;
  promptSource?: string;
  featured?: boolean;
  editorNote?: string;
  isSample: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subheading: string;
  description: string;
  url: string;
  instagramUrl: string;
  instagramHandle: string;
  googleFormEmbedUrl: string;
  googleFormDirectUrl: string;
  contactEmail: string;
  casContext: string;
  targetAudience: string;
  editorInChief: string;
  navLinks: {
    label: string;
    href: string;
  }[];
}
