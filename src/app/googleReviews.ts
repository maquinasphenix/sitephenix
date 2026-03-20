export interface GoogleReview {
  id: string;
  authorName: string;
  authorSubtitle: string;
  rating: number;
  text: string;
  authorPhotoUri?: string | null;
  authorProfileUri?: string | null;
  googleMapsUri?: string | null;
  publishTime?: string | null;
  relativePublishTimeDescription?: string | null;
}

export interface GoogleReviewsPayload {
  placeName: string;
  rating: number;
  userRatingCount: number;
  googleMapsUri?: string | null;
  fetchedAt?: string;
  reviews: GoogleReview[];
}

export const GOOGLE_PROFILE_URL = "https://share.google/Jqem3SWXuus8XO55j";

export const fallbackReviewsPayload: GoogleReviewsPayload = {
  placeName: "Phenix Máquinas",
  rating: 5,
  userRatingCount: 11,
  googleMapsUri: GOOGLE_PROFILE_URL,
  reviews: [
    {
      id: "fallback-1",
      authorName: "Silkshop Representações",
      authorSubtitle: "Distribuidor de Equipamentos",
      rating: 5,
      text:
        "Excelente atendimento, equipamento de qualidade e confiável. Trabalhamos com a Phenix há anos e sempre recomendamos aos nossos clientes.",
    },
    {
      id: "fallback-2",
      authorName: "Luciana Farias",
      authorSubtitle: "Cliente Phenix Máquinas",
      rating: 5,
      text:
        "Excelente atendimento, podem comprar sem medo. Recebi o equipamento e fiquei muito satisfeita com o acabamento e o suporte recebido.",
    },
    {
      id: "fallback-3",
      authorName: "Jeferson Gonçalves",
      authorSubtitle: "Avaliação no Google",
      rating: 5,
      text:
        "Muito bom. Visitei as instalações da Phenix e fiquei impressionado com a estrutura, a organização e a qualidade dos equipamentos.",
    },
  ],
};

export function shuffleReviews(reviews: GoogleReview[]) {
  const items = [...reviews];

  for (let index = items.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[nextIndex]] = [items[nextIndex], items[index]];
  }

  return items;
}

export function selectRandomReviews(reviews: GoogleReview[], limit = 3) {
  return shuffleReviews(reviews).slice(0, Math.max(limit, 1));
}

export function buildGoogleReviewsFunctionUrl(supabaseUrl: string) {
  return `${supabaseUrl.replace(/\/+$/, "")}/functions/v1/google-reviews`;
}
