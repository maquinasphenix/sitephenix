import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Factory,
  Gauge,
  MessageCircle,
  Shield,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5541988043996&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Phenix%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.&type=phone_number&app_absent=0";

const products = [
  {
    title: "PHENIXTRON",
    category: "Impressão industrial",
    image: "https://i.postimg.cc/VLBGzkPS/phenixtron-levantamento-paralelo-png.jpg",
  },
  {
    title: "CURADORA UV PHENIX",
    category: "Cura UV",
    image: "https://i.postimg.cc/cJg1pjtx/curadora-uv-phenix-png.jpg",
  },
  {
    title: "VULCAMPHENIX",
    category: "Secagem industrial",
    image: "https://i.postimg.cc/PfFZYGbL/vulcamphenix-png.jpg",
  },
  {
    title: "FLASH CURE PHENIX",
    category: "Estamparia têxtil",
    image: "https://i.postimg.cc/jd4bBT86/flash-cure-phenix-png.jpg",
  },
  {
    title: "MESA TÉRMICA PHENIX",
    category: "Processos manuais",
    image: "https://i.postimg.cc/bJVTZZNR/mesa-termica-phenix-png.jpg",
  },
  {
    title: "TANQUINHO DE LAVAR QUADROS",
    category: "Preparação de matrizes",
    image: "https://i.postimg.cc/650tPZz6/tanquinho-de-lavar-quadros-phenix-png.jpg",
  },
];

const pillars = [
  {
    icon: Shield,
    title: "Robustez e Precisão",
    text: "Equipamentos desenvolvidos com estrutura robusta e engenharia de precisão para garantir desempenho consistente em ambientes industriais exigentes.",
  },
  {
    icon: Wrench,
    title: "Engenharia Funcional",
    text: "Projetos pensados para resolver gargalos reais da produção, com foco em eficiência operacional, ajuste técnico e durabilidade.",
  },
  {
    icon: Gauge,
    title: "Operação Contínua",
    text: "Soluções preparadas para rotinas produtivas intensas, com repetibilidade, estabilidade e suporte para empresas que não podem parar.",
  },
];

const reviews = [
  {
    name: "Silkshop Representações",
    role: "Distribuidor de Equipamentos",
    text: "Excelente atendimento, equipamento de qualidade e confiável. Trabalhamos com a Phenix há anos e sempre recomendamos aos nossos clientes.",
  },
  {
    name: "Luciana Farias",
    role: "Cliente Phenix Máquinas",
    text: "Excelente atendimento, podem comprar sem medo. Recebi o equipamento e fiquei muito satisfeita com o acabamento e o suporte recebido.",
  },
  {
    name: "Jeferson Gonçalves",
    role: "Avaliação no Google",
    text: "Muito bom. Visitei as instalações da Phenix e fiquei impressionado com a estrutura, a organização e a qualidade dos equipamentos.",
  },
];

const stats = [
  { value: "25+", label: "Anos de Experiência" },
  { value: "5,0", label: "Nota Média no Google" },
  { value: "100%", label: "Atendimento Especializado" },
  { value: "Nacional", label: "Atuação no Mercado" },
];

export function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/85 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div>
            <div className="text-2xl font-extrabold tracking-wide">PHENIX</div>
            <div className="text-xs text-gray-400 uppercase tracking-[0.22em]">
              Máquinas para Serigrafia
            </div>
          </div>

          <Button
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="hidden sm:flex bg-green-500 hover:bg-green-600 text-white rounded px-6 py-5 font-bold"
          >
            <MessageCircle className="mr-2" size={20} />
            💬 WhatsApp
          </Button>
        </div>
      </header>

      <section className="relative min-h-screen pt-28 pb-20 flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,87,34,0.22),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.10),transparent_24%),linear-gradient(135deg,#080808_0%,#111827_45%,#080808_100%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#FF5722]/15 border border-[#FF5722]/40 text-[#FFB199] rounded-full px-4 py-2 mb-6">
                <Factory size={18} />
                <span className="font-bold text-xs uppercase tracking-[0.18em]">
                  Site em manutenção estratégica
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm uppercase tracking-[0.18em] text-gray-300 mb-5">
                <span>Robustez e Precisão</span>
                <span className="text-[#FF5722]">•</span>
                <span>Engenharia Funcional</span>
                <span className="text-[#FF5722]">•</span>
                <span>Operação Contínua</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                25 anos de referência em máquinas de serigrafia e estamparia industrial.
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                Desde 2001, a Phenix desenvolve equipamentos serigráficos profissionais para impressão em tecido, silk screen, cura UV, secagem industrial, gravação de matrizes e produção contínua com máxima confiabilidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="bg-green-500 hover:bg-green-600 text-white rounded px-8 py-7 text-base md:text-lg font-bold shadow-xl"
                >
                  <MessageCircle className="mr-2" size={22} />
                  💬 Solicitar orçamento
                </Button>

                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-[#080808] rounded px-8 py-7 text-base md:text-lg font-bold"
                >
                  Conhecer equipamentos
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/8 border border-white/10 rounded-2xl p-4"
                  >
                    <div className="text-2xl md:text-3xl font-extrabold text-[#FF5722]">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-[#FF5722]/20 blur-3xl rounded-full" />
              <div className="relative bg-white/5 border border-white/10 rounded-[2rem] p-5 shadow-2xl">
                <div className="absolute top-5 right-5 bg-[#FF5722] text-white rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider">
                  Alta Performance
                </div>
                <img
                  src="https://i.postimg.cc/VLBGzkPS/phenixtron-levantamento-paralelo-png.jpg"
                  alt="Máquina Phenix para serigrafia industrial"
                  className="w-full h-[360px] md:h-[500px] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#FF5722] text-white px-5 py-2 rounded-full mb-5">
                <Award size={18} />
                <span className="font-bold uppercase tracking-wider text-xs">
                  Experiência que faz a diferença
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Tecnologia, estrutura e suporte para empresas que levam produção a sério.
              </h2>

              <p className="text-[#374151] text-lg leading-relaxed mb-5">
                A Phenix Indústria de Máquinas é referência no mercado serigráfico brasileiro. Com mais de duas décadas de atuação, consolidou sua posição com foco em qualidade, atendimento especializado e desenvolvimento contínuo.
              </p>

              <p className="text-[#374151] text-lg leading-relaxed mb-8">
                Cada equipamento é pensado para ambientes produtivos reais, onde repetibilidade, segurança, acabamento e operação contínua fazem diferença no faturamento.
              </p>

              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 py-6 text-base font-bold shadow-lg"
              >
                Entre em contato
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-xl"
            >
              <h3 className="text-2xl font-extrabold mb-5">
                Nossa missão
              </h3>
              <p className="text-[#374151] text-lg leading-relaxed mb-6">
                Atender as necessidades do mercado com visão de futuro, investindo constantemente na capacitação de nossos profissionais e no aprimoramento contínuo de nossos produtos.
              </p>

              <div className="space-y-4">
                {[
                  "Máquinas para serigrafia industrial",
                  "Equipamentos para estamparia têxtil",
                  "Soluções para silk screen profissional",
                  "Cura UV, secagem e preparação de matrizes",
                  "Atendimento técnico especializado",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#FF5722]" size={22} />
                    <span className="font-semibold text-[#0A0A0A]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 text-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-block bg-[#0A0A0A] text-white px-5 py-2 rounded-full mb-4">
              <span className="font-bold uppercase tracking-wider text-xs">
                Linha de equipamentos Phenix Máquinas
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Máquinas para todas as etapas da produção
            </h2>
            <p className="text-[#374151] text-lg leading-relaxed">
              Da preparação de matrizes à impressão, cura, secagem e apoio produtivo: uma linha completa para empresas que buscam eficiência e segurança operacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="h-56 bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-5"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#FF5722] font-bold text-xs uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-extrabold text-xl mt-2 mb-3">
                    {product.title}
                  </h3>
                  <Button
                    onClick={() => window.open(whatsappUrl, "_blank")}
                    variant="outline"
                    className="border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722] hover:text-white rounded px-5 py-4 font-bold"
                  >
                    Solicitar orçamento
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Nossos pilares
            </h2>
            <p className="text-gray-300 text-lg">
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
                className="bg-white/8 border border-white/10 rounded-3xl p-8 shadow-xl"
              >
                <div className="w-14 h-14 bg-[#FF5722] text-white rounded-xl flex items-center justify-center mb-5">
                  <pillar.icon size={28} />
                </div>
                <h3 className="font-extrabold text-2xl mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-5 py-2 rounded-full mb-4">
              <Star size={18} className="fill-yellow-500 text-yellow-500" />
              <span className="font-bold uppercase tracking-wider text-xs">
                Avaliações em destaque no Google
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Clientes satisfeitos com nossa qualidade
            </h2>
            <p className="text-[#374151] text-lg">
              Nota 5,0 no Google com avaliações reais de clientes e parceiros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-[#374151] leading-relaxed mb-6">
                  “{review.text}”
                </p>
                <div className="font-extrabold text-[#0A0A0A]">
                  {review.name}
                </div>
                <div className="text-sm text-gray-500">
                  {review.role}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "11", label: "Avaliações em destaque" },
              { value: "5,0", label: "Nota média" },
              { value: "25+", label: "Anos em equipamentos" },
              { value: "24h", label: "Suporte técnico" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#0A0A0A] text-white rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-[#FF5722]">
                  {item.value}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-extrabold mb-6">
            Precisa aumentar sua produtividade com mais segurança?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-95">
            Mesmo durante a atualização do site, nossa equipe técnica está disponível para indicar o equipamento ideal para sua operação.
          </p>

          <Button
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="bg-green-500 hover:bg-green-600 text-white rounded px-10 py-8 text-lg md:text-xl font-bold shadow-2xl"
          >
            <MessageCircle className="mr-2" size={26} />
            💬 Conversar com a Phenix no WhatsApp
          </Button>
        </div>
      </section>

      <footer className="bg-black text-gray-500 py-8 text-center">
        <p className="font-semibold text-gray-300">
          Phenix Máquinas para Serigrafia
        </p>
        <p className="text-sm mt-1">
          Máquinas para serigrafia, silk screen e estamparia têxtil profissional.
        </p>
      </footer>
    </div>
  );
}
