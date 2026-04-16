export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Otimização de Processos Industriais",
    excerpt: "Descubra como aplicar automação para ganhar produtividade",
    image: "/assets/blog/teste.jpeg",
    date: "15 Mar 2026",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Controle de Qualidade em Sementes",
    excerpt: "Técnicas e equipamentos para padronização de lotes",
    image: "/assets/blog/teste.jpeg",
    date: "10 Mar 2026",
    readTime: "7 min"
  },
  {
    id: 3,
    title: "Integração de Sistemas Industriais",
    excerpt: "Conecte seus equipamentos com protocolos modernos",
    image: "/assets/blog/teste.jpeg",
    date: "5 Mar 2026",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "TESTE TESTE TESTE",
    excerpt: "TESTEEEEEEEEEEEEEEEEEEEEEEEEE",
    image: "/assets/blog/teste.jpeg",
    date: "XXXXXXXXXX",
    readTime: "UUUUUUUUUUUU"
  },
  {
    id: 5,
    title: "ZXXXXXXXX",
    excerpt: "XXXXXXXXXXXX",
    image: "/assets/blog/teste.jpeg",
    date: "XXXXXXXXXX",
    readTime: "UUUUUUUUUUUU"
  }
];
