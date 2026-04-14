# Guia de Gerenciamento de Produtos - Pondus

Este documento explica como adicionar e editar produtos no site Pondus.

---

## Estrutura do Sistema

O site utiliza dois arquivos de dados para os produtos:

```
pondus/
├── public/
│   └── assets/
│       └── images/              ← Pasta para imagens dos produtos
├── src/
│   ├── data/
│   │   ├── products.ts         ← Dados básicos dos produtos (listagem)
│   │   └── products-detail.ts  ← Dados detalhados (página de detalhes)
│   └── app/
│       ├── components/
│       │   └── Products.tsx    ← Componente que renderiza a listagem
│       └── pages/
│           └── ProductDetailPage.tsx  ← Página de detalhes do produto
```

---

## Arquivos de Dados

### 1. `src/data/products.ts` - Listagem

Contém os dados básicos para a listagem na página de soluções.

```typescript
export interface Product {
  id: string;
  iconName: string;       // Nome do ícone (string)
  name: string;           // Nome completo do produto
  shortDescription: string;  // Descrição breve para cards (1-2 linhas)
  description: string;    // Descrição completa (página de detalhes)
  color: string;          // Cor em hex (ex: "#1a3a5c" ou "#f5a623")
  image: string;          // URL da imagem
  category: 'balanca' | 'ensacadeira' | 'contadora';  // Categoria do produto
}
```

### 2. `src/data/products-detail.ts` - Detalhes

Contém os dados detalhados para a página de cada produto.

```typescript
export interface ProductDetail {
  id: string;
  name: string;              // Nome do produto
  subtitle: string;          // Subtítulo/Código (ex: "PFD")
  description: string;       // Descrição completa
  color: string;             // Cor em hex
  image: string;             // URL da imagem principal
  specs: ProductSpec[];       // Especificações técnicas (manter vazio [])
  features: ProductFeature[]; // Características (manter vazio [])
  comunicacao: ProductComunicacao;  // Comunicação industrial
  relatedProducts: string[]; // IDs dos produtos relacionados
  relatedImage: string;      // URL da imagem para seção de relacionados
}

export interface ProductSpec {
  iconName: string;  // Nome do ícone
  label: string;     // Label da especificação
  value: string;     // Valor da especificação
}

export interface ProductFeature {
  title: string;       // Título da característica
  description: string; // Descrição da característica
}

export interface ProductComunicacao {
  disponivel: string[];     // Protocolos disponíveis
  possibilidade: string[];  // Protocolos disponíveis sob consulta
}
```

---

## Ícones Disponíveis

Os ícones são baseados na biblioteca **Lucide React**. Use o nome do ícone como string:

| iconName | Descrição |
|----------|-----------|
| `PackageCheck` | Pacote com check (embalagem verificada) |
| `Package` | Pacote genérico |
| `Boxes` | Múltiplas caixas (big-bags) |
| `Scale` | Balança (pesagem) |
| `Gauge` | Medidor (fluxo) |
| `TrendingUp` | Tendência de alta (capacidade) |
| `AlertCircle` | Círculo de alerta (precisão) |
| `Zap` | Raio (velocidade/automação) |
| `CheckCircle` | Check em círculo (confirmação) |

---

## Categorias de Produtos

Os produtos são agrupados automaticamente nas páginas:

| Categoria | Descrição | Produtos típicos |
|-----------|-----------|-----------------|
| `balanca` | Balanças de fluxo e expedição | Balança de Fluxo, Balança de Expedição |
| `ensacadeira` | Equipamentos de ensaque | Gravimétrica, Sopro, Ração, Big-Bag |
| `contadora` | Equipamentos de contagem | Contadora de Sementes |

Na homepage, as ensacadeiras aparecem em uma seção separada "Nossas Ensacadeiras".

---

## Como Adicionar um Novo Produto

### Passo 1: Adicionar a Imagem

1. Copie a imagem do produto
2. Cole na pasta: `public/assets/images/`
3. Formatos recomendados: `.webp` ou `.jpg`
4. Nome sugerido: use o ID do produto, ex: `meu-produto.webp`

#### Medidas Recomendadas para Imagens

| Campo | Uso | Resolução Recomendada | Proporção | Observações |
|-------|-----|---------------------|-----------|-------------|
| `image` (listagem) | Cards na página de soluções | 800 x 600 px (mín. 400 x 300) | 4:3 | Imagem retangular horizontal |
| `image` (detalhes) | Imagem principal na página do produto | 800 x 600 px (mín. 400 x 300) | 4:3 | Mesma imagem do card |
| `relatedImage` | Miniaturas em "Produtos Relacionados" | 400 x 300 px (mín. 200 x 150) | 4:3 | Pode ser a mesma imagem redimensionada |

**Dicas para imagens:**
- Use a mesma imagem para `image` e `relatedImage` (redimensione para `relatedImage`)
- Mantenha fundo neutro ou transparente para melhor adaptação ao design
- Fotos de equipamento devem mostrar o produto de frente ou ângulo de 45°
- Formato `.webp` é recomendado para melhor compressão

### Passo 2: Editar `src/data/products.ts`

Adicione um novo objeto ao array `products`:

```typescript
export const products: Product[] = [
  // ... produtos existentes ...

  {
    id: "meu-produto",              // ID único (usado na URL)
    iconName: "PackageCheck",       // Ícone da listagem
    name: "Meu Novo Produto",       // Nome completo
    shortDescription: "Descrição breve do produto...",  // Resumo curto para cards
    description: "Descrição completa do produto aqui...",  // Descrição completa
    color: "#1a3a5c",              // Cor (azul escuro) ou "#f5a623" (laranja)
    image: "/assets/images/meu-produto/",  // Caminho da imagem (pasta)
    category: "ensacadeira"        // Categoria: 'balanca', 'ensacadeira' ou 'contadora'
  }
];
```

### Passo 3: Editar `src/data/products-detail.ts`

Adicione um novo objeto ao array `productsDetail`:

```typescript
export const productsDetail: ProductDetail[] = [
  // ... produtos existentes ...

  {
    id: "meu-produto",
    name: "Meu Novo Produto",
    subtitle: "MNP 1000",
    description: "Descrição completa do produto aqui...",
    color: "#1a3a5c",
    image: "/assets/images/meu-produto/",
    specs: [],  // Manter vazio se não usar
    features: [],  // Manter vazio se não usar
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["balanca-fluxo-pfd", "ensacadeira-gravimetrica-pevpd"],  // IDs de produtos relacionados
    relatedImage: "/assets/images/meu-produto/"
  }
];
```

### Passo 4: Verificar no Site

O produto aparecerá automaticamente:
- Na página de soluções (`/solucoes`)
- Na página de detalhes (`/produto/{id}`)

---

## Exemplo Completo

### Adicionando o produto "Ensacadeira Inteligente EI 3000":

**products.ts:**
```typescript
{
  id: "ensacadeira-inteligente-ei",
  iconName: "Boxes",
  name: "Ensacadeira Inteligente EI 3000",
  shortDescription: "Automação inteligente para ensaque de precisão.",
  description: "Sistema de ensaque automatizado com inteligência artificial...",
  color: "#f5a623",
  image: "/assets/images/ensacadeira-inteligente-ei/",
  category: "ensacadeira"
}
```

**products-detail.ts:**
```typescript
{
  id: "ensacadeira-inteligente-ei",
  name: "Ensacadeira Inteligente",
  subtitle: "EI 3000",
  description: "Sistema de ensaque automatizado com inteligência artificial para máxima precisão e flexibilidade.",
  color: "#f5a623",
  image: "/assets/images/ensacadeira-inteligente-ei/",
  specs: [],
  features: [],
  comunicacao: {
    disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
    possibilidade: ["OPC UA", "CANopen", "MQTT"]
  },
  relatedProducts: ["big-bag-automatica-pebbag", "ensacadeira-gravimetrica-pevpd"],
  relatedImage: "/assets/images/ensacadeira-inteligente-ei/"
}
```

---

## Como Editar um Produto Existente

### Alterando dados básicos (listagem):

Edite o objeto em `src/data/products.ts` com o ID correspondente.

### Alterando dados detalhados:

Edite o objeto em `src/data/products-detail.ts` com o ID correspondente.

### Alterando imagem:

1. Substitua o arquivo na pasta `public/assets/images/`
2. Mantenha o mesmo nome do arquivo para não precisar alterar os caminhos

---

## Cores Disponíveis

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul escuro | `#1a3a5c` | Texto principal, fundos escuros |
| Laranja | `#f5a623` | Destaques, CTAs, elementos de atenção |

---

## Troubleshooting

**O produto não aparece na listagem?**
- Verifique se o `id` em `products.ts` está correto
- Confirme que o arquivo `products.ts` não tem erros de sintaxe

**O produto não aparece na página de detalhes?**
- Verifique se o `id` em `products-detail.ts` está correto
- O `id` deve ser igual ao usado em `products.ts`

**A imagem não aparece?**
- Verifique se o arquivo está em `public/assets/images/`
- Confirme que o caminho começa com `/assets/images/`
- Verifique o console do navegador para erros
- Verifique se a resolução da imagem não é muito pequena (mín. 400x300)

**A imagem está distorcida?**
- Mantenha a proporção 4:3 (800x600 px recomendado)
- Não estique ou comprima a imagem

**Ícone não aparece?**
- Verifique se o `iconName` está correto (respeite maiúsculas)
- Consulte a tabela de ícones disponíveis acima

---

## Dicas

1. **IDs únicos**: Cada produto deve ter um ID único (sem espaços, use híphens)
2. **Ordem**: A ordem no array define a ordem na listagem (exceto ensacadeiras que vão para seção separada)
3. **Cores alternadas**: Use `#1a3a5c` e `#f5a623` alternadamente para os produtos
4. **Imagens**: Siga as medidas recomendadas na tabela acima
5. **URLs**: Para imagens locais, use o caminho a partir de `public/` (ex: `/assets/images/produto/`)
6. **Mesma imagem**: Pode usar a mesma foto para `image` e `relatedImage` - apenas redimensione
7. **shortDescription**: Máximo 100 caracteres para melhor exibição nos cards
8. **Categoria**: Define onde o produto aparece - `ensacadeira` vai para seção especial na homepage
