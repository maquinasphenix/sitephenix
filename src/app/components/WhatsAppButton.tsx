import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { getWhatsAppUrl } from "../contactInfo";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5 
      }}
    >
      {/* Pulsating Rings - Simplified for mobile */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-16 h-16 bg-green-500/30 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop"
          }}
        />
        <motion.div
          className="absolute w-16 h-16 bg-green-500/30 rounded-full"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
            repeatType: "loop"
          }}
        />
      </div>

      {/* Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full p-4 shadow-2xl touch-manipulation"
        whileHover={{ 
          scale: 1.1,
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop"
          }
        }}
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} strokeWidth={2.5} />
      </motion.button>
    </motion.div>
  );
}
