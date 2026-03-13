import { ArrowRight } from "lucide-react";

const catalogItems = [
  {
    title: "Impressora Serigráfica Semiautomática",
    subtitle: "PHENIXTRON para adesivos, rótulos e comunicação visual",
    href: "/impressora-serigrafica-semi-automatica-phenixtron",
  },
  {
    title: "Mesa de Exposição UV",
    subtitle: "COPYMASTER para gravação de matrizes serigráficas",
    href: "/mesa-exposicao-uv-serigrafia-copymaster",
  },
  {
    title: "Mesa de Exposição UV Profissional",
    subtitle: "Sensibilização e revelação de telas com alta definição",
    href: "/mesa-exposicao-uv-serigrafia",
  },
  {
    title: "Estufas para Secagem e Cura",
    subtitle: "Modelos compactos, industriais e túnel para serigrafia",
    href: "/estufa-compacta-secagem-serigrafia",
  },
  {
    title: "Esteira Transportadora Industrial",
    subtitle: "Integração de processos e fluxo contínuo de produção",
    href: "/esteira-transportadora-industrial",
  },
  {
    title: "Misturador de Tintas Industrial",
    subtitle: "Homogeneização precisa para produção serigráfica",
    href: "/misturador-tintas",
  },
];

export function SeoCatalog() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] mb-5">
            Máquinas para serigrafia industrial em todas as etapas da produção
          </h2>
          <p className="text-lg text-[#374151] leading-relaxed mb-4">
            A Phenix desenvolve equipamentos para preparação de matrizes,
            impressão, secagem, cura têxtil e movimentação de peças. Isso
            posiciona o site para buscas com alta intenção comercial, como
            <strong> máquina para serigrafia</strong>,
            <strong> impressora serigráfica semiautomática</strong>,
            <strong> mesa de exposição UV</strong> e
            <strong> estufa de secagem para serigrafia</strong>.
          </p>
          <p className="text-lg text-[#374151] leading-relaxed">
            As linhas atendem comunicação visual, impressão de adesivos,
            fabricação de rótulos, silk screen industrial e estamparia têxtil
            com foco em robustez, repetibilidade e suporte técnico nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:border-[#FF5722] hover:bg-white hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-3">
                {item.title}
              </h3>
              <p className="text-[#374151] leading-relaxed mb-5">
                {item.subtitle}
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-[#FF5722]">
                Ver página do produto
                <ArrowRight size={18} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
