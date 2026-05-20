import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  AlertTriangle,
  Cpu,
  Factory,
  Flame,
  Gauge,
  Hand,
  Headphones,
  MapPin,
  MessageCircle,
  Shield,
  Target,
  Wrench,
} from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5541988043996&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Phenix%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.&type=phone_number&app_absent=0";

const stats = [
  {
    icon: Shield,
    number: "25+",
    title: "ANOS",
    text: "de experiência",
  },
  {
    icon: Wrench,
    number: "100%",
    title: "ATENDIMENTO",
    text: "especializado",
  },
  {
    icon: MapPin,
    number: "NACIONAL",
    title: "",
    text: "atuação no mercado",
  },
  {
    icon: Headphones,
    number: "24h",
    title: "SUPORTE",
    text: "técnico",
  },
];

const categories = [
  {
    title: "MÁQUINAS",
    highlight: "SEMI AUTOMÁTICAS",
    icon: Cpu,
    products: [
      {
        name: "PHENIXTRON LEVANTAMENTO PARALELO",
        image: "https://i.postimg.cc/VLBGzkPS/phenixtron-levantamento-paralelo-png.jpg",
      },
      {
        name: "IMPRESSORA SERIGRÁFICA SEMI AUTOMÁTICA BOCA DE JACARÉ",
        image: "https://i.postimg.cc/y8YQfCgc/phenixtron-boca-de-jacare-png.png",
      },
    ],
  },
  {
    title: "MÁQUINAS",
    highlight: "DE LABORATÓRIO",
    icon: Factory,
    products: [
      {
        name: "PRENSA DE GRAVAÇÃO COM TAMPO DE ESPUMA E FONTE HL 1000 PHENIX",
        image: "https://i.postimg.cc/VspjCQ12/prensa-de-gravacao-com-tampo-de-espuma-e-fonte-hl-1000-phenix-png.jpg",
      },
      {
        name: "GRAVADORA COM ESTUFA PHENIX",
        image: "https://i.postimg.cc/QNHPpTKG/gravadora-com-estufa-phenix-png.jpg",
      },
    ],
  },
  {
    title: "MÁQUINAS",
    highlight: "MANUAIS",
    icon: Hand,
    products: [
      {
        name: "IMPRESSORA EM ROLO PHENIX",
        image: "https://i.postimg.cc/c4tS4Y4Y/impressora-em-rolo-phenix-png.jpg",
      },
      {
        name: "IMPRESSORA TÊXTIL CARROSSEL PHENIX",
        image: "https://i.postimg.cc/MGd4YKpJ/impressora-textil-carrossel-phenix-png.jpg",
      },
    ],
  },
  {
    title: "MÁQUINAS",
    highlight: "DE SECAGEM E CURA",
    icon: Flame,
    products: [
      {
        name: "VULCAMPHENIX",
        image: "https://i.postimg.cc/PfFZYGbL/vulcamphenix-png.jpg",
      },
      {
        name: "FLASH CURE PHENIX",
        image: "https://i.postimg.cc/jd4bBT86/flash-cure-phenix-png.jpg",
      },
    ],
  },
  {
    title: "LINHA DE",
    highlight: "PRODUTOS AUXILIARES",
    icon: Wrench,
    products: [
      {
        name: "GARRA ZERO PHENIX",
        image: "https://i.postimg.cc/HWwS09sy/garra-zero-phenix-png.jpg",
      },
      {
        name: "CARRINHO ALIMENTADOR PHENIX",
        image: "https://i.postimg.cc/wTWQFWCZ/carrinho-alimentador-phenix-png.jpg",
      },
    ],
  },
];

const pillars = [
  {
    icon: Gauge,
    title: "ROBUSTEZ E PRECISÃO",
    text: "Equipamentos projetados para máxima performance e durabilidade.",
  },
  {
    icon: Target,
    title: "ENGENHARIA FUNCIONAL",
    text: "Soluções inteligentes que atendem às necessidades da produção industrial.",
  },
  {
    icon: Cpu,
    title: "OPERAÇÃO CONTÍNUA",
    text: "Mais estabilidade e produtividade para o seu processo produtivo.",
  },
  {
    icon: Headphones,
    title: "SUPORTE ESPECIALIZADO",
    text: "Atendimento ágil e humano em todas as etapas, antes e depois da compra.",
  },
];

export function MaintenancePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="relative z-20 bg-black/90 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8">
          <div className="text-3xl md:text-5xl font-black tracking-wide leading-none">
            PHENIX
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_12%,rgba(255,87,34,.22),transparent_24%),radial-gradient(circle_at_12%_28%,rgba(255,87,34,.13),transparent_28%),linear-gradient(180deg,#050505_0%,#0b0b0b_45%,#020202_100%)]" />
        <div className="fixed inset-0 pointer-events-none opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.18)_1px,transparent_1px)] bg-[size:92px_92px]" />

        <section className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-8 md:pt-12 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-6 md:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#FF5722]/70 bg-black/60 p-6 md:p-10 shadow-[0_0_50px_rgba(255,87,34,.18)]"
            >
              <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-[#FF5722]/20 blur-[70px]" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 text-[#FF5722] mb-6">
                  <AlertTriangle size={34} strokeWidth={2.2} />
                  <span className="text-sm md:text-lg font-black uppercase tracking-wide">
                    Site em manutenção
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black leading-[0.92] mb-6">
                  ESTAMOS <br />
                  <span className="text-[#FF5722]">EM MANUTENÇÃO</span>
                </h1>

                <h2 className="text-xl md:text-3xl font-black uppercase leading-tight mb-5 max-w-xl">
                  Enquanto trabalhamos nele, confira um pouco sobre nosso trabalho.
                </h2>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                  Estamos preparando uma nova experiência digital para apresentar ainda melhor tudo o que a Phenix construiu ao longo de mais de 25 anos de mercado.
                </p>

                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-7 md:px-9 py-6 text-base md:text-lg font-black shadow-[0_0_30px_rgba(255,87,34,.38)]"
                >
                  <MessageCircle className="mr-2" size={22} />
                  Falar no WhatsApp
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="rounded-2xl md:rounded-3xl border border-white/10 bg-black/45 p-5 md:p-8 shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                {stats.map((item, index) => (
                  <div
                    key={item.text}
                    className="rounded-xl md:rounded-2xl border border-white/15 bg-white/[0.03] p-5 md:p-6 flex flex-col justify-center"
                  >
                    <item.icon className="text-[#FF5722] mb-4" size={38} />
                    <div className="text-3xl md:text-4xl font-black text-[#FF5722] leading-none">
                      {item.number}
                    </div>
                    {item.title && (
                      <div className="text-sm md:text-base font-black uppercase mt-2">
                        {item.title}
                      </div>
                    )}
                    <div className="text-gray-300 text-xs md:text-sm mt-1">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex items-center gap-5">
            <div className="h-px bg-[#FF5722] flex-1" />
            <h2 className="text-center text-2xl md:text-4xl font-black uppercase tracking-tight">
              Conheça <span className="text-[#FF5722]">alguns</span> de nossos{" "}
              <span className="text-[#FF5722]">produtos</span>
            </h2>
            <div className="h-px bg-[#FF5722] flex-1" />
          </div>
        </section>

        <section className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pb-8 md:pb-14">
          <div className="space-y-10 md:space-y-12">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.highlight}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: categoryIndex * 0.05 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <category.icon className="text-[#FF5722] shrink-0" size={34} />
                  <h3 className="text-2xl md:text-4xl font-black uppercase">
                    {category.title}{" "}
                    <span className="text-[#FF5722]">{category.highlight}</span>
                  </h3>
                  <div className="hidden md:block h-px bg-[#FF5722] flex-1 ml-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                  {category.products.map((product, index) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                      className="group rounded-xl md:rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.04] to-black/40 overflow-hidden shadow-[0_0_35px_rgba(0,0,0,.35)] hover:border-[#FF5722]/80 transition-all"
                    >
                      <div className="bg-black/20 min-h-[250px] md:min-h-[280px] flex items-center justify-center p-5">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-[235px] md:h-[265px] object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="px-5 md:px-7 pb-6">
                        <h4 className="text-xl md:text-2xl font-black uppercase text-center leading-tight">
                          {product.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 rounded-2xl border border-[#FF5722]/60 bg-black/65 p-5 md:p-6 shadow-[0_0_40px_rgba(255,87,34,.16)]">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4 md:block md:text-left">
                <pillar.icon className="text-[#FF5722] shrink-0" size={40} />
                <div>
                  <h4 className="text-lg md:text-xl font-black uppercase leading-tight mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12">
          <div className="rounded-2xl border border-[#FF5722]/70 bg-gradient-to-r from-[#FF5722]/12 via-black/80 to-[#FF5722]/12 p-5 md:p-8 shadow-[0_0_45px_rgba(255,87,34,.22)]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center">
              <div className="flex gap-4 items-start">
                <MessageCircle className="text-[#FF5722] shrink-0 mt-1" size={50} />
                <div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase leading-tight">
                    Estamos em manutenção,
                    <br />
                    <span className="text-[#FF5722]">
                      mas nossa equipe está pronta para te atender.
                    </span>
                  </h3>
                  <p className="text-gray-300 mt-2">
                    Fale agora com um especialista e encontre a máquina ideal para o seu processo.
                  </p>
                </div>
              </div>

              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-black shadow-[0_0_35px_rgba(255,87,34,.40)]"
              >
                <MessageCircle className="mr-2" size={22} />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </section>

        <footer className="relative z-10 text-center px-5 pb-10">
          <div className="text-2xl font-black">PHENIX</div>
          <p className="text-gray-400 text-sm mt-1">
            Máquinas para serigrafia e estamparia industrial de alta performance.
          </p>
        </footer>
      </main>
    </div>
  );
}
