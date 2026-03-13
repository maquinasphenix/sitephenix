import { ArrowLeft, Lightbulb, Clock, Zap, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import mesaImg from "figma:asset/5d6a95de592883158147a5b48ccc31f3c3522d76.png";
import { getWhatsAppUrl, SALES_PHONE_DISPLAY } from "../contactInfo";

interface MesaExposicaoPageProps {
  onBack: () => void;
}

const models = [
  {
    name: "UV-60",
    dimension: "60 x 80 cm",
    power: "1500W",
    lamps: "8 lâmpadas UV",
    voltage: "220V",
  },
  {
    name: "UV-80",
    dimension: "80 x 100 cm",
    power: "2000W",
    lamps: "12 lâmpadas UV",
    voltage: "220V",
  },
  {
    name: "UV-100",
    dimension: "100 x 120 cm",
    power: "2500W",
    lamps: "16 lâmpadas UV",
    voltage: "220V / 380V",
  },
];

const faqs = [
  {
    question: "Qual a diferença entre esta mesa e o Copymaster?",
    answer:
      "Ambas são mesas de exposição UV profissionais. O Copymaster possui recursos adicionais como controle digital avançado e sistema de vácuo integrado. Esta mesa oferece excelente custo-benefício para operações padrão de gravação.",
  },
  {
    question: "Qual o tempo médio de exposição?",
    answer:
      "O tempo varia de 30 segundos a 5 minutos dependendo do tipo de emulsão, espessura da camada fotossensível e densidade do fotolito. O painel de controle permite ajuste preciso do tempo.",
  },
  {
    question: "As lâmpadas UV têm vida útil longa?",
    answer:
      "Sim, as lâmpadas UV têm durabilidade média de 1000 a 1500 horas de uso. Recomendamos a troca quando a intensidade luminosa começar a diminuir, afetando o tempo de exposição.",
  },
  {
    question: "É necessário ambiente escuro para usar a mesa?",
    answer:
      "Não é obrigatório, mas recomenda-se ambiente com luz amarela ou vermelha para evitar exposição prematura da emulsão fotossensível antes da gravação.",
  },
  {
    question: "A mesa possui sistema de vácuo?",
    answer:
      "Sim, todos os modelos possuem sistema de vácuo para garantir perfeita aderência entre fotolito e tela durante a exposição, evitando borramento da imagem.",
  },
  {
    question: "Qual a garantia do equipamento?",
    answer:
      "12 meses de garantia contra defeitos de fabricação, com suporte técnico especializado e peças de reposição disponíveis.",
  },
];

export function MesaExposicaoPage({ onBack }: MesaExposicaoPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                  Equipamento de Laboratório
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#0A0A0A]">
                Mesa de Exposição UV Profissional
              </h1>
              <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
                Sistema completo para gravação de matrizes serigráficas com lâmpadas UV de alta intensidade. Ideal para laboratórios e gravação de telas para silk screen.
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
                <Lightbulb className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">8-16 Lâmpadas</div>
                <div className="text-sm text-[#374151]">UV Alta Potência</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Clock className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">30s - 5min</div>
                <div className="text-sm text-[#374151]">Tempo Ajustável</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Zap className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">1500-2500W</div>
                <div className="text-sm text-[#374151]">Potência</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Shield className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">12 Meses</div>
                <div className="text-sm text-[#374151]">Garantia</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Imagem Principal */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={mesaImg}
                  alt="Mesa de Exposição UV"
                  className="w-full h-[500px] object-contain bg-gray-50 rounded-2xl shadow-2xl"
                />
              </motion.div>
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
                        Área Útil:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.dimension}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-[#374151] font-semibold">
                        Lâmpadas:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.lamps}
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
                    Lâmpadas UV Profissionais
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Conjunto de lâmpadas UV de alta intensidade especialmente projetadas para gravação fotossensível. Distribuição uniforme de luz para exposição homogênea.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Sistema de Vácuo
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Bomba de vácuo integrada para perfeita aderência entre fotolito e tela. Garante nitidez e definição nas linhas mais finas da gravação.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Timer Digital
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Controle preciso de tempo de exposição com display digital. Permite programar e repetir configurações para diferentes tipos de trabalho.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Estrutura Robusta
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Chassi em aço com pintura eletrostática. Tampa articulada com amortecedores pneumáticos para abertura suave e segura.
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
