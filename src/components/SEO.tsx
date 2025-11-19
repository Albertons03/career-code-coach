import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO = ({
  title = "Career Code Coach - IT Karrier Mentorálás | Programozó Coaching",
  description = "Professzionális IT karriermentorálás junioroktól seniorig. Személyre szabott coaching, valódi projektek, interjúfelkészítés, code review. 95% elhelyezkedési arány.",
  keywords = "IT mentorálás, programozó coach, karrierváltás, junior developer, code review, interjúfelkészítés, tech mentor, full-stack, frontend, backend, React, TypeScript",
  ogImage = "/u1735675282_Hero_portr_-_professzionlis_coachprofessional_por_e5b06040-a3db-4938-a8ff-1fbdfc7a8446_2.png",
  ogUrl = "https://careercoach.hu",
}: SEOProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Basic meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("author", "Career Code Coach");
    setMetaTag("robots", "index, follow");

    // Open Graph tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:url", ogUrl, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:locale", "hu_HU", true);

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);

    // Additional SEO tags
    setMetaTag("theme-color", "#0ea5e9");
    setMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Career Code Coach",
      description: description,
      url: ogUrl,
      image: ogImage,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressCountry: "HU",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "150",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        price: "299",
        priceCurrency: "EUR",
      },
    };

    let scriptTag = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, ogImage, ogUrl]);

  return null;
};

export default SEO;
