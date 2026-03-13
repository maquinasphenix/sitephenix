import { MapPin, Phone, MessageCircle, User, Mail } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState, useEffect } from "react";

const distributors = [
  {
    name: "Silkpress",
    phone: "(27) 3089-2450",
    contact: "",
    city: "Vila Velha",
    state: "ES",
    stateName: "Espírito Santo",
  },
  {
    name: "Silk Shop Serigrafia e Complementos Ltda",
    phone: "(62) 3223-6360 / (62) 9 9247-8139",
    contact: "Nereide Medeiros",
    address: "Rua C-2 – Área Verde 35, Quadra 18, Lote 10 – Parque das Laranjeiras",
    email: "silkshop@silkshop.com.br",
    city: "Goiânia",
    state: "GO",
    stateName: "Goiás",
  },
  {
    name: "Caru materiais serigraficos ltda",
    phone: "(99) 3528-2681",
    contact: "Edinaldo",
    city: "Imperatriz",
    state: "MA",
    stateName: "Maranhão",
  },
  {
    name: "Caru Mat.Serigraficos Ltda",
    phone: "(98) 3258 4774",
    contact: "Edinaldo",
    city: "São Luis",
    state: "MA",
    stateName: "Maranhão",
  },
  {
    name: "MARCOS LEAL",
    phone: "(32) 3061-5289 / 9935-6004",
    contact: "Sr Marcos",
    city: "Juiz de Fora",
    state: "MG",
    stateName: "Minas Gerais",
  },
  {
    name: "PB PAPEIS E REP",
    phone: "(83) 3264 1366",
    contact: "Francisca ou Manoel",
    city: "João Pessoa",
    state: "PB",
    stateName: "Paraíba",
  },
  {
    name: "Fabricolor",
    phone: "(83) 3055-3333 / 9926-0375",
    contact: "Sr Everton",
    city: "Campina Grande",
    state: "PB",
    stateName: "Paraíba",
  },
  {
    name: "ANDRE MACEDO",
    phone: "(83) 8719-5027",
    contact: "Andre Macedo",
    city: "João Pessoa",
    state: "PB",
    stateName: "Paraíba",
  },
  {
    name: "EDUARDO CORREIA LIMA",
    phone: "(81) 8899-6037",
    contact: "Eduardo",
    city: "Recife",
    state: "PE",
    stateName: "Pernambuco",
  },
  {
    name: "Fabricolor PARAGUAY",
    phone: "21/211342",
    contact: "Diana Carlitos",
    city: "Asuncion",
    state: "PY",
    stateName: "Paraguai",
  },
  {
    name: "Derimax Articulos Serigraficos",
    phone: "21/227505",
    contact: "Sr Oscar Escobar",
    city: "Asuncion",
    state: "PY",
    stateName: "Paraguai",
  },
  {
    name: "Tecnomold Arti. para Letrista e Serigrafia",
    phone: "(41) 3345-6717",
    contact: "Sr. Ricardo",
    city: "Curitiba",
    state: "PR",
    stateName: "Paraná",
  },
  {
    name: "Tupiscreen Distr. Equip. Serigráficos Ltda",
    phone: "(45) 3038-3494 / 3224-5976",
    contact: "Sr. Romeu",
    city: "Cascavel",
    state: "PR",
    stateName: "Paraná",
  },
  {
    name: "JB TELAS",
    phone: "(44) 3034-5601",
    contact: "Sr Alisson",
    city: "Maringá",
    state: "PR",
    stateName: "Paraná",
  },
  {
    name: "SERITELAS/DECOLORES",
    phone: "(43) 3423-1131",
    contact: "Marquinhos",
    city: "Apucarana",
    state: "PR",
    stateName: "Paraná",
  },
  {
    name: "Schwab Silk",
    phone: "(21) 2510-2671",
    contact: "",
    city: "Rio de Janeiro",
    state: "RJ",
    stateName: "Rio de Janeiro",
  },
  {
    name: "TINTASCREEN LTDA",
    phone: "(21) 3860-5625",
    contact: "Paulo Cesar",
    city: "Rio de Janeiro",
    state: "RJ",
    stateName: "Rio de Janeiro",
  },
  {
    name: "SERITECNICA MATERIAIS SERIGRAFICO LTDA",
    phone: "(21) 3890-2333",
    contact: "Sra Kaltum",
    city: "Rio de Janeiro",
    state: "RJ",
    stateName: "Rio de Janeiro",
  },
  {
    name: "Silkmax",
    phone: "(55) 3312-5452",
    contact: "",
    city: "Santo Ângelo",
    state: "RS",
    stateName: "Rio Grande do Sul",
  },
  {
    name: "Serikraft Materiais Serigráficos",
    phone: "(55) 3312-1964",
    contact: "Sr. Lucas",
    city: "Santo Ângelo",
    state: "RS",
    stateName: "Rio Grande do Sul",
  },
  {
    name: "RL REP.COMERCIAIS LTDA",
    phone: "(51) 3593-1072",
    contact: "Sra. Iolanda / Ruy",
    city: "Novo Hamburgo",
    state: "RS",
    stateName: "Rio Grande do Sul",
  },
  {
    name: "Blue Bird Com. E Imp.de Produtos Serigráficos Ltda",
    phone: "(51) 3342-3100",
    contact: "Sr. Pirajá",
    city: "Porto Alegre",
    state: "RS",
    stateName: "Rio Grande do Sul",
  },
  {
    name: "CASA DO GRAFICO LTDA",
    phone: "(54) 3522-9999 / 99176-8779",
    contact: "Greice, Luis",
    city: "Erechim",
    state: "RS",
    stateName: "Rio Grande do Sul",
  },
  {
    name: "Sefrin Perini & CIA LTDA",
    phone: "(55) 3223-9948",
    contact: "Sr. Gean",
    city: "Santa Maria",
    state: "RS",
    stateName: "Rio Grande do Sul",
  },
  {
    name: "Alternativa Gravações Serigráficas Ltda",
    phone: "(54) 3226-3555",
    contact: "Sr. Pancoto",
    city: "Caxias do Sul",
    state: "RS",
    stateName: "Rio Grande do Sul",
  },
  {
    name: "Brilho Rep.comerciais ltda",
    phone: "(51) 3032 4881",
    contact: "Cesar",
    city: "Porto Alegre",
    state: "RS",
    stateName: "Rio Grande do Sul",
  },
  {
    name: "Magysygns",
    phone: "(47) 3436-1636",
    contact: "",
    city: "Joinville",
    state: "SC",
    stateName: "Santa Catarina",
  },
  {
    name: "ELDORADO CASA DA ARTE",
    phone: "(79) 3211-2784",
    contact: "Roberto Leite",
    city: "Aracaju",
    state: "SE",
    stateName: "Sergipe",
  },
  {
    name: "Silkor",
    phone: "(18) 3642-0744",
    contact: "",
    city: "Birigui",
    state: "SP",
    stateName: "São Paulo",
  },
  {
    name: "Pro Silk",
    phone: "(19) 3255-1076",
    contact: "Sr. Marcos Roberto",
    city: "Campinas",
    state: "SP",
    stateName: "São Paulo",
  },
];

export function Distributors() {
  const [selectedState, setSelectedState] = useState<string>("");
  const [mapUrl, setMapUrl] = useState<string>("");

  // Get unique states with names
  const stateOptions = Array.from(
    new Map(
      distributors.map((d) => [d.state, { code: d.state, name: d.stateName }])
    ).values()
  ).sort((a, b) => a.name.localeCompare(b.name));

  // Filter distributors by selected state
  const filteredDistributors = selectedState
    ? distributors.filter((d) => d.state === selectedState)
    : [];

  // Update map when state changes
  useEffect(() => {
    if (selectedState && filteredDistributors.length > 0) {
      // Create markers for all distributors in the state
      const markers = filteredDistributors
        .map((d) => `${d.city}, ${d.state}, Brasil`)
        .join("|");
      
      // Use Google Maps Embed API with multiple markers
      const query = encodeURIComponent(
        `${filteredDistributors[0].stateName}, Brasil`
      );
      const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${query}&zoom=7`;
      
      setMapUrl(url);
    } else {
      // Show Brazil map when no state selected
      const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Brasil&zoom=4`;
      setMapUrl(url);
    }
  }, [selectedState, filteredDistributors]);

  return (
    <section id="distribuidores" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0A0A]">
          Nossos Distribuidores
        </h2>
        <p className="text-[#374151] text-lg mb-8 max-w-3xl">
          Selecione um estado para visualizar os distribuidores disponíveis
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Filter and List */}
          <div>
            <div className="mb-6">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Selecione um Estado" />
                </SelectTrigger>
                <SelectContent>
                  {stateOptions.map((state) => (
                    <SelectItem key={state.code} value={state.code}>
                      {state.name} ({state.code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {!selectedState && (
              <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 text-center">
                <MapPin className="mx-auto mb-4 text-[#FF5722]" size={48} />
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">
                  Selecione um Estado
                </h3>
                <p className="text-[#374151]">
                  Escolha um estado no menu acima para visualizar os
                  distribuidores disponíveis
                </p>
              </div>
            )}

            {selectedState && filteredDistributors.length > 0 && (
              <div className="space-y-4">
                <div className="bg-[#FF5722] text-white p-4 rounded-lg">
                  <h3 className="font-bold text-lg">
                    {filteredDistributors[0].stateName}
                  </h3>
                  <p className="text-sm opacity-90">
                    {filteredDistributors.length} distribuidor
                    {filteredDistributors.length !== 1 ? "es" : ""} encontrado
                    {filteredDistributors.length !== 1 ? "s" : ""}
                  </p>
                </div>

                {filteredDistributors.map((distributor, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow-sm border border-gray-200"
                  >
                    <div className="mb-3">
                      <h3 className="font-bold text-lg text-[#0A0A0A] mb-1">
                        {distributor.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#374151]">
                        <MapPin size={14} className="text-[#FF5722]" />
                        <span>{distributor.city}</span>
                      </div>
                      {distributor.address && (
                        <p className="text-xs text-[#374151] mt-1 ml-5">
                          {distributor.address}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={14} className="text-[#374151]" />
                        <span className="text-[#374151]">
                          {distributor.phone}
                        </span>
                      </div>

                      {distributor.email && (
                        <div className="flex items-center gap-2 text-sm">
                          <Mail size={14} className="text-[#374151]" />
                          <span className="text-[#374151]">
                            {distributor.email}
                          </span>
                        </div>
                      )}

                      {distributor.contact && (
                        <div className="flex items-center gap-2 text-sm">
                          <User size={14} className="text-[#374151]" />
                          <span className="text-[#374151]">
                            {distributor.contact}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-[#FF5722] hover:bg-[#E64A19] text-white flex-1 font-semibold"
                        onClick={() =>
                          window.open(
                            `https://www.google.com/maps/search/${encodeURIComponent(
                              distributor.name +
                                " " +
                                distributor.city +
                                " " +
                                distributor.state
                            )}`,
                            "_blank"
                          )
                        }
                      >
                        Ver Localização
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-300 hover:bg-gray-50 font-semibold"
                        onClick={() =>
                          window.open(
                            `https://wa.me/55${distributor.phone.replace(
                              /\D/g,
                              ""
                            ).substring(0, 11)}`,
                            "_blank"
                          )
                        }
                      >
                        <MessageCircle size={16} />
                        <span className="ml-2 hidden sm:inline">WhatsApp</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedState && filteredDistributors.length === 0 && (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
                <p className="text-[#374151]">
                  Nenhum distribuidor encontrado neste estado.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Google Maps */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 sticky top-24 h-[600px]">
            {mapUrl ? (
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Distribuidores Phenix"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-50">
                <div className="text-center p-8">
                  <MapPin className="mx-auto mb-4 text-[#C62828]" size={48} />
                  <p className="text-[#374151] font-semibold">
                    Carregando mapa...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}