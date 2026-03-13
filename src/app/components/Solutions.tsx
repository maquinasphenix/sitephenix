import { Package, Cog, Activity } from "lucide-react";

const solutions = [
  {
    icon: Package,
    title: "Robustez e Precisão",
    description:
      "Equipamentos desenvolvidos com estrutura robusta e engenharia de precisão para garantir desempenho consistente em ambientes industriais exigentes.",
  },
  {
    icon: Cog,
    title: "Engenharia Funcional",
    description:
      "Cada equipamento é projetado para atender demandas técnicas específicas, sem soluções genéricas. Foco total em funcionalidade e eficiência operacional.",
  },
  {
    icon: Activity,
    title: "Operação Contínua",
    description:
      "Sistemas projetados para operação ininterrupta, garantindo estabilidade de processo e durabilidade operacional mesmo em condições de alta produção.",
  },
];

export function Solutions() {
  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#0A0A0A]">
          Nossos Pilares
        </h2>
        <p className="text-center text-[#374151] text-lg mb-16 max-w-3xl mx-auto">
          A Phenix não trabalha com soluções genéricas. Desenvolvemos equipamentos
          para ambientes produtivos reais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#FF5722] rounded-lg flex items-center justify-center">
                  <solution.icon className="text-white" size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0A0A0A]">
                {solution.title}
              </h3>
              <p className="text-[#374151] leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}