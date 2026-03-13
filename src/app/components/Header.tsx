import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface HeaderProps {
  onNavigateToProducts?: () => void;
  onNavigateToTutorial?: () => void;
}

export function Header({
  onNavigateToProducts,
  onNavigateToTutorial,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleProductsClick = () => {
    setIsMenuOpen(false);
    if (onNavigateToProducts) {
      onNavigateToProducts();
    } else {
      scrollToSection("produtos");
    }
  };

  const handleTutorialClick = () => {
    setIsMenuOpen(false);
    onNavigateToTutorial?.();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] text-white shadow-xl border-b border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Name */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
            <span className="text-2xl font-bold">PHENIX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-[#FF5722] transition-colors font-semibold text-base"
            >
              Home
            </button>
            <button
              onClick={handleProductsClick}
              className="hover:text-[#FF5722] transition-colors font-semibold text-base"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="hover:text-[#FF5722] transition-colors font-semibold text-base"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("distribuidores")}
              className="hover:text-[#FF5722] transition-colors font-semibold text-base"
            >
              Distribuidores
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="hover:text-[#FF5722] transition-colors font-semibold text-base"
            >
              Contato
            </button>
            {onNavigateToTutorial ? (
              <button
                onClick={handleTutorialClick}
                className="hover:text-[#FF5722] transition-colors font-semibold text-base"
              >
                Tutorial
              </button>
            ) : null}
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded px-8 py-5 font-bold text-base shadow-lg"
            >
              Solicite um Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 flex flex-col gap-4 border-t border-gray-800 pt-4">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-[#FF5722] transition-colors text-left font-semibold py-2"
            >
              Home
            </button>
            <button
              onClick={handleProductsClick}
              className="hover:text-[#FF5722] transition-colors text-left font-semibold py-2"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="hover:text-[#FF5722] transition-colors text-left font-semibold py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("distribuidores")}
              className="hover:text-[#FF5722] transition-colors text-left font-semibold py-2"
            >
              Distribuidores
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="hover:text-[#FF5722] transition-colors text-left font-semibold py-2"
            >
              Contato
            </button>
            {onNavigateToTutorial ? (
              <button
                onClick={handleTutorialClick}
                className="hover:text-[#FF5722] transition-colors text-left font-semibold py-2"
              >
                Tutorial
              </button>
            ) : null}
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded w-full font-bold py-5 text-base shadow-lg"
            >
              Solicite um Orçamento
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
