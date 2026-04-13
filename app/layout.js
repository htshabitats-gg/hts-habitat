import "./globals.css";

export const metadata = {
  // ── Titre & description ──────────────────────────────────────────────────
  title: {
    default: "HTS Habitat — Appartements premium à Narbonne",
    template: "%s | HTS Habitat Narbonne",
  },
  description:
    "Découvrez nos appartements de charme à Narbonne : le Cocon Bohème et Rome Antique Moderne. Séjours premium, arrivée autonome, proche gare. Réservez sur Airbnb, Booking ou en direct.",

  // ── Mots-clés ────────────────────────────────────────────────────────────
  keywords: [
    "appartement Narbonne",
    "location Narbonne",
    "Airbnb Narbonne",
    "hébergement premium Narbonne",
    "Cocon Bohème Narbonne",
    "Rome Antique Moderne Narbonne",
    "location courte durée Narbonne",
    "appartement gare Narbonne",
    "séjour Narbonne",
    "location vacances Narbonne",
    "HTS Habitat",
  ],

  // ── Auteur & site ────────────────────────────────────────────────────────
  authors: [{ name: "HTS Habitat", url: "https://www.hts-habitat.fr" }],
  creator: "HTS Habitat",
  publisher: "HTS Habitat",
  metadataBase: new URL("https://www.hts-habitat.fr"),
  alternates: {
    canonical: "https://www.hts-habitat.fr",
  },

  // ── Open Graph (partage Facebook, WhatsApp, LinkedIn) ───────────────────
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.hts-habitat.fr",
    siteName: "HTS Habitat",
    title: "HTS Habitat — Appartements premium à Narbonne",
    description:
      "Séjours de caractère à Narbonne. Deux appartements soigneusement décorés, proches de la gare et du centre. Réservation Airbnb, Booking ou en direct.",
    images: [
      {
        url: "/cocon-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cocon Bohème — Appartement premium à Narbonne",
      },
    ],
  },

  // ── Twitter / X ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "HTS Habitat — Appartements premium à Narbonne",
    description:
      "Séjours de caractère à Narbonne. Deux appartements soigneusement décorés, proches de la gare et du centre.",
    images: ["/cocon-hero.jpg"],
  },

  // ── Robots ───────────────────────────────────────────────────────────────
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

  // ── Icône ────────────────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Données structurées JSON-LD pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "HTS Habitat",
              description:
                "Appartements premium à Narbonne — Cocon Bohème et Rome Antique Moderne. Séjours de caractère, arrivée autonome, proche gare.",
              url: "https://www.hts-habitat.fr",
              telephone: "+33601380441",
              email: "greg.hosteins@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Narbonne",
                addressRegion: "Occitanie",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.1836,
                longitude: 3.0042,
              },
              image: "https://www.hts-habitat.fr/cocon-hero.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "32",
                bestRating: "5",
              },
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Wifi", value: true },
                { "@type": "LocationFeatureSpecification", name: "Arrivée autonome", value: true },
                { "@type": "LocationFeatureSpecification", name: "Proche gare", value: true },
              ],
              priceRange: "€€",
              currenciesAccepted: "EUR",
              paymentAccepted: "Airbnb, Booking, Virement",
              hasMap: "https://maps.google.com/?q=Narbonne,France",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
