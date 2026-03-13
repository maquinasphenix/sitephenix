import { Button } from "./ui/button";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import facilityImage from "figma:asset/46d5eb33095eb18067dbeca7610228bfac50a3f9.png";
import factoryImage from "figma:asset/de76c7c0e8174f9aec6e08122f6dba94b8c3527f.png";
import { motion } from "motion/react";

const highlights = [
  {
    icon: Award,
    number: "25+",
    label: "Anos de Experiência",
  },
  {
    icon: Users,
    number: "100%",
    label: "Atendimento Especializado",
  },
  {
    icon: Target,
    number: "Nacional",
    label: "Liderança de Mercado",
  },
  {
    icon: TrendingUp,
    number: "Tecnologia",
    label: "de Ponta",
  },
];

export function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FF5722] text-white px-6 py-2 rounded-full mb-4">
            <span className="font-bold uppercase tracking-wider text-sm">
              Empresa Líder no Mercado
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0A0A0A]">
            25 Anos de Referência em Máquinas de Serigrafia e Estamparia
          </h2>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Desde 2001, consolidada como autoridade nacional em equipamentos serigráficos, máquinas para impressão têxtil e soluções completas para silk screen de alta performance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-50 rounded-lg p-6 text-center border-2 border-gray-100 hover:border-[#FF5722] transition-colors cursor-pointer"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              >
                <item.icon className="w-10 h-10 text-[#FF5722] mx-auto mb-3" />
              </motion.div>
              <div className="text-3xl font-extrabold text-[#0A0A0A] mb-2">
                {item.number}
              </div>
              <div className="text-sm text-[#374151] font-semibold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={facilityImage}
              alt="Linha de equipamentos Phenix Máquinas"
              className="w-full h-[450px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-extrabold mb-6 text-[#0A0A0A]">
              Experiência que Faz a Diferença
            </h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#374151] leading-relaxed">
                A <strong>Phenix Indústria de Máquinas</strong> é referência
                absoluta no mercado serigráfico brasileiro. Com mais de{" "}
                <strong className="text-[#FF5722]">duas décadas de atuação</strong>,
                conquistamos nossa posição como líder nacional através do
                compromisso inabalável com qualidade e excelência.
              </p>

              <p className="text-lg text-[#374151] leading-relaxed">
                Oferecemos aos nossos clientes o que há de mais avançado em
                tecnologia serigráfica. Cada equipamento é resultado de anos de
                expertise e desenvolvimento contínuo, garantindo robustez,
                precisão e operação ininterrupta.
              </p>

              <p className="text-lg text-[#374151] leading-relaxed">
                Nossa equipe é formada por profissionais altamente qualificados,
                com vasta experiência e treinamento especializado para oferecer
                atendimento personalizado e eficiente em todas as etapas.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-[#FF5722] p-6 rounded-r-lg mb-8">
              <h4 className="font-bold text-xl text-[#0A0A0A] mb-2">
                Nossa Missão
              </h4>
              <p className="text-[#374151] leading-relaxed">
                Atender as necessidades do mercado com visão de futuro,
                investindo constantemente na capacitação de nossos profissionais
                e no aprimoramento contínuo de nossos produtos.
              </p>
            </div>

            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 py-6 text-lg font-bold shadow-lg"
            >
              Entre em Contato →
            </Button>
          </div>
        </div>

        {/* Additional Image Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-extrabold text-[#0A0A0A] mb-4">
                Infraestrutura Completa
              </h3>
              <p className="text-[#374151] leading-relaxed">
                Instalações modernas e completas em Mandirituba/PR, equipadas
                com tecnologia de ponta para desenvolvimento, fabricação e
                suporte técnico.
              </p>
            </div>
            <div className="md:col-span-2">
              <img
                src={factoryImage}
                alt="Máquina Phenix Máquinas em ambiente produtivo"
                className="w-full h-[300px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
