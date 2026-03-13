import { ArrowLeft, Thermometer, Zap, Wind, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import tunelImg1 from "figma:asset/3dfe3bba6d6e2e0cca6fe29cc7d83e3bfd433437.png";
import tunelImg2 from "figma:asset/0cb09e0b031cce6727274e2500f0e6903b1e121d.png";

interface EstufaTunelPageProps {
  onBack: () => void;
}

const models = [
  {
    name: "TÚNEL 200",
    tunnel: "2,0 metros",
    width: "60 cm",
    power: "6000W",
    capacity: "200 peças/hora",
  },
  {
    name: "TÚNEL 250",
    tunnel: "2,5 metros",
    width: "80 cm",
    power: "7500W",
    capacity: "250 peças/hora",
  },
  {
    name: "TÚNEL 300",
    tunnel: "3,0 metros",
    width: "100 cm",
    power: "9000W",
    capacity: "300 peças/hora",
  },
];

export function EstufaTunelPage({ onBack }: EstufaTunelPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [tunelImg1, tunelImg2];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-block bg-[#FF5722] text-white px-6 py-2 rounded-full mb-4">
                <span className="font-bold uppercase tracking-wider text-sm">
                  Máxima Produtividade
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#0A0A0A]">
                Estufa Túnel de Secagem Contínua
              </h1>
              <p className="text-xl text-[#374151] max-w-3xl mx-auto">
                Sistema de secagem profissional para alta produção. Túnel com aquecimento uniforme e esteira integrada para processo contínuo de cura de tintas.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Thermometer className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">Até 200°C</div>
                <div className="text-sm text-[#374151]">Temperatura</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Zap className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">6000-9000W</div>
                <div className="text-sm text-[#374151]">Potência</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Wind className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">Forçada</div>
                <div className="text-sm text-[#374151]">Ventilação</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <TrendingUp className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">200-300</div>
                <div className="text-sm text-[#374151]">Peças/Hora</div>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <img
                src={images[selectedImage]}
                alt="Estufa Túnel"
                className="w-full h-[500px] object-contain bg-gray-50 rounded-2xl shadow-2xl mb-6"
              />
              <div className="flex gap-4 justify-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-24 h-24 rounded-lg overflow-hidden border-4 transition-all ${
                      selectedImage === index
                        ? "border-[#FF5722]"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modelos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-[#0A0A0A]">
              Modelos Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {models.map((model, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#FF5722] transition-all"
                >
                  <h3 className="text-2xl font-bold text-[#FF5722] mb-6">
                    {model.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-[#374151] font-semibold">
                        Túnel:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.tunnel}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-[#374151] font-semibold">
                        Largura:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.width}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-[#374151] font-semibold">
                        Potência:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.power}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#374151] font-semibold">
                        Capacidade:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.capacity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Características */}
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
                    Resistências elétricas blindadas distribuídas ao longo do túnel. Controle digital independente por zonas de temperatura.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Ventilação Forçada
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Sistema de ventiladores para circulação uniforme do ar quente, garantindo secagem homogênea em toda extensão da peça.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Esteira Integrada
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Esteira transportadora de malha teflon com velocidade variável por inversor de frequência. Movimento contínuo e estável.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Isolamento Superior
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Câmara de secagem com isolamento térmico em lã cerâmica. Chapas em aço carbono com pintura eletrostática.
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
                      <strong className="text-[#0A0A0A]">Estamparia Têxtil:</strong> Cura de tintas plastisol e à base de água em camisetas, uniformes e tecidos em geral
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#374151] leading-relaxed">
                      <strong className="text-[#0A0A0A]">Serigrafia Industrial:</strong> Secagem de peças promocionais, brindes e materiais impressos em série
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#374151] leading-relaxed">
                      <strong className="text-[#0A0A0A]">Produção em Escala:</strong> Ideal para volumes médios e altos com necessidade de processo contínuo
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#374151] leading-relaxed">
                      <strong className="text-[#0A0A0A]">Múltiplas Tintas:</strong> Compatível com plastisol, PVC, acrílicas, vinílicas e outros tipos de tintas serigráficas
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-6">
              Aumente Sua Capacidade de Produção
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Consulte nossos especialistas e descubra o modelo ideal para seu negócio
            </p>
            <Button
              onClick={() =>
                window.open("https://wa.me/554136331008", "_blank")
              }
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 py-6 text-lg font-bold"
            >
              WhatsApp: (41) 3633-1008
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
