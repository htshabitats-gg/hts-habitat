"use client";

import { useState } from "react";
import {
  BedDouble,
  CalendarDays,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Train,
} from "lucide-react";

const listings = [
  {
    title: "Cocon Bohème",
    subtitle: "Appartement chaleureux et confortable à Narbonne",
    description:
      "Un logement pensé pour un séjour simple, fluide et agréable, avec une ambiance soignée et un emplacement pratique à deux pas de la gare.",
    badge: "Élégance cosy",
    features: ["2 chambres", "Arrivée autonome", "Wifi", "Proche gare"],
    cta: "Voir l’appartement",
  },
  {
    title: "Rome Antique Moderne",
    subtitle: "L’appartement signature HTS Habitat",
    description:
      "Une expérience immersive qui mêle inspiration romaine, décoration premium et confort moderne pour créer un séjour vraiment mémorable.",
    badge: "Expérience signature",
    features: ["1 chambre", "Canapé convertible", "Décor premium", "Ambiance à thème"],
    cta: "Découvrir l’univers",
  },
];

const faq = [
  {
    q: "Comment réserver un logement ?",
    a: "Le site peut rediriger vers Airbnb, Booking.com ou une page de contact directe selon la stratégie que tu veux adopter.",
  },
  {
    q: "Les logements sont-ils proches du centre et des transports ?",
    a: "Oui, l’emplacement est pratique pour accéder rapidement à la gare, au centre-ville et aux points d’intérêt de Narbonne.",
  },
  {
    q: "Peut-on arriver en autonomie ?",
    a: "Oui, le fonctionnement est pensé pour offrir une arrivée autonome simple, fluide et rassurante.",
  },
  {
    q: "HTS Habitat propose-t-il une expérience haut de gamme ?",
    a: "Oui, le positionnement repose sur des logements différenciants, une présentation soignée et une attention portée aux détails du séjour.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <div className="brand">HTS HABITAT</div>
            <div className="brand-sub">Narbonne · Séjours premium</div>
          </div>

          <nav className="nav">
            <a href="#logements">Logements</a>
            <a href="#marque">La marque</a>
            <a href="#reservation">Réserver</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="blur blur-one" />
        <div className="blur blur-two" />
        <div className="container hero-grid">
          <div>
            <span className="pill">Hébergements de caractère à Narbonne</span>
            <h1>Un site qui inspire confiance, valorise tes logements et donne envie de réserver.</h1>
            <p className="lead">
              HTS Habitat propose des séjours pensés avec identité, cohérence et exigence.
              L’idée n’est pas seulement de montrer des appartements, mais de faire ressentir
              un univers premium et différenciant.
            </p>

            <div className="hero-actions">
              <a href="#logements" className="btn btn-dark">Découvrir les logements</a>
              <a href="#reservation" className="btn btn-light">Voir la réservation</a>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">2</div>
                <div className="stat-label">Univers de logements</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Premium</div>
                <div className="stat-label">Positionnement de marque</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Narbonne</div>
                <div className="stat-label">Emplacement stratégique</div>
              </div>
            </div>
          </div>

          <div className="hero-side">
            <div className="dark-card">
              <div className="eyebrow">
                <Star size={16} />
                <span>Signature HTS Habitat</span>
              </div>
              <h2>Des séjours avec une vraie identité</h2>
              <p>
                Une présentation élégante, un univers cohérent et des logements qui ne
                ressemblent pas à une annonce standard.
              </p>
            </div>

            <div className="mini-grid">
              <div className="mini-card">
                <MapPin size={18} />
                <div className="mini-title">Emplacement pratique</div>
                <p>Proximité gare, accès simple, base idéale pour découvrir Narbonne.</p>
              </div>
              <div className="mini-card">
                <ShieldCheck size={18} />
                <div className="mini-title">Expérience rassurante</div>
                <p>Arrivée autonome, communication claire et expérience pensée dans le détail.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="marque" className="section container two-col">
        <div>
          <div className="section-kicker">La marque</div>
          <h2>Un mélange de site vitrine, d’image premium et d’accès rapide à la réservation.</h2>
        </div>
        <div className="copy-stack">
          <p>
            Le but de ce site est de donner plus de poids à HTS Habitat : montrer que tu n’es
            pas juste un hôte, mais une vraie marque avec une vision, un univers et une exigence claire.
          </p>
          <p>
            Il peut servir à rassurer, séduire, présenter tes logements, mettre en avant leur
            différence et envoyer les visiteurs vers les plateformes de réservation.
          </p>
        </div>
      </section>

      <section id="logements" className="section container">
        <div className="section-head">
          <div>
            <div className="section-kicker">Les logements</div>
            <h2>Deux univers, une même exigence</h2>
          </div>
          <p>
            Chaque appartement a sa propre ambiance, mais tous suivent la même logique :
            identité forte, confort et sensation de qualité.
          </p>
        </div>

        <div className="listing-grid">
          {listings.map((listing) => (
            <article key={listing.title} className="listing-card">
              <div className="listing-image" />
              <div className="listing-content">
                <span className="badge">{listing.badge}</span>
                <h3>{listing.title}</h3>
                <div className="subtitle">{listing.subtitle}</div>
                <p>{listing.description}</p>
                <div className="feature-row">
                  {listing.features.map((feature) => (
                    <span key={feature} className="feature">{feature}</span>
                  ))}
                </div>
                <div className="button-row">
                  <button className="btn btn-dark">{listing.cta}</button>
                  <button className="btn btn-light">Galerie photos</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="reason-box">
          <div className="section-head compact">
            <div>
              <div className="section-kicker">Pourquoi ce site fonctionne</div>
              <h2>Il combine image, clarté et conversion</h2>
            </div>
          </div>

          <div className="reason-grid">
            <div className="reason-card">
              <BedDouble size={18} />
              <div>Présenter</div>
            </div>
            <div className="reason-card">
              <Star size={18} />
              <div>Valoriser</div>
            </div>
            <div className="reason-card">
              <CalendarDays size={18} />
              <div>Faire réserver</div>
            </div>
          </div>
        </div>
      </section>

      <section id="reservation" className="section dark-section">
        <div className="container reservation-grid">
          <div>
            <div className="section-kicker light">Réservation</div>
            <h2>Réserver en quelques clics</h2>
            <p className="light-copy">
              Cette section est faite pour rediriger tes visiteurs vers les plateformes où tu
              acceptes les réservations, ou vers un contact direct selon ton choix.
            </p>
          </div>

          <div className="reservation-cards">
            <div className="reservation-card">
              <div className="reservation-title">Airbnb</div>
              <p>Intègre ici le lien officiel vers ton annonce Airbnb.</p>
              <button className="btn btn-white">Ajouter le lien Airbnb</button>
            </div>
            <div className="reservation-card">
              <div className="reservation-title">Booking.com</div>
              <p>Intègre ici le lien Booking pour capter les visiteurs qui préfèrent cette plateforme.</p>
              <button className="btn btn-outline-light">Ajouter le lien Booking</button>
            </div>
            <div className="reservation-card">
              <div className="reservation-title">Réservation directe</div>
              <p>Tu peux aussi ajouter un formulaire, WhatsApp ou une demande de disponibilité personnalisée.</p>
              <button className="btn btn-outline-light">Activer le contact direct</button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section container faq-section">
        <div className="faq-head">
          <div className="section-kicker">FAQ</div>
          <h2>Les questions fréquentes</h2>
        </div>

        <div className="faq-list">
          {faq.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={item.q} className="faq-item">
                <button
                  className="faq-button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={18} className={isOpen ? "rotated" : ""} />
                </button>
                {isOpen && <div className="faq-answer">{item.a}</div>}
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="section container bottom-space">
        <div className="contact-box">
          <div>
            <div className="section-kicker">Contact</div>
            <h2>Fais exister HTS Habitat comme une vraie marque</h2>
            <p>
              Cette base peut maintenant être enrichie avec tes vraies photos, tes liens Airbnb et Booking,
              tes textes officiels, tes coordonnées et ton identité visuelle.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-line"><Mail size={18} /><span>contact@htshabitat.fr</span></div>
            <div className="contact-line"><Phone size={18} /><span>+33 6 00 00 00 00</span></div>
            <div className="contact-line"><Train size={18} /><span>Narbonne, proche gare et centre-ville</span></div>
            <div className="contact-action">
              <button className="btn btn-dark">Demander une mise en ligne</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
