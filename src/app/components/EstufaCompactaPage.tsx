import { ArrowLeft, Zap, Thermometer, Clock, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import estufaImg1 from "figma:asset/c8b8cc5616caefc6f994ac29f6a187e6dfea6a94.png";
import estufaImg2 from "figma:asset/0d6196d6d0bd0235aac982f5cf909c2dc0ffce71.png";
import { getWhatsAppUrl, SALES_PHONE_DISPLAY } from "../contactInfo";

interface EstufaCompactaPageProps {
  onBack: () => void;
}

const models = [
  {
    name: "EC-600",
    dimension: "60 x 80 cm",
    power: "2000W",
    voltage: "220V",
    temperature: "Até 200°C",
  },
  {
    name: "EC-800",
    dimension: "80 x 100 cm",
    power: "2500W",
    voltage: "220V",
    temperature: "Até 200°C",
  },
  {
    name: "EC-1000",
    dimension: "100 x 120 cm",
    power: "3000W",
    voltage: "220V / 380V",
    temperature: "Até 200°C",
  },
];

const faqs = [
  {
    question: "Qual a temperatura ideal para secagem de tinta serigráfica?",
    answer:
      "A temperatura ideal varia entre 160°C e 180°C para a maioria das tintas plastisol utilizadas em serigrafia têxtil. Nossa estufa compacta permite controle preciso nesta faixa.",
  },
  {
    question: "Qual o tempo médio de secagem por peça?",
    answer:
      "O tempo médio varia de 30 a 60 segundos por peça, dependendo da espespura da camada de tinta, tipo de tecido e temperatura configurada. A estufa possui controle de velocidade da esteira.",
  },
  {
    question: "A estufa é compatível com tintas à base de água?",
    answer:
      "Sim, a estufa compacta é compatível com tintas plastisol, à base de água, tintas UV e outros tipos de tintas serigráficas que necessitem processo de cura térmica.",
  },
  {
    question: "Qual o consumo energético médio?",
    answer:
      "O consumo varia de 2000W a 3000W dependendo do modelo. A estufa possui sistema de aquecimento eficiente com isolamento térmico que reduz o consumo durante operação contínua.",
  },
  {
    question: "É necessário instalação elétrica especial?",
    answer:
      "Os modelos EC-600 e EC-800 funcionam em 220V monofásico padrão. O modelo EC-1000 pode ser fornecido em 220V ou 380V trifásico conforme necessidade da instalação.",
  },
  {
    question: "A estufa possui garantia?",
    answer:
      "Sim, todos os equipamentos Phenix possuem garantia de 12 meses contra defeitos de fabricação, além de suporte técnico especializado e disponibilidade de peças de reposição.",
  },
];

export function EstufaCompactaPage({ onBack }: EstufaCompactaPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const images = [estufaImg1, estufaImg2];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] text-white shadow-xl border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Button
                onClick={onBack}
                variant="ghost"
                className="text-white hover:text-[#FF5722] hover:bg-transparent"
              >
                <ArrowLeft className="mr-2" size={20} />
                Voltar
              </Button>
              <div className="text-2xl font-bold">PHENIX</div>
            </div>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-6 py-5 font-bold"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="inline-block bg-[#FF5722] text-white px-6 py-2 rounded-full mb-4">
                <span className="font-bold uppercase tracking-wider text-sm">
                  Equipamento de Secagem e Cura
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#0A0A0A]">
                Estufa Compacta de Secagem
              </h1>
              <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
                Equipamento profissional para secagem e cura de tintas serigráficas em estamparia têxtil. Ideal para pequenas e médias produções com controle preciso de temperatura.
              </p>
            </motion.div>

            {/* Badges de Destaques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Thermometer className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">Até 200°C</div>
                <div className="text-sm text-[#374151]">Temperatura</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Zap className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">2000-3000W</div>
                <div className="text-sm text-[#374151]">Potência</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Clock className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">30-60s</div>
                <div className="text-sm text-[#374151]">Por Peça</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Shield className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">12 Meses</div>
                <div className="text-sm text-[#374151]">Garantia</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Galeria de Imagens */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <img
                  src={images[selectedImage]}
                  alt={`Estufa Compacta - Vista ${selectedImage + 1}`}
                  className="w-full h-[500px] object-contain bg-gray-50 rounded-2xl shadow-2xl"
                />
              </motion.div>

              {/* Thumbnails */}
              <div className="flex gap-4 justify-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-24 h-24 rounded-lg overflow-hidden border-4 transition-all ${
                      selectedImage === index
                        ? "border-[#FF5722] shadow-lg scale-105"
                        : "border-gray-300 hover:border-[#FF5722]/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modelos Disponíveis */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-[#0A0A0A]">
              Modelos Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {models.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#FF5722] transition-all"
                >
                  <h3 className="text-2xl font-bold text-[#FF5722] mb-6">
                    {model.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-[#374151] font-semibold">
                        Dimensão Útil:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.dimension}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-[#374151] font-semibold">
                        Potência:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.power}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-[#374151] font-semibold">
                        Voltagem:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.voltage}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#374151] font-semibold">
                        Temperatura:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.temperature}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Características Técnicas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-extrabold text-center mb-12 text-[#0A0A0A]">
                Características Técnicas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Sistema de Aquecimento
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Resistências blindadas de alta durabilidade com distribuição uniforme de calor. Controle digital de temperatura com precisão de ±5°C.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Esteira Transportadora
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Esteira em malha de aço teflon com velocidade regulável. Sistema de tração silencioso e estável para passagem contínua das peças.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Isolamento Térmico
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Cúpula em chapa de aço com isolamento em lã de rocha. Minimiza perda de calor e reduz consumo energético durante operação prolongada.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Segurança Operacional
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Botão de emergência, sistema de proteção térmica automático e estrutura com aterramento elétrico. Atende normas NR12.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-extrabold text-center mb-12 text-[#0A0A0A]">
                Perguntas Frequentes
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-100 hover:border-[#FF5722] transition-all"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full px-6 py-5 text-left flex justify-between items-center"
                    >
                      <span className="font-bold text-lg text-[#0A0A0A] pr-4">
                        {faq.question}
                      </span>
                      <span className="text-[#FF5722] text-2xl flex-shrink-0">
                        {openFaq === index ? "−" : "+"}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5">
                        <p className="text-[#374151] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contato" className="py-20 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Solicite um Orçamento Personalizado
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe técnica está pronta para ajudar você a escolher o modelo ideal para sua produção
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() =>
                  window.open(getWhatsAppUrl(), "_blank")
                }
                className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 py-6 text-lg font-bold"
              >
                WhatsApp: {SALES_PHONE_DISPLAY}
              </Button>
              <Button
                onClick={onBack}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] rounded px-8 py-6 text-lg font-bold"
              >
                Ver Outros Produtos
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
