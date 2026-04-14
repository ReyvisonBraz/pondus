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
    description: "A balança de fluxo é utilizada para medir com precisão o peso de produtos a granel em processos de produção e expedição, como grãos, pós e rações. Ela realiza a pesagem por meio de bateladas, enchendo, pesando e esvaziando a caçamba de pesagem. As balanças de fluxo Pondus têm um diferencial em relação aos nossos concorrentes, elas são compostas por duas caçambas de pesagem trabalhando em conjunto, o material é direcionado hora para uma caçamba, hora para outra, enquanto uma enche a outra esvazia, isso faz com que o fluxo seja mais constante e a balança tenha um tamanho significativamente menor.",
    color: "#1a3a5c",
    image: "/assets/images/balanca-fluxo-pfd/image.png",
    category: "balanca"
  },
  {
    id: "balanca-expedicao-ppcd",
    iconName: "Gauge",
    name: "Balança de Expedição PPCD",
    shortDescription: "Programa a quantidade exata para carregamento, elimina necessidade de retorno do caminhão.",
    description: "É um tipo de balança de fluxo que permite que o operador programe a quantidade exata de um produto a granel para ser carregado, normalmente utilizada para agilizar o processo de carregamento e expedição de grãos em unidades de armazenamento. A balança de expedição garante o peso correto na balança rodoviária e não há necessidade de retorno do caminhão para completar carga ou retirar excesso. A balança de expedição Pondus trabalha com duas caçambas de pesagem, o que permite sua utilização diretamente na saída de um elevador, sem necessidade de silo de expedição.",
    color: "#f5a623",
    image: "/assets/images/balanca-expedicao-ppcd/image.jpg",
    category: "balanca"
  },
  {
    id: "ensacadeira-gravimetrica-pevpd",
    iconName: "Package",
    name: "Ensacadeira Gravimétrica PEVPD",
    shortDescription: "Pesagem e embalagem com precisão, custo acessível usando gravidade.",
    description: "A balança ensacadeira gravimétrica é utilizada para pesar e embalar produtos sólidos a granel, como grãos e rações. Ela garante a precisão do peso em cada saco, o que evita desperdícios, otimiza a produção e garante a qualidade do produto final. A ensacadeira gravimétrica Pondus usa a gravidade pra encher a sacaria e a pesagem ocorre diretamente na sacaria, seu diferencial é o custo mais acessível.",
    color: "#1a3a5c",
    image: "/assets/images/ensacadeira-gravimetrica-pevpd/image.jpg",
    category: "ensacadeira"
  },
  {
    id: "ensacadeira-sopro-pevps",
    iconName: "Package",
    name: "Ensacadeira de Sopro PEVPS",
    shortDescription: "Sistema de sopro com pré-pesagem e três cortes para máxima precisão.",
    description: "A balança ensacadeira de sopro é utilizada para pesar e embalar produtos sólidos a granel, como grãos e rações. O sistema de sopro utiliza uma turbina que ajuda a transportar e compactar o material dentro do saco, o que garante um ensaque mais eficiente. A ensacadeira de sopro Pondus é a mais precisa do mercado, ela conta com pré-pesagem e utiliza três cortes para maior precisão de peso.",
    color: "#f5a623",
    image: "/assets/images/ensacadeira-sopro-pevps/image.jpg",
    category: "ensacadeira"
  },
  {
    id: "ensacadeira-racao-pevprd",
    iconName: "Package",
    name: "Ensacadeira para Ração PEVPRD",
    shortDescription: "Para rações fareladas e peletizadas, com helicoide para compactação.",
    description: "A ensacadeira para ração é utilizada para pesar e embalar produtos farelados e peletizados, principalmente rações. O ensacadeira utiliza um helicoide movido por um motor que ajuda a transportar e compactar o material dentro do saco, o que garante um ensaque mais eficiente. A ensacadeira para ração Pondus é a mais precisa do mercado, ela conta com pré-pesagem e utiliza três cortes para maior precisão de peso.",
    color: "#1a3a5c",
    image: "/assets/images/ensacadeira-racao-pevprd/image.jpg",
    category: "ensacadeira"
  },
  {
    id: "big-bag",
    iconName: "Boxes",
    name: "Ensacadeiras de Big-Bag",
    shortDescription: "Pesagem de grandes volumes a granel, alta resistência para uso industrial.",
    description: "A balança de big bag é usada para pesar grandes volumes de materiais a granel de forma precisa e confiável, sendo utilizada principalmente em indústrias e setores como o agronegócio. Sua função é controlar o peso exato dos produtos em sacos big bag durante processos como produção, recebimento e expedição de materiais. A medição precisa da pesagem fornece resultados confiáveis do peso dos materiais. Equipamento de alta resistência, projetado para suportar cargas pesadas e uso industrial. Utilizada em diversas aplicações industriais e comerciais, desde a produção até o recebimento e expedição. A Pondus é especialista em ensacadeiras de big bag e oferece modelos que possibilitam a melhor adequação à sua necessidade.",
    color: "#f5a623",
    image: "/assets/images/big-bag/image.jpg",
    category: "ensacadeira"
  },
  {
    id: "big-bag-basica-pebe",
    iconName: "Scale",
    name: "Ensacadeira de Big-Bag Básica PEBE",
    shortDescription: "Modelo simples com gancho e mola, pesagem direta na estrutura.",
    description: "Esse é o modelo mais simples da Pondus, a ensacadeira conta com um mecanismo pra prender a boca do big bag no tubo de entrada e ganchos com molas para pendurar o bag no início do processo, a pesagem é feita diretamente na estrutura da balança e a empilhadeira retira o big bag diretamente de dentro da ensacadeira.",
    color: "#1a3a5c",
    image: "/assets/images/big-bag-basica-pebe/image.jpg",
    category: "ensacadeira"
  },
  {
    id: "big-bag-automatica-pebbag",
    iconName: "Boxes",
    name: "Ensacadeira de Big-Bag Automática PEBBAG",
    shortDescription: "Processo automático completo com sistema de checkweigher opcional.",
    description: "A Pondus oferece a balança automática de big bag de forma modular e fica a critério do cliente a configuração desejada. Ela conta com sistema para erguer e baixar big bag para melhor aproveitamento da embalagem. Nessa balança o operador coloca o big bag na ensacadeira e o restante do processo ocorre automaticamente, a balança pesa, enche, solta as alças e boca do big bag para depois posiciona-lo na frente da ensacadeira, para isso pode ser utilizado um carrinho pneumático ou esteiras. Um diferencial de nossa balança é o sistema de checkweigher opcional, o carrinho ou esteira pode vir com um sistema de pesagem para conferência de cada big bag.",
    color: "#f5a623",
    image: "/assets/images/big-bag-automatica-pebbag/image.jpg",
    category: "ensacadeira"
  },
  {
    id: "contadora-sementes-pcsl",
    iconName: "PackageCheck",
    name: "Contadora de Sementes PCSL",
    shortDescription: "Contagem por imagens com 99,9% de precisão em 10 segundos.",
    description: "A nossa contadora de sementes PCSL-22000 foi lançada no ano de 2022, sendo a primeira versão nacional com a tecnologia de contagem por imagens. Uma solução moderna e definitiva para a contagem de sementes, que oferece o máximo em eficiência e precisão. Esse produto integra uma câmera digital de alta velocidade e uma balança digital de alta precisão, proporcionando cálculo rápido e preciso do PMS (peso de mil sementes). Esse produto pode contar 1500 sementes em aproximadamente de 10 segundos, com precisão de 99,9% para a maioria das culturas. Conta com uma tela LCD sensível ao toque e software desenvolvido por nossa equipe especializada, proporcionamos uma experiência de usuário intuitivo e altamente produtiva. O sistema pode ser acessado localmente ou remotamente via navegadores web, permitindo a exportação e download dos dados no formato de planilhas eletrônicas. Além disso o sistema também permite integração com outros sistemas via APIs HTTP REST ou MODBUS. A integração com as ensacadeiras Pondus é nativa e agiliza o processo de ensaque por unidades. As ensacadeiras buscam o PMS na contadora e ajustam o peso da sacaria conforme esse PMS. Nosso produto se adapta às suas necessidades. Dispõe de versões para integração à linha de produção ou funcionamento independente (para laboratório). Em ambos os casos, garantimos velocidade e precisão, eliminando processos manuais propensos a erros.",
    color: "#1a3a5c",
    image: "/assets/images/contadora-sementes-pcsl/image.jpg",
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
