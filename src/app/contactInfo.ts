export const SALES_EMAIL = "vendas@phenixmaquinas.com.br";
export const SALES_PHONE_DISPLAY = "(41) 98804-3996";
export const SALES_PHONE_E164 = "+55-41-98804-3996";
export const SALES_WHATSAPP_NUMBER = "5541988043996";

export function getWhatsAppUrl(message?: string) {
  if (!message) {
    return `https://wa.me/${SALES_WHATSAPP_NUMBER}`;
  }

  return `https://wa.me/${SALES_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
