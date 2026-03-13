import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Content-Type": "application/json; charset=utf-8",
};

interface GooglePlaceReview {
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
  googleMapsUri?: string;
  originalText?: {
    text?: string;
  };
  publishTime?: string;
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: {
    text?: string;
  };
}

interface GooglePlaceDetailsResponse {
  displayName?: {
    text?: string;
  };
  googleMapsUri?: string;
  rating?: number;
  reviews?: GooglePlaceReview[];
  userRatingCount?: number;
}

function jsonResponse(body: unknown, status = 200, extraHeaders?: HeadersInit) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      ...extraHeaders,
    },
  });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const googlePlacesApiKey = Deno.env.get("GOOGLE_PLACES_API_KEY");
  const googlePlaceId = Deno.env.get("GOOGLE_PLACE_ID");

  if (!googlePlacesApiKey || !googlePlaceId) {
    return jsonResponse(
      {
        error:
          "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID in Supabase secrets.",
      },
      500,
    );
  }

  const googleResponse = await fetch(
    `https://places.googleapis.com/v1/places/${googlePlaceId}?languageCode=pt-BR&regionCode=BR`,
    {
      headers: {
        "X-Goog-Api-Key": googlePlacesApiKey,
        "X-Goog-FieldMask":
          "displayName,googleMapsUri,rating,reviews,userRatingCount",
      },
    },
  );

  if (!googleResponse.ok) {
    const errorText = await googleResponse.text();

    return jsonResponse(
      {
        error: "Google Places request failed",
        details: errorText.slice(0, 1000),
      },
      googleResponse.status,
    );
  }

  const place = (await googleResponse.json()) as GooglePlaceDetailsResponse;
  const reviews = (place.reviews ?? [])
    .map((review, index) => ({
      id: `${review.authorAttribution?.displayName ?? "review"}-${index}`,
      authorName: review.authorAttribution?.displayName ?? "Cliente Phenix",
      authorSubtitle:
        review.relativePublishTimeDescription ?? "Avaliação publicada no Google",
      rating: Number(review.rating ?? 5),
      text: review.originalText?.text ?? review.text?.text ?? "",
      authorPhotoUri: review.authorAttribution?.photoUri ?? null,
      authorProfileUri: review.authorAttribution?.uri ?? null,
      googleMapsUri: review.googleMapsUri ?? place.googleMapsUri ?? null,
      publishTime: review.publishTime ?? null,
      relativePublishTimeDescription: review.relativePublishTimeDescription ?? null,
    }))
    .filter((review) => review.text);

  return jsonResponse(
    {
      placeName: place.displayName?.text ?? "Phenix Máquinas",
      googleMapsUri: place.googleMapsUri ?? null,
      rating: Number(place.rating ?? 5),
      userRatingCount: Number(place.userRatingCount ?? reviews.length),
      fetchedAt: new Date().toISOString(),
      reviews,
    },
    200,
    {
      "Cache-Control": "public, max-age=900, s-maxage=900",
    },
  );
});
