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
    description: "A balança de fluxo é utilizada para medir com precisão o peso de produtos a granel em processos de produção e expedição, como grãos, pós e rações. Ela realiza a pesagem por meio de bateladas, enchendo, pesando e esvaziando a caçamba de pesagem. As balanças de fluxo Pondus têm um diferencial em relação aos nossos concorrentes, elas são compostas por duas caçambas de pesagem trabalhando em conjunto, o material é direcionado hora para uma caçamba, hora para outra, enquanto uma enche a outra esvazia, isso faz com que o fluxo seja mais constante e a balança tenha um tamanho significativamente menor.",
    color: "#1a3a5c",
    image: "/assets/images/balanca-fluxo-pfd/pfd-01.png",
    images: ["/assets/images/balanca-fluxo-pfd/pfd-01.png"],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["balanca-expedicao-ppcd", "ensacadeira-gravimetrica-pevpd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/balanca-fluxo-pfd/pfd-01.png"
  },
  {
    id: "balanca-expedicao-ppcd",
    name: "Balança de Expedição",
    subtitle: "PPCD",
    description: "É um tipo de balança de fluxo que permite que o operador programe a quantidade exata de um produto a granel para ser carregado, normalmente utilizada para agilizar o processo de carregamento e expedição de grãos em unidades de armazenamento. A balança de expedição garante o peso correto na balança rodoviária e não há necessidade de retorno do caminhão para completar carga ou retirar excesso. A balança de expedição Pondus trabalha com duas caçambas de pesagem, o que permite sua utilização diretamente na saída de um elevador, sem necessidade de silo de expedição.",
    color: "#f5a623",
    image: "/assets/images/balanca-expedicao-ppcd/ppcd-01.jpg",
    images: [
      "/assets/images/balanca-expedicao-ppcd/ppcd-01.jpg",
      "/assets/images/balanca-expedicao-ppcd/ppcd-02.jpg",
      "/assets/images/balanca-expedicao-ppcd/ppcd-03.jpg",
      "/assets/images/balanca-expedicao-ppcd/ppcd-04.jpg"
    ],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["balanca-fluxo-pfd", "ensacadeira-gravimetrica-pevpd", "big-bag"],
    relatedImage: "/assets/images/balanca-expedicao-ppcd/ppcd-01.jpg"
  },
  {
    id: "ensacadeira-gravimetrica-pevpd",
    name: "Ensacadeira Gravimétrica",
    subtitle: "PEVPD",
    description: "A balança ensacadeira gravimétrica é utilizada para pesar e embalar produtos sólidos a granel, como grãos e rações. Ela garante a precisão do peso em cada saco, o que evita desperdícios, otimiza a produção e garante a qualidade do produto final. A ensacadeira gravimétrica Pondus usa a gravidade pra encher a sacaria e a pesagem ocorre diretamente na sacaria, seu diferencial é o custo mais acessível.",
    color: "#1a3a5c",
    image: "/assets/images/ensacadeira-gravimetrica-pevpd/pevpd-01.jpeg",
    images: [
      "/assets/images/ensacadeira-gravimetrica-pevpd/pevpd-01.jpeg"
    ],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["ensacadeira-sopro-pevps", "ensacadeira-racao-pevprd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/ensacadeira-gravimetrica-pevpd/pevpd-01.jpeg"
  },
  {
    id: "ensacadeira-sopro-pevps",
    name: "Ensacadeira de Sopro",
    subtitle: "PEVPS",
    description: "A balança ensacadeira de sopro é utilizada para pesar e embalar produtos sólidos a granel, como grãos e rações. O sistema de sopro utiliza uma turbina que ajuda a transportar e compactar o material dentro do saco, o que garante um ensaque mais eficiente. A ensacadeira de sopro Pondus é a mais precisa do mercado, ela conta com pré-pesagem e utiliza três cortes para maior precisão de peso.",
    color: "#f5a623",
    image: "/assets/images/ensacadeira-sopro-pevps/pevps-01.jpg",
    images: [
      "/assets/images/ensacadeira-sopro-pevps/pevps-01.jpg",
      "/assets/images/ensacadeira-sopro-pevps/pevps-02.jpg",
      "/assets/images/ensacadeira-sopro-pevps/pevps-03.jpg"
    ],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["ensacadeira-gravimetrica-pevpd", "ensacadeira-racao-pevprd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/ensacadeira-sopro-pevps/pevps-01.jpg"
  },
  {
    id: "ensacadeira-racao-pevprd",
    name: "Ensacadeira para Ração",
    subtitle: "PEVPRD",
    description: "A ensacadeira para ração é utilizada para pesar e embalar produtos farelados e peletizados, principalmente rações. O ensacadeira utiliza um helicoide movido por um motor que ajuda a transportar e compactar o material dentro do saco, o que garante um ensaque mais eficiente. A ensacadeira para ração Pondus é a mais precisa do mercado, ela conta com pré-pesagem e utiliza três cortes para maior precisão de peso.",
    color: "#1a3a5c",
    image: "/assets/images/ensacadeira-racao-pevprd/pevprd-01.jpeg",
    images: ["/assets/images/ensacadeira-racao-pevprd/pevprd-01.jpeg"],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["ensacadeira-sopro-pevps", "ensacadeira-gravimetrica-pevpd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/ensacadeira-racao-pevprd/pevprd-01.jpeg"
  },
  {
    id: "big-bag",
    name: "Ensacadeiras de Big-Bag",
    subtitle: "Big-Bag",
    description: "A balança de big bag é usada para pesar grandes volumes de materiais a granel de forma precisa e confiável, sendo utilizada principalmente em indústrias e setores como o agronegócio. Sua função é controlar o peso exato dos produtos em sacos big bag durante processos como produção, recebimento e expedição de materiais. A medição precisa da pesagem fornece resultados confiáveis do peso dos materiais. Equipamento de alta resistência, projetado para suportar cargas pesadas e uso industrial. Utilizada em diversas aplicações industriais e comerciais, desde a produção até o recebimento e expedição. A Pondus é especialista em ensacadeiras de big bag e oferece modelos que possibilitam a melhor adequação à sua necessidade.",
    color: "#f5a623",
    image: "/assets/images/big-bag/bigbag-01.jpg",
    images: [
      "/assets/images/big-bag/bigbag-01.jpg",
      "/assets/images/big-bag/bigbag-02.jpg",
      "/assets/images/big-bag/bigbag-03.jpg",
      "/assets/images/big-bag/bigbag-04.jpg",
      "/assets/images/big-bag/bigbag-05.jpg",
      "/assets/images/big-bag/bigbag-06.jpg"
    ],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["big-bag-basica-pebe", "big-bag-automatica-pebbag", "balanca-expedicao-ppcd"],
    relatedImage: "/assets/images/big-bag/bigbag-01.jpg"
  },
  {
    id: "big-bag-basica-pebe",
    name: "Ensacadeira de Big-Bag Básica",
    subtitle: "PEBE",
    description: "Esse é o modelo mais simples da Pondus, a ensacadeira conta com um mecanismo pra prender a boca do big bag no tubo de entrada e ganchos com molas para pendurar o bag no início do processo, a pesagem é feita diretamente na estrutura da balança e a empilhadeira retira o big bag diretamente de dentro da ensacadeira.",
    color: "#1a3a5c",
    image: "/assets/images/big-bag-basica-pebe/pebe-01.jpeg",
    images: ["/assets/images/big-bag-basica-pebe/pebe-01.jpeg"],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["big-bag", "big-bag-automatica-pebbag", "balanca-fluxo-pfd"],
    relatedImage: "/assets/images/big-bag-basica-pebe/pebe-01.jpeg"
  },
  {
    id: "big-bag-automatica-pebbag",
    name: "Ensacadeira de Big-Bag Automática",
    subtitle: "PEBBAG",
    description: "A Pondus oferece a balança automática de big bag de forma modular e fica a critério do cliente a configuração desejada. Ela conta com sistema para erguer e baixar big bag para melhor aproveitamento da embalagem. Nessa balança o operador coloca o big bag na ensacadeira e o restante do processo ocorre automaticamente, a balança pesa, enche, solta as alças e boca do big bag para depois posiciona-lo na frente da ensacadeira, para isso pode ser utilizado um carrinho pneumático ou esteiras. Um diferencial de nossa balança é o sistema de checkweigher opcional, o carrinho ou esteira pode vir com um sistema de pesagem para conferência de cada big bag.",
    color: "#f5a623",
    image: "/assets/images/big-bag-automatica-pebbag/pebbag-01.jpg",
    images: ["/assets/images/big-bag-automatica-pebbag/pebbag-01.jpg"],
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["big-bag", "big-bag-basica-pebe", "balanca-expedicao-ppcd"],
    relatedImage: "/assets/images/big-bag-automatica-pebbag/pebbag-01.jpg"
  },
  {
    id: "contadora-sementes-pcsl",
    name: "Contadora de Sementes",
    subtitle: "PCSL-22000",
    description: "A PCSL-22000 é uma solução moderna e de alta precisão para contagem de sementes, ideal para laboratórios e linhas de produção. Utiliza tecnologia de análise por imagem com câmera de alta velocidade e balança digital de precisão, garantindo resultados rápidos e confiáveis no cálculo do PMS (peso de mil sementes). Capaz de contar até 1500 sementes em cerca de 10 segundos, oferece precisão de até 99,9% (para soja), reduzindo erros e eliminando processos manuais. Possui interface intuitiva com tela touchscreen e acesso local ou remoto via navegador web, permitindo exportação de dados em planilhas e integração com outros sistemas via APIs (HTTP REST e MODBUS). Também conta com integração nativa com ensacadeiras Pondus. Disponível em versões para bancada ou integração em linha, adapta-se às necessidades operacionais com eficiência e flexibilidade.",
    color: "#1a3a5c",
    image: "/assets/images/contadora-sementes-pcsl/pcsl-01.jpg",
    images: [
      "/assets/images/contadora-sementes-pcsl/pcsl-01.jpg",
      "/assets/images/contadora-sementes-pcsl/pcsl-02.jpg",
      "/assets/images/contadora-sementes-pcsl/pcsl-03.jpg",
      "/assets/images/contadora-sementes-pcsl/pcsl-04.jpg"
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
    relatedImage: "/assets/images/contadora-sementes-pcsl/pcsl-01.jpg"
  }
];

export function getProductDetailById(id: string): ProductDetail | undefined {
  return productsDetail.find(p => p.id === id);
}
