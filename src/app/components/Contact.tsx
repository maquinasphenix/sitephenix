import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Obrigado pelo contato! Retornaremos em breve.");
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-20 bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
              Solicite um Orçamento
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Entre em contato conosco para conhecer nossas soluções
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
              />
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
              />
              <Input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
              />
              <Textarea
                name="mensagem"
                placeholder="Mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={5}
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
              />

              <Button
                type="submit"
                className="bg-[#FF5722] hover:bg-[#E64A19] text-white w-full py-6 text-lg font-semibold"
              >
                Enviar
              </Button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#FF5722] flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Endereço</h3>
                <a
                  href="https://waze.com/ul?q=Rua+José+Rocha+Magalhães+395+Areia+Branca+Mandirituba+PR&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FF5722] transition-colors cursor-pointer"
                >
                  <p className="hover:underline">
                    Rua José Rocha Magalhães 395 – Areia Branca
                  </p>
                  <p className="hover:underline">
                    Mandirituba/PR
                  </p>
                  <p className="text-xs text-[#FF5722] mt-1 font-semibold">
                    📍 Abrir no Waze
                  </p>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[#FF5722] flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Vendas Phenix</h3>
                <p className="text-gray-400">(41) 3633-1008</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-[#FF5722] flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">E-mail</h3>
                <p className="text-gray-400">vendas@phenixmaquinas.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="text-[#FF5722] flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Instagram</h3>
                <a 
                  href="https://instagram.com/phenixmaquinas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FF5722] transition-colors"
                >
                  @phenixmaquinas
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Facebook className="text-[#FF5722] flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Facebook</h3>
                <a 
                  href="https://www.facebook.com/profile.php?id=100057607622731" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FF5722] transition-colors"
                >
                  Phenix Máquinas
                </a>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 mt-8">
              <div className="flex gap-4 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}