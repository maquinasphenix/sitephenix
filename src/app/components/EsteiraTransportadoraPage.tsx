import { ArrowLeft, Ruler, Zap, Gauge, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import esteiraImg from "figma:asset/f167f5cb0d1405a53a50165dbeb1c0e99d5267ee.png";

interface EsteiraTransportadoraPageProps {
  onBack: () => void;
}

const models = [
  {
    name: "ET-300",
    length: "3 metros",
    width: "60 cm",
    speed: "0-15 m/min",
    motor: "0,5 CV",
  },
  {
    name: "ET-400",
    length: "4 metros",
    width: "80 cm",
    speed: "0-15 m/min",
    motor: "0,75 CV",
  },
  {
    name: "ET-500",
    length: "5 metros",
    width: "100 cm",
    speed: "0-20 m/min",
    motor: "1 CV",
  },
];

export function EsteiraTransportadoraPage({
  onBack,
}: EsteiraTransportadoraPageProps) {
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
                  Logística de Produção
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#0A0A0A]">
                Esteira Transportadora Industrial
              </h1>
              <p className="text-xl text-[#374151] max-w-3xl mx-auto">
                Equipamento essencial para otimização do fluxo de produção. Ideal para interligar etapas do processo de serigrafia e estamparia têxtil.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Ruler className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">3-5m</div>
                <div className="text-sm text-[#374151]">Comprimento</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Gauge className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">0-20 m/min</div>
                <div className="text-sm text-[#374151]">Velocidade</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Zap className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">0,5-1 CV</div>
                <div className="text-sm text-[#374151]">Motor</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Settings className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">Regulável</div>
                <div className="text-sm text-[#374151]">Controle</div>
              </div>
            </div>
          </div>
        </section>

        {/* Imagem Principal */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <img
                src={esteiraImg}
                alt="Esteira Transportadora"
                className="w-full h-[500px] object-contain bg-gray-50 rounded-2xl shadow-2xl"
              />
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
                        Comprimento:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.length}
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
                        Velocidade:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.speed}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#374151] font-semibold">
                        Motor:
                      </span>
                      <span className="text-[#0A0A0A] font-bold">
                        {model.motor}
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
                Aplicações e Benefícios
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Integração de Processos
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Conecta diferentes estações de trabalho, otimizando o fluxo entre impressão, secagem e acabamento.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Velocidade Ajustável
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Inversor de frequência para controle preciso da velocidade conforme necessidade da produção.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Estrutura Robusta
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Chassi em perfil de aço com rodízios para movimentação. Acabamento em pintura eletrostática.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5722]">
                  <h3 className="font-bold text-xl mb-3 text-[#0A0A0A]">
                    Lona Resistente
                  </h3>
                  <p className="text-[#374151] leading-relaxed">
                    Lona transportadora em PVC de alta resistência, adequada para uso contínuo e fácil manutenção.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-6">
              Solicite um Projeto Personalizado
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Podemos desenvolver esteiras sob medida conforme o layout da sua produção
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
