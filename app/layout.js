import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: {
    default: "HTS Habitat — Vos vacances à Narbonne",
    template: "%s | HTS Habitat Narbonne",
  },
  description:
    "Découvrez nos appartements de charme à Narbonne : le Cocon Bohème et Rome Antique Moderne. Séjours de caractère, arrivée autonome, proche gare. Réservez sur Airbnb, Booking ou en direct.",
  keywords: [
    "appartement Narbonne",
    "location Narbonne",
    "Airbnb Narbonne",
    "hébergement Narbonne",
    "Cocon Bohème Narbonne",
    "Rome Antique Moderne Narbonne",
    "location courte durée Narbonne",
    "appartement gare Narbonne",
    "HTS Habitat",
  ],
  metadataBase: new URL("https://www.hts-habitat.fr"),
  alternates: { canonical: "https://www.hts-habitat.fr" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.hts-habitat.fr",
    siteName: "HTS Habitat",
    title: "HTS Habitat — Vos vacances à Narbonne",
    description:
      "Séjours de caractère à Narbonne. Deux appartements soigneusement décorés, proches de la gare et du centre.",
    images: [
      {
        url: "/cocon-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cocon Bohème — Appartement de caractère à Narbonne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTS Habitat — Vos vacances à Narbonne",
    description:
      "Séjours de caractère à Narbonne. Deux appartements soigneusement décorés, proches de la gare et du centre.",
    images: ["/cocon-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "HTS Habitat",
              description:
                "Appartements de caractère à Narbonne — Cocon Bohème et Rome Antique Moderne.",
              url: "https://www.hts-habitat.fr",
              telephone: "+33601380441",
              email: "greg.hosteins@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Narbonne",
                addressRegion: "Occitanie",
                addressCountry: "FR",
              },
              image: "https://www.hts-habitat.fr/cocon-hero.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "32",
                bestRating: "5",
              },
              priceRange: "€€",
            }),
          }}
        />
      </head>
      <body>
        {children}
        {/* Widget de réservation Lodgify */}
        <Script
          src="https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
