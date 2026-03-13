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
    <section id="home" className="relative flex min-h-screen items-start md:items-center">
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
      <div className="container relative z-10 mx-auto px-4 pb-10 pt-28 sm:pt-32 md:pt-20">
        <div className="max-w-3xl">
          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 grid max-w-xl grid-cols-1 gap-2 rounded-2xl border border-[#FF5722]/30 bg-[#0A0A0A]/90 px-4 py-4 backdrop-blur-sm sm:inline-flex sm:flex-wrap sm:gap-3 sm:rounded-lg sm:py-3"
          >
            <span className="text-[#FF5722] uppercase tracking-wider font-extrabold text-sm md:text-base">
              ROBUSTEZ E PRECISÃO
            </span>
            <span className="hidden text-white sm:inline">•</span>
            <span className="text-[#FF5722] uppercase tracking-wider font-extrabold text-sm md:text-base">
              ENGENHARIA FUNCIONAL
            </span>
            <span className="hidden text-white sm:inline">•</span>
            <span className="text-[#FF5722] uppercase tracking-wider font-extrabold text-sm md:text-base">
              OPERAÇÃO CONTÍNUA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 max-w-[12ch] text-4xl font-extrabold leading-[0.98] text-white sm:max-w-none sm:text-5xl md:text-5xl"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)' }}
          >
            Máquinas de Serigrafia e Equipamentos para Estamparia Têxtil de Alta Performance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-6 max-w-xl rounded-2xl bg-[#0A0A0A]/55 p-4 text-base leading-8 text-white backdrop-blur-sm md:max-w-2xl md:rounded-lg md:text-lg"
          >
            Equipamentos serigráficos profissionais para impressão em tecido, silk screen e estamparia industrial. Soluções projetadas para ambientes produtivos com máxima confiabilidade e repetibilidade.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button
              onClick={handleProductsClick}
              className="min-h-14 rounded-xl bg-[#FF5722] px-6 py-4 text-base font-semibold text-white hover:bg-[#E64A19] sm:rounded"
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
                className="min-h-14 rounded-xl border-2 border-white bg-white px-6 py-4 text-base font-semibold text-[#374151] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl sm:rounded"
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
