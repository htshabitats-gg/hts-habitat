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
      "Appartement chaleureux et confortable à Narbonne, le Cocon Bohème séduit par son atmosphère douce, sa décoration soignée et son emplacement pratique à proximité immédiate des transports.",
    badge: "Élégance cosy",
    features: ["2 chambres", "Arrivée autonome", "Wifi", "Proche gare"],
    cta: "Voir sur Airbnb",
    image: "/cocon-hero.jpg",
    airbnbLink:
      "https://www.airbnb.fr/rooms/1318746957534184033?check_in=2026-04-13&check_out=2026-04-15&search_mode=regular_search&source_impression_id=p3_1775919968_P334TeVqH54SGqBN&previous_page_section_name=1000&federated_search_id=5d43edd3-c065-48b5-b778-9ed0efaf96e5",
    bookingLink:
      "https://www.booking.com/hotel/fr/appartements-proche-de-la-gare-narbonne.fr.html?label=fr-fr-booking-desktop-DCpBIW3k2*WIo8XuzMdB9AS652796013276%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9054989%3Ali%3Adec%3Adm&aid=2311236&ucfs=1&arphpl=1&checkin=2026-04-13&checkout=2026-04-15&dest_id=900039110&dest_type=city&group_adults=2&req_adults=2&no_rooms=2&group_children=0&req_children=0&hpos=10&hapos=10&sr_order=popularity&srpvid=99366a431db705bb&srepoch=1775920015&all_sr_blocks=1331530101_405680895_5_0_0&highlighted_blocks=1331530101_405680895_5_0_0&matching_block_id=1331530101_405680895_5_0_0&sr_pri_blocks=1331530101_405680895_5_0_0__21218&from=searchresults",
  },
  {
    title: "Rome Antique Moderne",
    subtitle: "Un univers immersif au caractère affirmé",
    description:
      "Inspiré de l’Antiquité et revisité dans une lecture plus contemporaine, Rome Antique Moderne propose un séjour original, élégant et mémorable à Narbonne.",
    badge: "Univers exclusif",
    features: ["1 chambre", "Canapé convertible", "Décoration premium", "Univers immersif"],
    cta: "Découvrir l’univers",
    image: "/image1.jpeg",
  },
];

const faq = [
  {
    q: "Comment réserver un logement ?",
    a: "Vous pouvez réserver votre séjour via Airbnb, Booking.com ou directement en ligne selon le logement et les disponibilités. Si vous avez une question avant de réserver, vous pouvez aussi nous contacter directement.",
  },
  {
    q: "Peut-on réserver en direct ?",
    a: "Oui, certains séjours peuvent être réservés directement. La réservation directe permet un échange plus simple et un suivi personnalisé selon votre demande et les disponibilités.",
  },
  {
    q: "Les logements sont-ils proches du centre-ville et de la gare ?",
    a: "Oui, nos logements bénéficient d’un emplacement pratique à Narbonne, avec un accès facile au centre-ville, à la gare et aux principaux points d’intérêt.",
  },
  {
    q: "L’arrivée est-elle autonome ?",
    a: "Oui, l’arrivée autonome est proposée afin de rendre votre installation plus simple, plus fluide et plus flexible selon votre heure d’arrivée.",
  },
  {
    q: "Peut-on vous contacter avant de réserver ?",
    a: "Oui, bien sûr. Nous restons disponibles pour répondre à vos questions et vous aider à choisir la formule de réservation la plus adaptée à votre séjour.",
  },
  {
    q: "Quelle est la différence entre vos logements ?",
    a: "Chaque logement possède sa propre ambiance et son identité, tout en conservant la même exigence de confort, de soin et de qualité de séjour.",
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
            <a href="#contact" className="nav-cta">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="blur blur-one" />
        <div className="blur blur-two" />
        <div className="container hero-grid">
          <div>
            <span className="pill">Hébergements de caractère à Narbonne</span>
            <h1>Séjours premium à Narbonne, entre confort, caractère et identité.</h1>
            <p className="lead">
              HTS Habitat vous accueille dans des appartements soigneusement décorés,
              pensés pour offrir un séjour confortable, fluide et mémorable à deux pas
              du centre et de la gare de Narbonne.
            </p>

            <div className="hero-actions">
              <a href="#logements" className="btn btn-dark">
                Découvrir les logements
              </a>
              <a href="#reservation" className="btn btn-light">
                Voir la réservation
              </a>
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
              <h2>Des appartements qui ont une vraie âme</h2>
              <p>
                Chaque logement HTS Habitat a été imaginé pour offrir plus qu’un simple
                hébergement : une ambiance, du confort et une vraie personnalité.
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
                <p>Arrivée autonome, communication claire et séjour pensé dans le détail.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="marque" className="section container two-col">
        <div>
          <div className="section-kicker">La marque</div>
          <h2>Une même vision de l’hospitalité</h2>
        </div>
        <div className="copy-stack">
          <p>
            HTS Habitat propose à Narbonne des appartements à l’identité soignée,
            pensés pour allier confort, autonomie et atmosphère chaleureuse.
          </p>
          <p>
            Que vous veniez pour quelques jours, un séjour en famille, un déplacement
            ou une escapade dans la région, l’objectif reste le même : vous offrir une
            expérience simple, élégante et agréable du début à la fin.
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
            Deux appartements, deux ambiances, mais toujours la même attention portée
            au confort, à la décoration et à la qualité du séjour.
          </p>
        </div>

        <div className="listing-grid">
          {listings.map((listing) => (
            <article key={listing.title} className="listing-card">
              <img
                src={listing.image || "/cocon-hero.jpg"}
                alt={listing.title}
                className="listing-image-real"
              />

              <div className="listing-content">
                <span className="badge">{listing.badge}</span>
                <h3>{listing.title}</h3>
                <div className="subtitle">{listing.subtitle}</div>
                <p>{listing.description}</p>

                <div className="feature-row">
                  {listing.features.map((feature) => (
                    <span key={feature} className="feature">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="button-row">
                  <a
                    href={listing.airbnbLink || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark"
                  >
                    {listing.cta}
                  </a>

                  <a
                    href={listing.bookingLink || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light"
                  >
                    {listing.bookingLink ? "Voir sur Booking" : "Bientôt disponible"}
                  </a>
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
              <div className="section-kicker">Nos atouts</div>
              <h2>Pourquoi choisir HTS Habitat</h2>
              <p className="lead">
                Des logements pensés pour allier confort, autonomie et qualité de séjour à Narbonne.
              </p>
            </div>
          </div>

          <div className="reason-grid">
            <div className="reason-card">
              <BedDouble size={18} />
              <div>Décoration soignée</div>
            </div>

            <div className="reason-card">
              <ShieldCheck size={18} />
              <div>Arrivée autonome</div>
            </div>

            <div className="reason-card">
              <CalendarDays size={18} />
              <div>Emplacement pratique</div>
            </div>

            <div className="reason-card">
              <BedDouble size={18} />
              <div>Confort au quotidien</div>
            </div>
          </div>
        </div>
      </section>
<section className="section container">
  <div className="reason-box">
    <div className="section-head compact">
      <div>
        <div className="section-kicker">Confiance voyageurs</div>
        <h2>Une expérience appréciée par nos voyageurs</h2>
        <p className="lead">
          Le Cocon Bohème séduit par son confort, sa propreté, son emplacement pratique et la qualité de l’accueil.
        </p>
      </div>
    </div>

    <div className="reason-grid">
      <div className="reason-card">
        <Star size={18} />
        <div>4,9/5 sur Airbnb</div>
      </div>

      <div className="reason-card">
        <Star size={18} />
        <div>9,4/10 sur Booking</div>
      </div>

      <div className="reason-card">
        <ShieldCheck size={18} />
        <div>Superhôte Airbnb</div>
      </div>
    </div>
  </div>
</section>
      <section id="reservation" className="section dark-section">
        <div className="container reservation-grid">
          <div>
            <div className="section-kicker light">Réservation</div>
            <h2>Réservez facilement votre séjour</h2>
            <p className="light-copy">
              Réservez votre séjour à Narbonne via Airbnb, Booking.com ou directement en ligne, selon la formule qui vous convient le mieux.
            </p>
          </div>

          <div className="reservation-cards">
            <div className="reservation-card">
              <div className="reservation-title">Airbnb</div>
              <p>Réservez le Cocon Bohème directement sur Airbnb.</p>
              <a
                href="https://www.airbnb.fr/rooms/1318746957534184033?check_in=2026-04-13&check_out=2026-04-15&search_mode=regular_search&source_impression_id=p3_1775919968_P334TeVqH54SGqBN&previous_page_section_name=1000&federated_search_id=5d43edd3-c065-48b5-b778-9ed0efaf96e5"
                target="_blank"
                rel="noreferrer"
                className="btn btn-white"
              >
                Voir l’annonce Airbnb
              </a>
            </div>

            <div className="reservation-card">
              <div className="reservation-title">Booking.com</div>
              <p>Retrouvez le Cocon Bohème également sur Booking.com.</p>
              <a
                href="https://www.booking.com/hotel/fr/appartements-proche-de-la-gare-narbonne.fr.html?label=fr-fr-booking-desktop-DCpBIW3k2*WIo8XuzMdB9AS652796013276%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9054989%3Ali%3Adec%3Adm&aid=2311236&ucfs=1&arphpl=1&checkin=2026-04-13&checkout=2026-04-15&dest_id=900039110&dest_type=city&group_adults=2&req_adults=2&no_rooms=2&group_children=0&req_children=0&hpos=10&hapos=10&sr_order=popularity&srpvid=99366a431db705bb&srepoch=1775920015&all_sr_blocks=1331530101_405680895_5_0_0&highlighted_blocks=1331530101_405680895_5_0_0&matching_block_id=1331530101_405680895_5_0_0&sr_pri_blocks=1331530101_405680895_5_0_0__21218&from=searchresults"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light"
              >
                Voir sur Booking
              </a>
            </div>

            <div className="reservation-card">
              <div className="reservation-title">Réserver en direct</div>
              <p>
                Réservez directement votre séjour via notre page de réservation sécurisée
                pour consulter les disponibilités et organiser votre séjour simplement.
              </p>
              <a
                href="https://occitanieetlocation.lodgify.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light"
              >
                Réserver en direct
              </a>
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
            <h2>Contactez HTS Habitat</h2>
            <p>
              Une question avant de réserver ? Nous restons disponibles pour vous renseigner rapidement et vous aider à choisir la formule de réservation la plus adaptée à votre séjour.
            </p>
            <p>
              Que ce soit pour une disponibilité, une arrivée, un séjour en direct ou une question pratique, nous pouvons vous répondre simplement et rapidement.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-line">
              <Mail size={18} />
              <span>greg.hosteins@gmail.com</span>
            </div>
            <div className="contact-line">
              <Phone size={18} />
              <span>06.01.38.04.41</span>
            </div>
            <div className="contact-line">
              <Train size={18} />
              <span>Narbonne, proche gare et centre-ville</span>
            </div>
            <div className="contact-action">
              <button className="btn btn-dark">Nous contacter</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
