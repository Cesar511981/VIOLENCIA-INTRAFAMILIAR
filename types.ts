
export interface ResourceLink {
  title: string;
  description: string;
  contact?: string;
}

export interface LawArticle {
  number: string;
  title: string;
  description: string;
}

export interface ViolenceType {
  title: string;
  description: string;
  sanction?: string;
  examples?: string[];
  icon: string;
}
