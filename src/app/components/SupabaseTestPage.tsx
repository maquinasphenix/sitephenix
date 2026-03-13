import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getSupabaseClient } from "../../lib/supabase";
import { Button } from "./ui/button";

type Teste = {
  id: number;
  nome: string;
  created_at: string | null;
};

interface SupabaseTestPageProps {
  onBack: () => void;
}

export function SupabaseTestPage({ onBack }: SupabaseTestPageProps) {
  const [dados, setDados] = useState<Teste[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregar() {
      const supabase = getSupabaseClient();

      if (!supabase) {
        setErro(
          "Supabase não configurado neste ambiente. Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.",
        );
        setCarregando(false);
        return;
      }

      const { data, error } = await supabase.from("testes").select("*");

      console.log("dados do banco:", data);
      console.log("erro:", error);

      setDados((data as Teste[] | null) ?? []);
      setErro(error?.message ?? null);
      setCarregando(false);
    }

    void carregar();
  }, []);

  return (
    <div className="min-h-screen bg-[#111827] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/20 p-10 shadow-2xl">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 px-0 text-white hover:bg-transparent hover:text-[#FF5722]"
        >
          <ArrowLeft className="mr-2" size={18} />
          Voltar ao site
        </Button>

        <h1 className="mb-4 text-4xl font-extrabold text-[#FF5722]">
          Teste Supabase
        </h1>
        <p className="mb-8 text-lg text-gray-300">
          Abra o console do navegador para conferir os logs de leitura da tabela
          `testes`.
        </p>

        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-gray-400">
            Status
          </p>
          <p className="mt-3 text-xl font-bold">
            {carregando
              ? "Carregando..."
              : erro
                ? "Erro na consulta"
                : "Consulta concluída"}
          </p>
          {erro ? <p className="mt-3 text-red-300">{erro}</p> : null}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-gray-400">
            Dados retornados
          </p>
          <pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-gray-100">
            {JSON.stringify(dados, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
