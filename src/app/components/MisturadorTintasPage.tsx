import { ArrowLeft, Gauge, Zap, Settings, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import misturadorImg1 from "figma:asset/7df05c055d23ea38d257816619777858d8c0e193.png";
import misturadorImg2 from "figma:asset/e9ddcfa442bbd1d7a13875e40b304971d6ed2e39.png";
import { getWhatsAppUrl, SALES_PHONE_DISPLAY } from "../contactInfo";

interface MisturadorTintasPageProps {
  onBack: () => void;
}

const models = [
  {
    name: "MIX-10",
    capacity: "Até 10kg",
    motor: "0,5 CV",
    speed: "0-150 RPM",
    voltage: "220V",
  },
  {
    name: "MIX-20",
    capacity: "Até 20kg",
    motor: "0,75 CV",
    speed: "0-180 RPM",
    voltage: "220V",
  },
  {
    name: "MIX-30",
    capacity: "Até 30kg",
    motor: "1 CV",
    speed: "0-200 RPM",
    voltage: "220V / 380V",
  },
];

const faqs = [
  {
    question: "Para quais tipos de tintas o misturador é indicado?",
    answer:
      "O misturador é ideal para tintas plastisol, tintas à base de água, tintas UV, vernizes e outros produtos de serigrafia. Perfeito para homogeneização de cores e aditivos.",
  },
  {
    question: "É possível controlar a velocidade de rotação?",
    answer:
      "Sim, todos os modelos possuem inversor de frequência que permite controle preciso da velocidade de rotação, adequando-se à viscosidade de cada tipo de tinta.",
  },
  {
    question: "O equipamento possui pedal para acionamento?",
    answer:
      "Sim, acompanha pedal pneumático amarelo para acionamento com os pés, permitindo trabalho com as mãos livres para posicionar e retirar latas de tinta com segurança.",
  },
  {
    question: "Qual o tamanho das latas compatíveis?",
    answer:
      "O misturador aceita latas de 1kg até 30kg dependendo do modelo. A base possui garras ajustáveis para fixação segura de diferentes tamanhos de embalagens.",
  },
  {
    question: "A hélice é removível para limpeza?",
    answer:
      "Sim, a hélice é facilmente removível para limpeza após o uso. Recomendamos limpeza imediata após cada utilização para evitar acúmulo de tinta endurecida.",
  },
  {
    question: "Qual a garantia do equipamento?",
    answer:
      "12 meses de garantia contra defeitos de fabricação, com suporte técnico especializado e peças de reposição disponíveis.",
  },
];

export function MisturadorTintasPage({ onBack }: MisturadorTintasPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const images = [misturadorImg1, misturadorImg2];

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
                  Equipamento de Preparação
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#0A0A0A]">
                Misturador de Tintas Industrial
              </h1>
              <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
                Equipamento profissional para homogeneização de tintas serigráficas. Garante mistura perfeita de cores, aditivos e pigmentos com velocidade controlada.
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
                <Gauge className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">0-200 RPM</div>
                <div className="text-sm text-[#374151]">Velocidade Var.</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Zap className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">0,5-1 CV</div>
                <div className="text-sm text-[#374151]">Motor Potente</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Settings className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">10-30kg</div>
                <div className="text-sm text-[#374151]">Capacidade</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Clock className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">1-5 min</div>
                <div className="text-sm text-[#374151]">Mistura Rápida</div>
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
                  alt={`Misturador de Tintas - Vista ${selectedImage + 1}`}
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
                        Capacidade:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.capacity}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-[#374151] font-semibold">
                        Motor:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.motor}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-[#374151] font-semibold">
                        Velocidade:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.speed}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#374151] font-semibold">
                        Voltagem:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.voltage}
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
                    Motor de Alta Performance
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Motor elétrico industrial com inversor de frequência para controle preciso da velocidade. Adequado para diferentes viscosidades de tintas.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Pedal Pneumático
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Sistema de acionamento por pedal que permite manter as mãos livres para posicionamento e remoção segura dos galões de tinta.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Garras Ajustáveis
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Base com sistema de fixação ajustável para acomodar latas de diferentes tamanhos com total segurança durante a operação de mistura.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Haste e Hélice Inox
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Haste alongada em aço inoxidável com hélice projetada para mistura eficiente. Fácil remoção para limpeza após uso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aplicações */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-extrabold text-center mb-12 text-[#0A0A0A]">
                Aplicações Recomendadas
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#374151] leading-relaxed">
                      <strong className="text-[#0A0A0A]">Mistura de Cores:</strong> Homogeneização perfeita de pigmentos para obter cores uniformes e consistentes
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#374151] leading-relaxed">
                      <strong className="text-[#0A0A0A]">Adição de Catalisadores:</strong> Incorporação de aditivos, retardantes, aceleradores e outros componentes
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#374151] leading-relaxed">
                      <strong className="text-[#0A0A0A]">Tintas Plastisol:</strong> Ideal para reativar tintas que sedimentaram durante armazenamento
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#374151] leading-relaxed">
                      <strong className="text-[#0A0A0A]">Tintas à Base d'Água:</strong> Perfeito para homogeneizar tintas que tendem a separar componentes
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
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
                    className="bg-gray-50 rounded-xl shadow-md overflow-hidden border-2 border-gray-100 hover:border-[#FF5722] transition-all"
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
              Nossa equipe técnica está pronta para ajudar na escolha do modelo ideal
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
