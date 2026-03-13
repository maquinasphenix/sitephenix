import { Factory, Cpu, Hand, Flame, Shirt, Wrench, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { useState } from "react";
import estufaCompacta from "figma:asset/c8b8cc5616caefc6f994ac29f6a187e6dfea6a94.png";
import estufaIndustrial from "figma:asset/18135b82e31a86e596cb05211800c9201f3ab850.png";
import esteiraTransportadora from "figma:asset/f167f5cb0d1405a53a50165dbeb1c0e99d5267ee.png";
import estufaTunel from "figma:asset/3dfe3bba6d6e2e0cca6fe29cc7d83e3bfd433437.png";
import copymasterImg from "figma:asset/8844910539f927b31804c8e3cda008ffa903f5c8.png";
import mesaExposicaoImg from "figma:asset/5d6a95de592883158147a5b48ccc31f3c3522d76.png";
import misturadorImg from "figma:asset/7df05c055d23ea38d257816619777858d8c0e193.png";

const categories = [
  {
    title: "LABORATÓRIO",
    icon: Factory,
    description: "Equipamentos para testes e desenvolvimento",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwZXF1aXBtZW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzAzMDYzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hasProducts: true,
  },
  {
    title: "SEMI AUTOMÁTICAS",
    icon: Cpu,
    description: "Máquinas com automação parcial para maior produtividade",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pJTIwYXV0b21hdGljJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc3MDMwNjMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    hasProducts: true,
  },
  {
    title: "MANUAIS",
    icon: Hand,
    description: "Máquinas operadas manualmente para controle total",
    image: "https://images.unsplash.com/photo-1581508512961-0e3b9524db40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51YWwlMjBzY3JlZW4lMjBwcmludGluZyUyMHByZXNzfGVufDF8fHx8MTc3MDMwNjMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "SECAGEM / CURA",
    icon: Flame,
    description: "Equipamentos para secagem e cura de tintas",
    image: "https://images.unsplash.com/photo-1597221829180-416a158a205b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY3VyaW5nJTIwb3ZlbnxlbnwxfHx8fDE3NzAzMDYzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hasProducts: true,
  },
  {
    title: "TÊXTIL",
    icon: Shirt,
    description: "Soluções especializadas para impressão têxtil",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea1f9eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwcHJpbnRpbmclMjBpbmR1c3RyeXxlbnwxfHx8fDE3NzAzMDYzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "GARRAS / ACESSÓRIOS",
    icon: Wrench,
    description: "Garras, acessórios e ferramentas complementares",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdG9vbHMlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzAzMDYzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const labProducts = [
  {
    title: "Copymaster - Mesa UV Digital",
    description: "Sistema avançado com controle digital e vácuo integrado",
    image: copymasterImg,
  },
  {
    title: "Mesa de Exposição UV",
    description: "Equipamento profissional para gravação de matrizes",
    image: mesaExposicaoImg,
  },
  {
    title: "Misturador de Tintas",
    description: "Homogeneização perfeita de cores e aditivos",
    image: misturadorImg,
  },
];

const dryingProducts = [
  {
    title: "Estufa Compacta de Secagem",
    description: "Equipamento compacto para pequenas e médias produções",
    image: estufaCompacta,
  },
  {
    title: "Estufa Industrial",
    description: "Alta capacidade para produções em grande escala",
    image: estufaIndustrial,
  },
  {
    title: "Esteira Transportadora",
    description: "Integração entre processos de produção",
    image: esteiraTransportadora,
  },
  {
    title: "Estufa Túnel",
    description: "Secagem contínua de alta performance",
    image: estufaTunel,
  },
];

interface ProductsPageProps {
  onBack: () => void;
  onNavigateToProduct?: (productPath: string) => void;
  onNavigateToCopymaster?: () => void;
  onNavigateToEstufaCompacta?: () => void;
  onNavigateToEstufaIndustrial?: () => void;
  onNavigateToEsteira?: () => void;
  onNavigateToEstufaTunel?: () => void;
  onNavigateToMesaExposicao?: () => void;
  onNavigateToMisturadorTintas?: () => void;
}

export function ProductsPage({ 
  onBack, 
  onNavigateToProduct, 
  onNavigateToCopymaster,
  onNavigateToEstufaCompacta,
  onNavigateToEstufaIndustrial,
  onNavigateToEsteira,
  onNavigateToEstufaTunel,
  onNavigateToMesaExposicao,
  onNavigateToMisturadorTintas
}: ProductsPageProps) {
  const [showDryingProducts, setShowDryingProducts] = useState(false);
  const [showLabProducts, setShowLabProducts] = useState(false);

  const scrollToSection = (sectionId: string) => {
    onBack();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleCategoryClick = (categoryTitle: string) => {
    if (categoryTitle === "LABORATÓRIO") {
      setShowLabProducts(true);
    } else if (categoryTitle === "SEMI AUTOMÁTICAS" && onNavigateToProduct) {
      onNavigateToProduct("/impressora-serigrafica-semi-automatica-phenixtron");
    } else if (categoryTitle === "SECAGEM / CURA") {
      setShowDryingProducts(true);
    }
  };

  const handleDryingProductClick = (index: number) => {
    switch (index) {
      case 0:
        onNavigateToEstufaCompacta?.();
        break;
      case 1:
        onNavigateToEstufaIndustrial?.();
        break;
      case 2:
        onNavigateToEsteira?.();
        break;
      case 3:
        onNavigateToEstufaTunel?.();
        break;
    }
  };

  const handleLabProductClick = (index: number) => {
    switch (index) {
      case 0:
        onNavigateToCopymaster?.();
        break;
      case 1:
        onNavigateToMesaExposicao?.();
        break;
      case 2:
        onNavigateToMisturadorTintas?.();
        break;
    }
  };

  // Se está mostrando produtos de secagem/cura
  if (showDryingProducts) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A0A0A] text-white py-6 md:py-8 sticky top-0 z-40 shadow-lg"
        >
          <div className="container mx-auto px-4">
            <Button
              onClick={() => setShowDryingProducts(false)}
              variant="ghost"
              className="text-white hover:bg-white/10 mb-4 -ml-2 touch-manipulation"
            >
              <ArrowLeft className="mr-2" size={20} />
              Voltar para Categorias
            </Button>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-3">
              Equipamentos de Secagem e Cura
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl">
              Linha completa de estufas e sistemas de secagem para serigrafia e estamparia têxtil
            </p>
          </div>
        </motion.div>

        {/* Products Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {dryingProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => handleDryingProductClick(index)}
                  className="group relative overflow-hidden rounded-2xl shadow-xl bg-white cursor-pointer"
                >
                  {/* Image */}
                  <div className="h-64 md:h-80 overflow-hidden bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 p-4"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 bg-gradient-to-t from-white to-gray-50">
                    <h3 className="text-xl md:text-2xl font-extrabold mb-3 text-[#0A0A0A] leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-[#374151] mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#FF5722] font-bold">
                      Ver Detalhes
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>

                  {/* Orange Border on Hover */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#FF5722] transition-colors duration-300 rounded-2xl pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-16 md:py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4 text-[#0A0A0A]">
              Dúvidas Sobre Qual Equipamento Escolher?
            </h2>
            <p className="text-[#374151] text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Nossa equipe técnica pode ajudar você a escolher o modelo ideal para sua produção
            </p>
            <Button
              onClick={() => window.open("https://wa.me/554136331008", "_blank")}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 py-6 text-base md:text-lg font-bold shadow-lg"
            >
              Falar com Especialista
            </Button>
          </div>
        </motion.section>
      </div>
    );
  }

  // Se está mostrando produtos de laboratório
  if (showLabProducts) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A0A0A] text-white py-6 md:py-8 sticky top-0 z-40 shadow-lg"
        >
          <div className="container mx-auto px-4">
            <Button
              onClick={() => setShowLabProducts(false)}
              variant="ghost"
              className="text-white hover:bg-white/10 mb-4 -ml-2 touch-manipulation"
            >
              <ArrowLeft className="mr-2" size={20} />
              Voltar para Categorias
            </Button>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-3">
              Equipamentos de Laboratório
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl">
              Linha completa de equipamentos para testes e desenvolvimento
            </p>
          </div>
        </motion.div>

        {/* Products Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {labProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => handleLabProductClick(index)}
                  className="group relative overflow-hidden rounded-2xl shadow-xl bg-white cursor-pointer"
                >
                  {/* Image */}
                  <div className="h-64 md:h-80 overflow-hidden bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 p-4"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 bg-gradient-to-t from-white to-gray-50">
                    <h3 className="text-xl md:text-2xl font-extrabold mb-3 text-[#0A0A0A] leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-[#374151] mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#FF5722] font-bold">
                      Ver Detalhes
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>

                  {/* Orange Border on Hover */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#FF5722] transition-colors duration-300 rounded-2xl pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-16 md:py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4 text-[#0A0A0A]">
              Dúvidas Sobre Qual Equipamento Escolher?
            </h2>
            <p className="text-[#374151] text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Nossa equipe técnica pode ajudar você a escolher o modelo ideal para sua produção
            </p>
            <Button
              onClick={() => window.open("https://wa.me/554136331008", "_blank")}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 py-6 text-base md:text-lg font-bold shadow-lg"
            >
              Falar com Especialista
            </Button>
          </div>
        </motion.section>
      </div>
    );
  }

  // Vista principal de categorias
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#0A0A0A] text-white py-6 md:py-8 sticky top-0 z-40 shadow-lg"
      >
        <div className="container mx-auto px-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-4 -ml-2 touch-manipulation"
          >
            <ArrowLeft className="mr-2" size={20} />
            Voltar
          </Button>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-3">
            Nossos Produtos
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl">
            Explore nossa linha completa de equipamentos serigráficos desenvolvidos
            com tecnologia de ponta
          </p>
        </div>
      </motion.div>

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-1 h-6 md:h-8 bg-[#FF5722]"></div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A0A0A]">
                MÁQUINAS
              </h2>
            </div>
            <p className="text-[#374151] text-base md:text-lg max-w-3xl">
              Selecione uma categoria para conhecer nossos produtos
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (category.hasProducts) {
                    handleCategoryClick(category.title);
                  }
                }}
                className={`group relative overflow-hidden rounded-2xl shadow-xl bg-white ${
                  category.hasProducts ? 'cursor-pointer' : 'opacity-70'
                } touch-manipulation`}
              >
                {/* Image Background */}
                <div className="h-56 md:h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                  <motion.div
                    className="mb-3 md:mb-4"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    <category.icon className="w-10 h-10 md:w-12 md:h-12 text-[#FF5722]" />
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-extrabold mb-2 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3 md:mb-4">
                    {category.description}
                  </p>

                  {/* Hover Button */}
                  {category.hasProducts && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="inline-flex items-center gap-2 text-[#FF5722] font-bold text-sm md:text-base">
                        Ver Produtos
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Orange Border on Hover */}
                {category.hasProducts && (
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#FF5722] transition-colors duration-300 rounded-2xl pointer-events-none"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="py-16 md:py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4 text-[#0A0A0A]">
            Precisa de Ajuda para Escolher?
          </h2>
          <p className="text-[#374151] text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a encontrar o equipamento
            ideal para suas necessidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 py-6 text-base md:text-lg font-bold shadow-lg touch-manipulation"
            >
              Fale com Especialista
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/554136331008", "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white rounded px-8 py-6 text-base md:text-lg font-bold shadow-lg touch-manipulation"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}