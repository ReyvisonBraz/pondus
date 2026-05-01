export interface ProductSpec {
  iconName: string;
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductComunicacao {
  disponivel: string[];
  possibilidade: string[];
}

export interface ProductDetail {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
  images: string[];
  specs: ProductSpec[];
  features: ProductFeature[];
  comunicacao: ProductComunicacao;
  relatedProducts: string[];
  relatedImage: string;
}

export const productsDetail: ProductDetail[] = [
  {
    id: "balanca-fluxo-pfd",
    name: "Balança de Fluxo",
    subtitle: "PFD",
    description: "A balança de fluxo é utilizada para medir com precisão o peso de sementes e outros produtos a granel, como grãos, pós e rações, em processos de produção e expedição.\n\nSeu funcionamento ocorre por bateladas, realizando ciclos contínuos de enchimento, pesagem e descarga da caçamba, garantindo controle confiável do fluxo de material.\n\nAs balanças de fluxo Pondus se destacam pelo sistema com duas caçambas de pesagem operando em conjunto. O material é direcionado alternadamente entre elas, proporcionando um fluxo mais constante, maior produtividade e um equipamento mais compacto em comparação aos modelos tradicionais.",
    color: "#1a3a5c",
    image: "/assets/images/balanca-fluxo-pfd/pfd-02.webp",
    images: [
      "/assets/images/balanca-fluxo-pfd/pfd-02.webp",
      "/assets/images/balanca-fluxo-pfd/pfd-03.webp",
      "/assets/images/balanca-fluxo-pfd/pfd-04.webp",
      "/assets/images/balanca-fluxo-pfd/pfd-05.webp",
      "/assets/images/balanca-fluxo-pfd/pfd-06.webp"
    ],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["balanca-expedicao-ppcd", "ensacadeira-gravimetrica-pevpd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/balanca-fluxo-pfd/pfd-02.webp"
  },
  {
    id: "balanca-expedicao-ppcd",
    name: "Balança de Expedição",
    subtitle: "PPCD",
    description: "A balança de expedição é um tipo de balança de fluxo que permite programar a quantidade exata de produto a granel a ser carregada em caminhões, vagões ou outros meios de transporte, sendo amplamente utilizada para agilizar processos de carregamento e expedição.\n\nO equipamento garante precisão no peso final, evitando retrabalho na balança rodoviária, como retorno para complemento de carga ou retirada de excesso, aumentando a eficiência operacional.\n\nA balança de expedição Pondus utiliza sistema com duas caçambas de pesagem operando de forma alternada, proporcionando fluxo contínuo e alta produtividade. Esse conceito permite sua instalação diretamente na saída de elevadores ou transportadores, como roscas e correias, eliminando a necessidade de silo de expedição.",
    color: "#f5a623",
    image: "/assets/images/balanca-expedicao-ppcd/ppcd-01.webp",
    images: [
      "/assets/images/balanca-expedicao-ppcd/ppcd-01.webp",
      "/assets/images/balanca-expedicao-ppcd/ppcd-02.webp",
      "/assets/images/balanca-expedicao-ppcd/ppcd-03.webp",
      "/assets/images/balanca-expedicao-ppcd/ppcd-04.webp"
    ],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["balanca-fluxo-pfd", "ensacadeira-gravimetrica-pevpd", "big-bag"],
    relatedImage: "/assets/images/balanca-expedicao-ppcd/ppcd-01.webp"
  },
  {
    id: "ensacadeira-gravimetrica-pevpd",
    name: "Ensacadeira Gravimétrica",
    subtitle: "PEVPD",
    description: "A ensacadeira gravimétrica é ideal para pesagem e embalagem de produtos a granel como grãos, sementes e rações, garantindo precisão, redução de perdas e maior eficiência.\n\nA ensacadeira gravimétrica Pondus utiliza a gravidade para o enchimento, com pesagem direta na sacaria, oferecendo simplicidade, confiabilidade e excelente custo-benefício.\n\nCom capacidade de até 4 sacas por minuto e variação máxima de 40 g, é uma solução compacta, precisa e produtiva.",
    color: "#1a3a5c",
    image: "/assets/images/ensacadeira-gravimetrica-pevpd/pevpd-01.webp",
    images: [
      "/assets/images/ensacadeira-gravimetrica-pevpd/pevpd-01.webp"
    ],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["ensacadeira-sopro-pevps", "ensacadeira-racao-pevprd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/ensacadeira-gravimetrica-pevpd/pevpd-01.webp"
  },
  {
    id: "ensacadeira-sopro-pevps",
    name: "Ensacadeira de Sopro",
    subtitle: "PEVPS",
    description: "A ensacadeira de sopro é ideal para pesar e ensacar produtos sólidos a granel, como sementes, grãos e rações. Seu sistema utiliza um soprador independente que auxilia no transporte e acomodação do material dentro da sacaria, proporcionando um enchimento mais rápido e uniforme.\n\nA ensacadeira de sopro Pondus conta com sistema de pré-pesagem e dosagem eficiente, garantindo maior precisão, produtividade e padronização no processo.\n\nCom capacidade de até 6 sacos por minuto, ensaca sacarias de diferentes pesos, especialmente na faixa de 15 a 60 kg.",
    color: "#f5a623",
    image: "/assets/images/ensacadeira-sopro-pevps/pevps-01.webp",
    images: [
      "/assets/images/ensacadeira-sopro-pevps/pevps-01.webp",
      "/assets/images/ensacadeira-sopro-pevps/pevps-02.webp",
      "/assets/images/ensacadeira-sopro-pevps/pevps-03.webp"
    ],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["ensacadeira-gravimetrica-pevpd", "ensacadeira-racao-pevprd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/ensacadeira-sopro-pevps/pevps-01.webp"
  },
  {
    id: "ensacadeira-racao-pevprd",
    name: "Ensacadeira para Ração",
    subtitle: "PEVPRD",
    description: "A ensacadeira para ração é desenvolvida para pesar e ensacar produtos farelados e peletizados, especialmente rações, com alta eficiência e precisão.\n\nO equipamento utiliza um sistema helicoidal acionado por motor, que promove o transporte contínuo e controlado do material até a sacaria, garantindo um enchimento uniforme e eficiente.\n\nA ensacadeira para ração Pondus conta ainda com um sistema de acomodação do produto na base da sacaria, acionado por atuador pneumático, que movimenta a embalagem durante o enchimento. Esse recurso melhora a distribuição do material, proporcionando melhor compactação e acabamento final do saco.\n\nAlém disso, possui sistema de pré-pesagem e dosagem eficiente, assegurando alta precisão, padronização e produtividade no processo de ensaque.",
    color: "#1a3a5c",
    image: "/assets/images/ensacadeira-racao-pevprd/pevprd-01.webp",
    images: [
      "/assets/images/ensacadeira-racao-pevprd/pevprd-01.webp"
    ],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["ensacadeira-sopro-pevps", "ensacadeira-gravimetrica-pevpd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/ensacadeira-racao-pevprd/pevprd-01.webp"
  },
  {
    id: "big-bag",
    name: "Ensacadeiras de Big-Bag",
    subtitle: "Big-Bag",
    description: "As ensacadeiras de big bag são projetadas para pesar e ensacar grandes volumes de materiais a granel com precisão e confiabilidade, sendo amplamente utilizadas no agronegócio e na indústria.\n\nEsses equipamentos garantem o controle preciso do peso durante o enchimento de big bags, sendo ideais para materiais granulares como sementes e grãos. A alta precisão na pesagem assegura padronização, confiabilidade e melhor controle operacional.\n\nRobustas e resistentes, são desenvolvidas para suportar cargas elevadas e operação contínua em ambientes industriais.\n\nA Pondus é especialista em ensacadeiras de big bag, oferecendo soluções versáteis e modelos que se adaptam às necessidades específicas de cada operação.",
    color: "#f5a623",
    image: "/assets/images/big-bag/bigbag-01.webp",
    images: [
      "/assets/images/big-bag/bigbag-01.webp",
      "/assets/images/big-bag/bigbag-02.webp",
      "/assets/images/big-bag/bigbag-03.webp",
      "/assets/images/big-bag/bigbag-04.webp",
      "/assets/images/big-bag/bigbag-05.webp"
    ],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["big-bag-basica-pebe", "big-bag-automatica-pebbag", "balanca-expedicao-ppcd"],
    relatedImage: "/assets/images/big-bag/bigbag-01.webp"
  },
  {
    id: "big-bag-basica-pebe",
    name: "Ensacadeira de Big-Bag Básica",
    subtitle: "PEBE",
    description: "Esse é o modelo mais simples da Pondus, a ensacadeira conta com um mecanismo pra prender a boca do big bag no tubo de entrada e ganchos com molas para pendurar o bag no início do processo, a pesagem é feita diretamente na estrutura da balança e a empilhadeira retira o big bag diretamente de dentro da ensacadeira.",
    color: "#1a3a5c",
    image: "/assets/images/big-bag-basica-pebe/pebe-02.webp",
    images: ["/assets/images/big-bag-basica-pebe/pebe-02.webp"],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["big-bag", "big-bag-automatica-pebbag", "balanca-fluxo-pfd"],
    relatedImage: "/assets/images/big-bag-basica-pebe/pebe-02.webp"
  },
  {
    id: "big-bag-automatica-pebbag",
    name: "Ensacadeira de Big-Bag Automática",
    subtitle: "PEBBAG",
    description: "A ensacadeira automática de big bag Pondus é desenvolvida com conceito modular, permitindo que o cliente configure o equipamento conforme suas necessidades operacionais.\n\nO sistema conta com elevação e descida do big bag, garantindo melhor aproveitamento da embalagem e maior eficiência no enchimento. Após o posicionamento do big bag pelo operador, todo o restante do processo ocorre de forma automática: pesagem, enchimento e liberação das alças e da boca da embalagem.\n\nApós o ensaque, o big bag pode ser deslocado para a saída por meio de carrinho pneumático ou esteiras, otimizando o fluxo de produção.\n\nComo diferencial, o equipamento pode ser equipado com sistema opcional de checkweigher, integrado ao transporte, permitindo a conferência do peso de cada big bag e garantindo ainda mais precisão e controle de qualidade.",
    color: "#f5a623",
    image: "/assets/images/big-bag-automatica-pebbag/pebbag-01.webp",
    images: ["/assets/images/big-bag-automatica-pebbag/pebbag-01.webp"],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["big-bag", "big-bag-basica-pebe", "balanca-expedicao-ppcd"],
    relatedImage: "/assets/images/big-bag-automatica-pebbag/pebbag-01.webp"
  },
  {
    id: "contadora-sementes-pcsl",
    name: "Contadora de Sementes",
    subtitle: "PCSL-22000",
    description: "A PCSL-22000 é uma solução moderna e de alta precisão para contagem de sementes, ideal para integração em linhas de produção.\n\nUtiliza tecnologia de análise por imagem com câmera de alta velocidade aliada a uma balança digital de precisão, garantindo resultados rápidos e confiáveis no cálculo do PMS (peso de mil sementes). Com capacidade de contagem em alta velocidade, atinge precisão de até 99,9%, reduzindo erros e eliminando processos manuais.\n\nPossui interface intuitiva com tela touchscreen e acesso local ou remoto via navegador web, permitindo exportação de dados em planilhas e integração com outros sistemas por meio de APIs (HTTP REST e MODBUS).\n\nConta ainda com integração nativa com ensacadeiras Pondus e está disponível nas versões bancada ou linha, adaptando-se com eficiência e flexibilidade às diferentes necessidades operacionais.",
    color: "#1a3a5c",
    image: "/assets/images/contadora-sementes-pcsl/pcsl-01.webp",
    images: [
      "/assets/images/contadora-sementes-pcsl/pcsl-01.webp",
      "/assets/images/contadora-sementes-pcsl/pcsl-02.webp",
      "/assets/images/contadora-sementes-pcsl/pcsl-03.webp",
      "/assets/images/contadora-sementes-pcsl/pcsl-04.webp"
    ],
    specs: [
      { iconName: "Scale", label: "Modelo", value: "PCSL-22000" },
      { iconName: "Target", label: "Precisão do PMS", value: "99,9%" },
      { iconName: "Timer", label: "Velocidade", value: "1500 sementes em ~10 segundos" },
      { iconName: "Camera", label: "Tecnologia", value: "Análise por imagem" }
    ],
    features: [
      { title: "Contagem rápida e precisa", description: "Por análise de imagens" },
      { title: "Cálculo automático", description: "De PMS e coeficiente de variação (CV)" },
      { title: "Balança digital integrada", description: "Alta precisão" },
      { title: "Coleta automática", description: "De amostras por sistema pneumático" },
      { title: "Exportação de dados", description: "Planilhas, e-mail e USB" },
      { title: "Integração via API", description: "HTTP REST e MODBUS" },
      { title: "Opção de impressora", description: "Térmica e leitor de código de barras" },
      { title: "Design compacto", description: "Fácil instalação" }
    ],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["balanca-fluxo-pfd", "ensacadeira-gravimetrica-pevpd", "ensacadeira-sopro-pevps"],
    relatedImage: "/assets/images/contadora-sementes-pcsl/pcsl-01.webp"
  }
];

export function getProductDetailById(id: string): ProductDetail | undefined {
  return productsDetail.find(p => p.id === id);
}
