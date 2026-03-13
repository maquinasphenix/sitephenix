import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import estufaCompacta from "figma:asset/c8b8cc5616caefc6f994ac29f6a187e6dfea6a94.png";
import estufaIndustrial from "figma:asset/18135b82e31a86e596cb05211800c9201f3ab850.png";
import esteiraTransportadora from "figma:asset/f167f5cb0d1405a53a50165dbeb1c0e99d5267ee.png";
import estufaTunel from "figma:asset/3dfe3bba6d6e2e0cca6fe29cc7d83e3bfd433437.png";

const products = [
  {
    title: "Estufa Compacta de Secagem",
    image: estufaCompacta,
  },
  {
    title: "Estufa Industrial",
    image: estufaIndustrial,
  },
  {
    title: "Esteira Transportadora",
    image: esteiraTransportadora,
  },
  {
    title: "Estufa Túnel",
    image: estufaTunel,
  },
];

interface ProductLinesProps {
  onViewAll: () => void;
}

export function ProductLines({ onViewAll }: ProductLinesProps) {
  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-3xl font-extrabold text-[#0A0A0A] md:text-5xl"
        >
          Linhas Completas de Equipamentos Serigráficos
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-8 max-w-3xl text-center text-base text-[#374151] md:mb-12 md:text-lg"
        >
          Máquinas para serigrafia, impressão têxtil, silk screen e estamparia profissional desenvolvidas para atender demandas técnicas específicas de produção industrial
        </motion.p>

        <div className="mb-10 grid grid-cols-2 gap-4 md:mb-12 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative cursor-pointer overflow-hidden rounded-[1.35rem] bg-white shadow-lg md:rounded-2xl md:shadow-xl aspect-[1/1.12] sm:aspect-[3/4]"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Subtle Orange Overlay - only on bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF5722]/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Title Bar - Fixed height */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#FF5722] px-3 py-3 transition-all duration-300 group-hover:py-4 md:px-4">
                <h3 className="text-center text-sm font-bold leading-tight text-white md:text-lg">
                  {product.title}
                </h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/20 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Button
            className="rounded-full border-2 border-gray-300 bg-white px-7 py-5 text-base font-semibold text-[#374151] hover:bg-gray-100 md:px-8 md:py-6 md:text-lg"
            onClick={onViewAll}
          >
            Ver Todos <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
