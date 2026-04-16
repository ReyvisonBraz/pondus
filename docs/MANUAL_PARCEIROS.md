# Manual - Imagens de Produtos e Parceiros

## Estrutura de Pastas

```
public/assets/images/
├── parceiros/              # Logos dos parceiros (4 slots)
├── clientes/              # Logos dos clientes (carrossel)
├── balanca-fluxo-pfd/     # Imagens da Balança de Fluxo
├── balanca-expedicao-ppcd/ # Imagens da Balança de Expedição
├── ensacadeira-gravimetrica-pevpd/  # Imagens da Ensacadeira Gravimétrica
├── ensacadeira-sopro-pevps/         # Imagens da Ensacadeira de Sopro
├── ensacadeira-racao-pevprd/        # Imagens da Ensacadeira para Ração
├── big-bag/               # Imagens das Ensacadeiras de Big-Bag
├── big-bag-basica-pebe/   # Imagens da Big-Bag Básica
├── big-bag-automatica-pebbag/  # Imagens da Big-Bag Automática
└── contadora-sementes-pcsl/    # Imagens da Contadora de Sementes
```

---

## Como Adicionar Imagens de Produtos

### Passo 1: Salvar as Imagens
Coloque as imagens na pasta correspondente do produto:
- `public/assets/images/[pasta-produto]/[nome-imagem].jpg`

### Passo 2: Renomear Standard
Use o padrão de nomenclatura: `{sigla}-{numero}.{ext}`

| Produto | Sigla | Exemplo |
|---------|-------|---------|
| Balança de Fluxo | pfd | `pfd-01.png`, `pfd-02.png` |
| Balança de Expedição | ppcd | `ppcd-01.jpg`, `ppcd-02.jpg` |
| Ensacadeira Gravimétrica | pevpd | `pevpd-01.jpg`, `pevpd-02.jpeg` |
| Ensacadeira de Sopro | pevps | `pevps-01.jpg`, `pevps-02.jpg` |
| Ensacadeira para Ração | pevprd | `pevprd-01.jpeg` |
| Big-Bag | bigbag | `bigbag-01.jpg` ... `bigbag-06.jpg` |
| Big-Bag Básica | pebe | `pebe-01.jpeg` |
| Big-Bag Automática | pebbag | `pebbag-01.jpg` |
| Contadora de Sementes | pcsl | `pcsl-01.jpg` ... `pcsl-04.jpg` |

### Passo 3: Atualizar `src/data/products-detail.ts`

Adicione todas as imagens no array `images`:

```tsx
{
  id: "contadora-sementes-pcsl",
  name: "Contadora de Sementes",
  subtitle: "PCSL-22000",
  // ... outros campos
  image: "/assets/images/contadora-sementes-pcsl/pcsl-01.jpg",
  images: [
    "/assets/images/contadora-sementes-pcsl/pcsl-01.jpg",
    "/assets/images/contadora-sementes-pcsl/pcsl-02.jpg",
    "/assets/images/contadora-sementes-pcsl/pcsl-03.jpg",
    "/assets/images/contadora-sementes-pcsl/pcsl-04.jpg"
  ],
  // ...
}
```

### Passo 4: Também atualizar `src/data/products.ts`

Mantenha `image` com a primeira imagem (para listagens):

```tsx
{
  id: "contadora-sementes-pcsl",
  // ...
  image: "/assets/images/contadora-sementes-pcsl/pcsl-01.jpg",
  // ...
}
```

---

## Galeria na Página de Detalhes

A página de detalhes do produto (`ProductDetailPage.tsx`) exibe:
- Imagem principal com navegação (setas) quando há múltiplas imagens
- Thumbnails clicáveis abaixo da imagem principal
- Indicador "X de Y" quando há múltiplas imagens

---

## Parceiros (Grid)

Edite `src/app/components/Clients.tsx`:

```tsx
const partners: Partner[] = [
  { 
    id: 1, 
    name: "Nome do Parceiro", 
    logo: "/assets/images/parceiros/nome-arquivo.png", 
    websiteUrl: "https://www.exemplo.com.br" 
  },
  // Máximo de 4 parceiros
];
```

---

## Clientes (Carrossel)

Edite `src/app/components/Clients.tsx`:

```tsx
const clients: Client[] = [
  { id: 1, name: "Nome do Cliente", logo: "/assets/images/clientes/nome-arquivo.jpg" },
  // Quantos clientes quiser
];
```

---

## Checklist de Manutenção

- [ ] Salvar imagem na pasta correta
- [ ] Usar nomenclatura padrão
- [ ] Atualizar `products-detail.ts` com array `images` completo
- [ ] Atualizar `products.ts` com `image` (primeira imagem)
- [ ] Testar galeria na página de detalhes
