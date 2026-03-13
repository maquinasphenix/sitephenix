# Deploy automatico

O repositorio agora possui dois workflows do GitHub Actions:

- `.github/workflows/deploy-production.yml`
  Valida o build e publica automaticamente o Supabase a cada push na `main`.
- `.github/workflows/pull-request-check.yml`
  Valida o build em pull requests antes do merge.

## Secrets do GitHub

Cadastre estes secrets no repositorio do GitHub em `Settings > Secrets and variables > Actions`.

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Supabase

- `SUPABASE_ACCESS_TOKEN`
- `SUPABASE_PROJECT_REF`
- `SUPABASE_DB_PASSWORD`
  Opcional, mas recomendado. Quando presente, o workflow tambem executa `supabase db push`.

## O que acontece no push para main

1. Instala dependencias e roda `npm run build`
2. A Vercel publica o frontend automaticamente pelo integrador nativo com o GitHub
3. Executa `supabase db push` se `SUPABASE_DB_PASSWORD` estiver configurado
4. Faz deploy das functions `google-reviews` e `contact-form`

## Como obter os valores

### Supabase

- `SUPABASE_PROJECT_REF`: neste projeto, o valor atual e `vtwoapnwiugywgbmkusx`
- `SUPABASE_ACCESS_TOKEN`: token pessoal do Supabase
- `SUPABASE_DB_PASSWORD`: senha do banco do projeto hospedado

## Observacao importante

O frontend ja esta com deploy automatico nativo pela Vercel sempre que a branch `main` recebe push.
O GitHub Actions ficou responsavel pelo que a Vercel nao cobre: validar build e atualizar o Supabase.
