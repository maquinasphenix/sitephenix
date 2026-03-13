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
  Lightbulb,
  Target,
  Clock,
  Star,
} from "lucide-react";
import { useState } from "react";
import image1 from "figma:asset/8844910539f927b31804c8e3cda008ffa903f5c8.png";
import image2 from "figma:asset/a6430bfc52a6561e0de852486190d98cd56804f6.png";

interface CopymasterPageProps {
  onBack: () => void;
}

const faqItems = [
  {
    question: "O que é uma mesa de exposição UV para serigrafia?",
    answer:
      "A mesa de exposição UV, também conhecida como gravadora de matriz, é um equipamento essencial na serigrafia usado para transferir a imagem do fotolito para a tela emulsionada. A COPYMASTER utiliza luz ultravioleta de alta potência e sistema de vácuo para garantir exposição uniforme e gravação perfeita das matrizes serigráficas.",
  },
  {
    question: "Como funciona o processo de gravação de matrizes serigráficas?",
    answer:
      "O processo é simples: aplica-se emulsão fotossensível na tela, posiciona-se o fotolito, pressiona-se com o sistema de vácuo para garantir contato perfeito, e então expõe-se à luz UV pelo tempo adequado. Após a exposição, lava-se a matriz para revelar a imagem, ficando pronta para impressão. A COPYMASTER garante uniformidade na exposição e definição perfeita dos detalhes.",
  },
  {
    question: "Por que o sistema de vácuo é importante na exposição UV?",
    answer:
      "O sistema de vácuo é fundamental porque pressiona a matriz contra o vidro de exposição, garantindo contato perfeito entre fotolito e emulsão. Isso evita distorções na imagem, melhora a definição dos detalhes finos e garante qualidade consistente na gravação. A COPYMASTER possui sistema de vácuo eficiente para resultados profissionais.",
  },
  {
    question: "Qual modelo de COPYMASTER é ideal para minha produção?",
    answer:
      "A escolha depende do tamanho das telas que você utiliza. Oferecemos 5 modelos: PO80100 (até 60x80cm), PO100140 (até 80x120cm), PO120150 (até 100x130cm), PO140250 (até 120x230cm) e PO160300 (até 140x280cm). Escolha o modelo que comporta confortavelmente o maior tamanho de matriz que você trabalha.",
  },
  {
    question: "A COPYMASTER pode gravar matrizes com detalhes finos?",
    answer:
      "Sim! A COPYMASTER é projetada para gravação profissional com excelente definição. A lâmpada UV de alta potência combinada com o sistema de vácuo garante exposição uniforme e permite gravar desde imagens simples até trabalhos complexos com retículas, degradês e detalhes muito finos com alta fidelidade.",
  },
  {
    question: "Preciso de ambiente especial para instalar a COPYMASTER?",
    answer:
      "Sim, é recomendado instalar a COPYMASTER em ambiente isolado ou sala escura para evitar dispersão da radiação ultravioleta. Isso garante segurança ao operador, evita exposição acidental das emulsões e permite melhor controle do processo de gravação. Uma sala dedicada com controle de luz ambiente é ideal.",
  },
  {
    question: "Qual tipo de emulsão devo usar com a COPYMASTER?",
    answer:
      "A COPYMASTER funciona com todos os tipos de emulsões fotossensíveis para serigrafia disponíveis no mercado, incluindo emulsões à base d'água e solvente, para trabalhos gráficos ou têxteis. O tempo de exposição varia conforme o tipo e espespura da emulsão aplicada. Consulte as recomendações do fabricante da emulsão.",
  },
  {
    question: "Como sei o tempo correto de exposição na COPYMASTER?",
    answer:
      "O tempo ideal varia conforme emulsão, espessura aplicada, distância da lâmpada e idade da lâmpada UV. Recomenda-se fazer testes de exposição com régua de controle. Geralmente, tempos ficam entre 30 segundos a 5 minutos. Com a experiência, você estabelecerá o tempo padrão para suas condições de trabalho.",
  },
];

const benefits = [
  {
    icon: Lightbulb,
    title: "Exposição UV Uniforme",
    description:
      "Lâmpada de alta potência garante gravação perfeita em toda área",
  },
  {
    icon: Shield,
    title: "Sistema de Vácuo Eficiente",
    description:
      "Contato perfeito entre fotolito e emulsão para definição máxima",
  },
  {
    icon: Target,
    title: "Alta Definição de Detalhes",
    description: "Reprodução fiel de retículas, textos pequenos e imagens complexas",
  },
  {
    icon: Settings,
    title: "Operação Simples e Segura",
    description:
      "Processo intuitivo com controles de fácil acesso e uso profissional",
  },
  {
    icon: Award,
    title: "Estrutura Robusta",
    description:
      "Construção sólida para uso diário em ambientes profissionais",
  },
  {
    icon: Clock,
    title: "Eficiência na Preparação",
    description:
      "Agiliza o processo de gravação e aumenta produtividade do setor",
  },
];

const models = [
  {
    model: "PO80100",
    glassSize: "80 x 100 cm",
    maxMatrix: "60 x 80 cm",
    dimensions: "76 x 116 x 139 cm",
    weight: "60 kg",
  },
  {
    model: "PO100140",
    glassSize: "100 x 140 cm",
    maxMatrix: "80 x 120 cm",
    dimensions: "76 x 156 x 144 cm",
    weight: "80 kg",
  },
  {
    model: "PO120150",
    glassSize: "120 x 150 cm",
    maxMatrix: "100 x 130 cm",
    dimensions: "76 x 166 x 154 cm",
    weight: "100 kg",
  },
  {
    model: "PO140250",
    glassSize: "140 x 250 cm",
    maxMatrix: "120 x 230 cm",
    dimensions: "81 x 280 x 181 cm",
    weight: "140 kg",
  },
  {
    model: "PO160300",
    glassSize: "160 x 300 cm",
    maxMatrix: "140 x 280 cm",
    dimensions: "110 x 350 x 230 cm",
    weight: "290 kg",
  },
];

const generalSpecs = [
  { label: "Tipo", value: "Mesa de exposição UV para gravação de matrizes" },
  { label: "Tecnologia", value: "Luz ultravioleta de alta potência" },
  { label: "Sistema de fixação", value: "Vácuo para contato perfeito" },
  {
    label: "Aplicações",
    value: "Gravação de telas serigráficas para todas as aplicações",
  },
  {
    label: "Compatibilidade",
    value: "Todas emulsões fotossensíveis para serigrafia",
  },
  { label: "Instalação", value: "Ambiente isolado/sala escura recomendado" },
  { label: "Modelos disponíveis", value: "5 tamanhos (de 60x80 até 140x280cm)" },
];

export function CopymasterPage({ onBack }: CopymasterPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const images = [image1, image2];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de mais informações sobre a COPYMASTER - Mesa de Exposição UV."
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  const handleQuote = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de solicitar um orçamento para a COPYMASTER - Mesa de Exposição UV."
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#FF5722] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para Produtos</span>
          </button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={images[selectedImage]}
                  alt={`COPYMASTER - Mesa de Exposição UV - Vista ${selectedImage + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden transition-all ${
                      selectedImage === index
                        ? "ring-4 ring-[#FF5722] shadow-lg"
                        : "hover:ring-2 hover:ring-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`COPYMASTER - Thumbnail ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="inline-block px-4 py-1.5 bg-[#FF5722]/10 text-[#FF5722] rounded-full text-sm mb-4">
                  Laboratório • Gravação de Matrizes
                </div>
                <h1 className="text-4xl md:text-5xl mb-4">
                  COPYMASTER Mesa de Exposição UV para Serigrafia
                </h1>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                A <strong>COPYMASTER</strong> é um equipamento profissional
                desenvolvido para gravação e sensibilização de matrizes
                serigráficas utilizando luz ultravioleta. Ideal para ambientes
                profissionais que buscam{" "}
                <strong>alta qualidade de gravação</strong>,{" "}
                <strong>precisão na exposição</strong> e{" "}
                <strong>uniformidade perfeita de luz</strong>.
              </p>

              <div className="bg-[#FF5722]/5 border-l-4 border-[#FF5722] p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Tecnologia Profissional
                </h3>
                <p className="text-gray-700">
                  Sistema de vácuo que pressiona a matriz contra o vidro de
                  exposição, garantindo contato perfeito entre fotolito e
                  emulsão. Lâmpada UV de alta potência para exposição uniforme e
                  definição excepcional de detalhes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleQuote}
                  className="flex-1 bg-[#FF5722] hover:bg-[#E64A19] text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="flex-1 border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722]/5 py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Tire suas Dúvidas
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Benefícios da COPYMASTER
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia profissional para gravação perfeita de matrizes
              serigráficas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#FF5722] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#FF5722]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#FF5722]" />
                </div>
                <h3 className="text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications - Models */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Modelos e Especificações
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              5 modelos disponíveis para diferentes tamanhos de produção
            </p>
          </motion.div>

          <div className="space-y-6">
            {models.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-[#FF5722] hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-r from-[#FF5722] to-[#E64A19] px-6 py-4">
                  <h3 className="text-2xl text-white">Modelo {model.model}</h3>
                </div>
                <div className="grid md:grid-cols-4 gap-6 p-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Formato do Vidro
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {model.glassSize}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Formato Máximo da Matriz
                    </div>
                    <div className="text-lg font-semibold text-[#FF5722]">
                      {model.maxMatrix}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Dimensões (A x L x C)
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {model.dimensions}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Peso Aproximado
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {model.weight}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* General Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-white rounded-xl shadow-md p-8 border border-gray-200"
          >
            <h3 className="text-2xl mb-6 flex items-center gap-3">
              <Settings className="w-7 h-7 text-[#FF5722]" />
              Especificações Gerais
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {generalSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0"
                >
                  <Check className="w-5 h-5 text-[#FF5722] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">
                      {spec.label}
                    </div>
                    <div className="text-gray-900">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Processo de Gravação de Matrizes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda como funciona a exposição UV na COPYMASTER
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Preparação",
                description:
                  "Aplique emulsão fotossensível na tela e posicione o fotolito sobre a matriz emulsionada",
              },
              {
                number: "02",
                title: "Vácuo",
                description:
                  "Acione o sistema de vácuo para pressionar a matriz contra o vidro, garantindo contato perfeito",
              },
              {
                number: "03",
                title: "Exposição",
                description:
                  "Ative a lâmpada UV pelo tempo adequado para gravar a imagem na emulsão fotossensível",
              },
              {
                number: "04",
                title: "Revelação",
                description:
                  "Lave a matriz para revelar a imagem. A matriz está pronta para uso no processo de impressão",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-[#FF5722]/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#FF5722] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre a COPYMASTER
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:border-[#FF5722] transition-all"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg pr-8">{item.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#FF5722] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100"
                  >
                    <div className="pt-4">{item.answer}</div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#FF5722] to-[#E64A19] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl">
              Pronto para ter a COPYMASTER na sua produção?
            </h2>
            <p className="text-xl opacity-95">
              Fale com nossos especialistas e descubra qual modelo é ideal para
              sua operação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={handleQuote}
                className="bg-white text-[#FF5722] hover:bg-gray-100 py-6 px-8 text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento Agora
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 py-6 px-8 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Aplicações da COPYMASTER
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versátil para todas as necessidades de gravação serigráfica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Serigrafia Têxtil",
                description:
                  "Gravação de matrizes para estamparia de camisetas, tecidos e produtos têxteis em geral",
              },
              {
                icon: Award,
                title: "Serigrafia Gráfica",
                description:
                  "Matrizes para impressão de adesivos, rótulos, embalagens e materiais promocionais",
              },
              {
                icon: Target,
                title: "Trabalhos Técnicos",
                description:
                  "Gravação de retículas, degradês e imagens complexas com alta definição e fidelidade",
              },
            ].map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-[#FF5722] hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 bg-[#FF5722]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <app.icon className="w-8 h-8 text-[#FF5722]" />
                </div>
                <h3 className="text-xl mb-3">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
