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
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#0A0A0A]"
        >
          Linhas Completas de Equipamentos Serigráficos
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[#374151] text-lg mb-12 max-w-3xl mx-auto"
        >
          Máquinas para serigrafia, impressão têxtil, silk screen e estamparia profissional desenvolvidas para atender demandas técnicas específicas de produção industrial
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4] cursor-pointer bg-white"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Subtle Orange Overlay - only on bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF5722]/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Title Bar - Fixed height */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#FF5722] py-3 px-4 transition-all duration-300 group-hover:py-4">
                <h3 className="text-base md:text-lg font-bold text-white text-center leading-tight">
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
            className="bg-white hover:bg-gray-100 text-[#374151] border-2 border-gray-300 text-lg font-semibold rounded-full px-8 py-6"
            onClick={onViewAll}
          >
            Ver Todos <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}