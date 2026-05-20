import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Factory,
  Flame,
  Gauge,
  MessageCircle,
  Shield,
  Star,
  Wrench,
} from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5541988043996&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Phenix%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.&type=phone_number&app_absent=0";

const productHighlights = [
  {
    title: "PHENIXTRON",
    description:
      "Impressora serigráfica semiautomática para empresas que precisam de precisão, repetibilidade e produtividade.",
    image: "https://i.postimg.cc/VLBGzkPS/phenixtron-levantamento-paralelo-png.jpg",
  },
  {
    title: "VULCAMPHENIX",
    description:
      "Túnel de secagem para produção contínua, estabilidade térmica e padronização no acabamento.",
    image: "https://i.postimg.cc/PfFZYGbL/vulcamphenix-png.jpg",
  },
  {
    title: "CURADORA UV",
    description:
      "Cura instantânea para impressão técnica e industrial com mais velocidade e acabamento profissional.",
    image: "https://i.postimg.cc/cJg1pjtx/curadora-uv-phenix-png.jpg",
  },
  {
    title: "FLASH CURE",
    description:
      "Equipamento auxiliar para cura intermediária, ideal para produção têxtil com múltiplas cores.",
    image: "https://i.postimg.cc/jd4bBT86/flash-cure-phenix-png.jpg",
  },
];

const advantages = [
  {
    icon: Shield,
    title: "Robustez Estrutural",
    text: "Máquinas projetadas para operação real, com estrutura resistente e foco em alta durabilidade.",
  },
  {
    icon: Cpu,
    title: "Engenharia Funcional",
    text: "Soluções desenvolvidas para resolver gargalos técnicos da produção serigráfica.",
  },
  {
    icon: Gauge,
    title: "Repetibilidade",
    text: "Mais estabilidade entre ciclos, menor variação operacional e melhor padronização entre peças.",
  },
  {
    icon: Flame,
    title: "Operação Contínua",
    text: "Equipamentos preparados para rotinas produtivas intensas, com menos paradas e mais eficiência.",
  },
];

const stats = [
  { number: "25+", label: "Anos de experiência" },
  { number: "5,0", label: "Nota média no Google" },
  { number: "100%", label: "Atendimento especializado" },
  { number: "Nacional", label: "Atuação no mercado" },
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

export function MaintenancePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#FF5722]/20">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div>
            <div className="text-xl md:text-3xl font-extrabold tracking-wider">
              PHENIX
            </div>
            <div className="text-[9px] md:text-xs text-[#FFB199] uppercase tracking-[0.22em]">
              Máquinas para Serigrafia
            </div>
          </div>

          <Button
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-4 md:px-7 py-4 md:py-5 text-xs md:text-base font-bold shadow-[0_0_35px_rgba(255,87,34,.45)]"
          >
            <MessageCircle className="mr-1 md:mr-2" size={18} />
            💬 WhatsApp
          </Button>
        </div>
      </header>

      <section className="relative min-h-screen pt-24 md:pt-28 pb-14 md:pb-16 flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,87,34,.35),transparent_28%),radial-gradient(circle_at_85%_5%,rgba(255,183,77,.16),transparent_28%),radial-gradient(circle_at_70%_80%,rgba(255,87,34,.20),transparent_34%),linear-gradient(180deg,#050505_0%,#111111_48%,#050505_100%)]" />
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.18)_1px,transparent_1px)] bg-[size:96px_96px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#FF5722]/15 border border-[#FF5722]/50 text-[#FFB199] rounded-full px-4 md:px-5 py-2 mb-5 shadow-[0_0_30px_rgba(255,87,34,.20)]">
                <Wrench size={18} />
                <span className="font-extrabold text-[10px] md:text-xs uppercase tracking-[0.18em] md:tracking-[0.22em]">
                  Site em manutenção
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-[#FF5722]/40 bg-gradient-to-br from-[#FF5722]/20 via-white/[0.06] to-black/20 p-5 md:p-8 mb-8 shadow-[0_0_55px_rgba(255,87,34,.22)]">
                <div className="absolute -right-16 -top-16 w-44 h-44 bg-[#FF5722]/30 blur-[60px] rounded-full" />
                <div className="relative z-10">
                  <p className="text-[#FFB199] uppercase tracking-[0.20em] md:tracking-[0.24em] text-[10px] md:text-xs font-black mb-3">
                    Aviso importante
                  </p>
                  <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
                    Nosso site está em manutenção. Nossa produção não.
                  </h1>
                  <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                    Estamos trabalhando em uma nova experiência digital para apresentar ainda melhor tudo o que a Phenix construiu ao longo de mais de 25 anos de mercado. Enquanto isso, aproveite para conhecer nossa história, nossas máquinas e entender por que empresas de todo o Brasil escolhem a Phenix quando precisam de robustez, precisão e operação contínua.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-sm uppercase tracking-[0.16em] md:tracking-[0.20em] text-gray-300 mb-5">
                <span>Robustez e Precisão</span>
                <span className="text-[#FF5722]">•</span>
                <span>Engenharia Funcional</span>
                <span className="text-[#FF5722]">•</span>
                <span>Operação Contínua</span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-7">
                25 anos criando máquinas para quem leva produção a sério.
              </h2>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                Enquanto o novo site está sendo finalizado, nossa equipe segue atendendo normalmente. Conheça algumas das nossas soluções para serigrafia industrial, silk screen, estamparia têxtil, cura UV, secagem e gravação de matrizes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="bg-green-500 hover:bg-green-600 text-white rounded px-7 md:px-9 py-6 md:py-7 text-base md:text-lg font-extrabold shadow-[0_0_35px_rgba(34,197,94,.35)]"
                >
                  <MessageCircle className="mr-2" size={22} />
                  💬 Solicitar orçamento agora
                </Button>

                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  variant="outline"
                  className="border-2 border-[#FF5722]/70 text-white bg-black/30 hover:bg-[#FF5722] hover:border-[#FF5722] rounded px-7 md:px-9 py-6 md:py-7 text-base md:text-lg font-extrabold"
                >
                  Conhecer soluções
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/[0.06] border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
                  >
                    <div className="text-2xl md:text-3xl font-black text-[#FF5722]">
                      {stat.number}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-[#FF5722]/25 blur-[70px] rounded-full" />
              <div className="relative rounded-[2rem] md:rounded-[2.5rem] border border-[#FF5722]/25 bg-gradient-to-br from-white/10 to-white/[0.03] p-4 shadow-[0_0_70px_rgba(255,87,34,.22)]">
                <div className="absolute top-5 left-5 bg-black/70 border border-[#FF5722]/40 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#FFB199]">
                  Alta performance
                </div>
                <img
                  src="https://i.postimg.cc/VLBGzkPS/phenixtron-levantamento-paralelo-png.jpg"
                  alt="Máquina Phenix"
                  className="w-full h-[280px] sm:h-[380px] md:h-[520px] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,.18),transparent_38%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14">
            <p className="text-[#FF5722] uppercase tracking-[0.22em] md:tracking-[0.28em] text-xs md:text-sm font-extrabold mb-4">
              Por que algumas máquinas produzem mais do que outras?
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Porque estrutura, engenharia e suporte mudam o resultado da produção.
            </h2>
            <p className="text-gray-400 mt-5 text-base md:text-lg">
              O empresário não precisa apenas de uma máquina. Precisa de estabilidade, orientação técnica e confiança para vender mais sem travar a operação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group bg-[#101010] border border-white/10 hover:border-[#FF5722]/70 rounded-3xl p-6 md:p-8 min-h-[200px] md:min-h-[220px] shadow-[0_0_40px_rgba(0,0,0,.35)] transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FF5722]/15 border border-[#FF5722]/40 flex items-center justify-center mb-6 md:mb-8 text-[#FF5722] group-hover:bg-[#FF5722] group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4">
                  {item.title}
                </h3>
                <div className="w-20 h-1 bg-[#FF5722] mb-4" />
                <p className="text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-[#070707]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12 md:mb-14">
            <p className="text-[#FF5722] uppercase tracking-[0.22em] md:tracking-[0.28em] text-xs md:text-sm font-extrabold mb-4">
              Linha Phenix Máquinas
            </p>
            <h2 className="text-3xl md:text-6xl font-black leading-tight">
              Equipamentos para cada etapa da serigrafia profissional.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7 max-w-6xl mx-auto">
            {productHighlights.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem] bg-gradient-to-br from-[#171717] to-[#090909] border border-white/10 hover:border-[#FF5722]/70 shadow-2xl"
              >
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#FF5722]/20 blur-[70px] rounded-full" />
                <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] xl:grid-cols-[1fr_320px] gap-5 md:gap-6 items-center p-5 md:p-8 relative z-10">
                  <div className="order-2 md:order-1">
                    <span className="text-[#FF5722] text-xs font-extrabold uppercase tracking-[0.30em]">
                      EXCLUSIVO
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black mt-3 mb-4">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6 text-base md:text-lg">
                      {product.description}
                    </p>
                    <Button
                      onClick={() => window.open(whatsappUrl, "_blank")}
                      className="w-full sm:w-auto bg-[#FF5722] hover:bg-[#E64A19] rounded px-6 py-5 font-extrabold"
                    >
                      Solicitar orçamento
                    </Button>
                  </div>

                  <div className="order-1 md:order-2 bg-white rounded-xl md:rounded-none min-h-[230px] md:min-h-[260px] flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[230px] md:h-[260px] object-contain p-3 md:p-4"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(255,87,34,.25),transparent_30%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#FF5722] uppercase tracking-[0.22em] md:tracking-[0.28em] text-xs md:text-sm font-extrabold mb-4">
                Experiência que faz a diferença
              </p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                Desde 2001, uma referência nacional em máquinas para serigrafia.
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-5">
                A Phenix Indústria de Máquinas atua no mercado serigráfico brasileiro desenvolvendo equipamentos para impressão, gravação, secagem, cura e apoio produtivo.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                Nossa missão é atender as necessidades do mercado com visão de futuro, capacitação técnica e aprimoramento contínuo dos produtos.
              </p>

              <div className="space-y-4">
                {[
                  "Máquinas para silk screen e serigrafia industrial",
                  "Equipamentos para estamparia têxtil profissional",
                  "Soluções para cura UV, secagem e gravação de matrizes",
                  "Atendimento especializado para escolha do equipamento",
                ].map((item) => (
                  <div key={item} className="flex items-start md:items-center gap-3">
                    <CheckCircle2 className="text-[#FF5722] shrink-0 mt-0.5 md:mt-0" size={24} />
                    <span className="text-gray-200 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[1.75rem] md:rounded-[2rem] bg-gradient-to-br from-[#151515] to-[#070707] border border-[#FF5722]/20 p-5 md:p-8 shadow-[0_0_60px_rgba(255,87,34,.12)]"
            >
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-black/50 border border-white/10 rounded-2xl p-4 md:p-6"
                  >
                    <div className="text-3xl md:text-4xl font-black text-[#FF5722]">
                      {stat.number}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white rounded px-8 py-7 text-lg font-extrabold"
              >
                <MessageCircle className="mr-2" size={22} />
                💬 Falar com especialista
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-[#070707]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14">
            <p className="text-[#FF5722] uppercase tracking-[0.22em] md:tracking-[0.28em] text-xs md:text-sm font-extrabold mb-4">
              Depoimentos
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Clientes satisfeitos com nossa qualidade.
            </h2>
            <p className="text-gray-400 mt-4 text-base md:text-lg">
              Avaliações em destaque de clientes e parceiros da Phenix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl bg-gradient-to-b from-[#171717] to-[#090909] border border-white/10 p-6 md:p-7 shadow-xl"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={19}
                      className="fill-[#FF5722] text-[#FF5722]"
                    />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-7">
                  “{review.text}”
                </p>
                <div className="font-black text-lg">{review.name}</div>
                <div className="text-sm text-[#FFB199]">{review.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8f1f00] via-[#FF5722] to-[#ff8a3d]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#fff,transparent_18%),radial-gradient(circle_at_80%_80%,#000,transparent_24%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Sua produção merece máquinas à altura do seu crescimento.
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-9">
              Estamos em manutenção, mas nosso time segue atendendo normalmente. Enquanto trabalhamos no novo site, fale com a equipe Phenix e conheça o equipamento ideal para sua operação.
            </p>

            <Button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white rounded px-8 md:px-10 py-7 md:py-8 text-lg md:text-xl font-black shadow-[0_0_45px_rgba(34,197,94,.45)]"
            >
              <MessageCircle className="mr-2" size={26} />
              💬 Conversar com a Phenix no WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 text-gray-500 py-9 text-center px-4">
        <p className="text-gray-300 font-bold">Phenix Máquinas para Serigrafia</p>
        <p className="text-sm mt-1">
          Máquinas para serigrafia, silk screen e estamparia têxtil profissional.
        </p>
      </footer>
    </div>
  );
}
