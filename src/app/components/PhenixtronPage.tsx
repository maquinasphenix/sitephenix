import { Button } from "./ui/button";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Settings,
  Zap,
  Shield,
  Award,
  Gauge,
  Package,
  Star,
} from "lucide-react";
import { useState } from "react";
import image1 from "figma:asset/187e68678401201a04046744339d3c0e217c24e8.png";
import image2 from "figma:asset/fe9de625c251dd03ceaba91f42a80e7e9d4afc4e.png";
import { getWhatsAppUrl } from "../contactInfo";

interface PhenixtronPageProps {
  onBack: () => void;
}

const faqItems = [
  {
    question: "O que é uma impressora serigráfica semiautomática?",
    answer:
      "Uma impressora serigráfica semiautomática é um equipamento que automatiza o processo de impressão serigráfica, mantendo algumas operações manuais. A PHENIXTRON utiliza sistema pneumático para realizar o movimento de impressão com precisão, enquanto o operador controla o posicionamento e alimentação do material.",
  },
  {
    question: "Para que serve uma máquina de serigrafia industrial?",
    answer:
      "A PHENIXTRON é ideal para produção industrial de adesivos, rótulos, materiais promocionais, comunicação visual e impressões técnicas. Ela oferece alta produtividade, qualidade consistente e repetibilidade no processo de impressão serigráfica em diversos substratos planos como papel, plástico e outros materiais.",
  },
  {
    question: "Qual a diferença entre serigrafia manual e semiautomática?",
    answer:
      "Na serigrafia manual, todo o processo de impressão é feito manualmente pelo operador. Na semiautomática PHENIXTRON, o movimento do carro impressor é automatizado por sistema pneumático, garantindo maior precisão, velocidade e padronização. Isso resulta em maior produtividade e qualidade superior, especialmente em produções em série.",
  },
  {
    question: "Que materiais podem ser impressos na PHENIXTRON?",
    answer:
      "A PHENIXTRON pode imprimir em diversos substratos planos, incluindo: papel, plásticos (PVC, poliéster), adesivos, vinil, acrílico, papelão e outros materiais compatíveis com serigrafia. O sistema de mesa a vácuo mantém o substrato fixo durante a impressão, garantindo precisão em diferentes tipos de materiais.",
  },
  {
    question: "Como funciona o sistema pneumático da PHENIXTRON?",
    answer:
      "O sistema pneumático da PHENIXTRON utiliza ar comprimido a 7 bar (100 PSI) para acionar o carro impressor com movimentos precisos e suaves. Isso reduz vibrações, aumenta a vida útil dos componentes e proporciona impressões de alta qualidade com repetibilidade constante.",
  },
  {
    question: "Quantas pessoas são necessárias para operar a máquina?",
    answer:
      "A PHENIXTRON pode ser operada por 1 pessoa, mas para máxima produtividade, recomenda-se 2 operadores: um responsável pelo registro e posicionamento do material, e outro pela retirada das peças impressas. Essa configuração otimiza o ciclo de produção.",
  },
  {
    question: "A PHENIXTRON possui sistemas de segurança?",
    answer:
      "Sim! A máquina é equipada com barra de segurança salva-mãos que interrompe automaticamente o movimento do cabeçote em caso de contato, atendendo às normas internacionais de segurança para equipamentos industriais e protegendo o operador durante a operação.",
  },
  {
    question: "Qual a produtividade da PHENIXTRON?",
    answer:
      "A produtividade varia conforme o tipo de trabalho, número de operadores e configuração. Com 2 operadores, a máquina pode atingir altos níveis de produtividade mantendo qualidade constante. O tempo de setup reduzido e os ajustes rápidos contribuem para otimizar a produção.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Estrutura Industrial Robusta",
    description:
      "Construção reforçada projetada para ambientes de alta produção",
  },
  {
    icon: Gauge,
    title: "Alta Precisão de Impressão",
    description:
      "Ajustes finos de pressão, velocidade e fora-contato para qualidade superior",
  },
  {
    icon: Zap,
    title: "Sistema Pneumático Confiável",
    description:
      "Movimentos suaves e estáveis com alta eficiência e durabilidade",
  },
  {
    icon: Settings,
    title: "Regulagens Completas",
    description:
      "Controle total do processo com ajustes de rodo, espátula e vácuo",
  },
  {
    icon: Award,
    title: "Maior Produtividade",
    description:
      "Ciclos otimizados com matriz coberta ou descoberta para cada aplicação",
  },
  {
    icon: Package,
    title: "Segurança Operacional",
    description:
      "Barra salva-mãos e proteções conforme normas internacionais",
  },
];

const technicalSpecs = [
  { label: "Tipo", value: "Impressora serigráfica semiautomática" },
  { label: "Sistema", value: "Eletropneumático" },
  { label: "Pressão de trabalho", value: "7 bar / 100 PSI" },
  { label: "Consumo de ar", value: "15 ft³/min" },
  {
    label: "Aplicações",
    value: "Adesivos, rótulos, comunicação visual, materiais promocionais",
  },
  { label: "Operação", value: "Pedal ou automático" },
  { label: "Fixação do substrato", value: "Mesa a vácuo" },
  { label: "Segurança", value: "Barra salva-mãos automática" },
  { label: "Ciclos de impressão", value: "Matriz coberta ou descoberta" },
];

export function PhenixtronPage({ onBack }: PhenixtronPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const images = [image1, image2];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuoteRequest = () => {
    window.open(
      getWhatsAppUrl(
        "Olá! Gostaria de solicitar um orçamento para a impressora PHENIXTRON.",
      ),
      "_blank",
    );
  };

  return (
      <div className="min-h-screen bg-white">
        {/* Header with Back Button */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] text-white shadow-xl border-b border-gray-800">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-24">
              <Button
                onClick={onBack}
                variant="ghost"
                className="flex items-center gap-2 hover:text-[#FF5722] transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-semibold">Voltar</span>
              </Button>
              <Button
                onClick={handleQuoteRequest}
                className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-6 py-5 font-bold shadow-lg"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section with Product Images */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Images */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-100"
                >
                  <img
                    src={images[selectedImage]}
                    alt={`PHENIXTRON - Impressora Serigráfica Semiautomática ${
                      selectedImage + 1
                    }`}
                    className="w-full h-full object-contain p-8"
                  />
                </motion.div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-4">
                  {images.map((img, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square w-24 rounded-lg overflow-hidden border-4 transition-all ${
                        selectedImage === index
                          ? "border-[#FF5722] shadow-lg"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Right: Product Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-block bg-[#FF5722] text-white px-4 py-2 rounded-full mb-4">
                    <span className="font-bold uppercase tracking-wider text-xs">
                      Equipamento Industrial
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0A0A] leading-tight">
                    PHENIXTRON Impressora Serigráfica Semiautomática Industrial
                  </h1>

                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                    <span className="text-sm text-[#374151] font-semibold ml-2">
                      Qualidade Phenix Máquinas
                    </span>
                  </div>

                  <p className="text-lg text-[#374151] leading-relaxed mb-6">
                    A PHENIXTRON é uma impressora serigráfica semiautomática
                    industrial desenvolvida para empresas que buscam{" "}
                    <strong>alta produtividade, precisão e padronização</strong>{" "}
                    no processo de impressão serigráfica. Robusta e confiável, a
                    máquina foi projetada para atender gráficas, indústrias de
                    comunicação visual e fabricantes de adesivos.
                  </p>

                  {/* Key Features Quick List */}
                  <div className="bg-gray-50 rounded-xl p-6 space-y-3 mb-6">
                    {[
                      "Sistema pneumático de alta eficiência",
                      "Mesa com fixação a vácuo",
                      "Ajustes finos de pressão e velocidade",
                      "Barra de segurança salva-mãos",
                      "Ciclos com matriz coberta ou descoberta",
                      "Estrutura industrial robusta",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#FF5722] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="text-[#374151] font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleQuoteRequest}
                      className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 py-6 text-lg font-bold shadow-lg flex-1"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      Solicitar Orçamento
                    </Button>
                    <Button
                      onClick={() => scrollToSection("faq")}
                      variant="outline"
                      className="border-2 border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722] hover:text-white rounded px-8 py-6 text-lg font-bold flex-1"
                    >
                      Tire suas Dúvidas
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0A0A0A]">
                Por que escolher a PHENIXTRON?
              </h2>
              <p className="text-xl text-[#374151] max-w-3xl mx-auto">
                Equipamento desenvolvido para máxima produtividade e qualidade
                em serigrafia industrial
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all border-2 border-gray-100 hover:border-[#FF5722]"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF5722] rounded-xl mb-6">
                    <benefit.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0A0A0A] text-center">
                Como funciona a PHENIXTRON
              </h2>
              <p className="text-xl text-[#374151] mb-12 text-center">
                Sistema pneumático de alta precisão para serigrafia industrial
              </p>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-[#FF5722] text-white rounded-full flex items-center justify-center font-extrabold">
                      1
                    </span>
                    Alta precisão na impressão serigráfica
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    A PHENIXTRON foi projetada para oferecer controle completo
                    sobre o processo de impressão. O operador pode realizar
                    ajustes finos de pressão do rodo, espátula, velocidade de
                    impressão e altura de fora-contato, garantindo qualidade
                    superior mesmo em trabalhos mais exigentes. O sistema de
                    mesa com fixação a vácuo mantém o substrato perfeitamente
                    posicionado, reduzindo falhas e aumentando a precisão do
                    registro.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-[#FF5722] text-white rounded-full flex items-center justify-center font-extrabold">
                      2
                    </span>
                    Sistema pneumático de alta eficiência
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    O funcionamento da PHENIXTRON utiliza um sistema pneumático
                    de alta performance, que proporciona movimentos suaves e
                    estáveis durante todo o ciclo de impressão. Isso reduz
                    vibrações e contribui para maior durabilidade dos
                    componentes mecânicos. Esse sistema também facilita a
                    manutenção e aumenta a confiabilidade do equipamento em
                    ambientes industriais de alta produção.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-[#FF5722] text-white rounded-full flex items-center justify-center font-extrabold">
                      3
                    </span>
                    Modos de operação flexíveis
                  </h3>
                  <p className="text-[#374151] leading-relaxed mb-4">
                    A PHENIXTRON oferece dois ciclos de impressão que permitem
                    adequar o processo ao tipo de trabalho:
                  </p>
                  <div className="space-y-3 ml-6">
                    <div>
                      <strong className="text-[#FF5722]">
                        Ciclo com matriz coberta:
                      </strong>
                      <span className="text-[#374151]">
                        {" "}
                        Ideal para produção de adesivos e impressões em série,
                        evitando o ressecamento da tinta na tela.
                      </span>
                    </div>
                    <div>
                      <strong className="text-[#FF5722]">
                        Ciclo com matriz descoberta:
                      </strong>
                      <span className="text-[#374151]">
                        {" "}
                        Recomendado para trabalhos de cromia e impressão em
                        múltiplas cores, preservando a definição dos detalhes.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0A0A0A]">
                Aplicações da PHENIXTRON
              </h2>
              <p className="text-xl text-[#374151] max-w-3xl mx-auto">
                Máquina de serigrafia industrial versátil para diversas
                aplicações
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Adesivos e Etiquetas",
                    description:
                      "Produção em série de adesivos personalizados com alta qualidade e definição",
                  },
                  {
                    title: "Comunicação Visual",
                    description:
                      "Impressão de materiais para sinalização, displays e comunicação visual",
                  },
                  {
                    title: "Rótulos Industriais",
                    description:
                      "Fabricação de rótulos técnicos e industriais com precisão e durabilidade",
                  },
                  {
                    title: "Materiais Promocionais",
                    description:
                      "Impressão de brindes, materiais promocionais e peças publicitárias",
                  },
                  {
                    title: "Impressão Gráfica Técnica",
                    description:
                      "Trabalhos técnicos que exigem precisão e repetibilidade",
                  },
                  {
                    title: "Substratos Diversos",
                    description:
                      "Impressão em plástico, papel, vinil, acrílico e outros materiais planos",
                  },
                ].map((application, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100 hover:border-[#FF5722] transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-lg text-[#0A0A0A] mb-2">
                          {application.title}
                        </h3>
                        <p className="text-[#374151]">
                          {application.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0A0A0A] text-center">
                Ficha Técnica
              </h2>
              <p className="text-xl text-[#374151] mb-12 text-center">
                Especificações técnicas da impressora serigráfica PHENIXTRON
              </p>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
                <table className="w-full">
                  <tbody>
                    {technicalSpecs.map((spec, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className={`${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-[#FF5722]/5 transition-colors`}
                      >
                        <td className="py-4 px-6 font-bold text-[#0A0A0A] border-r border-gray-200">
                          {spec.label}
                        </td>
                        <td className="py-4 px-6 text-[#374151]">
                          {spec.value}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <div className="inline-block bg-[#FF5722] text-white px-6 py-2 rounded-full mb-4">
                  <span className="font-bold uppercase tracking-wider text-sm">
                    Tire suas Dúvidas
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0A0A0A]">
                  Perguntas Frequentes
                </h2>
                <p className="text-xl text-[#374151]">
                  Tudo o que você precisa saber sobre a impressora serigráfica
                  PHENIXTRON
                </p>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-100 hover:border-[#FF5722] transition-all"
                  >
                    <button
                      onClick={() =>
                        setOpenFaqIndex(openFaqIndex === index ? null : index)
                      }
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-bold text-lg text-[#0A0A0A] pr-4">
                        {item.question}
                      </h3>
                      {openFaqIndex === index ? (
                        <ChevronUp
                          size={24}
                          className="text-[#FF5722] flex-shrink-0"
                        />
                      ) : (
                        <ChevronDown
                          size={24}
                          className="text-[#374151] flex-shrink-0"
                        />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5"
                      >
                        <p className="text-[#374151] leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Solicite um Orçamento da PHENIXTRON
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Entre em contato com nossos especialistas e descubra como a
                PHENIXTRON pode aumentar a produtividade da sua empresa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleQuoteRequest}
                  className="bg-white text-[#FF5722] hover:bg-gray-100 rounded px-10 py-7 text-xl font-bold shadow-xl"
                >
                  <MessageCircle className="mr-2" size={24} />
                  Falar com Especialista
                </Button>
                <Button
                  onClick={onBack}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 rounded px-10 py-7 text-xl font-bold"
                >
                  Ver Outros Produtos
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0A0A0A] text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2026 Phenix Máquinas - Equipamentos para Serigrafia Industrial
            </p>
            <p className="text-sm text-gray-500 mt-2">
              25 anos de excelência em máquinas serigráficas
            </p>
          </div>
        </footer>
      </div>
  );
}
