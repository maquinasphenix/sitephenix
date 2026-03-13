import { useEffect } from "react";

type StructuredData =
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string[];
  openGraphType?: "website" | "product";
  structuredData?: StructuredData;
  robotsContent?: string;
}

const SITE_URL = "https://phenixmaquinas.com.br";
const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

function upsertMeta(
  selector: string,
  attributeName: "name" | "property",
  attributeValue: string,
  content: string,
) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attributeName, attributeValue);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

function upsertStructuredData(data?: StructuredData) {
  const scriptId = "phenix-structured-data";
  let script = document.head.querySelector<HTMLScriptElement>(`#${scriptId}`);

  if (!data) {
    script?.remove();
    return;
  }

  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export function SeoHead({
  title,
  description,
  canonicalPath,
  keywords,
  openGraphType = "website",
  structuredData,
  robotsContent = DEFAULT_ROBOTS,
}: SeoHeadProps) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    document.title = title;
    document.documentElement.lang = "pt-BR";

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="robots"]', "name", "robots", robotsContent);
    upsertMeta("meta[property=\"og:title\"]", "property", "og:title", title);
    upsertMeta(
      "meta[property=\"og:description\"]",
      "property",
      "og:description",
      description,
    );
    upsertMeta("meta[property=\"og:type\"]", "property", "og:type", openGraphType);
    upsertMeta("meta[property=\"og:url\"]", "property", "og:url", canonicalUrl);
    upsertMeta("meta[property=\"og:locale\"]", "property", "og:locale", "pt_BR");
    upsertMeta("meta[property=\"og:site_name\"]", "property", "og:site_name", "Phenix Máquinas");
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description,
    );

    if (keywords?.length) {
      upsertMeta(
        'meta[name="keywords"]',
        "name",
        "keywords",
        keywords.join(", "),
      );
    }

    upsertLink("canonical", canonicalUrl);
    upsertStructuredData(structuredData);
  }, [
    canonicalPath,
    description,
    keywords,
    openGraphType,
    robotsContent,
    structuredData,
    title,
  ]);

  return null;
}
