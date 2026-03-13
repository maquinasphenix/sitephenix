import { Button } from "./ui/button";
import heroBackground from "figma:asset/d558215449e92d07009dae73717182e1c3eaa8ec.png";
import { motion } from "motion/react";

interface HeroProps {
  onNavigateToProducts?: () => void;
}

export function Hero({ onNavigateToProducts }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProductsClick = () => {
    if (onNavigateToProducts) {
      onNavigateToProducts();
    } else {
      scrollToSection("produtos");
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Máquinas Phenix"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/70 to-[#0A0A0A]/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex flex-wrap gap-3 mb-6 bg-[#0A0A0A]/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-[#FF5722]/30"
          >
            <span className="text-[#FF5722] uppercase tracking-wider font-extrabold text-sm md:text-base">
              ROBUSTEZ E PRECISÃO
            </span>
            <span className="text-white">•</span>
            <span className="text-[#FF5722] uppercase tracking-wider font-extrabold text-sm md:text-base">
              ENGENHARIA FUNCIONAL
            </span>
            <span className="text-white">•</span>
            <span className="text-[#FF5722] uppercase tracking-wider font-extrabold text-sm md:text-base">
              OPERAÇÃO CONTÍNUA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)' }}
          >
            Máquinas de Serigrafia e Equipamentos para Estamparia Têxtil de Alta Performance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg text-white mb-6 max-w-2xl leading-relaxed bg-[#0A0A0A]/50 backdrop-blur-sm p-4 rounded-lg"
          >
            Equipamentos serigráficos profissionais para impressão em tecido, silk screen e estamparia industrial. Soluções projetadas para ambientes produtivos com máxima confiabilidade e repetibilidade.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              onClick={handleProductsClick}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-6 py-4 text-base font-semibold"
            >
              Conheça Nossos Produtos
            </Button>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Button
                onClick={() => scrollToSection("contato")}
                variant="outline"
                className="bg-white border-2 border-white text-[#374151] hover:bg-gray-100 rounded px-6 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Solicite um Orçamento
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}