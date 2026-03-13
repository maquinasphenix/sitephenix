import { ExternalLink, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import logo from "figma:asset/f5d35ff290de52c0f7fa99397cd54447d8db93ce.png";
import {
  buildGoogleReviewsFunctionUrl,
  fallbackReviewsPayload,
  type GoogleReview,
  type GoogleReviewsPayload,
  selectRandomReviews,
} from "../googleReviews";

const REVIEW_ROTATION_MS = 12000;

export function Testimonials() {
  const [summary, setSummary] = useState(() => fallbackReviewsPayload);
  const [allReviews, setAllReviews] = useState<GoogleReview[]>(
    fallbackReviewsPayload.reviews,
  );
  const [visibleReviews, setVisibleReviews] = useState<GoogleReview[]>(
    selectRandomReviews(fallbackReviewsPayload.reviews),
  );
  const [isUsingLiveReviews, setIsUsingLiveReviews] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

    if (!supabaseUrl || !supabaseAnonKey) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    const loadGoogleReviews = async () => {
      try {
        const response = await fetch(buildGoogleReviewsFunctionUrl(supabaseUrl), {
          headers: {
            Authorization: `Bearer ${supabaseAnonKey}`,
            apikey: supabaseAnonKey,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Falha ao buscar avaliações: ${response.status}`);
        }

        const payload = (await response.json()) as GoogleReviewsPayload;

        if (!isMounted || !payload.reviews?.length) {
          return;
        }

        setSummary(payload);
        setAllReviews(payload.reviews);
        setVisibleReviews(selectRandomReviews(payload.reviews));
        setIsUsingLiveReviews(true);
      } catch (error) {
        console.error("Não foi possível carregar avaliações reais do Google:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadGoogleReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!allReviews.length) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setVisibleReviews(selectRandomReviews(allReviews));
    }, REVIEW_ROTATION_MS);

    return () => window.clearInterval(intervalId);
  }, [allReviews]);

  const averageRatingLabel = summary.rating
    ? summary.rating.toFixed(1).replace(".", ",")
    : "5,0";
  const reviewCountLabel = summary.userRatingCount
    ? `${summary.userRatingCount} avaliações`
    : "Avaliações no Google";

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#FF5722] text-white px-6 py-2 rounded-full mb-4">
            <span className="font-bold uppercase tracking-wider text-sm">
              Avaliações em destaque no Google
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0A0A0A]">
            Clientes Satisfeitos com Nossa Qualidade
          </h2>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Nota {averageRatingLabel} no Google com {reviewCountLabel}. Os
            depoimentos abaixo são exibidos em ordem aleatória para destacar
            experiências reais com nossos equipamentos de serigrafia.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full border border-[#FF5722]/20 bg-white px-4 py-2 font-semibold text-[#FF5722]">
              {isUsingLiveReviews
                ? "Atualizado automaticamente com avaliações do Google"
                : "Depoimentos em destaque de clientes"}
            </span>
            {summary.googleMapsUri ? (
              <a
                href={summary.googleMapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 font-semibold text-[#0A0A0A] transition-colors hover:border-[#FF5722] hover:text-[#FF5722]"
              >
                Ver perfil no Google
                <ExternalLink size={16} />
              </a>
            ) : null}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleReviews.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative border-2 border-gray-100 hover:border-[#FF5722]"
            >
              <div className="absolute top-6 right-6 text-[#FF5722]/10">
                <Quote size={48} fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-[#374151] leading-relaxed mb-6 relative z-10 min-h-[120px]">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.authorPhotoUri || logo}
                  alt={testimonial.authorName}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#FF5722]"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-[#0A0A0A]">
                    {testimonial.authorName}
                  </h4>
                  <p className="text-sm text-[#FF5722] font-semibold">
                    {testimonial.authorSubtitle}
                  </p>
                  <p className="text-xs text-[#374151]">
                    {testimonial.relativePublishTimeDescription ||
                      "Avaliação publicada no Google"}
                  </p>
                </div>
              </div>

              {testimonial.googleMapsUri ? (
                <a
                  href={testimonial.googleMapsUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#FF5722] hover:text-[#E64A19]"
                >
                  Ler no Google
                  <ExternalLink size={14} />
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A0A0A] text-white rounded-3xl p-12 mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl font-extrabold text-[#FF5722] mb-2"
              >
                {summary.userRatingCount || "500+"}
              </motion.div>
              <p className="text-gray-400 font-semibold">
                {isUsingLiveReviews ? "Avaliações no Google" : "Clientes atendidos"}
              </p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl font-extrabold text-[#FF5722] mb-2"
              >
                {averageRatingLabel}
              </motion.div>
              <p className="text-gray-400 font-semibold">Nota Média</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl font-extrabold text-[#FF5722] mb-2"
              >
                25+
              </motion.div>
              <p className="text-gray-400 font-semibold">
                Anos em Equipamentos
              </p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-5xl font-extrabold text-[#FF5722] mb-2"
              >
                {isLoading ? "..." : "24h"}
              </motion.div>
              <p className="text-gray-400 font-semibold">Suporte Técnico</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
