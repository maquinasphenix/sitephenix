import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductLines } from "./components/ProductLines";
import { Solutions } from "./components/Solutions";
import { Distributors } from "./components/Distributors";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ProductsPage } from "./components/ProductsPage";
import { SeoHead } from "./components/SeoHead";
import { SeoCatalog } from "./components/SeoCatalog";
import { PhenixtronPage } from "./components/PhenixtronPage";
import { CopymasterPage } from "./components/CopymasterPage";
import { EstufaCompactaPage } from "./components/EstufaCompactaPage";
import { EstufaIndustrialPage } from "./components/EstufaIndustrialPage";
import { EsteiraTransportadoraPage } from "./components/EsteiraTransportadoraPage";
import { EstufaTunelPage } from "./components/EstufaTunelPage";
import { MesaExposicaoPage } from "./components/MesaExposicaoPage";
import { MisturadorTintasPage } from "./components/MisturadorTintasPage";
import { SupabaseTestPage } from "./components/SupabaseTestPage";
import { getSeoData } from "./seo";
import { useEffect, useState } from "react";

type PageType =
  | "home"
  | "products"
  | "phenixtron"
  | "copymaster"
  | "estufa-compacta"
  | "estufa-industrial"
  | "esteira"
  | "estufa-tunel"
  | "mesa-exposicao"
  | "misturador-tintas"
  | "teste-supabase";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const seo = getSeoData(currentPage);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;

      if (path === "/" || path === "") {
        setCurrentPage("home");
      } else if (path === "/produtos") {
        setCurrentPage("products");
      } else if (
        path === "/impressora-serigrafica-semi-automatica-phenixtron" ||
        path === "/phenixtron"
      ) {
        setCurrentPage("phenixtron");
      } else if (
        path === "/mesa-exposicao-uv-serigrafia-copymaster" ||
        path === "/copymaster"
      ) {
        setCurrentPage("copymaster");
      } else if (path === "/estufa-compacta-secagem-serigrafia") {
        setCurrentPage("estufa-compacta");
      } else if (path === "/estufa-industrial-cura-textil") {
        setCurrentPage("estufa-industrial");
      } else if (path === "/esteira-transportadora-industrial") {
        setCurrentPage("esteira");
      } else if (path === "/estufa-tunel-secagem-continua") {
        setCurrentPage("estufa-tunel");
      } else if (path === "/mesa-exposicao-uv-serigrafia") {
        setCurrentPage("mesa-exposicao");
      } else if (path === "/misturador-tintas") {
        setCurrentPage("misturador-tintas");
      } else if (path === "/teste-supabase") {
        setCurrentPage("teste-supabase");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    handlePopState();

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const navigateToProducts = () => {
    setCurrentPage("products");
    window.history.pushState({}, "", "/produtos");
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    window.history.pushState({}, "", "/");
  };

  const navigateToPhenixtron = () => {
    setCurrentPage("phenixtron");
    window.history.pushState(
      {},
      "",
      "/impressora-serigrafica-semi-automatica-phenixtron",
    );
  };

  const navigateToCopymaster = () => {
    setCurrentPage("copymaster");
    window.history.pushState(
      {},
      "",
      "/mesa-exposicao-uv-serigrafia-copymaster",
    );
  };

  const navigateToEstufaCompacta = () => {
    setCurrentPage("estufa-compacta");
    window.history.pushState({}, "", "/estufa-compacta-secagem-serigrafia");
  };

  const navigateToEstufaIndustrial = () => {
    setCurrentPage("estufa-industrial");
    window.history.pushState({}, "", "/estufa-industrial-cura-textil");
  };

  const navigateToEsteira = () => {
    setCurrentPage("esteira");
    window.history.pushState({}, "", "/esteira-transportadora-industrial");
  };

  const navigateToEstufaTunel = () => {
    setCurrentPage("estufa-tunel");
    window.history.pushState({}, "", "/estufa-tunel-secagem-continua");
  };

  const navigateToMesaExposicao = () => {
    setCurrentPage("mesa-exposicao");
    window.history.pushState({}, "", "/mesa-exposicao-uv-serigrafia");
  };

  const navigateToMisturadorTintas = () => {
    setCurrentPage("misturador-tintas");
    window.history.pushState({}, "", "/misturador-tintas");
  };

  if (currentPage === "teste-supabase") {
    return (
      <>
        <SeoHead {...seo} />
        <SupabaseTestPage onBack={navigateToHome} />
        <WhatsAppButton />
      </>
    );
  }

  if (currentPage === "misturador-tintas") {
    return (
      <>
        <SeoHead {...seo} />
        <MisturadorTintasPage onBack={navigateToProducts} />
        <WhatsAppButton />
      </>
    );
  }

  if (currentPage === "mesa-exposicao") {
    return (
      <>
        <SeoHead {...seo} />
        <MesaExposicaoPage onBack={navigateToProducts} />
        <WhatsAppButton />
      </>
    );
  }

  if (currentPage === "estufa-tunel") {
    return (
      <>
        <SeoHead {...seo} />
        <EstufaTunelPage onBack={navigateToProducts} />
        <WhatsAppButton />
      </>
    );
  }

  if (currentPage === "esteira") {
    return (
      <>
        <SeoHead {...seo} />
        <EsteiraTransportadoraPage onBack={navigateToProducts} />
        <WhatsAppButton />
      </>
    );
  }

  if (currentPage === "estufa-industrial") {
    return (
      <>
        <SeoHead {...seo} />
        <EstufaIndustrialPage onBack={navigateToProducts} />
        <WhatsAppButton />
      </>
    );
  }

  if (currentPage === "estufa-compacta") {
    return (
      <>
        <SeoHead {...seo} />
        <EstufaCompactaPage onBack={navigateToProducts} />
        <WhatsAppButton />
      </>
    );
  }

  if (currentPage === "copymaster") {
    return (
      <>
        <SeoHead {...seo} />
        <CopymasterPage onBack={navigateToProducts} />
        <WhatsAppButton />
      </>
    );
  }

  if (currentPage === "phenixtron") {
    return (
      <>
        <SeoHead {...seo} />
        <PhenixtronPage onBack={navigateToProducts} />
        <WhatsAppButton />
      </>
    );
  }

  if (currentPage === "products") {
    return (
      <>
        <SeoHead {...seo} />
        <ProductsPage
          onBack={navigateToHome}
          onNavigateToProduct={navigateToPhenixtron}
          onNavigateToCopymaster={navigateToCopymaster}
          onNavigateToEstufaCompacta={navigateToEstufaCompacta}
          onNavigateToEstufaIndustrial={navigateToEstufaIndustrial}
          onNavigateToEsteira={navigateToEsteira}
          onNavigateToEstufaTunel={navigateToEstufaTunel}
          onNavigateToMesaExposicao={navigateToMesaExposicao}
          onNavigateToMisturadorTintas={navigateToMisturadorTintas}
        />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <SeoHead {...seo} />
      <div className="min-h-screen">
        <Header
          onNavigateToProducts={navigateToProducts}
        />
        <Hero onNavigateToProducts={navigateToProducts} />
        <ProductLines onViewAll={navigateToProducts} />
        <Solutions />
        <SeoCatalog />
        <Distributors />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <WhatsAppButton />
      </div>
    </>
  );
}
