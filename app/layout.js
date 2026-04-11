import "./globals.css";

export const metadata = {
  title: "HTS Habitat",
  description: "Séjours premium à Narbonne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
