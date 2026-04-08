# Guia de Gerenciamento do Blog - Pondus

Este documento explica como adicionar novos posts ao blog do site Pondus.

---

## Estrutura do Sistema

O blog utiliza um sistema de dados externos para facilitar a adição de novos conteúdos:

```
pondus/
├── public/
│   └── assets/
│       └── blog/              ← Pasta para imagens dos posts
├── src/
│   ├── data/
│   │   └── blog-posts.ts      ← Arquivo de dados dos posts
│   └── app/
│       └── components/
│           └── Blog.tsx       ← Componente que renderiza o blog
```

---

## Como Adicionar um Novo Post

### Passo 1: Adicionar a Imagem

1. Copie a imagem que deseja usar para o post
2. Cole na pasta: `public/assets/blog/`
3. Formatos recomendados: `.webp` ou `.jpg`
4. Nome sugerido: use nomes descritivos em minúsculas, ex: `otimizacao-industrial.webp`

### Passo 2: Editar o Arquivo de Dados

Abra o arquivo `src/data/blog-posts.ts` e adicione um novo objeto ao array:

```typescript
{
  id: 4,                              // Número único (incrementar o último id)
  title: "Título do Seu Post",        // Título principal
  excerpt: "Resumo breve do post...", // Resumo de 1-2 linhas
  image: "/assets/blog/sua-imagem.webp",  // Caminho da imagem
  date: "20 Mar 2026",                // Data no formato "DD MMM AAAA"
  readTime: "5 min"                   // Tempo estimado de leitura
}
```

### Passo 3: Verificar no Site

O post aparecerá automaticamente na página do blog na ordem cronológica reversa (mais recente primeiro).

---

## Exemplo Completo

### Antes de editar (blog-posts.ts):

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Post Existente 1",
    excerpt: "Descrição do post...",
    image: "/assets/blog/imagem1.webp",
    date: "15 Mar 2026",
    readTime: "5 min"
  }
];
```

### Depois de adicionar um novo post:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 2,
    title: "Como Melhorar a Produtividade Industrial",
    excerpt: "Descubra técnicas e equipamentos que podem aumentar sua produção",
    image: "/assets/blog/produtividade-industrial.webp",
    date: "20 Mar 2026",
    readTime: "8 min"
  },
  {
    id: 1,
    title: "Post Existente 1",
    excerpt: "Descrição do post...",
    image: "/assets/blog/imagem1.webp",
    date: "15 Mar 2026",
    readTime: "5 min"
  }
];
```

---

## Campos Disponíveis

| Campo | Tipo | Descrição | Exemplo |
|-------|------|-----------|---------|
| `id` | número | Identificador único (não pode repeat) | 1, 2, 3... |
| `title` | texto | Título do post | "Otimização de Processos" |
| `excerpt` | texto | Resumo curto (1-2 linhas) | "Descrição breve..." |
| `image` | texto | Caminho da imagem em `public/assets/blog/` | "/assets/blog/nome.webp" |
| `date` | texto | Data de publicação | "15 Mar 2026" |
| `readTime` | texto | Tempo de leitura | "5 min" |

---

## Dicas

1. **Imagens**: Use imagens com resolução mínima de 800x600 pixels
2. **Títulos**: Keep até 60 caracteres para melhor visualização
3. **Resumos**: Máximo 150 caracteres por excerpt
4. **Ordem**: Os posts mais recentes aparecem primeiro automaticamente

---

## Troubleshooting

**A imagem não aparece?**
- Verifique se o arquivo está em `public/assets/blog/`
- Confirme que o caminho está correto (começa com `/assets/...`)
- Verifique o console do navegador para erros

**O post não aparece?**
- Confirme que o `id` é único (não existe outro com o mesmo número)
- Verifique se o arquivo `blog-posts.ts` não tem erros de sintaxe

---

## Arquivo Original (Backup)

O arquivo original com dados de exemplo está disponível em:
`src/data/blog-posts.ts`