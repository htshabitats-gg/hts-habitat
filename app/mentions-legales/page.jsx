"use client";

export default function MentionsLegales() {
  return (
    <main style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#fff", color: "#1a1a1a", minHeight: "100vh" }}>

      {/* Header simple */}
      <header style={{ background: "rgba(22,16,10,0.96)", padding: "20px 8vw", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", color: "white", textDecoration: "none", letterSpacing: ".1em" }}>
          HTS <em style={{ fontStyle: "italic", color: "#c2622d" }}>Habitat</em>
        </a>
        <a href="/" style={{ fontSize: ".8rem", color: "rgba(255,255,255,.6)", textDecoration: "none", letterSpacing: ".08em", textTransform: "uppercase" }}>
          ← Retour au site
        </a>
      </header>

      {/* Contenu */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 8vw 100px" }}>

        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 300, marginBottom: "2rem", lineHeight: 1.2 }}>
          Mentions légales
        </h1>

        <p style={{ fontSize: ".85rem", color: "#888", marginBottom: "3rem" }}>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site hts-habitat.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>

        {/* Éditeur */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 400, marginBottom: "1rem", paddingBottom: ".5rem", borderBottom: "1px solid #eee" }}>
            Éditeur du site
          </h2>
          <p style={{ fontSize: ".92rem", lineHeight: 1.8, color: "#444" }}>
            <strong>Nom :</strong> Gregory Hosteins<br />
            <strong>Statut :</strong> Micro-entrepreneur<br />
            <strong>SIRET :</strong> 942 652 678 00031<br />
            <strong>Activité :</strong> Hébergement touristique et autre hébergement de courte durée<br />
            <strong>Localisation :</strong> Narbonne, France<br />
            <strong>Email :</strong> <a href="mailto:hts.habitats@gmail.com" style={{ color: "#c2622d" }}>hts.habitats@gmail.com</a><br />
            <strong>Téléphone :</strong> 06.01.38.04.41
          </p>
        </section>

        {/* Hébergement */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 400, marginBottom: "1rem", paddingBottom: ".5rem", borderBottom: "1px solid #eee" }}>
            Hébergement
          </h2>
          <p style={{ fontSize: ".92rem", lineHeight: 1.8, color: "#444" }}>
            <strong>Société :</strong> Vercel Inc.<br />
            <strong>Adresse :</strong> 340 Pine Street, Suite 603, San Francisco, CA 94104, États-Unis<br />
            <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noreferrer" style={{ color: "#c2622d" }}>vercel.com</a>
          </p>
        </section>

        {/* Propriété intellectuelle */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 400, marginBottom: "1rem", paddingBottom: ".5rem", borderBottom: "1px solid #eee" }}>
            Propriété intellectuelle
          </h2>
          <p style={{ fontSize: ".92rem", lineHeight: 1.8, color: "#444" }}>
            L'ensemble du contenu de ce site (textes, photographies, visuels, logo) est la propriété exclusive de Gregory Hosteins — HTS Habitat, sauf mentions contraires. Toute reproduction, représentation, modification ou exploitation de tout ou partie du contenu de ce site, par quelque procédé que ce soit, sans autorisation expresse et préalable, est interdite et constituerait une contrefaçon.
          </p>
        </section>

        {/* Données personnelles */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 400, marginBottom: "1rem", paddingBottom: ".5rem", borderBottom: "1px solid #eee" }}>
            Données personnelles
          </h2>
          <p style={{ fontSize: ".92rem", lineHeight: 1.8, color: "#444" }}>
            Les informations collectées via le formulaire de contact (prénom, nom, adresse email, message) sont utilisées uniquement pour répondre à votre demande et assurer le suivi de votre séjour. Ces données ne sont ni vendues, ni transmises à des tiers sans votre consentement.<br /><br />
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à : <a href="mailto:hts.habitats@gmail.com" style={{ color: "#c2622d" }}>hts.habitats@gmail.com</a>
          </p>
        </section>

        {/* Cookies */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 400, marginBottom: "1rem", paddingBottom: ".5rem", borderBottom: "1px solid #eee" }}>
            Cookies
          </h2>
          <p style={{ fontSize: ".92rem", lineHeight: 1.8, color: "#444" }}>
            Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou de traçage tiers n'est déposé sans votre consentement.
          </p>
        </section>

        {/* Responsabilité */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 400, marginBottom: "1rem", paddingBottom: ".5rem", borderBottom: "1px solid #eee" }}>
            Limitation de responsabilité
          </h2>
          <p style={{ fontSize: ".92rem", lineHeight: 1.8, color: "#444" }}>
            HTS Habitat s'efforce de fournir des informations aussi précises que possible sur ce site. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou des carences dans la mise à jour des informations. Les informations présentes sur ce site sont non-contractuelles et peuvent être modifiées à tout moment.
          </p>
        </section>

        {/* Droit applicable */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 400, marginBottom: "1rem", paddingBottom: ".5rem", borderBottom: "1px solid #eee" }}>
            Droit applicable
          </h2>
          <p style={{ fontSize: ".92rem", lineHeight: 1.8, color: "#444" }}>
            Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront compétents.
          </p>
        </section>

        <p style={{ fontSize: ".8rem", color: "#aaa", marginTop: "3rem" }}>
          Dernière mise à jour : avril 2025
        </p>

      </div>

      {/* Footer simple */}
      <footer style={{ background: "rgba(22,16,10,0.96)", padding: "24px 8vw", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "Georgia, serif", color: "white", fontSize: ".95rem" }}>HTS <em style={{ color: "#c2622d" }}>Habitat</em></span>
        <a href="/" style={{ fontSize: ".78rem", color: "rgba(255,255,255,.5)", textDecoration: "none" }}>← Retour au site</a>
        <span style={{ fontSize: ".72rem", color: "rgba(255,255,255,.35)" }}>© {new Date().getFullYear()} HTS Habitat · Narbonne</span>
      </footer>

    </main>
  );
}
