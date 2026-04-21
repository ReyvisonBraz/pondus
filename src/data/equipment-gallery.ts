/**
 * ═══════════════════════════════════════════════════════════════
 *  GALERIA DE EQUIPAMENTOS EM OPERAÇÃO
 * ═══════════════════════════════════════════════════════════════
 *
 *  Para ADICIONAR uma nova imagem:
 *  1. Coloque a foto na pasta: public/assets/images/equipamentos-operacao/
 *  2. Adicione um novo objeto no array abaixo seguindo o modelo
 *
 *  Para ALTERAR uma imagem:
 *  1. Substitua o arquivo na pasta ou altere o campo "src" abaixo
 *
 *  Para REMOVER uma imagem:
 *  1. Remova o objeto correspondente do array abaixo
 *
 *  DICA: A primeira imagem do array será exibida em destaque (maior).
 *        As 2 seguintes ficam empilhadas ao lado. O restante fica
 *        em uma fileira de 4 colunas abaixo.
 *
 *  Campos:
 *  - src:       caminho da imagem (relativo à pasta public/)
 *  - category:  nome do equipamento (ex: "Contadora de Sementes")
 *  - location:  onde está instalado ou contexto (ex: "Linha de produção")
 * ═══════════════════════════════════════════════════════════════
 */

export interface EquipmentImage {
  /** Caminho da imagem (relativo à pasta public/) */
  src: string;
  /** Nome do equipamento */
  category: string;
  /** Contexto ou local de instalação */
  location: string;
}

export const equipmentImages: EquipmentImage[] = [
  // ─── CONTADORA DE SEMENTES ──────────────────────────────────
  {
    src: "/assets/images/equipamentos-operacao/contadora-sementes-01.jpeg",
    category: "Contadora de Sementes",
    location: "Linha de produção",
  },
  {
    src: "/assets/images/equipamentos-operacao/contadora-sementes-02.jpeg",
    category: "Contadora de Sementes",
    location: "Integração industrial",
  },
  {
    src: "/assets/images/equipamentos-operacao/contadora-sementes-03.jpeg",
    category: "Contadora de Sementes",
    location: "Operação contínua",
  },

  // ─── ENSACADEIRA AUTOMÁTICA ──────────────────────────────────
  {
    src: "/assets/images/equipamentos-operacao/ensacadeira-automatica-01.jpeg",
    category: "Ensacadeira Automática",
    location: "Planta industrial",
  },

  // ─── BALANÇA DE FLUXO ────────────────────────────────────────
  {
    src: "/assets/images/equipamentos-operacao/balanca-fluxo-01.jpeg",
    category: "Balança de Fluxo",
    location: "Expedição de grãos",
  },

  // ─── SISTEMA DE EXPEDIÇÃO ────────────────────────────────────
  {
    src: "/assets/images/equipamentos-operacao/sistema-expedicao-01.jpeg",
    category: "Sistema de Expedição",
    location: "Unidade de armazenamento",
  },

  // ─── ADICIONE NOVOS EQUIPAMENTOS AQUI ────────────────────────
  // {
  //   src: "/assets/images/equipamentos-operacao/nome-do-arquivo.jpeg",
  //   category: "Nome do Equipamento",
  //   location: "Onde está instalado",
  // },
];
