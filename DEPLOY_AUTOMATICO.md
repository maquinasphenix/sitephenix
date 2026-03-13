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

### Email do formulario

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

## O que acontece no push para main

1. Instala dependencias e roda `npm run build`
2. A Vercel publica o frontend automaticamente pelo integrador nativo com o GitHub
3. Executa `supabase db push`
4. Sincroniza os secrets do email no projeto Supabase
5. Faz deploy das functions `google-reviews` e `contact-form`

## Como obter os valores

### Supabase

- `SUPABASE_PROJECT_REF`: neste projeto, o valor atual e `vtwoapnwiugywgbmkusx`
- `SUPABASE_ACCESS_TOKEN`: token pessoal do Supabase
- `SUPABASE_DB_PASSWORD`: senha do banco remoto do projeto

### Email do formulario

- `RESEND_API_KEY`: chave da conta Resend que fara o disparo dos emails do formulario
- `CONTACT_FROM_EMAIL`: remetente validado no Resend, por exemplo `site@phenixmaquinas.com.br`
- `CONTACT_TO_EMAIL`: destino das mensagens do formulario. Para este projeto, usar `vendas@phenixmaquinas.com.br`

## Observacao importante

O frontend ja esta com deploy automatico nativo pela Vercel sempre que a branch `main` recebe push.
O GitHub Actions ficou responsavel pelo que a Vercel nao cobre: validar build e atualizar o Supabase.

Para o envio funcionar em producao, o dominio usado em `CONTACT_FROM_EMAIL` precisa estar validado no Resend. O destino `CONTACT_TO_EMAIL` pode permanecer `vendas@phenixmaquinas.com.br`.
