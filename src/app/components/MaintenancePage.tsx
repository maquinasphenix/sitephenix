import { motion } from "motion/react";
import { Button } from "./ui/button";
import { MessageCircle, Wrench, Shield, Gauge, Factory, ArrowRight } from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5541988043996&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Phenix%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.&type=phone_number&app_absent=0";

const featuredProducts = [
  {
    title: "PHENIXTRON",
    subtitle: "Impressora serigráfica semiautomática para produção industrial",
    image: "https://i.postimg.cc/VLBGzkPS/phenixtron-levantamento-paralelo-png.jpg",
  },
  {
    title: "CURADORA UV PHENIX",
    subtitle: "Cura UV instantânea para impressão técnica e industrial",
    image: "https://i.postimg.cc/cJg1pjtx/curadora-uv-phenix-png.jpg",
  },
  {
    title: "VULCAMPHENIX",
    subtitle: "Túnel de secagem industrial para operação contínua",
    image: "https://i.postimg.cc/PfFZYGbL/vulcamphenix-png.jpg",
  },
  {
    title: "FLASH CURE PHENIX",
    subtitle: "Cura intermediária para estamparia têxtil profissional",
    image: "https://i.postimg.cc/jd4bBT86/flash-cure-phenix-png.jpg",
  },
  {
    title: "MESA TÉRMICA PHENIX",
    subtitle: "Precisão térmica para processos serigráficos",
    image: "https://i.postimg.cc/bJVTZZNR/mesa-termica-phenix-png.jpg",
  },
  {
    title: "TANQUINHO DE LAVAR QUADROS",
    subtitle: "Apoio técnico para limpeza e recuperação de matrizes",
    image: "https://i.postimg.cc/650tPZz6/tanquinho-de-lavar-quadros-phenix-png.jpg",
  },
];

const pillars = [
  {
    icon: Shield,
    title: "Robustez e Precisão",
    description:
      "Equipamentos desenvolvidos com estrutura robusta e engenharia de precisão para desempenho consistente em ambientes industriais exigentes.",
  },
  {
    icon: Wrench,
    title: "Engenharia Funcional",
    description:
      "Cada equipamento é projetado para demandas técnicas reais, com foco em funcionalidade, eficiência operacional e durabilidade.",
  },
  {
    icon: Gauge,
    title: "Operação Contínua",
    description:
      "Sistemas preparados para estabilidade de processo, repetibilidade e alta produtividade em rotinas profissionais.",
  },
];

export function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,87,34,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0A0A0A] to-[#0A0A0A]" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#FF5722]/15 border border-[#FF5722]/40 text-[#FFB199] rounded-full px-4 py-2 mb-6">
                <Factory size={18} />
                <span className="font-bold text-sm uppercase tracking-[0.18em]">
                  Site em manutenção
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm uppercase tracking-[0.22em] text-gray-300 mb-5">
                <span>Robustez e Precisão</span>
                <span className="text-[#FF5722]">•</span>
                <span>Engenharia Funcional</span>
                <span className="text-[#FF5722]">•</span>
                <span>Operação Contínua</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Estamos preparando uma nova experiência para apresentar melhor a Phenix.
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                Enquanto nosso site passa por atualização, a Phenix Máquinas segue atendendo empresas que buscam máquinas de serigrafia, equipamentos para estamparia têxtil, cura UV, secagem industrial, gravação de matrizes e soluções para produção profissional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 py-6 text-base md:text-lg font-bold shadow-xl"
                >
                  <MessageCircle className="mr-2" size={22} />
                  💬 Solicitar orçamento no WhatsApp
                </Button>

                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-[#0A0A0A] rounded px-8 py-6 text-base md:text-lg font-bold"
                >
                  Conhecer nossas soluções
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-5">
                Atendimento comercial: (41) 98804-3996
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-[#FF5722]/20 blur-3xl rounded-full" />
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-5 shadow-2xl">
                <img
                  src="https://i.postimg.cc/VLBGzkPS/phenixtron-levantamento-paralelo-png.jpg"
                  alt="Máquina Phenix para serigrafia industrial"
                  className="w-full h-[360px] md:h-[460px] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-block bg-[#FF5722] text-white px-5 py-2 rounded-full mb-4">
              <span className="font-bold uppercase tracking-wider text-xs">
                Máquinas para serigrafia industrial
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Linhas completas de equipamentos serigráficos
            </h2>
            <p className="text-[#374151] text-lg leading-relaxed">
              Desenvolvemos equipamentos para preparação de matrizes, impressão, secagem, cura têxtil e apoio produtivo. Soluções para comunicação visual, silk screen, impressão técnica, adesivos, rótulos e estamparia têxtil profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="h-56 bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-5"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-xl mb-2">
                    {product.title}
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    {product.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 text-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Nossos pilares
            </h2>
            <p className="text-[#374151] text-lg">
              A Phenix não trabalha com soluções genéricas. Desenvolvemos equipamentos para ambientes produtivos reais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#FF5722] text-white rounded-xl flex items-center justify-center mb-5">
                  <pillar.icon size={28} />
                </div>
                <h3 className="font-extrabold text-2xl mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#374151] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
            Precisa de uma máquina para aumentar sua produtividade?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Mesmo durante a atualização do site, nossa equipe segue disponível para orientar sua escolha e montar um orçamento para o equipamento ideal.
          </p>

          <Button
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="bg-green-500 hover:bg-green-600 text-white rounded px-10 py-7 text-lg md:text-xl font-bold shadow-xl"
          >
            <MessageCircle className="mr-2" size={24} />
            💬 Conversar com a Phenix no WhatsApp
          </Button>
        </div>
      </section>

      <footer className="bg-black text-gray-500 py-8 text-center">
        <p>© 2026 Phenix Máquinas para Serigrafia</p>
        <p className="text-sm mt-1">
          Máquinas para serigrafia, silk screen e estamparia têxtil profissional.
        </p>
      </footer>
    </div>
  );
}

