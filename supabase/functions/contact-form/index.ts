import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json; charset=utf-8",
};

const PHENIX_TO_EMAIL = "vendas@phenixmaquinas.com.br";

type ContactPayload = {
  nome?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendResendEmail(
  resendApiKey: string,
  body: Record<string, unknown>,
  idempotencyKey: string,
) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(body),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      payload,
    };
  }

  return {
    ok: true,
    status: response.status,
    payload,
  };
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const contactFromEmail = Deno.env.get("CONTACT_FROM_EMAIL");
  const contactToEmail = Deno.env.get("CONTACT_TO_EMAIL") ?? PHENIX_TO_EMAIL;
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return jsonResponse({ error: "Invalid request body." }, 400);
  }

  const nome = payload.nome?.trim() ?? "";
  const email = payload.email?.trim().toLowerCase() ?? "";
  const telefone = payload.telefone?.trim() ?? "";
  const mensagem = payload.mensagem?.trim() ?? "";

  if (!nome || !email || !telefone || !mensagem) {
    return jsonResponse(
      { error: "Nome, email, telefone e mensagem são obrigatórios." },
      400,
    );
  }

  if (!isValidEmail(email)) {
    return jsonResponse({ error: "Informe um email válido." }, 400);
  }

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return jsonResponse(
      {
        error:
          "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in function environment.",
      },
      500,
    );
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const { error: insertError } = await supabase.from("contatos").insert({
    nome,
    email,
    telefone,
    mensagem,
    origem: "site",
    status: "novo",
  });

  if (insertError) {
    return jsonResponse(
      {
        error: "Falha ao registrar o contato no banco.",
        details: insertError.message,
      },
      500,
    );
  }

  if (!resendApiKey || !contactFromEmail) {
    return jsonResponse({
      success: true,
      message:
        "Mensagem recebida com sucesso. A equipe da Phenix entrará em contato em breve.",
    });
  }

  const escapedNome = escapeHtml(nome);
  const escapedEmail = escapeHtml(email);
  const escapedTelefone = escapeHtml(telefone);
  const escapedMensagem = escapeHtml(mensagem).replaceAll("\n", "<br />");

  const phenixEmail = await sendResendEmail(
    resendApiKey,
    {
      from: contactFromEmail,
      to: [contactToEmail],
      subject: `Novo contato pelo site - ${nome}`,
      html: `
        <h2>Novo pedido de contato pelo site</h2>
        <p><strong>Nome:</strong> ${escapedNome}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Telefone:</strong> ${escapedTelefone}</p>
        <p><strong>Mensagem:</strong><br />${escapedMensagem}</p>
      `,
      text:
        `Novo pedido de contato pelo site\n\n` +
        `Nome: ${nome}\n` +
        `Email: ${email}\n` +
        `Telefone: ${telefone}\n\n` +
        `Mensagem:\n${mensagem}`,
      reply_to: email,
    },
    crypto.randomUUID(),
  );

  if (!phenixEmail.ok) {
    return jsonResponse(
      {
        success: true,
        warning:
          "Recebemos o contato e salvamos seus dados, mas o encaminhamento por email ainda esta em configuracao.",
      },
      200,
    );
  }

  const confirmationEmail = await sendResendEmail(
    resendApiKey,
    {
      from: contactFromEmail,
      to: [email],
      subject: "Recebemos seu contato - Phenix Máquinas",
      html: `
        <h2>Olá, ${escapedNome}.</h2>
        <p>Recebemos sua mensagem e a equipe da Phenix Máquinas vai retornar em breve.</p>
        <p><strong>Resumo enviado:</strong></p>
        <p><strong>Telefone:</strong> ${escapedTelefone}</p>
        <p><strong>Mensagem:</strong><br />${escapedMensagem}</p>
        <p>Se precisar complementar o pedido, basta responder este email.</p>
      `,
      text:
        `Olá, ${nome}.\n\n` +
        `Recebemos sua mensagem e a equipe da Phenix Máquinas vai retornar em breve.\n\n` +
        `Telefone: ${telefone}\n` +
        `Mensagem:\n${mensagem}\n\n` +
        `Se precisar complementar o pedido, basta responder este email.`,
      reply_to: contactToEmail,
    },
    crypto.randomUUID(),
  );

  if (!confirmationEmail.ok) {
    return jsonResponse(
      {
        success: true,
        warning:
          "Recebemos o contato, mas não foi possível enviar o email de confirmação ao cliente.",
      },
      200,
    );
  }

  return jsonResponse({
    success: true,
    message:
      "Mensagem recebida com sucesso. A equipe da Phenix entrará em contato em breve.",
  });
});
