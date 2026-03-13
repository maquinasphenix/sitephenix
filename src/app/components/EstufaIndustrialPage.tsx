import { ArrowLeft, Zap, Thermometer, Gauge, Box } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import estufaImg1 from "figma:asset/18135b82e31a86e596cb05211800c9201f3ab850.png";
import estufaImg2 from "figma:asset/37f3891e98ff0b33f0f471b278e5d770a33fb09b.png";
import { getWhatsAppUrl, SALES_PHONE_DISPLAY } from "../contactInfo";

interface EstufaIndustrialPageProps {
  onBack: () => void;
}

const models = [
  {
    name: "EI-1200",
    dimension: "120 x 150 cm",
    power: "4500W",
    voltage: "380V Trifásico",
    capacity: "120 peças/hora",
  },
  {
    name: "EI-1500",
    dimension: "150 x 180 cm",
    power: "5500W",
    voltage: "380V Trifásico",
    capacity: "150 peças/hora",
  },
];

export function EstufaIndustrialPage({ onBack }: EstufaIndustrialPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [estufaImg1, estufaImg2];

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
                  Alta Produtividade Industrial
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#0A0A0A]">
                Estufa Industrial de Alto Desempenho
              </h1>
              <p className="text-xl text-[#374151] max-w-3xl mx-auto">
                Equipamento robusto para grandes volumes de produção. Secagem e cura de tintas com controle digital de temperatura e sistema de ventilação forçada.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Thermometer className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">Até 220°C</div>
                <div className="text-sm text-[#374151]">Temperatura</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Zap className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">4500-5500W</div>
                <div className="text-sm text-[#374151]">Potência</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Gauge className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">120-150</div>
                <div className="text-sm text-[#374151]">Peças/Hora</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#FF5722]/20 text-center">
                <Box className="w-8 h-8 text-[#FF5722] mx-auto mb-2" />
                <div className="font-bold text-[#0A0A0A]">Industrial</div>
                <div className="text-sm text-[#374151]">Categoria</div>
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
                alt="Estufa Industrial"
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
                    <img src={img} alt="" className="w-full h-full object-cover" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                      <span className="text-[#374151] font-semibold">Área Útil:</span>
                      <span className="text-[#0A0A0A] font-bold">{model.dimension}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-[#374151] font-semibold">Potência:</span>
                      <span className="text-[#0A0A0A] font-bold">{model.power}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-[#374151] font-semibold">Voltagem:</span>
                      <span className="text-[#0A0A0A] font-bold">{model.voltage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#374151] font-semibold">Capacidade:</span>
                      <span className="text-[#0A0A0A] font-bold">{model.capacity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-6">
              Solicite uma Demonstração
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato e conheça as especificações completas da estufa industrial
            </p>
            <Button
              onClick={() => window.open(getWhatsAppUrl(), "_blank")}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 py-6 text-lg font-bold"
            >
              WhatsApp: {SALES_PHONE_DISPLAY}
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
