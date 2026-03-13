import {
  ArrowLeft,
  CheckCircle2,
  Cloud,
  ExternalLink,
  Github,
  Globe,
  KeyRound,
  MapPinned,
  Rocket,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { Button } from "./ui/button";

interface SetupTutorialPageProps {
  onBack: () => void;
}

const prerequisites = [
  "Conta criada no Supabase",
  "Conta criada no GitHub",
  "Projeto do site já aberto localmente",
  "Acesso ao perfil da empresa no Google",
  "Node.js instalado na máquina",
];

const envVars = [
  {
    name: "VITE_SUPABASE_URL",
    description: "URL pública do projeto Supabase usada pelo frontend.",
  },
  {
    name: "VITE_SUPABASE_ANON_KEY",
    description: "Chave pública anon do Supabase usada para invocar a Edge Function.",
  },
  {
    name: "GOOGLE_PLACES_API_KEY",
    description: "Chave privada da API Places usada somente dentro da função do Supabase.",
  },
  {
    name: "GOOGLE_PLACE_ID",
    description: "Identificador do local da Phenix no Google para buscar as avaliações reais.",
  },
];

const validationChecklist = [
  "A rota /tutorial-publicacao abre normalmente online.",
  "A URL da função /functions/v1/google-reviews responde com JSON.",
  "A home mostra avaliações diferentes a cada recarregamento.",
  "O deploy no Vercel publica sem erro.",
  "As páginas internas de produto não retornam 404.",
];

export function SetupTutorialPage({ onBack }: SetupTutorialPageProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F4] text-[#111827]">
      <section className="bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-4 py-8 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Button
                onClick={onBack}
                variant="ghost"
                className="mb-4 px-0 text-white hover:bg-transparent hover:text-[#FF5722]"
              >
                <ArrowLeft className="mr-2" size={18} />
                Voltar ao site
              </Button>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-[#FFB199]">
                <ShieldCheck size={16} />
                Página temporária de implantação
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
                Tutorial completo para ligar Google Reviews, Supabase, GitHub e
                publicar o site
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">
                Esta página foi criada para você configurar tudo com segurança e
                sem depender de memória. Siga a ordem abaixo. O site já está
                preparado para consumir avaliações reais por uma Edge Function do
                Supabase e para ser publicado via GitHub + Vercel.
              </p>
            </div>

            <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 md:max-w-sm">
              <div className="flex items-center gap-3">
                <MapPinned className="text-[#FF5722]" />
                <span>Google Reviews reais via backend seguro</span>
              </div>
              <div className="flex items-center gap-3">
                <Cloud className="text-[#FF5722]" />
                <span>Edge Function pronta em `supabase/functions`</span>
              </div>
              <div className="flex items-center gap-3">
                <Github className="text-[#FF5722]" />
                <span>Fluxo pensado para deploy pelo GitHub</span>
              </div>
              <div className="flex items-center gap-3">
                <Rocket className="text-[#FF5722]" />
                <span>Rewrite já preparado para Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {prerequisites.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 inline-flex rounded-full bg-[#FF5722]/10 p-2 text-[#FF5722]">
                <CheckCircle2 size={18} />
              </div>
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="space-y-8">
          <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <MapPinned className="text-[#FF5722]" />
              <h2 className="text-3xl font-extrabold">
                1. Descobrir o `GOOGLE_PLACE_ID`
              </h2>
            </div>
            <div className="space-y-4 text-[17px] leading-8 text-[#374151]">
              <p>
                O site não busca avaliações pelo nome da empresa. Ele busca pelo
                identificador oficial do local no Google, chamado `Place ID`.
              </p>
              <p>
                Caminho recomendado: abra o Google Maps, encontre a empresa
                correta, confirme endereço e categoria, e depois use a ferramenta
                oficial do Google para localizar o Place ID.
              </p>
              <p>
                Ferramenta oficial:{" "}
                <a
                  href="https://developers.google.com/maps/documentation/places/web-service/place-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#FF5722] hover:underline"
                >
                  Place ID overview
                </a>
              </p>
              <pre className="overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm text-gray-100">
                <code>{`Exemplo de Place ID:
ChIJN1t_tDeuEmsRUsoyG83frY4`}</code>
              </pre>
              <p>
                Guarde esse valor. Você vai usá-lo no Supabase como
                `GOOGLE_PLACE_ID`.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <KeyRound className="text-[#FF5722]" />
              <h2 className="text-3xl font-extrabold">
                2. Criar a chave da API do Google Places
              </h2>
            </div>
            <div className="space-y-4 text-[17px] leading-8 text-[#374151]">
              <p>
                A função usa a API oficial do Google Places para ler avaliações
                públicas do perfil da empresa. Essa chave não deve ficar no
                frontend.
              </p>
              <p>
                Abra o Google Cloud Console, crie ou selecione um projeto, ative
                a Places API e gere uma chave.
              </p>
              <p>
                Documentação oficial do endpoint usado:{" "}
                <a
                  href="https://developers.google.com/maps/documentation/places/web-service/place-details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#FF5722] hover:underline"
                >
                  Place Details
                </a>
              </p>
              <p>
                Depois de criar a chave, restrinja o uso para a Places API. Se
                quiser elevar o nível de segurança, também restrinja por IP ou
                por ambiente quando a infraestrutura estiver estável.
              </p>
              <pre className="overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm text-gray-100">
                <code>{`Variável secreta no Supabase:
GOOGLE_PLACES_API_KEY=cole_aqui_a_sua_chave`}</code>
              </pre>
              <p>
                Observação importante: o Google normalmente retorna até 5 reviews
                públicas por consulta no Places API. O site já embaralha essas
                avaliações na home para aparecerem aleatoriamente.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Cloud className="text-[#FF5722]" />
              <h2 className="text-3xl font-extrabold">
                3. Configurar o Supabase e publicar a Edge Function
              </h2>
            </div>
            <div className="space-y-4 text-[17px] leading-8 text-[#374151]">
              <p>
                O projeto já tem a função pronta em
                `supabase/functions/google-reviews/index.ts`. Ela faz a chamada
                ao Google e devolve só os dados necessários para a home.
              </p>
              <p>
                Instale a CLI do Supabase, faça login e vincule este projeto ao
                projeto remoto do seu painel.
              </p>
              <p>
                Documentação oficial:{" "}
                <a
                  href="https://supabase.com/docs/guides/functions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#FF5722] hover:underline"
                >
                  Supabase Edge Functions
                </a>
              </p>
              <pre className="overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm text-gray-100">
                <code>{`npm install -g supabase
supabase login
supabase link --project-ref SEU_PROJECT_REF
supabase secrets set GOOGLE_PLACES_API_KEY=SUA_CHAVE
supabase secrets set GOOGLE_PLACE_ID=SEU_PLACE_ID
supabase functions deploy google-reviews`}</code>
              </pre>
              <p>
                Se você quiser testar localmente antes do deploy, pode usar o
                comando abaixo depois de configurar as variáveis.
              </p>
              <pre className="overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm text-gray-100">
                <code>{`supabase functions serve google-reviews --no-verify-jwt`}</code>
              </pre>
              <p>
                Para testar em produção com o mesmo modelo de autenticação usado
                pelo site, faça a chamada com a `anon key` do Supabase:
              </p>
              <pre className="overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm text-gray-100">
                <code>{`curl 'https://SEU-PROJETO.supabase.co/functions/v1/google-reviews' \\
  --header 'Authorization: Bearer SUA_ANON_KEY_PUBLICA' \\
  --header 'apikey: SUA_ANON_KEY_PUBLICA'`}</code>
              </pre>
              <p>
                Se esse comando devolver JSON com `reviews`, `rating` e
                `userRatingCount`, a parte do backend está pronta.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Terminal className="text-[#FF5722]" />
              <h2 className="text-3xl font-extrabold">
                4. Configurar as variáveis do frontend
              </h2>
            </div>
            <div className="space-y-4 text-[17px] leading-8 text-[#374151]">
              <p>
                O frontend do site não usa a chave privada do Google. Ele só
                precisa saber qual é a URL do Supabase e a `anon key` pública do
                projeto para invocar a função. As variáveis do Google ficam
                apenas nos secrets do Supabase.
              </p>
              <p>
                Crie um arquivo `.env.local` na raiz do projeto usando os nomes
                abaixo.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {envVars.map((envVar) => (
                  <div
                    key={envVar.name}
                    className="rounded-2xl border border-gray-200 bg-[#FAFAF9] p-5"
                  >
                    <div className="font-mono text-sm font-bold text-[#FF5722]">
                      {envVar.name}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#374151]">
                      {envVar.description}
                    </p>
                  </div>
                ))}
              </div>
              <pre className="overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm text-gray-100">
                <code>{`VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_ANON_KEY=SUA_ANON_KEY_PUBLICA`}</code>
              </pre>
              <p>
                Depois disso, rode um build local para confirmar que está tudo
                coerente antes de publicar.
              </p>
              <pre className="overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm text-gray-100">
                <code>{`npm install
npm run build`}</code>
              </pre>
            </div>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Github className="text-[#FF5722]" />
              <h2 className="text-3xl font-extrabold">
                5. Subir o projeto no GitHub
              </h2>
            </div>
            <div className="space-y-4 text-[17px] leading-8 text-[#374151]">
              <p>
                O caminho mais simples é criar um repositório vazio no GitHub e
                depois conectar a pasta local por Git.
              </p>
              <p>
                Antes do primeiro commit, confirme que o `.gitignore` cobre
                arquivos sensíveis e gerados. Neste projeto, devem ficar fora do
                GitHub: `.env.local`, `node_modules`, `dist`, `.supabase`,
                `supabase/.temp` e `supabase/.branches`.
              </p>
              <p>
                Estes arquivos e pastas devem ser versionados: `src/`, `public/`,
                `index.html`, `package.json`, `package-lock.json`,
                `vite.config.ts`, `.gitignore`, `vercel.json`,
                `supabase/config.toml`, `supabase/migrations/` e
                `supabase/functions/`.
              </p>
              <pre className="overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm text-gray-100">
                <code>{`git init
git add .
git commit -m "site phenix pronto para deploy"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main`}</code>
              </pre>
              <p>
                Não envie `.env.local` para o GitHub. O projeto agora inclui uma
                estrutura separada para exemplificar as variáveis sem expor
                segredos reais.
              </p>
              <p>
                `package-lock.json` deve subir junto. Ele estabiliza versões e
                evita diferença de dependências entre máquina local, Vercel e
                outros ambientes.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Globe className="text-[#FF5722]" />
              <h2 className="text-3xl font-extrabold">
                6. Publicar o site pela Vercel usando o GitHub
              </h2>
            </div>
            <div className="space-y-4 text-[17px] leading-8 text-[#374151]">
              <p>
                A Vercel é o caminho mais direto para um site Vite conectado ao
                GitHub. O projeto já recebeu o arquivo `vercel.json` para evitar
                erro 404 nas rotas internas.
              </p>
              <p>
                No painel da Vercel, clique em “Add New Project”, selecione o
                repositório e mantenha o framework detectado como Vite.
              </p>
              <p>Defina estas configurações:</p>
              <pre className="overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm text-gray-100">
                <code>{`Build Command: npm run build
Output Directory: dist`}</code>
              </pre>
              <p>
                Depois, cadastre na Vercel as mesmas variáveis do frontend:
                `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
              </p>
              <p>
                A cada novo `git push`, a Vercel vai redeployar o site
                automaticamente.
              </p>
              <p>
                Você não é obrigado a criar `.env.production`. Em hospedagem como
                a Vercel, o padrão mais seguro é configurar as variáveis direto
                no painel do projeto.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-[#FF5722]" />
              <h2 className="text-3xl font-extrabold">
                7. Checklist final de validação
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {validationChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-[#FAFAF9] p-5"
                >
                  <CheckCircle2 className="mt-1 flex-shrink-0 text-[#FF5722]" size={18} />
                  <p className="text-[16px] leading-7 text-[#374151]">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Terminal className="text-[#FF5722]" />
              <h2 className="text-3xl font-extrabold">
                8. Criar a primeira tabela de teste no Supabase
              </h2>
            </div>
            <div className="space-y-4 text-[17px] leading-8 text-[#374151]">
              <p>
                Para validar a conexão com o banco além das Edge Functions, o
                projeto agora já inclui uma migration pronta em
                `supabase/migrations/20260313130500_create_testes_table.sql`.
              </p>
              <p>
                Se você preferir fazer pelo painel manualmente, use o SQL Editor
                e rode exatamente o bloco abaixo.
              </p>
              <pre className="overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm text-gray-100">
                <code>{`create table public.testes (
  id bigint generated by default as identity primary key,
  nome text not null,
  created_at timestamp with time zone default now()
);`}</code>
              </pre>
              <p>
                Se quiser aplicar do jeito certo pelo fluxo do repositório, rode
                a migration pelo Supabase CLI:
              </p>
              <pre className="overflow-x-auto rounded-2xl bg-[#111827] p-5 text-sm text-gray-100">
                <code>{`supabase db push`}</code>
              </pre>
              <p>
                A migration deste projeto também ativa RLS e cria políticas
                simples de leitura e inserção para `anon` e `authenticated`,
                porque sem isso a tabela seria criada mas poderia falhar no teste
                do frontend.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold">Links oficiais úteis</h3>
            <p className="mt-2 text-[#374151]">
              Use estes links para conferir a documentação original durante a
              configuração.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://developers.google.com/maps/documentation/places/web-service/place-details"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 font-semibold transition-colors hover:border-[#FF5722] hover:text-[#FF5722]"
            >
              Google Places
              <ExternalLink size={16} />
            </a>
            <a
              href="https://supabase.com/docs/guides/functions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 font-semibold transition-colors hover:border-[#FF5722] hover:text-[#FF5722]"
            >
              Supabase Functions
              <ExternalLink size={16} />
            </a>
            <a
              href="https://vercel.com/docs/deployments/git/vercel-for-github"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 font-semibold transition-colors hover:border-[#FF5722] hover:text-[#FF5722]"
            >
              Vercel + GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
