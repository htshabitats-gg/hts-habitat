"use client";

import { useState, useEffect } from "react";
import {
  BedDouble,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Train,
  MessageCircle,
  Wifi,
  Clock,
  Heart,
  Send,
  X,
  Images,
} from "lucide-react";

const AIRBNB_LINK = "https://www.airbnb.fr/rooms/1318746957534184033";
const BOOKING_LINK = "https://www.booking.com/hotel/fr/appartements-proche-de-la-gare-narbonne.fr.html";
const LODGIFY_LINK = "https://occitanieetlocation.lodgify.com/";
const WHATSAPP_LINK = "https://wa.me/33601380441?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20logements%20HTS%20Habitat.";

const COCON_GALLERY = [
  "/cocon-hero.jpg",
  "/cocon-gallery-1.jpg",
  "/cocon-gallery-2.jpg",
  "/cocon-gallery-3.jpg",
  "/cocon-gallery-4.jpg",
  "/cocon-gallery-5.jpg",
  "/cocon-gallery-6.jpg",
];

const listings = [
  {
    title: "Cocon Bohème",
    subtitle: "Appartement chaleureux et confortable à Narbonne",
    description: "Appartement chaleureux et confortable à Narbonne, le Cocon Bohème séduit par son atmosphère douce, sa décoration soignée et son emplacement pratique à proximité immédiate des transports.",
    badge: "Élégance cosy",
    features: ["2 chambres", "Arrivée autonome", "Wifi", "Proche gare"],
    image: "/cocon-hero.jpg",
    gallery: COCON_GALLERY,
    airbnbLink: AIRBNB_LINK,
    bookingLink: BOOKING_LINK,
    available: true,
    price: "À partir de 81 €/nuit",
  },
  {
    title: "Rome Antique Moderne",
    subtitle: "Un univers immersif au caractère affirmé",
    description: "Inspiré de l'Antiquité et revisité dans une lecture plus contemporaine, Rome Antique Moderne propose un séjour original, élégant et mémorable à Narbonne.",
    badge: "Univers exclusif",
    features: ["1 chambre", "Canapé convertible", "Décoration soignée", "Univers immersif"],
    image: "/image1.jpeg",
    gallery: [],
    available: false,
  },
];

const testimonials = [
  { name: "Joni", origin: "Nouveau-Mexique, États-Unis", rating: 5, platform: "Airbnb", text: "Ce fut une expérience très agréable du début à la fin et au-delà. Le logement était idéalement situé pour les voyages en train. Le quartier est super accessible à pied. C'est un de ces endroits où vous regrettez de ne pas avoir réservé un séjour beaucoup plus long." },
  { name: "Christine", origin: "États-Unis", rating: 5, platform: "Booking", text: "Un appartement magnifique, confortable et très propre. Nous avons séjourné dans des Airbnb partout dans le monde et celui-ci est certainement l'un des meilleurs. Je recommande vivement." },
  { name: "Jérôme", origin: "France", rating: 5, platform: "Airbnb", text: "Superbe 3 pièces, très bien équipé et très bien agencé, idéalement situé pour une visite de Narbonne et accessible à pied immédiatement depuis la gare. On reviendra sans problème !" },
  { name: "Julia", origin: "France", rating: 5, platform: "Airbnb", text: "Entre le logement et l'hôte, rien à redire ! Tout était vraiment de qualité, le logement très propre, très jolie, avec beaucoup d'équipement à disposition ! Gregory était très cordial et présent pour notre séjour ! Du 10/10 !" },
  { name: "Lefebvre", origin: "France", rating: 5, platform: "Booking", text: "Tout est réfléchi, pensé pour le bien être. Ma plus belle location. Il règne un profond respect pour le locataire. Absolument rien à redire, c'est irréprochable." },
  { name: "Frumence", origin: "France", rating: 5, platform: "Airbnb", text: "L'appartement est aménagé avec goût. Il est propre et accueillant. L'hôte est réactif et agréable. Nous avons passé un bon séjour sur Narbonne et les environs." },
];

const narbonneAttracts = [
  { icon: "🏛️", title: "Narbonne antique", desc: "Ancienne capitale de la Gaule Narbonnaise, riche en musées et vestiges romains à découvrir à pied." },
  { icon: "🌊", title: "Mer à 15 min", desc: "Les plages de Narbonne-Plage et Gruissan sont à quelques kilomètres seulement." },
  { icon: "🍷", title: "Vignobles & gastronomie", desc: "Au cœur du Languedoc viticole, dégustations et restaurants gastronomiques à portée de main." },
  { icon: "🚉", title: "Idéal en train", desc: "La gare TGV de Narbonne est à quelques minutes à pied de nos logements." },
];

const faq = [
  { q: "Comment réserver un logement ?", a: "Vous pouvez réserver via Airbnb, Booking.com ou directement en ligne. La réservation directe via notre page Lodgify vous permet de vérifier les disponibilités en temps réel." },
  { q: "Peut-on réserver en direct ?", a: "Oui, la réservation directe est possible via notre page sécurisée. Elle permet un échange plus simple et un suivi personnalisé." },
  { q: "Les logements sont-ils proches du centre-ville et de la gare ?", a: "Oui, nos logements bénéficient d'un emplacement pratique à Narbonne, avec un accès facile au centre-ville, à la gare et aux principaux points d'intérêt." },
  { q: "L'arrivée est-elle autonome ?", a: "Oui, l'arrivée autonome est proposée pour plus de flexibilité selon votre heure d'arrivée. Vous recevez toutes les instructions avant votre séjour." },
  { q: "Peut-on vous contacter avant de réserver ?", a: "Bien sûr. Nous sommes disponibles par email, téléphone ou WhatsApp pour répondre à vos questions." },
  { q: "Quelle est la différence entre vos logements ?", a: "Le Cocon Bohème (disponible) propose une atmosphère chaleureuse et cosy avec 2 chambres. Le Rome Antique Moderne (bientôt) est un univers immersif inspiré de l'Antiquité, avec 1 chambre et canapé convertible." },
];

function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}><X size={24} /></button>
      <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
        <ChevronLeft size={32} />
      </button>
      <img src={images[index]} alt={`Photo ${index + 1}`} className="lightbox-img" onClick={(e) => e.stopPropagation()} />
      <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }}>
        <ChevronRight size={32} />
      </button>
      <div className="lightbox-counter">{index + 1} / {images.length}</div>
    </div>
  );
}

function Gallery({ images, onOpen }) {
  if (!images || images.length === 0) return null;
  const main = images[0];
  const thumbs = images.slice(1, 5);
  const remaining = images.length - 5;
  return (
    <div className="gallery-grid">
      <div className="gallery-main" onClick={() => onOpen(0)}>
        <img src={main} alt="Photo principale" />
      </div>
      <div className="gallery-thumbs">
        {thumbs.map((src, i) => (
          <div key={i} className="gallery-thumb" onClick={() => onOpen(i + 1)}>
            <img src={src} alt={`Photo ${i + 2}`} />
            {i === 3 && remaining > 0 && (
              <div className="gallery-more">
                <Images size={18} />
                <span>+{remaining + 1} photos</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSent, setWaitlistSent] = useState(false);
  const [contactForm, setContactForm] = useState({ nom: "", email: "", message: "" });
  const [contactSent, setContactSent] = useState(false);
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useFadeIn();

  const openLightbox = (images, index) => setLightbox({ open: true, images, index });
  const closeLightbox = () => setLightbox({ open: false, images: [], index: 0 });
  const prevPhoto = () => setLightbox((l) => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }));
  const nextPhoto = () => setLightbox((l) => ({ ...l, index: (l.index + 1) % l.images.length }));

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (waitlistEmail) setWaitlistSent(true);
  };

  const handleContact = (e) => {
    e.preventDefault();
    if (contactForm.nom && contactForm.email && contactForm.message) {
      const subject = encodeURIComponent("Demande de renseignement HTS Habitat");
      const body = encodeURIComponent(`Nom : ${contactForm.nom}\nEmail : ${contactForm.email}\n\n${contactForm.message}`);
      window.location.href = `mailto:greg.hosteins@gmail.com?subject=${subject}&body=${body}`;
      setContactSent(true);
    }
  };

  return (
    <main className="page-shell">

      {lightbox.open && (
        <Lightbox images={lightbox.images} index={lightbox.index} onClose={closeLightbox} onPrev={prevPhoto} onNext={nextPhoto} />
      )}

      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="whatsapp-fab" aria-label="Nous contacter sur WhatsApp">
        <MessageCircle size={26} />
        <span>WhatsApp</span>
      </a>

      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <div className="brand">HTS HABITAT</div>
            <div className="brand-sub">Vos vacances à Narbonne</div>
          </div>
          <nav className="nav">
            <a href="#logements">Logements</a>
            <a href="#marque">La marque</a>
            <a href="#reservation">Réserver</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={mobileMenuOpen ? "ham-line open" : "ham-line"} />
            <span className={mobileMenuOpen ? "ham-line open" : "ham-line"} />
            <span className={mobileMenuOpen ? "ham-line open" : "ham-line"} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#logements" onClick={() => setMobileMenuOpen(false)}>Logements</a>
            <a href="#marque" onClick={() => setMobileMenuOpen(false)}>La marque</a>
            <a href="#reservation" onClick={() => setMobileMenuOpen(false)}>Réserver</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-cta">Contact</a>
          </div>
        )}
      </header>

      <section className="hero">
        <div className="blur blur-one" />
        <div className="blur blur-two" />
        <div className="container hero-grid">
          <div>
            <span className="pill">Hébergements de caractère à Narbonne</span>
            <h1>Des appartements avec du caractère, pensés pour un séjour dont vous vous souviendrez.</h1>
            <p className="lead">
              HTS Habitat vous accueille dans des appartements décorés avec soin,
              où chaque détail a été pensé pour que vous vous sentiez vraiment bien —
              à deux pas du centre et de la gare de Narbonne.
            </p>
            <div className="hero-actions">
              <a href="#logements" className="btn btn-dark">Découvrir les logements</a>
              <a href="#reservation" className="btn btn-light">Voir la réservation</a>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">4,9★</div>
                <div className="stat-label">Note Airbnb</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">🏅</div>
                <div className="stat-label">Superhôte Airbnb</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">9,4/10</div>
                <div className="stat-label">Note Booking</div>
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
              <p>Chaque logement HTS Habitat a été imaginé pour offrir plus qu'un simple hébergement : une ambiance, du confort et une vraie personnalité.</p>
            </div>
            <div className="mini-grid">
              <div className="mini-card">
                <MapPin size={18} />
                <div className="mini-title">Emplacement pratique</div>
                <p>Proximité gare, accès simple, idéal pour découvrir Narbonne.</p>
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

      {/* ── La marque + Votre hôte ── */}
      <section id="marque" className="section container two-col fade-in">
        <div>
          <div className="section-kicker">La marque</div>
          <h2>Une même vision de l'hospitalité</h2>
        </div>
        <div className="copy-stack">
          <p>HTS Habitat propose à Narbonne des appartements à l'identité soignée, pensés pour allier confort, autonomie et atmosphère chaleureuse.</p>
          <p>Que vous veniez pour quelques jours, un séjour en famille, un déplacement ou une escapade dans la région, l'objectif reste le même : vous offrir une expérience simple, élégante et agréable du début à la fin.</p>
          <div className="host-box">
            <strong>Votre hôte</strong>
            Grégory, hôte basé à Narbonne, a conçu chaque appartement avec une attention particulière au confort et aux détails. Son objectif : que vous repartiez avec l'envie de revenir.
          </div>
        </div>
      </section>

      {/* ── Logements ── */}
      <section id="logements" className="section container">
        <div className="section-head fade-in">
          <div>
            <div className="section-kicker">Les logements</div>
            <h2>Deux univers, une même exigence</h2>
          </div>
          <p>Deux appartements, deux ambiances, mais toujours la même attention portée au confort, à la décoration et à la qualité du séjour.</p>
        </div>
        <div className="listing-grid">
          {listings.map((listing) => (
            <article key={listing.title} className="listing-card fade-in">
              {listing.gallery && listing.gallery.length > 1 ? (
                <Gallery images={listing.gallery} onOpen={(i) => openLightbox(listing.gallery, i)} />
              ) : (
                <div className="listing-image-wrap">
                  <img src={listing.image} alt={listing.title} className="listing-image-real" />
                  {!listing.available && <div className="coming-soon-overlay">Bientôt disponible</div>}
                </div>
              )}
              <div className="listing-content">
                <span className="badge">{listing.badge}</span>
                <h3>{listing.title}</h3>
                <div className="subtitle">{listing.subtitle}</div>
                <p>{listing.description}</p>
                {listing.price && <div className="listing-price">{listing.price}</div>}
                <div className="feature-row">
                  {listing.features.map((feature) => (
                    <span key={feature} className="feature">{feature}</span>
                  ))}
                </div>
                {listing.available ? (
                  <div className="button-row">
                    <a href={listing.airbnbLink} target="_blank" rel="noreferrer" className="btn btn-dark">Voir sur Airbnb</a>
                    <a href={listing.bookingLink} target="_blank" rel="noreferrer" className="btn btn-light">Voir sur Booking</a>
                  </div>
                ) : (
                  <div className="waitlist-box">
                    <p className="waitlist-label"><Clock size={15} /> Ouverture imminente — Soyez le premier à réserver</p>
                    {waitlistSent ? (
                      <p className="waitlist-success">✅ Merci ! Vous serez parmi les premiers prévenus à l'ouverture.</p>
                    ) : (
                      <form className="waitlist-form" onSubmit={handleWaitlist}>
                        <input type="email" placeholder="Votre adresse e-mail" value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)} required className="waitlist-input" />
                        <button type="submit" className="btn btn-dark">Me prévenir</button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Nos atouts ── */}
      <section className="section container">
        <div className="reason-box">
          <div className="section-head compact">
            <div>
              <div className="section-kicker">Nos atouts</div>
              <h2>Pourquoi choisir HTS Habitat</h2>
              <p className="lead">Des logements pensés pour allier confort, autonomie et qualité de séjour à Narbonne.</p>
            </div>
          </div>
          <div className="reason-grid">
            <div className="reason-card fade-in fade-in-delay-1"><BedDouble size={18} /><div>Décoration soignée</div></div>
            <div className="reason-card fade-in fade-in-delay-1"><ShieldCheck size={18} /><div>Arrivée autonome</div></div>
            <div className="reason-card fade-in fade-in-delay-2"><MapPin size={18} /><div>Emplacement pratique</div></div>
            <div className="reason-card fade-in fade-in-delay-2"><Wifi size={18} /><div>Wifi haut débit</div></div>
            <div className="reason-card fade-in fade-in-delay-3"><Heart size={18} /><div>Confort au quotidien</div></div>
            <div className="reason-card fade-in fade-in-delay-3"><Star size={18} /><div>Superhôte certifié</div></div>
            <div className="reason-card fade-in fade-in-delay-3" style={{ gridColumn: "span 2" }}>
              <Star size={18} />
              <div>+100 séjours réussis</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Témoignages ── */}
      <section className="section container fade-in">
        <div className="section-head">
          <div>
            <div className="section-kicker">Confiance voyageurs</div>
            <h2>Ce que disent nos voyageurs</h2>
          </div>
          <div className="trust-badges">
            <span className="trust-badge"><Star size={15} /> 4,9/5 Airbnb</span>
            <span className="trust-badge"><Star size={15} /> 9,4/10 Booking</span>
            <span className="trust-badge"><ShieldCheck size={15} /> Superhôte</span>
          </div>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-stars">{"★".repeat(t.rating)}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-origin">{t.origin} · {t.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Narbonne ── */}
      <section className="section container fade-in">
        <div className="section-head">
          <div>
            <div className="section-kicker">La destination</div>
            <h2>Pourquoi choisir Narbonne ?</h2>
          </div>
          <p>Entre mer, vignobles et histoire, Narbonne est une destination qui surprend et séduit.</p>
        </div>
        <div className="narbonne-grid">
          {narbonneAttracts.map((item) => (
            <div key={item.title} className="narbonne-card">
              <div className="narbonne-icon">{item.icon}</div>
              <div className="narbonne-title">{item.title}</div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Réservation ── */}
      <section id="reservation" className="section dark-section">
        <div className="container">
          <div className="reservation-top">
            <div className="section-kicker light">Réservation</div>
            <h2>Réservez facilement votre séjour</h2>
            <p className="light-copy">Vérifiez les disponibilités et réservez directement ci-dessous, ou passez par Airbnb et Booking.</p>
          </div>

          <div className="lodgify-widget-wrap">
            <iframe
              src="https://checkout.lodgify.com/occitanieetlocation/fr/#/634566"
              width="100%"
              height="600"
              style={{ border: "none", borderRadius: "12px" }}
              title="Réservation Cocon Bohème"
            />
          </div>

          <div className="reservation-cards">
            <div className="reservation-card">
              <div className="reservation-title">Airbnb</div>
              <p>Réservez le Cocon Bohème directement sur Airbnb.</p>
              <a href={AIRBNB_LINK} target="_blank" rel="noreferrer" className="btn btn-white">Voir l'annonce Airbnb</a>
            </div>
            <div className="reservation-card">
              <div className="reservation-title">Booking.com</div>
              <p>Retrouvez le Cocon Bohème également sur Booking.com.</p>
              <a href={BOOKING_LINK} target="_blank" rel="noreferrer" className="btn btn-outline-light">Voir sur Booking</a>
            </div>
            <div className="reservation-card">
              <div className="reservation-title">Réserver en direct</div>
              <p>Consultez les disponibilités et réservez directement via notre page sécurisée.</p>
              <a href={LODGIFY_LINK} target="_blank" rel="noreferrer" className="btn btn-outline-light">Réserver en direct</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section container faq-section fade-in">
        <div className="faq-head">
          <div className="section-kicker">FAQ</div>
          <h2>Les questions fréquentes</h2>
        </div>
        <div className="faq-list">
          {faq.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={item.q} className="faq-item">
                <button className="faq-button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                  <span>{item.q}</span>
                  <ChevronDown size={18} className={isOpen ? "rotated" : ""} />
                </button>
                {isOpen && <div className="faq-answer">{item.a}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section container bottom-space fade-in">
        <div className="contact-box">
          <div>
            <div className="section-kicker">Contact</div>
            <h2>Contactez HTS Habitat</h2>
            <p>Une question avant de réserver ? Nous restons disponibles pour vous renseigner rapidement et vous aider à choisir la formule la plus adaptée à votre séjour.</p>
            <div className="contact-card">
              <div className="contact-line"><Mail size={18} /><span>greg.hosteins@gmail.com</span></div>
              <div className="contact-line"><Phone size={18} /><span>06.01.38.04.41</span></div>
              <div className="contact-line"><Train size={18} /><span>Narbonne, proche gare et centre-ville</span></div>
              <div className="contact-line">
                <MessageCircle size={18} />
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" style={{ color: "inherit" }}>Nous contacter sur WhatsApp</a>
              </div>
              <div className="response-guarantee">💬 Réponse garantie sous 2h · 7j/7</div>
            </div>
          </div>
          <div className="contact-form-box">
            <h3>Envoyer un message</h3>
            {contactSent ? (
              <p className="waitlist-success">✅ Votre client de messagerie va s'ouvrir. Merci de votre message !</p>
            ) : (
              <form className="contact-form" onSubmit={handleContact}>
                <input type="text" placeholder="Votre nom" value={contactForm.nom} onChange={(e) => setContactForm({ ...contactForm, nom: e.target.value })} required className="form-input" />
                <input type="email" placeholder="Votre e-mail" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} required className="form-input" />
                <textarea placeholder="Votre message (dates souhaitées, questions...)" value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} required className="form-input form-textarea" rows={4} />
                <button type="submit" className="btn btn-dark"><Send size={15} /> Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <div className="brand">HTS HABITAT</div>
            <div className="brand-sub">Vos vacances à Narbonne</div>
          </div>
          <div className="footer-links">
            <a href="#logements">Logements</a>
            <a href="#reservation">Réserver</a>
            <a href="#contact">Contact</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="/mentions-legales">Mentions légales</a>
          </div>
          <div className="footer-copy">© {new Date().getFullYear()} HTS Habitat · Narbonne</div>
        </div>
      </footer>

    </main>
  );
}
