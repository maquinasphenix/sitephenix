const SITE_URL = "https://phenixmaquinas.com.br";

function createProductSchema({
  name,
  description,
  path,
  category,
  additionalProperty,
}: {
  name: string;
  description: string;
  path: string;
  category: string;
  additionalProperty?: Array<{ name: string; value: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    category,
    url: `${SITE_URL}${path}`,
    brand: {
      "@type": "Brand",
      name: "Phenix Máquinas",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Phenix Máquinas",
      url: SITE_URL,
    },
    additionalProperty,
  };
}

export function getSeoData(page: string) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Phenix Máquinas",
    url: SITE_URL,
    telephone: "+55-41-3633-1008",
    email: "vendas@phenixmaquinas.com.br",
    sameAs: [
      "https://instagram.com/phenixmaquinas",
      "https://www.facebook.com/profile.php?id=100057607622731",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua José Rocha Magalhães 395 - Areia Branca",
      addressLocality: "Mandirituba",
      addressRegion: "PR",
      postalCode: "83800-000",
      addressCountry: "BR",
    },
  };

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quais máquinas para serigrafia a Phenix fabrica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Phenix fabrica impressora serigráfica semiautomática, mesa de exposição UV, estufas de secagem, estufa túnel, esteira transportadora e misturador de tintas para produção serigráfica.",
        },
      },
      {
        "@type": "Question",
        name: "A Phenix atende serigrafia industrial e estamparia têxtil?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A linha atende operações de serigrafia industrial, comunicação visual, impressão de adesivos, gravação de matrizes e estamparia têxtil com equipamentos de impressão, secagem e preparação.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês oferecem assistência técnica para máquinas serigráficas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A Phenix conta com atendimento especializado, suporte técnico e rede de distribuidores para orientar instalação, operação e manutenção de equipamentos para serigrafia.",
        },
      },
    ],
  };

  const productsCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Produtos Phenix Máquinas",
    url: `${SITE_URL}/produtos`,
    description:
      "Linha de máquinas para serigrafia, estufas de secagem, mesas de exposição UV e equipamentos auxiliares para produção industrial.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: `${SITE_URL}/impressora-serigrafica-semi-automatica-phenixtron`,
          name: "PHENIXTRON",
        },
        {
          "@type": "ListItem",
          position: 2,
          url: `${SITE_URL}/mesa-exposicao-uv-serigrafia-copymaster`,
          name: "COPYMASTER",
        },
        {
          "@type": "ListItem",
          position: 3,
          url: `${SITE_URL}/mesa-exposicao-uv-serigrafia`,
          name: "Mesa de Exposição UV Profissional",
        },
        {
          "@type": "ListItem",
          position: 4,
          url: `${SITE_URL}/estufa-compacta-secagem-serigrafia`,
          name: "Estufa Compacta de Secagem",
        },
        {
          "@type": "ListItem",
          position: 5,
          url: `${SITE_URL}/estufa-industrial-cura-textil`,
          name: "Estufa Industrial de Alto Desempenho",
        },
      ],
    },
  };

  const pages = {
    home: {
      title:
        "Phenix Máquinas | Máquinas para Serigrafia e Equipamentos Serigráficos",
      description:
        "Fabricante de máquinas para serigrafia industrial, impressoras serigráficas, mesas de exposição UV, estufas de secagem e equipamentos para estamparia têxtil.",
      canonicalPath: "/",
      keywords: [
        "máquinas para serigrafia",
        "máquinas serigráficas",
        "equipamentos para serigrafia",
        "serigrafia industrial",
        "estamparia têxtil",
        "impressora serigráfica",
      ],
      openGraphType: "website" as const,
      structuredData: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Phenix Máquinas",
          url: SITE_URL,
        },
        homeFaqSchema,
      ],
    },
    products: {
      title:
        "Produtos | Máquinas para Serigrafia, Estufas e Mesas UV - Phenix Máquinas",
      description:
        "Conheça a linha de máquinas serigráficas da Phenix: impressora serigráfica semiautomática, mesas de exposição UV, estufas de secagem, esteiras e misturadores.",
      canonicalPath: "/produtos",
      keywords: [
        "máquina serigrafia industrial",
        "equipamento serigrafia industrial",
        "mesa de exposição UV",
        "estufa para serigrafia",
        "misturador de tintas",
      ],
      openGraphType: "website" as const,
      structuredData: [organizationSchema, productsCollectionSchema],
    },
    phenixtron: {
      title:
        "PHENIXTRON | Impressora Serigráfica Semiautomática Industrial",
      description:
        "Impressora serigráfica semiautomática industrial para adesivos, rótulos e comunicação visual. Alta precisão, mesa a vácuo e sistema eletropneumático.",
      canonicalPath: "/impressora-serigrafica-semi-automatica-phenixtron",
      keywords: [
        "impressora serigráfica semiautomática",
        "máquina para imprimir adesivos",
        "máquina serigrafia industrial",
        "impressora serigráfica industrial",
        "serigrafia para rótulos",
      ],
      openGraphType: "product" as const,
      structuredData: [
        organizationSchema,
        createProductSchema({
          name: "PHENIXTRON",
          description:
            "Impressora serigráfica semiautomática industrial com mesa a vácuo e acionamento eletropneumático para adesivos, rótulos e comunicação visual.",
          path: "/impressora-serigrafica-semi-automatica-phenixtron",
          category: "Impressora serigráfica semiautomática",
          additionalProperty: [
            { name: "Sistema", value: "Eletropneumático" },
            { name: "Aplicações", value: "Adesivos, rótulos e comunicação visual" },
            { name: "Fixação do substrato", value: "Mesa a vácuo" },
          ],
        }),
      ],
    },
    copymaster: {
      title: "COPYMASTER | Mesa de Exposição UV para Serigrafia",
      description:
        "Mesa de exposição UV para serigrafia com sistema de vácuo e alta definição na gravação de matrizes serigráficas. Disponível em 5 modelos.",
      canonicalPath: "/mesa-exposicao-uv-serigrafia-copymaster",
      keywords: [
        "mesa de exposição UV",
        "mesa de gravação de matriz serigrafia",
        "gravadora de tela serigrafia",
        "equipamento para gravação de matrizes",
      ],
      openGraphType: "product" as const,
      structuredData: [
        organizationSchema,
        createProductSchema({
          name: "COPYMASTER",
          description:
            "Mesa de exposição UV para gravação de matrizes serigráficas com sistema de vácuo e exposição uniforme.",
          path: "/mesa-exposicao-uv-serigrafia-copymaster",
          category: "Mesa de exposição UV para serigrafia",
          additionalProperty: [
            { name: "Tecnologia", value: "Luz UV de alta potência" },
            { name: "Fixação", value: "Sistema de vácuo" },
            { name: "Modelos", value: "5 tamanhos disponíveis" },
          ],
        }),
      ],
    },
    "estufa-compacta": {
      title: "Estufa Compacta de Secagem para Serigrafia | Phenix Máquinas",
      description:
        "Estufa compacta de secagem para serigrafia e estamparia com controle térmico, esteira contínua e operação estável para pequenas e médias produções.",
      canonicalPath: "/estufa-compacta-secagem-serigrafia",
      keywords: [
        "estufa compacta serigrafia",
        "estufa de secagem para silk screen",
        "secagem de estampas",
      ],
      openGraphType: "product" as const,
      structuredData: [
        organizationSchema,
        createProductSchema({
          name: "Estufa Compacta de Secagem",
          description:
            "Estufa compacta para secagem de peças serigráficas com controle térmico e esteira contínua.",
          path: "/estufa-compacta-secagem-serigrafia",
          category: "Estufa para serigrafia",
        }),
      ],
    },
    "estufa-industrial": {
      title: "Estufa Industrial para Cura Têxtil | Phenix Máquinas",
      description:
        "Estufa industrial para cura têxtil e secagem de tinta serigráfica com alto desempenho térmico para produção contínua e acabamento uniforme.",
      canonicalPath: "/estufa-industrial-cura-textil",
      keywords: [
        "estufa industrial cura têxtil",
        "estufa para secagem de tinta",
        "cura têxtil serigrafia",
      ],
      openGraphType: "product" as const,
      structuredData: [
        organizationSchema,
        createProductSchema({
          name: "Estufa Industrial de Alto Desempenho",
          description:
            "Estufa industrial para cura têxtil e secagem de impressões serigráficas em ambiente de produção contínua.",
          path: "/estufa-industrial-cura-textil",
          category: "Estufa industrial para estamparia têxtil",
        }),
      ],
    },
    esteira: {
      title: "Esteira Transportadora Industrial | Phenix Máquinas",
      description:
        "Esteira transportadora industrial para integração de processos em serigrafia, secagem e movimentação contínua de peças em linha de produção.",
      canonicalPath: "/esteira-transportadora-industrial",
      keywords: [
        "esteira transportadora industrial",
        "esteira para serigrafia",
        "movimentação contínua de peças",
      ],
      openGraphType: "product" as const,
      structuredData: [
        organizationSchema,
        createProductSchema({
          name: "Esteira Transportadora Industrial",
          description:
            "Esteira transportadora industrial para integrar etapas produtivas de serigrafia e secagem.",
          path: "/esteira-transportadora-industrial",
          category: "Esteira transportadora industrial",
        }),
      ],
    },
    "estufa-tunel": {
      title: "Estufa Túnel de Secagem Contínua | Phenix Máquinas",
      description:
        "Estufa túnel de secagem contínua para serigrafia e estamparia com controle térmico e esteira integrada para alto volume de produção.",
      canonicalPath: "/estufa-tunel-secagem-continua",
      keywords: [
        "estufa túnel serigrafia",
        "secagem contínua estamparia",
        "túnel de cura têxtil",
      ],
      openGraphType: "product" as const,
      structuredData: [
        organizationSchema,
        createProductSchema({
          name: "Estufa Túnel de Secagem Contínua",
          description:
            "Estufa túnel com esteira integrada para secagem contínua em linhas de serigrafia e estamparia.",
          path: "/estufa-tunel-secagem-continua",
          category: "Estufa túnel para serigrafia",
        }),
      ],
    },
    "mesa-exposicao": {
      title: "Mesa de Exposição UV Profissional | Phenix Máquinas",
      description:
        "Mesa de exposição UV profissional para gravação de matrizes serigráficas com excelente definição, vácuo e operação segura em ambiente técnico.",
      canonicalPath: "/mesa-exposicao-uv-serigrafia",
      keywords: [
        "mesa de exposição UV profissional",
        "exposição de matrizes serigráficas",
        "mesa UV serigrafia",
      ],
      openGraphType: "product" as const,
      structuredData: [
        organizationSchema,
        createProductSchema({
          name: "Mesa de Exposição UV Profissional",
          description:
            "Mesa de exposição UV profissional para sensibilização e gravação de matrizes serigráficas.",
          path: "/mesa-exposicao-uv-serigrafia",
          category: "Mesa de exposição UV",
        }),
      ],
    },
    "misturador-tintas": {
      title: "Misturador de Tintas Industrial | Phenix Máquinas",
      description:
        "Misturador de tintas industrial para homogeneização de tintas serigráficas, aditivos e cores com repetibilidade e ganho de produtividade.",
      canonicalPath: "/misturador-tintas",
      keywords: [
        "misturador de tintas industrial",
        "misturador de tinta serigrafia",
        "homogeneização de tintas",
      ],
      openGraphType: "product" as const,
      structuredData: [
        organizationSchema,
        createProductSchema({
          name: "Misturador de Tintas Industrial",
          description:
            "Misturador de tintas industrial para homogeneização de tintas, pigmentos e aditivos usados em serigrafia.",
          path: "/misturador-tintas",
          category: "Misturador industrial",
        }),
      ],
    },
    tutorial: {
      title: "Tutorial de Publicação e Integração | Phenix Máquinas",
      description:
        "Passo a passo temporário para configurar Supabase, Google Places, GitHub e publicação do site da Phenix Máquinas.",
      canonicalPath: "/tutorial-publicacao",
      openGraphType: "website" as const,
      robotsContent: "noindex, nofollow",
      structuredData: [organizationSchema],
    },
    "teste-supabase": {
      title: "Teste Supabase | Phenix Máquinas",
      description:
        "Página temporária para validar a conexão entre o frontend e o banco Supabase.",
      canonicalPath: "/teste-supabase",
      openGraphType: "website" as const,
      robotsContent: "noindex, nofollow",
      structuredData: [organizationSchema],
    },
  };

  return pages[page as keyof typeof pages] ?? pages.home;
}
