export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales et politique de confidentialité de HTS Habitat, Narbonne.",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "72px 24px 96px", fontFamily: "Inter, sans-serif", color: "#1a1a1a", lineHeight: 1.75 }}>

      <a href="/" style={{ fontSize: "0.88rem", color: "#888", textDecoration: "none", display: "inline-block", marginBottom: 40 }}>
        ← Retour au site
      </a>

      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8, letterSpacing: "-0.02em" }}>
        Mentions légales
      </h1>
      <p style={{ color: "#888", fontSize: "0.88rem", marginBottom: 48 }}>
        Dernière mise à jour : avril 2026
      </p>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid #ebebeb" }}>
          Éditeur du site
        </h2>
        <p>
          <strong>Grégory Hosteins</strong><br />
          Micro-entrepreneur — LMNP<br />
          SIRET : 942 652 678 00031<br />
          Narbonne (11000), France<br />
          Email : <a href="mailto:greg.hosteins@gmail.com" style={{ color: "#1a1a1a" }}>greg.hosteins@gmail.com</a><br />
          Téléphone : 06.01.38.04.41
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid #ebebeb" }}>
          Hébergeur
        </h2>
        <p>
          <strong>Vercel Inc.</strong><br />
          440 N Barranca Ave #4133<br />
          Covina, CA 91723 — États-Unis<br />
          <a href="https://vercel.com" target="_blank" rel="noreferrer" style={{ color: "#1a1a1a" }}>https://vercel.com</a>
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid #ebebeb" }}>
          Politique de confidentialité
        </h2>

        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Données collectées</h3>
        <p>
          Dans le cadre de l'utilisation du formulaire de contact, HTS Habitat collecte uniquement
          les informations que vous saisissez volontairement : nom, adresse email et message.
        </p>

        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Utilisation des données</h3>
        <p>
          Ces données sont utilisées exclusivement pour répondre à vos demandes de renseignement.
          Elles ne sont jamais revendues ni transmises à des tiers.
        </p>

        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Cookies</h3>
        <p>
          Ce site n'utilise pas de cookies de tracking ou d'analyse. Aucune donnée de navigation
          n'est collectée à des fins publicitaires ou statistiques.
        </p>

        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Vos droits (RGPD)</h3>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
          d'un droit d'accès, de rectification et de suppression de vos données personnelles.
          Pour exercer ces droits, contactez-nous à :{" "}
          <a href="mailto:greg.hosteins@gmail.com" style={{ color: "#1a1a1a" }}>greg.hosteins@gmail.com</a>.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid #ebebeb" }}>
          Propriété intellectuelle
        </h2>
        <p>
          L'ensemble du contenu de ce site (textes, photographies, design) est la propriété exclusive
          de HTS Habitat. Toute reproduction, même partielle, est interdite sans autorisation préalable.
        </p>
      </section>

      <p style={{ fontSize: "0.82rem", color: "#aaa", marginTop: 64 }}>
        © {new Date().getFullYear()} HTS Habitat · Narbonne
      </p>

    </main>
  );
}
