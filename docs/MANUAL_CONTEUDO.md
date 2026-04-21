# Pondus - Manual de Gerenciamento de Conteúdo

Este documento serve como guia definitivo para alterar conteúdos dinâmicos do site da Pondus (Produtos, Imagens, Operações em Campo, Blog e Clientes/Parceiros) sem precisar mexer na estrutura complexa do código.

Toda a parte de "banco de dados" do site está localizada na pasta `src/data/`.

---

## 1. Como Inserir e Editar Produtos

O site possui duas "tabelas" (arquivos de dados) que controlam os produtos:
- `src/data/products.ts`: Controla a listagem e os resumos exibidos nos cards.
- `src/data/products-detail.ts`: Controla as páginas internas de detalhes de cada produto.

### Adicionar um Novo Produto

**1º Passo: Salvar as imagens**
1. Salve as imagens do novo produto no formato `.jpg` ou `.webp`.
2. Crie uma pasta para ele em: `public/assets/images/[nome-do-produto]/` (Ex: `public/assets/images/esteira-transportadora/`).
3. Nomeie os arquivos com um padrão (ex: `esteira-01.jpg`, `esteira-02.jpg`).

**2º Passo: Atualizar `products.ts`**
Abra o arquivo `src/data/products.ts` e insira o novo modelo no array `products`:
```typescript
{
  id: "esteira-transportadora",     // Mesmo nome da URL (usar traços)
  iconName: "TrendingUp",           // Ícone da biblioteca Lucide React
  name: "Esteira Transportadora",
  shortDescription: "Resumo para os cards da página inicial.",
  description: "Descrição maior.",
  color: "#f5a623",                 // #1a3a5c (Azul) ou #f5a623 (Laranja)
  image: "/assets/images/esteira-transportadora/esteira-01.jpg",
  category: "ensacadeira"           // 'balanca', 'ensacadeira', ou 'contadora'
}
```

**3º Passo: Atualizar `products-detail.ts`**
Abra o arquivo `src/data/products-detail.ts` e insira as informações detalhadas para a página do produto:
```typescript
{
  id: "esteira-transportadora",
  name: "Esteira Transportadora",
  subtitle: "Série ET",
  description: "Descrição completa e detalhada que aparece na página do produto.",
  color: "#f5a623",
  image: "/assets/images/esteira-transportadora/esteira-01.jpg", // Foto Principal
  images: [ // Galeria (Carrossel)
    "/assets/images/esteira-transportadora/esteira-01.jpg",
    "/assets/images/esteira-transportadora/esteira-02.jpg"
  ],
  specs: [],
  features: [],
  comunicacao: {
    disponivel: ["Modbus TCP"],
    possibilidade: ["OPC UA"]
  },
  relatedProducts: ["big-bag", "balanca-fluxo-pfd"], // IDs de outros produtos para recomendar
  relatedImage: "/assets/images/esteira-transportadora/esteira-01.jpg"
}
```

---

## 2. Como Atualizar "Equipamentos em Operação"

A galeria "Em campo" que mostra equipamentos em uso (na seção Soluções do site) é controlada por um único arquivo.

**1. Adicionar imagens:**
Coloque a foto (de preferência formato `.jpg` ou `.webp` horizontal/landscape) na pasta:
`public/assets/images/equipamentos-operacao/`

**2. Adicionar ao site:**
Abra `src/data/equipment-gallery.ts` e adicione no array `equipmentImages`:
```typescript
{
  src: "/assets/images/equipamentos-operacao/nome-da-foto.jpg",
  category: "Balança de Fluxo",     // Nome do equipamento
  location: "Indústria X - Paraná", // Contexto/Local
}
```
*Dica:* O layout do site se ajusta automaticamente para formar o mosaico de imagens dependendo de quantas fotos você adicionar nesse arquivo! Não é necessário alterar nenhum código visual.

---

## 3. Como Adicionar ou Editar Posts do Blog

O Blog também lê seus dados de um arquivo local.

**1. Salvar a imagem da capa do post:**
Salve a imagem do artigo em: `public/assets/blog/`. Formato `.webp` é o ideal para a web.

**2. Criar o post:**
Abra `src/data/blog-posts.ts` e adicione a nova notícia no início (topo) da lista `blogPosts`:
```typescript
{
  id: 15,                               // Crie um ID único (ex: último id + 1)
  title: "A Importância da Precisão...",// Título 
  excerpt: "Resumo de 2 linhas sobre o conteúdo...",
  image: "/assets/blog/novo-post.webp", // O caminho da imagem salva
  date: "25 Abr 2026",                  // Data formatada à mão
  readTime: "4 min"                     // Estimativa temporal
}
```
*(Nota: no momento, o blog é apenas uma vitrine de artigos externos, portanto ele renderiza os cards como preview)*.

---

## 4. Como Adicionar Clientes e Parceiros

Os clientes e parceiros (Carrosséis de logos) são editados em um local um pouco diferente.

Abra o arquivo: `src/app/components/Clients.tsx`

**Para Clientes (Carrossel Contínuo):**
Localize o array `const clients = [...]`.
1. Coloque a logo do cliente em `public/assets/images/clientes/` (Use fundos brancos ou PNGs).
2. Adicione ao array:
```typescript
{ id: 99, name: "Novo Cliente", logo: "/assets/images/clientes/novo-cliente.png" }
```

**Para Parceiros (Grid de 4 logos Grandes):**
Localize o array `const partners = [...]`.
1. Coloque a logo do parceiro em `public/assets/images/parceiros/`.
2. Modifique o array para atualizar quem são os parceiros principais.

---

## Checklist de Cuidados e Boas Práticas

1. **Nunca use imagens gigantes**: Imagens de 5MB ou mais lentificam muito o site. Antes de subir, converta para `JPG` (comprimido) ou `WebP`. O compilador (Vite) agora está configurado para tentar apertar essas imagens durante a construção final, mas imagens com menos de 300KB de fábrica são excelentes.
2. **Cuidado com as Extensões**: Se você salvou a imagem como `.jpeg`, mas escreveu `.jpg` (ou vice-versa) no código em typescript, a imagem quebrará na compilação.
3. **Cuidado com Vígulas no JSON/TS**: Ao adicionar novos objetos, certifique-se de que os itens anteriores terminam com uma vírgula `,`.
