export const metadata = {
  title: "Mentions légales | HTS Habitat",
  description: "Mentions légales du site HTS Habitat.",
};

export default function MentionsLegalesPage() {
  return (
    <main style={{ background: "#f5efe6", minHeight: "100vh", padding: "100px 8vw 60px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", background: "white", padding: "40px", borderRadius: 8, boxShadow: "0 10px 30px rgba(0,0,0,.06)" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>Mentions légales</h1>

        <h2 style={{ marginTop: "2rem", marginBottom: ".6rem" }}>Éditeur du site</h2>
        <p>
          Le présent site est édité par <strong>Gregory Hosteins</strong>.<br />
          Nom commercial : <strong>HTS Habitat</strong><br />
          Adresse : <strong>2 rue Romain, 11100 Narbonne, France</strong><br />
          E-mail : <a href="mailto:hts.habitats@gmail.com">hts.habitats@gmail.com</a><br />
          SIRET : <strong>942 652 678 00015</strong>
        </p>

        <h2 style={{ marginTop: "2rem", marginBottom: ".6rem" }}>Directeur de la publication</h2>
        <p>Gregory Hosteins</p>

        <h2 style={{ marginTop: "2rem", marginBottom: ".6rem" }}>Hébergement</h2>
        <p>
          Le site est hébergé par <strong>Vercel Inc.</strong><br />
          440 N Barranca Ave #4133<br />
          Covina, CA 91723<br />
          États-Unis
        </p>

        <h2 style={{ marginTop: "2rem", marginBottom: ".6rem" }}>Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur ce site (textes, photographies, éléments visuels,
          identité graphique, logo, structure) est protégé par le droit de la propriété intellectuelle.
          Toute reproduction, représentation, adaptation ou diffusion, totale ou partielle, sans
          autorisation préalable, est interdite.
        </p>

        <h2 style={{ marginTop: "2rem", marginBottom: ".6rem" }}>Responsabilité</h2>
        <p>
          Les informations diffusées sur ce site sont fournies à titre indicatif et peuvent être modifiées
          à tout moment. Malgré le soin apporté à leur mise à jour, l’éditeur ne saurait être tenu
          responsable d’éventuelles erreurs, omissions ou indisponibilités temporaires du site.
        </p>

        <h2 style={{ marginTop: "2rem", marginBottom: ".6rem" }}>Contact</h2>
        <p>
          Pour toute question, vous pouvez écrire à :{" "}
          <a href="mailto:hts.habitats@gmail.com">hts.habitats@gmail.com</a>
        </p>

        <p style={{ marginTop: "2.5rem" }}>
          <a href="/" style={{ color: "#c2622d", textDecoration: "none" }}>← Retour au site</a>
        </p>
      </div>
    </main>
  );
}
