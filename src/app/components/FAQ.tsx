import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const homeFaqs = [
  {
    question: "Quais máquinas para serigrafia a Phenix fabrica?",
    answer:
      "Fabricamos uma linha completa de equipamentos para serigrafia industrial, incluindo impressora serigráfica semiautomática, mesa de exposição UV, estufas de secagem, estufa túnel, esteira transportadora e misturador de tintas para preparação e acabamento.",
  },
  {
    question:
      "A Phenix atende serigrafia industrial, comunicação visual e estamparia têxtil?",
    answer:
      "Sim. Nossos equipamentos atendem produção de adesivos, rótulos, silk screen industrial, comunicação visual e estamparia têxtil, com soluções para impressão, secagem, cura e gravação de matrizes.",
  },
  {
    question:
      "Qual a diferença entre impressora serigráfica manual e semiautomática?",
    answer:
      "A impressora serigráfica semiautomática entrega mais repetibilidade, velocidade e estabilidade de processo do que uma operação manual. Isso reduz variações de impressão e melhora a produtividade em trabalhos seriados.",
  },
  {
    question: "Vocês fabricam mesa de exposição UV e estufas para serigrafia?",
    answer:
      "Sim. Além da linha de impressão, a Phenix fabrica mesa de exposição UV para gravação de matrizes, estufa compacta de secagem, estufa industrial, estufa túnel e equipamentos auxiliares para fluxo produtivo completo.",
  },
  {
    question: "Vocês fornecem assistência técnica?",
    answer:
      "Sim! Contamos com uma equipe técnica especializada que oferece suporte completo, manutenção preventiva e corretiva para todas as nossas máquinas. Temos uma rede de distribuidores autorizados em várias regiões do Brasil.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#0A0A0A]">
          Perguntas Frequentes sobre Máquinas para Serigrafia
        </h2>
        <p className="text-center text-[#374151] text-lg mb-12">
          Tire dúvidas sobre impressora serigráfica, mesa de exposição UV,
          estufas de secagem e suporte técnico
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border border-gray-200 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-[#0A0A0A]">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#374151] pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
