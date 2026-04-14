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
    image: "/assets/images/balanca-fluxo-pfd/image.png",
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["balanca-expedicao-ppcd", "ensacadeira-gravimetrica-pevpd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/balanca-fluxo-pfd/image.png"
  },
  {
    id: "balanca-expedicao-ppcd",
    name: "Balança de Expedição",
    subtitle: "PPCD",
    description: "É um tipo de balança de fluxo que permite que o operador programe a quantidade exata de um produto a granel para ser carregado, normalmente utilizada para agilizar o processo de carregamento e expedição de grãos em unidades de armazenamento. A balança de expedição garante o peso correto na balança rodoviária e não há necessidade de retorno do caminhão para completar carga ou retirar excesso. A balança de expedição Pondus trabalha com duas caçambas de pesagem, o que permite sua utilização diretamente na saída de um elevador, sem necessidade de silo de expedição.",
    color: "#f5a623",
    image: "/assets/images/balanca-expedicao-ppcd/image.jpg",
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["balanca-fluxo-pfd", "ensacadeira-gravimetrica-pevpd", "big-bag"],
    relatedImage: "/assets/images/balanca-expedicao-ppcd/image.jpg"
  },
  {
    id: "ensacadeira-gravimetrica-pevpd",
    name: "Ensacadeira Gravimétrica",
    subtitle: "PEVPD",
    description: "A balança ensacadeira gravimétrica é utilizada para pesar e embalar produtos sólidos a granel, como grãos e rações. Ela garante a precisão do peso em cada saco, o que evita desperdícios, otimiza a produção e garante a qualidade do produto final. A ensacadeira gravimétrica Pondus usa a gravidade pra encher a sacaria e a pesagem ocorre diretamente na sacaria, seu diferencial é o custo mais acessível.",
    color: "#1a3a5c",
    image: "/assets/images/ensacadeira-gravimetrica-pevpd/image.jpg",
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["ensacadeira-sopro-pevps", "ensacadeira-racao-pevprd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/ensacadeira-gravimetrica-pevpd/image.jpg"
  },
  {
    id: "ensacadeira-sopro-pevps",
    name: "Ensacadeira de Sopro",
    subtitle: "PEVPS",
    description: "A balança ensacadeira de sopro é utilizada para pesar e embalar produtos sólidos a granel, como grãos e rações. O sistema de sopro utiliza uma turbina que ajuda a transportar e compactar o material dentro do saco, o que garante um ensaque mais eficiente. A ensacadeira de sopro Pondus é a mais precisa do mercado, ela conta com pré-pesagem e utiliza três cortes para maior precisão de peso.",
    color: "#f5a623",
    image: "/assets/images/ensacadeira-sopro-pevps/image.jpg",
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["ensacadeira-gravimetrica-pevpd", "ensacadeira-racao-pevprd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/ensacadeira-sopro-pevps/image.jpg"
  },
  {
    id: "ensacadeira-racao-pevprd",
    name: "Ensacadeira para Ração",
    subtitle: "PEVPRD",
    description: "A ensacadeira para ração é utilizada para pesar e embalar produtos farelados e peletizados, principalmente rações. O ensacadeira utiliza um helicoide movido por um motor que ajuda a transportar e compactar o material dentro do saco, o que garante um ensaque mais eficiente. A ensacadeira para ração Pondus é a mais precisa do mercado, ela conta com pré-pesagem e utiliza três cortes para maior precisão de peso.",
    color: "#1a3a5c",
    image: "/assets/images/ensacadeira-racao-pevprd/image.jpg",
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["ensacadeira-sopro-pevps", "ensacadeira-gravimetrica-pevpd", "contadora-sementes-pcsl"],
    relatedImage: "/assets/images/ensacadeira-racao-pevprd/image.jpg"
  },
  {
    id: "big-bag",
    name: "Ensacadeiras de Big-Bag",
    subtitle: "Big-Bag",
    description: "A balança de big bag é usada para pesar grandes volumes de materiais a granel de forma precisa e confiável, sendo utilizada principalmente em indústrias e setores como o agronegócio. Sua função é controlar o peso exato dos produtos em sacos big bag durante processos como produção, recebimento e expedição de materiais. A medição precisa da pesagem fornece resultados confiáveis do peso dos materiais. Equipamento de alta resistência, projetado para suportar cargas pesadas e uso industrial. Utilizada em diversas aplicações industriais e comerciais, desde a produção até o recebimento e expedição. A Pondus é especialista em ensacadeiras de big bag e oferece modelos que possibilitam a melhor adequação à sua necessidade.",
    color: "#f5a623",
    image: "/assets/images/big-bag/image.jpg",
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["big-bag-basica-pebe", "big-bag-automatica-pebbag", "balanca-expedicao-ppcd"],
    relatedImage: "/assets/images/big-bag/image.jpg"
  },
  {
    id: "big-bag-basica-pebe",
    name: "Ensacadeira de Big-Bag Básica",
    subtitle: "PEBE",
    description: "Esse é o modelo mais simples da Pondus, a ensacadeira conta com um mecanismo pra prender a boca do big bag no tubo de entrada e ganchos com molas para pendurar o bag no início do processo, a pesagem é feita diretamente na estrutura da balança e a empilhadeira retira o big bag diretamente de dentro da ensacadeira.",
    color: "#1a3a5c",
    image: "/assets/images/big-bag-basica-pebe/image.jpg",
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["big-bag", "big-bag-automatica-pebbag", "balanca-fluxo-pfd"],
    relatedImage: "/assets/images/big-bag-basica-pebe/image.jpg"
  },
  {
    id: "big-bag-automatica-pebbag",
    name: "Ensacadeira de Big-Bag Automática",
    subtitle: "PEBBAG",
    description: "A Pondus oferece a balança automática de big bag de forma modular e fica a critério do cliente a configuração desejada. Ela conta com sistema para erguer e baixar big bag para melhor aproveitamento da embalagem. Nessa balança o operador coloca o big bag na ensacadeira e o restante do processo ocorre automaticamente, a balança pesa, enche, solta as alças e boca do big bag para depois posiciona-lo na frente da ensacadeira, para isso pode ser utilizado um carrinho pneumático ou esteiras. Um diferencial de nossa balança é o sistema de checkweigher opcional, o carrinho ou esteira pode vir com um sistema de pesagem para conferência de cada big bag.",
    color: "#f5a623",
    image: "/assets/images/big-bag-automatica-pebbag/image.jpg",
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["big-bag", "big-bag-basica-pebe", "balanca-expedicao-ppcd"],
    relatedImage: "/assets/images/big-bag-automatica-pebbag/image.jpg"
  },
  {
    id: "contadora-sementes-pcsl",
    name: "Contadora de Sementes",
    subtitle: "PCSL",
    description: "A nossa contadora de sementes PCSL-22000 foi lançada no ano de 2022, sendo a primeira versão nacional com a tecnologia de contagem por imagens. Uma solução moderna e definitiva para a contagem de sementes, que oferece o máximo em eficiência e precisão. Esse produto integra uma câmera digital de alta velocidade e uma balança digital de alta precisão, proporcionando cálculo rápido e preciso do PMS (peso de mil sementes). Esse produto pode contar 1500 sementes em aproximadamente de 10 segundos, com precisão de 99,9% para a maioria das culturas. Conta com uma tela LCD sensível ao toque e software desenvolvido por nossa equipe especializada, proporcionamos uma experiência de usuário intuitiva e altamente produtiva. O sistema pode ser acessado localmente ou remotamente via navegadores web, permitindo a exportação e download dos dados no formato de planilhas eletrônicas. Além disso o sistema também permite integração com outros sistemas via APIs HTTP REST ou MODBUS. A integração com as ensacadeiras Pondus é nativa e agiliza o processo de ensaque por unidades. As ensacadeiras buscam o PMS na contadora e ajustam o peso da sacaria conforme esse PMS. Nosso produto se adapta às suas necessidades. Dispõe de versões para integração à linha de produção ou funcionamento independente (para laboratório). Em ambos os casos, garantimos velocidade e precisão, eliminando processos manuais propensos a erros.",
    color: "#1a3a5c",
    image: "/assets/images/contadora-sementes-pcsl/image.jpg",
    specs: [],
    features: [],
    comunicacao: {
      disponivel: ["Modbus TCP", "EtherNet IP", "Profinet"],
      possibilidade: ["OPC UA", "CANopen", "MQTT"]
    },
    relatedProducts: ["balanca-fluxo-pfd", "ensacadeira-gravimetrica-pevpd", "ensacadeira-sopro-pevps"],
    relatedImage: "/assets/images/contadora-sementes-pcsl/image.jpg"
  }
];

export function getProductDetailById(id: string): ProductDetail | undefined {
  return productsDetail.find(p => p.id === id);
}
