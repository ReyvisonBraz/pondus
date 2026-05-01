import { LucideIcon, PackageCheck, Package, Boxes, Scale, Gauge } from "lucide-react";

export type ProductCategory = 'balanca' | 'ensacadeira' | 'contadora';

export interface Product {
  id: string;
  iconName: string;
  name: string;
  shortDescription: string;
  description: string;
  color: string;
  image: string;
  category: ProductCategory;
}

const iconMap: Record<string, LucideIcon> = {
  PackageCheck,
  Package,
  Boxes,
  Scale,
  Gauge
};

export function getIconByName(name: string): LucideIcon {
  return iconMap[name] || PackageCheck;
}

export const products: Product[] = [
  {
    id: "balanca-fluxo-pfd",
    iconName: "Gauge",
    name: "Balança de Fluxo PFD",
    shortDescription: "Medição precisa de produtos a granel com duas caçambas de pesagem para fluxo constante.",
    description: "A balança de fluxo é utilizada para medir com precisão o peso de sementes e outros produtos a granel, como grãos, pós e rações, em processos de produção e expedição.\n\nSeu funcionamento ocorre por bateladas, realizando ciclos contínuos de enchimento, pesagem e descarga da caçamba, garantindo controle confiável do fluxo de material.\n\nAs balanças de fluxo Pondus se destacam pelo sistema com duas caçambas de pesagem operando em conjunto. O material é direcionado alternadamente entre elas, proporcionando um fluxo mais constante, maior produtividade e um equipamento mais compacto em comparação aos modelos tradicionais.",
    color: "#1a3a5c",
    image: "/assets/images/balanca-fluxo-pfd/pfd-02.webp",
    category: "balanca"
  },
  {
    id: "balanca-expedicao-ppcd",
    iconName: "Gauge",
    name: "Balança de Expedição PPCD",
    shortDescription: "Programa a quantidade exata para carregamento, elimina necessidade de retorno do caminhão.",
    description: "A balança de expedição é um tipo de balança de fluxo que permite programar a quantidade exata de produto a granel a ser carregada em caminhões, vagões ou outros meios de transporte, sendo amplamente utilizada para agilizar processos de carregamento e expedição.\n\nO equipamento garante precisão no peso final, evitando retrabalho na balança rodoviária, como retorno para complemento de carga ou retirada de excesso, aumentando a eficiência operacional.\n\nA balança de expedição Pondus utiliza sistema com duas caçambas de pesagem operando de forma alternada, proporcionando fluxo contínuo e alta produtividade. Esse conceito permite sua instalação diretamente na saída de elevadores ou transportadores, como roscas e correias, eliminando a necessidade de silo de expedição.",
    color: "#f5a623",
    image: "/assets/images/balanca-expedicao-ppcd/ppcd-01.webp",
    category: "balanca"
  },
  {
    id: "ensacadeira-gravimetrica-pevpd",
    iconName: "Package",
    name: "Ensacadeira Gravimétrica PEVPD",
    shortDescription: "Pesagem e embalagem com precisão, custo acessível usando gravidade.",
    description: "A balança ensacadeira gravimétrica é utilizada para pesar e embalar produtos sólidos a granel, como grãos e rações. Ela garante a precisão do peso em cada saco, o que evita desperdícios, otimiza a produção e garante a qualidade do produto final. A ensacadeira gravimétrica Pondus usa a gravidade pra encher a sacaria e a pesagem ocorre diretamente na sacaria, seu diferencial é o custo mais acessível.",
    color: "#1a3a5c",
    image: "/assets/images/ensacadeira-gravimetrica-pevpd/pevpd-01.webp",
    category: "ensacadeira"
  },
  {
    id: "ensacadeira-sopro-pevps",
    iconName: "Package",
    name: "Ensacadeira de Sopro PEVPS",
    shortDescription: "Sistema de sopro com pré-pesagem e três cortes para máxima precisão.",
    description: "A ensacadeira de sopro é ideal para pesar e ensacar produtos sólidos a granel, como sementes, grãos e rações. Seu sistema utiliza um soprador independente que auxilia no transporte e acomodação do material dentro da sacaria, proporcionando um enchimento mais rápido e uniforme.\n\nA ensacadeira de sopro Pondus conta com sistema de pré-pesagem e dosagem eficiente, garantindo maior precisão, produtividade e padronização no processo.\n\nCom capacidade de até 6 sacos por minuto, ensaca sacarias de diferentes pesos, especialmente na faixa de 15 a 60 kg.",
    color: "#f5a623",
    image: "/assets/images/ensacadeira-sopro-pevps/pevps-01.webp",
    category: "ensacadeira"
  },
  {
    id: "ensacadeira-racao-pevprd",
    iconName: "Package",
    name: "Ensacadeira para Ração PEVPRD",
    shortDescription: "Para rações fareladas e peletizadas, com helicoide para compactação.",
    description: "A ensacadeira para ração é desenvolvida para pesar e ensacar produtos farelados e peletizados, especialmente rações, com alta eficiência e precisão.\n\nO equipamento utiliza um sistema helicoidal acionado por motor, que promove o transporte contínuo e controlado do material até a sacaria, garantindo um enchimento uniforme e eficiente.\n\nA ensacadeira para ração Pondus conta ainda com um sistema de acomodação do produto na base da sacaria, acionado por atuador pneumático, que movimenta a embalagem durante o enchimento. Esse recurso melhora a distribuição do material, proporcionando melhor compactação e acabamento final do saco.\n\nAlém disso, possui sistema de pré-pesagem e dosagem eficiente, assegurando alta precisão, padronização e produtividade no processo de ensaque.",
    color: "#1a3a5c",
    image: "/assets/images/ensacadeira-racao-pevprd/pevprd-01.webp",
    category: "ensacadeira"
  },
  {
    id: "big-bag",
    iconName: "Boxes",
    name: "Ensacadeiras de Big-Bag",
    shortDescription: "Pesagem de grandes volumes a granel, alta resistência para uso industrial.",
    description: "As ensacadeiras de big bag são projetadas para pesar e ensacar grandes volumes de materiais a granel com precisão e confiabilidade, sendo amplamente utilizadas no agronegócio e na indústria.\n\nEsses equipamentos garantem o controle preciso do peso durante o enchimento de big bags, sendo ideais para materiais granulares como sementes e grãos. A alta precisão na pesagem assegura padronização, confiabilidade e melhor controle operacional.\n\nRobustas e resistentes, são desenvolvidas para suportar cargas elevadas e operação contínua em ambientes industriais.\n\nA Pondus é especialista em ensacadeiras de big bag, oferecendo soluções versáteis e modelos que se adaptam às necessidades específicas de cada operação.",
    color: "#f5a623",
    image: "/assets/images/big-bag/bigbag-01.webp",
    category: "ensacadeira"
  },
  {
    id: "big-bag-basica-pebe",
    iconName: "Scale",
    name: "Ensacadeira de Big-Bag Básica PEBE",
    shortDescription: "Modelo simples com gancho e mola, pesagem direta na estrutura.",
    description: "Esse é o modelo mais simples da Pondus, a ensacadeira conta com um mecanismo pra prender a boca do big bag no tubo de entrada e ganchos com molas para pendurar o bag no início do processo, a pesagem é feita diretamente na estrutura da balança e a empilhadeira retira o big bag diretamente de dentro da ensacadeira.",
    color: "#1a3a5c",
    image: "/assets/images/big-bag-basica-pebe/pebe-02.webp",
    category: "ensacadeira"
  },
  {
    id: "big-bag-automatica-pebbag",
    iconName: "Boxes",
    name: "Ensacadeira de Big-Bag Automática PEBBAG",
    shortDescription: "Processo automático completo com sistema de checkweigher opcional.",
    description: "A ensacadeira automática de big bag Pondus é desenvolvida com conceito modular, permitindo que o cliente configure o equipamento conforme suas necessidades operacionais.\n\nO sistema conta com elevação e descida do big bag, garantindo melhor aproveitamento da embalagem e maior eficiência no enchimento. Após o posicionamento do big bag pelo operador, todo o restante do processo ocorre de forma automática: pesagem, enchimento e liberação das alças e da boca da embalagem.\n\nApós o ensaque, o big bag pode ser deslocado para a saída por meio de carrinho pneumático ou esteiras, otimizando o fluxo de produção.\n\nComo diferencial, o equipamento pode ser equipado com sistema opcional de checkweigher, integrado ao transporte, permitindo a conferência do peso de cada big bag e garantindo ainda mais precisão e controle de qualidade.",
    color: "#f5a623",
    image: "/assets/images/big-bag-automatica-pebbag/pebbag-01.webp",
    category: "ensacadeira"
  },
  {
    id: "contadora-sementes-pcsl",
    iconName: "PackageCheck",
    name: "Contadora de Sementes PCSL",
    shortDescription: "Contagem por imagens com 99,9% de precisão em 10 segundos.",
    description: "A PCSL-22000 é uma solução moderna e de alta precisão para contagem de sementes, ideal para integração em linhas de produção.\n\nUtiliza tecnologia de análise por imagem com câmera de alta velocidade aliada a uma balança digital de precisão, garantindo resultados rápidos e confiáveis no cálculo do PMS (peso de mil sementes). Com capacidade de contagem em alta velocidade, atinge precisão de até 99,9%, reduzindo erros e eliminando processos manuais.\n\nPossui interface intuitiva com tela touchscreen e acesso local ou remoto via navegador web, permitindo exportação de dados em planilhas e integração com outros sistemas por meio de APIs (HTTP REST e MODBUS).\n\nConta ainda com integração nativa com ensacadeiras Pondus e está disponível nas versões bancada ou linha, adaptando-se com eficiência e flexibilidade às diferentes necessidades operacionais.",
    color: "#1a3a5c",
    image: "/assets/images/contadora-sementes-pcsl/pcsl-01.webp",
    category: "contadora"
  }
];

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(p => p.category === category);
}

export function getEnsacadeiras(): Product[] {
  return products.filter(p => p.category === 'ensacadeira');
}

export function getBalancas(): Product[] {
  return products.filter(p => p.category === 'balanca');
}

export function getContadoras(): Product[] {
  return products.filter(p => p.category === 'contadora');
}
