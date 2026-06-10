"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  X,
} from "lucide-react";

const AIRBNB_LINK = "https://www.airbnb.fr/rooms/1318746957534184033";
const BOOKING_LINK =
  "https://www.booking.com/hotel/fr/appartements-proche-de-la-gare-narbonne.fr.html";
const LODGIFY_LINK = "https://occitanieetlocation.lodgify.com/";
const WHATSAPP_LINK =
  "https://wa.me/33601380441?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20logements%20HTS%20Habitat.";

const COCON_GALLERY = [
  "/cocon-hero.jpg",
  "/cocon-gallery-1.jpg",
  "/cocon-gallery-2.jpg",
  "/cocon-gallery-3.jpg",
  "/cocon-gallery-4.jpg",
];

const ROME_GALLERY = [
  "/rome-hero.jpg",
  "/rome-gallery-1.jpg",
  "/rome-gallery-2.jpg",
  "/rome-gallery-3.jpg",
  "/rome-gallery-4.jpg",
  "/rome-gallery-5.jpg",
];

const listings = [
  {
    title: "Cocon Bohème",
    subtitle: "45 m² · 1er étage · 2 chambres · jusqu'à 4 personnes",
    description:
      "Appartement de 45 m² au 1er étage, entièrement rénové et décoré avec soin. Deux chambres séparées, séjour lumineux, cuisine équipée. Idéal pour un séjour en famille ou entre amis à Narbonne.",
    badge: "Disponible",
    features: [
      "45 m²",
      "1er étage",
      "2 chambres",
      "Wifi haut débit",
      "Cuisine équipée",
      "Proche gare TGV",
      "Parking 200 m",
    ],
    specs: [
      { label: "Check-in", value: "À partir de 15h" },
      { label: "Check-out", value: "Avant 11h" },
      { label: "Taxe de séjour", value: "3 € / nuit / adulte" },
      { label: "Annulation", value: "Flexible" },
      { label: "Animaux", value: "Non acceptés" },
      { label: "Parking", value: "Payant à 200 m (gare)" },
    ],
    image: "/cocon-hero.jpg",
    gallery: COCON_GALLERY,
    airbnbLink: AIRBNB_LINK,
    bookingLink: BOOKING_LINK,
    available: true,
    price: "À partir de 81 €",
    priceUnit: "/ nuit",
  },
  {
    title: "Rome Antique Moderne",
    subtitle: "45 m² · 2e étage · 1 chambre · jusqu'à 3 personnes",
    description:
      "Appartement de 45 m² au 2e étage du même immeuble, inspiré de l’Antiquité romaine revisitée dans une lecture contemporaine. Une chambre avec lit baldaquin, un séjour au caractère affirmé et une atmosphère unique à Narbonne.",
    badge: "Disponible",
    features: [
      "45 m²",
      "2e étage",
      "1 chambre + convertible",
      "Wifi haut débit",
      "Cuisine équipée",
      "Proche gare TGV",
      "Parking 200 m",
    ],
    specs: [
      { label: "Check-in", value: "À partir de 15h" },
      { label: "Check-out", value: "Avant 11h" },
      { label: "Taxe de séjour", value: "3 € / nuit / adulte" },
      { label: "Annulation", value: "Flexible" },
      { label: "Animaux", value: "Non acceptés" },
      { label: "Parking", value: "Payant à 200 m (gare)" },
    ],
    image: "/rome-hero.jpg",
    gallery: ROME_GALLERY,
    airbnbLink: "https://www.airbnb.fr/rooms/1649944189944171948",
    bookingLink: "https://www.booking.com/hotel/fr/echappee-romaine.fr.html",
    available: true,
    price: "À partir de 85 €",
    priceUnit: "/ nuit",
  },
];

const testimonials = [
  {
    name: "Joni",
    origin: "Nouveau-Mexique, États-Unis",
    platform: "Airbnb",
    date: "Mars 2026",
    link: AIRBNB_LINK,
    text: "Ce fut une expérience très agréable du début à la fin. Le logement était idéalement situé. C'est un de ces endroits où vous regrettez de ne pas avoir réservé beaucoup plus longtemps.",
  },
  {
    name: "Christine",
    origin: "États-Unis",
    platform: "Booking",
    date: "Février 2026",
    link: BOOKING_LINK,
    text: "Un appartement magnifique, confortable et très propre. Nous avons séjourné dans des Airbnb partout dans le monde et celui-ci est certainement l'un des meilleurs.",
  },
  {
    name: "Jérôme",
    origin: "France",
    platform: "Airbnb",
    date: "Janvier 2026",
    link: AIRBNB_LINK,
    text: "Superbe 3 pièces, très bien équipé, idéalement situé pour visiter Narbonne et accessible à pied depuis la gare. On reviendra sans problème !",
  },
  {
    name: "Julia",
    origin: "France",
    platform: "Airbnb",
    date: "Janvier 2026",
    link: AIRBNB_LINK,
    text: "Entre le logement et l'hôte, rien à redire ! Tout était vraiment de qualité. Gregory était très cordial et présent. Du 10/10 !",
  },
  {
    name: "Lefebvre",
    origin: "France",
    platform: "Booking",
    date: "Décembre 2025",
    link: BOOKING_LINK,
    text: "Tout est réfléchi, pensé pour le bien-être. Ma plus belle location. Il règne un profond respect pour le locataire. Absolument rien à redire.",
  },
  {
    name: "Frumence",
    origin: "France",
    platform: "Airbnb",
    date: "Décembre 2025",
    link: AIRBNB_LINK,
    text: "L'appartement est aménagé avec goût, propre et accueillant. L'hôte est réactif et agréable. Nous avons passé un excellent séjour.",
  },
];

const destinations = [
  {
    img: "https://images.unsplash.com/photo-1730279246188-37e40031c7e0?w=800&q=80&auto=format&fit=crop",
    tag: "Centre historique",
    title: "Narbonne, Cité d'Art",
    desc: "Cathédrale gothique, palais des Archevêques et canal de la Robine classé UNESCO.",
    dist: "À pied depuis nos logements",
  },
  {
    img: "https://images.unsplash.com/photo-1667395959400-fd9b1ed373ea?w=800&q=80&auto=format&fit=crop",
    tag: "Mer & plages",
    title: "Narbonne-Plage",
    desc: "5 km de sable fin sur la Méditerranée — baignade, sports nautiques, couchers de soleil.",
    dist: "15 min en voiture",
  },
  {
    img: "https://images.unsplash.com/photo-1587556517329-47c4f43a3ce7?w=800&q=80&auto=format&fit=crop",
    tag: "Vignobles",
    title: "Corbières & Minervois",
    desc: "Domaines viticoles, dégustations sur place, gastronomie languedocienne.",
    dist: "20–30 min en voiture",
  },
  {
    img: "https://images.unsplash.com/photo-1567015858555-9fc47bb30260?w=800&q=80&auto=format&fit=crop",
    tag: "Patrimoine",
    title: "Abbaye de Fontfroide",
    desc: "Abbaye cistercienne du XIIe siècle nichée dans les Corbières — un joyau incontournable.",
    dist: "15 min en voiture",
  },
  {
    img: "https://images.unsplash.com/photo-1667395960138-f96c1a6f9f8d?w=800&q=80&auto=format&fit=crop",
    tag: "Village pittoresque",
    title: "Gruissan",
    desc: "Village construit en escargot autour d'une tour médiévale — lagunes et flamants roses.",
    dist: "20 min en voiture",
  },
  {
    img: "https://images.unsplash.com/photo-1667395960011-0ee99728b440?w=800&q=80&auto=format&fit=crop",
    tag: "Sport & nature",
    title: "Plein air & activités",
    desc: "Windsurf, kitesurf, randonnées dans le massif de la Clape, vélo sur les voies vertes.",
    dist: "Dès 10 min",
  },
];

const faq = [
  {
    q: "Quels sont les horaires d'arrivée et de départ ?",
    a: "Le check-in est possible à partir de 15h et le check-out avant 11h. L'arrivée est 100% autonome grâce à une boîte à clés sécurisée.",
  },
  {
    q: "Y a-t-il un parking à proximité ?",
    a: "Oui, le parking de la gare de Narbonne est à 200 mètres des logements. Il est payant. Des alternatives existent également dans le quartier.",
  },
  {
    q: "Quelle est la politique d'annulation ?",
    a: "La politique d'annulation est flexible. Pour les conditions exactes selon votre plateforme de réservation, consultez l'annonce Airbnb ou Booking.com correspondante.",
  },
  {
    q: "Les animaux sont-ils acceptés ?",
    a: "Non, les animaux de compagnie ne sont pas acceptés dans nos logements, conformément au règlement de copropriété.",
  },
  {
    q: "Y a-t-il une taxe de séjour ?",
    a: "Oui, une taxe de séjour de 3 € par nuit et par adulte s'applique, conformément à la réglementation de la commune de Narbonne.",
  },
  {
    q: "Quelle est la capacité des logements ?",
    a: "Le Cocon Bohème peut accueillir jusqu'à 4 personnes avec ses 2 chambres. Rome Antique Moderne peut accueillir jusqu'à 3 personnes avec 1 chambre double et un canapé convertible.",
  },
  {
    q: "Les logements sont-ils proches du centre ?",
    a: "Oui, les deux appartements sont situés dans le même immeuble, à quelques minutes à pied de la gare TGV, du centre-ville historique et des commerces de Narbonne.",
  },
  {
    q: "Peut-on réserver directement sans passer par Airbnb ?",
    a: "Oui. La réservation directe via Lodgify permet de vérifier les disponibilités en temps réel et de réserver sans frais de plateforme, souvent aux meilleures conditions.",
  },
];

function HHMonogram({ size = 44, animated = false }) {
  const cx = size / 2;
  const cy = size / 2;
  const r1 = size * 0.47;
  const r2 = size * 0.41;
  const fs = size * 0.28;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size }}
    >
      <circle cx={cx} cy={cy} r={r1} stroke="#c2622d" strokeWidth="0.6" opacity="0.6" />
      <circle cx={cx} cy={cy} r={r2} stroke="#c2622d" strokeWidth="0.3" opacity="0.3" />
      <g
        style={
          animated
            ? {
                transformOrigin: `${cx}px ${cy}px`,
                animation: "ring-spin 40s linear infinite",
              }
            : {}
        }
      >
        <circle cx={cx} cy={size * 0.04} r={size * 0.025} fill="#c2622d" opacity="0.6" />
        <circle cx={cx} cy={size * 0.96} r={size * 0.025} fill="#c2622d" opacity="0.6" />
        <circle cx={size * 0.04} cy={cy} r={size * 0.025} fill="#c2622d" opacity="0.6" />
        <circle cx={size * 0.96} cy={cy} r={size * 0.025} fill="#c2622d" opacity="0.6" />
      </g>
      <text
        x={cx}
        y={cy + fs * 0.38}
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize={fs}
        fontWeight="300"
        fill="white"
        letterSpacing={size * 0.03}
        opacity="0.95"
      >
        HH
      </text>
    </svg>
  );
}

function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useCounter(target, suffix, decimals = 0) {
  const [val, setVal] = useState("0");
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 1400;

        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          const v = target * ease;
          setVal(
            (decimals ? v.toFixed(decimals) : Math.floor(v).toString()) + suffix
          );
          if (p < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, decimals]);

  return { ref, val };
}

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        style={{
          position: "absolute",
          left: "1rem",
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <ChevronLeft size={36} />
      </button>

      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "90vw",
          maxHeight: "85vh",
          objectFit: "contain",
          borderRadius: 4,
        }}
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        style={{
          position: "absolute",
          right: "1rem",
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <ChevronRight size={36} />
      </button>

      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          color: "rgba(255,255,255,.6)",
          fontSize: ".8rem",
          letterSpacing: ".1em",
        }}
      >
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSent, setWaitlistSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    logement: "Cocon Bohème",
    message: "",
  });
  const [contactSent, setContactSent] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    index: 0,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useFadeIn();

  const stat1 = useCounter(4.9, "★", 1);
  const stat2 = useCounter(9.4, "", 1);
  const stat3 = useCounter(100, "", 0);

  const openLightbox = (images, index) =>
    setLightbox({ open: true, images, index });

  const closeLightbox = () =>
    setLightbox({ open: false, images: [], index: 0 });

  const prevPhoto = () =>
    setLightbox((l) => ({
      ...l,
      index: (l.index - 1 + l.images.length) % l.images.length,
    }));

  const nextPhoto = () =>
    setLightbox((l) => ({
      ...l,
      index: (l.index + 1) % l.images.length,
    }));

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (waitlistEmail) setWaitlistSent(true);
  };

  const handleContact = (e) => {
    e.preventDefault();

    if (!consent) {
      setConsentError(true);
      return;
    }

    setConsentError(false);

    const subject = encodeURIComponent(
      `Demande HTS Habitat — ${contactForm.logement}`
    );
    const body = encodeURIComponent(
      `${contactForm.prenom} ${contactForm.nom}\n${contactForm.email}\n\n${contactForm.message}`
    );

    window.location.href = `mailto:greg.hosteins@gmail.com?subject=${subject}&body=${body}`;
    setContactSent(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --sand: oklch(96% 0.015 78);
          --sand-dark: oklch(91% 0.025 75);
          --terra: oklch(57% 0.11 44);
          --terra-lt: oklch(88% 0.05 55);
          --ink: oklch(17% 0.02 58);
          --ink-soft: oklch(42% 0.02 58);
          --teal: oklch(36% 0.07 210);
          --white: oklch(99% 0.005 78);
          --serif: 'Cormorant Garamond', Georgia, serif;
          --sans: 'DM Sans', system-ui, sans-serif;
        }

        html { scroll-behavior: smooth; }
        body {
          font-family: var(--sans);
          background: var(--sand);
          color: var(--ink);
          font-size: 16px;
          line-height: 1.6;
        }

        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(22,16,10,0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(194,98,45,0.18);
          height: 72px;
        }
        .topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          padding: 0 5vw;
          max-width: 1400px;
          margin: 0 auto;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: .7rem;
          text-decoration: none;
        }
        .nav-brand-text {
          font-family: var(--serif);
          font-size: 1.1rem;
          font-weight: 400;
          letter-spacing: .1em;
          color: var(--white);
          line-height: 1;
        }
        .nav-brand-text em { font-style: italic; color: var(--terra); }
        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav a {
          font-size: .78rem;
          font-weight: 400;
          letter-spacing: .12em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(255,255,255,.55);
          transition: color .2s;
        }
        .nav a:hover { color: white; }
        .nav-cta-btn {
          background: var(--terra) !important;
          color: white !important;
          padding: .5rem 1.3rem;
          border-radius: 3px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .ham-line {
          display: block;
          width: 22px;
          height: 1.5px;
          background: rgba(255,255,255,.7);
          transition: .3s;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          padding: 1.5rem 5vw;
          background: rgba(22,16,10,.98);
          border-bottom: 1px solid rgba(194,98,45,.2);
        }
        .mobile-menu a {
          font-size: .82rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(255,255,255,.65);
        }

        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 8vw 120px;
          background: var(--ink);
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1667395959400-fd9b1ed373ea?w=1800&q=75&auto=format&fit=crop') center/cover;
          filter: blur(2px) brightness(.2) saturate(.7);
          transform: scale(1.05);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 120% 80% at 50% 50%, transparent 40%, rgba(0,0,0,.6) 100%);
        }
        .hero-monogram {
          position: relative;
          z-index: 2;
          margin-bottom: 2rem;
          animation: monogram-appear 1.6s ease forwards;
          opacity: 0;
        }
        @keyframes monogram-appear {
          0% { opacity:0; transform:scale(.85); }
          60% { opacity:1; transform:scale(1.03); }
          100% { opacity:1; transform:scale(1); }
        }
        @keyframes ring-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hero-eyebrow {
          position: relative;
          z-index: 2;
          font-size: .68rem;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: var(--terra);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .8rem;
          margin-bottom: 1.5rem;
          animation: fade-in-up .8s .4s ease both;
        }
        .hero-eyebrow::before,
        .hero-eyebrow::after {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: var(--terra);
        }
        .hero-title {
          position: relative;
          z-index: 2;
          font-family: var(--serif);
          font-size: clamp(3rem, 7vw, 6.5rem);
          font-weight: 300;
          line-height: 1.05;
          color: white;
          margin-bottom: 2.5rem;
          animation: fade-in-up .8s .6s ease both;
        }
        .hero-title em {
          font-style: italic;
          color: var(--terra);
          display: block;
        }
        .hero-story {
          position: relative;
          z-index: 2;
          font-size: .9rem;
          color: rgba(255,255,255,.5);
          max-width: 500px;
          font-weight: 300;
          line-height: 1.85;
          margin: 0 auto 2rem;
          animation: fade-in-up .8s .75s ease both;
        }
        .hero-btns {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          animation: fade-in-up .8s .9s ease both;
        }
        .hero-stats {
          position: relative;
          z-index: 3;
          display: flex;
          gap: 2.5rem;
          padding-top: 2.5rem;
          margin-top: 2.5rem;
          border-top: 1px solid rgba(255,255,255,.1);
          animation: fade-in-up .8s 1.1s ease both;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 3rem;
        }
        .hero-stat-val {
          font-family: var(--serif);
          font-size: 1.6rem;
          font-weight: 300;
          color: white;
          display: block;
          margin-bottom: .3rem;
          line-height: 1;
        }
        .hero-stat-lbl {
          font-size: .62rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: rgba(255,255,255,.4);
        }
        .hero-scroll-indicator {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .5rem;
          animation: fade-in-up .8s 1.5s ease both;
        }
        .hero-scroll-indicator span {
          font-size: .6rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: rgba(255,255,255,.3);
        }
        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--terra), transparent);
          animation: scroll-anim 2s ease infinite;
        }
        @keyframes scroll-anim {
          0% { transform:scaleY(0); transform-origin:top; }
          50% { transform:scaleY(1); transform-origin:top; }
          51% { transform:scaleY(1); transform-origin:bottom; }
          100% { transform:scaleY(0); transform-origin:bottom; }
        }
        @keyframes fade-in-up {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }

        section { padding: 100px 8vw; }
        .section-label {
          font-size: .68rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: .7rem;
        }
        .section-label::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: var(--terra);
        }
        .section-title {
          font-family: var(--serif);
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        .section-title em { font-style: italic; }
        .section-sub {
          font-size: .92rem;
          color: var(--ink-soft);
          max-width: 520px;
          font-weight: 300;
          line-height: 1.7;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s ease, transform .7s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-up.d1 { transition-delay: .1s; }
        .fade-up.d2 { transition-delay: .2s; }
        .fade-up.d3 { transition-delay: .3s; }

        .btn-primary {
          display: inline-block;
          background: var(--terra);
          color: white;
          padding: .85rem 2rem;
          font-size: .78rem;
          font-weight: 500;
          letter-spacing: .12em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 3px;
          transition: opacity .2s, transform .2s;
          border: none;
          cursor: pointer;
          font-family: var(--sans);
        }
        .btn-primary:hover { opacity: .88; transform: translateY(-1px); }

        .btn-outline {
          display: inline-block;
          color: rgba(255,255,255,.7);
          padding: .85rem 2rem;
          font-size: .78rem;
          font-weight: 500;
          letter-spacing: .12em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 3px;
          transition: .2s;
          background: none;
          cursor: pointer;
          font-family: var(--sans);
        }
        .btn-outline:hover {
          background: rgba(255,255,255,.08);
          border-color: rgba(255,255,255,.5);
          color: white;
        }

        .btn-dark {
          display: inline-block;
          background: var(--ink);
          color: white;
          padding: .75rem 1.5rem;
          font-size: .75rem;
          font-weight: 500;
          letter-spacing: .1em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 3px;
          transition: opacity .2s;
          border: none;
          cursor: pointer;
          font-family: var(--sans);
        }
        .btn-dark:hover { opacity: .85; }

        .btn-light-outline {
          display: inline-block;
          color: var(--ink);
          padding: .75rem 1.5rem;
          font-size: .75rem;
          font-weight: 500;
          letter-spacing: .1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid var(--sand-dark);
          border-radius: 3px;
          transition: .2s;
          background: none;
          cursor: pointer;
          font-family: var(--sans);
        }
        .btn-light-outline:hover { background: var(--sand-dark); }

        #marque { background: var(--ink); color: white; padding: 0 !important; overflow: hidden; }
        .marque-hero {
          position: relative; height: 70vh; min-height: 480px;
          display: flex; align-items: flex-end; overflow: hidden;
        }
        .marque-hero-bg {
          position: absolute; inset: 0;
          background: url('/cocon-gallery-1.jpg') center/cover;
          filter: brightness(.35) saturate(.8);
          transform: scale(1.04);
          transition: transform 8s ease;
        }
        .marque-hero:hover .marque-hero-bg { transform: scale(1.08); }
        .marque-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,8,5,.9) 0%, rgba(10,8,5,.2) 60%, transparent 100%);
        }
        .marque-hero-content {
          position: relative; z-index: 2;
          padding: 0 8vw 4rem;
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: end;
          width: 100%; max-width: 1300px; margin: 0 auto;
        }
        .marque-hero-text .section-label { color: var(--terra-lt); }
        .marque-hero-text .section-label::before { background: var(--terra-lt); }
        .marque-hero-title {
          font-family: var(--serif);
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 300;
          color: white;
          line-height: 1.1;
          margin-bottom: 0;
        }
        .marque-hero-title em { font-style: italic; color: var(--terra); display: block; }
        .marque-hero-story {
          font-size: .9rem;
          color: rgba(255,255,255,.6);
          font-weight: 300;
          line-height: 1.8;
        }
        .host-badge {
          display: inline-flex; align-items: center; gap: 1rem;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.15);
          padding: 1rem 1.4rem; border-radius: 4px;
          backdrop-filter: blur(8px); margin-top: 1.5rem;
        }
        .host-avatar {
          width: 42px; height: 42px; border-radius: 50%;
          background: var(--terra-lt);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--serif); font-size: 1.1rem; color: var(--terra); font-weight: 600;
        }
        .host-name { font-size: .8rem; font-weight: 500; color: white; }
        .host-role { font-size: .72rem; color: rgba(255,255,255,.5); }

        .marque-feats {
          background: var(--ink);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid rgba(255,255,255,.06);
          max-width: 100%;
        }
        .marque-feat {
          padding: 2.5rem 2rem;
          border-right: 1px solid rgba(255,255,255,.06);
          transition: background .2s;
        }
        .marque-feat:last-child { border-right: none; }
        .marque-feat:hover { background: rgba(255,255,255,.03); }
        .marque-feat-num {
          font-family: var(--serif);
          font-size: 2rem;
          color: var(--terra);
          font-weight: 300;
          margin-bottom: .8rem;
          line-height: 1;
        }
        .marque-feat h4 {
          font-family: var(--serif);
          font-size: .95rem;
          font-weight: 600;
          color: white;
          margin-bottom: .4rem;
        }
        .marque-feat p {
          font-size: .78rem;
          color: rgba(255,255,255,.45);
          font-weight: 300;
          line-height: 1.6;
        }

        #logements { background: var(--sand); }
        .logements-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3.5rem;
        }
        .logements-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        .card {
          background: white;
          border-radius: 6px;
          overflow: hidden;
          transition: transform .3s, box-shadow .3s;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,.1);
        }
        .card-gallery {
          position: relative;
          height: 320px;
          overflow: hidden;
        }
        .card-gallery img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s;
        }
        .card:hover .card-gallery img { transform: scale(1.03); }
        .card-tag {
          position: absolute;
          top: 1.2rem;
          left: 1.2rem;
          background: var(--terra);
          color: white;
          font-size: .62rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          padding: .35rem .8rem;
          border-radius: 2px;
        }
        .card-tag.soon {
          background: rgba(30,30,30,.7);
          backdrop-filter: blur(4px);
        }
        .card-thumbs {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          display: flex;
          gap: .4rem;
        }
        .card-thumb {
          width: 48px;
          height: 38px;
          border-radius: 3px;
          overflow: hidden;
          border: 2px solid rgba(255,255,255,.7);
          cursor: pointer;
        }
        .card-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .card-body { padding: 2rem; }
        .card-style {
          font-size: .65rem;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: .5rem;
        }
        .card-name {
          font-family: var(--serif);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: .6rem;
        }
        .card-desc {
          font-size: .85rem;
          color: var(--ink-soft);
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .card-features {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-bottom: 1.8rem;
        }
        .card-feat {
          font-size: .72rem;
          background: var(--sand);
          padding: .3rem .75rem;
          border-radius: 2px;
          color: var(--ink-soft);
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid var(--sand-dark);
        }
        .card-price {
          font-family: var(--serif);
          font-size: 1.4rem;
        }
        .card-price span {
          font-size: .75rem;
          font-family: var(--sans);
          color: var(--ink-soft);
        }
        .card-links { display: flex; gap: .7rem; flex-wrap: wrap; }
        .card-specs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: .5rem .8rem;
          margin-bottom: 1.5rem;
          padding: 1.2rem;
          background: var(--sand);
          border-radius: 4px;
        }
        .card-spec {
          display: flex;
          flex-direction: column;
          gap: .1rem;
        }
        .card-spec-label {
          font-size: .62rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--ink-soft);
        }
        .card-spec-value {
          font-size: .82rem;
          font-weight: 500;
          color: var(--ink);
        }

        #atouts { background: var(--ink); color: white; }
        #atouts .section-label { color: var(--terra-lt); }
        #atouts .section-label::before { background: var(--terra-lt); }
        .atouts-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 2px;
          margin-top: 3.5rem;
          background: rgba(255,255,255,.06);
          border-radius: 4px;
          overflow: hidden;
        }
        .atout {
          background: rgba(255,255,255,.03);
          padding: 2.5rem 2rem;
          transition: background .2s;
        }
        .atout:hover { background: rgba(255,255,255,.07); }
        .atout-num {
          font-family: var(--serif);
          font-size: 2.8rem;
          font-weight: 300;
          color: var(--terra);
          line-height: 1;
          margin-bottom: .8rem;
        }
        .atout h4 {
          font-family: var(--serif);
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: .4rem;
        }
        .atout p {
          font-size: .8rem;
          color: rgba(255,255,255,.45);
          font-weight: 300;
          line-height: 1.6;
        }

        #avis { background: white; }
        .avis-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3rem;
        }
        .avis-scores { display: flex; gap: 2rem; }
        .avis-score-val {
          font-family: var(--serif);
          font-size: 2.2rem;
          font-weight: 300;
          color: var(--terra);
          display: block;
          line-height: 1;
        }
        .avis-score-lbl {
          font-size: .68rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--ink-soft);
          margin-top: .3rem;
        }
        .avis-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 1.5rem;
        }
        .avis-card {
          background: var(--sand);
          padding: 2rem;
          border-radius: 4px;
          position: relative;
        }
        .avis-stars {
          color: var(--terra);
          font-size: .75rem;
          letter-spacing: .1em;
          margin-bottom: 1rem;
        }
        .avis-quote {
          font-family: var(--serif);
          font-size: 1rem;
          font-weight: 400;
          font-style: italic;
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }
        .avis-author {
          display: flex;
          align-items: center;
          gap: .8rem;
        }
        .avis-initial {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--terra-lt);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--serif);
          font-size: .9rem;
          color: var(--terra);
          font-weight: 600;
          flex-shrink: 0;
        }
        .avis-name { font-size: .8rem; font-weight: 500; }
        .avis-origin { font-size: .72rem; color: var(--ink-soft); }
        .avis-date {
          font-size: .68rem;
          color: var(--ink-soft);
          opacity: .7;
          margin-top: .1rem;
        }
        .avis-platform {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: .6rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--ink-soft);
          text-decoration: none;
        }
        .avis-platform:hover { color: var(--terra); }

        #destination {
          background: var(--sand);
          padding-bottom: 0;
        }
        .dest-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 3.5rem;
        }
        .dest-items { margin-top: 1.5rem; }
        .dest-item {
          display: flex;
          gap: 1.5rem;
          padding: 1.2rem 0;
          border-bottom: 1px solid var(--sand-dark);
        }
        .dest-item:last-child { border-bottom: none; }
        .dest-item-num {
          font-family: var(--serif);
          font-size: 1.4rem;
          color: var(--terra);
          font-weight: 300;
          line-height: 1;
          flex-shrink: 0;
          width: 28px;
        }
        .dest-item h4 {
          font-family: var(--serif);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: .3rem;
        }
        .dest-item p {
          font-size: .82rem;
          color: var(--ink-soft);
          font-weight: 300;
          line-height: 1.6;
        }
        .dest-grid { display: grid; grid-template-columns: repeat(3,1fr); }
        .dest-card {
          position: relative;
          height: 360px;
          overflow: hidden;
          cursor: pointer;
        }
        .dest-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s ease;
        }
        .dest-card:hover img { transform: scale(1.06); }
        .dest-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,8,5,.78) 0%, rgba(10,8,5,.1) 55%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.8rem;
          transition: background .3s;
        }
        .dest-card:hover .dest-card-overlay {
          background: linear-gradient(to top, rgba(10,8,5,.88) 0%, rgba(10,8,5,.2) 60%, transparent 100%);
        }
        .dest-card-tag {
          font-size: .62rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--terra-lt);
          margin-bottom: .4rem;
        }
        .dest-card h3 {
          font-family: var(--serif);
          font-size: 1.3rem;
          font-weight: 600;
          color: white;
          margin-bottom: .4rem;
          line-height: 1.2;
        }
        .dest-card-desc {
          font-size: .78rem;
          color: rgba(255,255,255,.7);
          font-weight: 300;
          line-height: 1.5;
          max-height: 0;
          overflow: hidden;
          transition: max-height .4s, opacity .4s;
          opacity: 0;
        }
        .dest-card:hover .dest-card-desc {
          max-height: 80px;
          opacity: 1;
        }
        .dest-card-dist {
          display: inline-block;
          margin-top: .6rem;
          font-size: .65rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.22);
          color: rgba(255,255,255,.8);
          padding: .25rem .65rem;
          border-radius: 2px;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity .3s .1s, transform .3s .1s;
        }
        .dest-card:hover .dest-card-dist {
          opacity: 1;
          transform: translateY(0);
        }

        #reservation { background: var(--ink); color: white; }
        #reservation .section-label { color: var(--terra); }
        #reservation .section-label::before { background: var(--terra); }
        .lodgify-wrap {
          margin-top: 2.5rem;
          padding: 1.5rem;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 6px;
        }

        #faq { background: var(--sand); }
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          margin-top: 3rem;
          background: var(--sand-dark);
          border-radius: 4px;
          overflow: hidden;
        }
        .faq-item { background: white; }
        .faq-btn {
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          padding: 1.8rem 2rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          font-family: var(--serif);
          font-size: 1rem;
          font-weight: 600;
          color: var(--ink);
          transition: background .2s;
        }
        .faq-btn:hover { background: var(--sand); }
        .faq-chevron {
          flex-shrink: 0;
          transition: transform .3s;
        }
        .faq-chevron.open { transform: rotate(180deg); }
        .faq-answer {
          padding: 0 2rem 1.8rem;
          font-size: .85rem;
          color: var(--ink-soft);
          font-weight: 300;
          line-height: 1.75;
        }

        .contact-detail {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .contact-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--terra-lt);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--terra);
        }
        .contact-detail strong {
          display: block;
          font-size: .78rem;
          font-weight: 500;
          margin-bottom: .2rem;
          letter-spacing: .06em;
          text-transform: uppercase;
        }
        .contact-detail span,
        .contact-detail a {
          font-size: .9rem;
          color: var(--ink-soft);
          text-decoration: none;
        }
        .contact-detail a:hover { color: var(--terra); }

        .wa-btn {
          display: inline-flex;
          align-items: center;
          gap: .7rem;
          background: #25D366;
          color: white;
          text-decoration: none;
          padding: .85rem 1.6rem;
          border-radius: 3px;
          font-size: .8rem;
          font-weight: 500;
          letter-spacing: .08em;
          text-transform: uppercase;
          margin-top: 1rem;
          transition: opacity .2s;
        }
        .wa-btn:hover { opacity: .88; }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: .4rem;
        }
        .form-group label {
          font-size: .72rem;
          font-weight: 500;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--ink-soft);
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
          padding: .8rem 1rem;
          border: 1px solid var(--sand-dark);
          border-radius: 3px;
          background: var(--sand);
          font-family: var(--sans);
          font-size: .9rem;
          color: var(--ink);
          outline: none;
          transition: border-color .2s;
          resize: none;
        }
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: var(--terra);
        }

        .form-submit {
          background: var(--terra);
          color: white;
          border: none;
          padding: .9rem 2rem;
          font-family: var(--sans);
          font-size: .78rem;
          font-weight: 500;
          letter-spacing: .1em;
          text-transform: uppercase;
          border-radius: 3px;
          cursor: pointer;
          transition: opacity .2s;
          align-self: flex-start;
        }
        .form-submit:hover { opacity: .85; }

        *:focus-visible {
          outline: 2px solid var(--terra);
          outline-offset: 3px;
          border-radius: 2px;
        }

        .form-consent {
          display: flex;
          align-items: flex-start;
          gap: .75rem;
          margin-top: .5rem;
        }
        .form-consent input[type="checkbox"] {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          margin-top: 2px;
          accent-color: var(--terra);
          cursor: pointer;
        }
        .form-consent label {
          font-size: .78rem;
          color: var(--ink-soft);
          line-height: 1.5;
          cursor: pointer;
        }
        .form-consent a {
          color: var(--terra);
          text-decoration: underline;
        }
        .form-info {
          font-size: .72rem;
          color: var(--ink-soft);
          margin-top: .5rem;
          padding: .8rem 1rem;
          background: var(--sand);
          border-radius: 3px;
          line-height: 1.6;
        }
        .form-error {
          font-size: .72rem;
          color: #c0392b;
          margin-top: .3rem;
          display: flex;
          align-items: center;
          gap: .3rem;
        }
        .field-error input,
        .field-error textarea,
        .field-error select {
          border-color: #c0392b !important;
        }

        .skip-link {
          position: absolute;
          top: -100px;
          left: 1rem;
          background: var(--terra);
          color: white;
          padding: .5rem 1rem;
          border-radius: 3px;
          font-size: .82rem;
          font-weight: 500;
          text-decoration: none;
          z-index: 9999;
          transition: top .2s;
        }
        .skip-link:focus { top: 1rem; }

        footer {
          background: var(--ink);
          color: rgba(255,255,255,.45);
          padding: 3rem 8vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .footer-brand {
          font-family: var(--serif);
          font-size: 1.1rem;
          color: white;
          font-weight: 600;
        }
        .footer-brand em { font-style: italic; color: var(--terra); }
        .footer-links {
          display: flex;
          gap: 1.4rem;
          flex-wrap: wrap;
        }
        .footer-links a {
          font-size: .75rem;
          color: rgba(255,255,255,.4);
          text-decoration: none;
          transition: color .2s;
          letter-spacing: .06em;
        }
        .footer-links a:hover { color: var(--terra); }
        .footer-copy { font-size: .72rem; }

        .wa-fab {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 90;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(37,211,102,.4);
          transition: transform .2s;
          color: white;
        }
        .wa-fab:hover { transform: scale(1.08); }

        @media (max-width: 900px) {
          .nav { display: none; }
          .hamburger { display: flex; }
          .marque-hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 6vw 3rem;
          }
          .marque-feats { grid-template-columns: 1fr 1fr; }
          .marque-hero { height: 80vw; min-height: 320px; }
          .dest-intro { grid-template-columns: 1fr; gap: 2rem; }
          .logements-grid,
          .avis-grid,
          .faq-grid { grid-template-columns: 1fr; }
          .atouts-grid { grid-template-columns: 1fr 1fr; }
          .dest-grid { grid-template-columns: 1fr 1fr; }
          .hero-stats {
            gap: 1.5rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          section { padding: 70px 6vw; }
          footer {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
          .logements-header,
          .avis-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          #contact .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 600px) {
          .atouts-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .marque-feats { grid-template-columns: 1fr; }
          .dest-grid { grid-template-columns: 1fr; }
          .dest-card { height: 260px; }
        }
      `}</style>

      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {lightbox.open && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="wa-fab"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      <header className="topbar">
        <div className="topbar-inner">
          <a href="#" className="nav-brand">
            <HHMonogram size={40} />
            <span className="nav-brand-text">
              HTS <em>Habitat</em>
            </span>
          </a>

          <nav className="nav">
            <a href="#logements">Logements</a>
            <a href="#marque">La marque</a>
            <a href="#avis">Avis</a>
            <a href="#destination">Narbonne</a>
            <a href="#contact">Contact</a>
            <a href="#reservation" className="nav-cta-btn">
              Réserver
            </a>
          </nav>

          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            {["logements", "marque", "avis", "destination", "contact", "reservation"].map(
              (id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              )
            )}
          </div>
        )}
      </header>

      <section className="hero" id="main-content">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-monogram">
          <HHMonogram size={130} animated />
        </div>
        <p className="hero-eyebrow">Narbonne, Occitanie</p>
        <h1 className="hero-title">
          Votre séjour à Narbonne,
          <br />
          <em>autrement.</em>
        </h1>
        <p className="hero-story">
          HTS Habitat, c'est l'histoire de Grégory — hôte narbonnais passionné par
          le soin du détail. Chaque appartement a été pensé comme un espace de vie
          à part entière : décoration soignée, confort réel, atmosphère chaleureuse.
          Pas un simple hébergement. Une vraie expérience.
        </p>
        <div className="hero-btns">
          <a href="#logements" className="btn-primary">
            Voir les logements
          </a>
          <a href="#reservation" className="btn-outline">
            Réserver
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <span ref={stat1.ref} className="hero-stat-val">
              {stat1.val}
            </span>
            <span className="hero-stat-lbl">Airbnb</span>
          </div>
          <div>
            <span ref={stat2.ref} className="hero-stat-val">
              {stat2.val}
            </span>
            <span className="hero-stat-lbl">Booking</span>
          </div>
          <div>
            <span ref={stat3.ref} className="hero-stat-val">
              +{stat3.val}
            </span>
            <span className="hero-stat-lbl">Séjours</span>
          </div>
          <div>
            <span className="hero-stat-val">🏅</span>
            <span className="hero-stat-lbl">Superhôte</span>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Découvrir</span>
          <div className="scroll-line" />
        </div>
      </section>

      <section id="marque">
        <div className="marque-hero">
          <div className="marque-hero-bg" />
          <div className="marque-hero-overlay" />
          <div className="marque-hero-content">
            <div className="marque-hero-text fade-up">
              <p className="section-label">La marque</p>
              <h2 className="marque-hero-title">
                Une même vision
                <br />
                <em>de l'hospitalité</em>
              </h2>
            </div>
            <div className="fade-up d2">
              <p className="marque-hero-story">
                HTS Habitat, c'est l'histoire de Grégory — hôte narbonnais passionné
                par le soin du détail. Chaque appartement a été pensé pour allier
                confort, décoration soignée et atmosphère chaleureuse.
              </p>
              <div className="host-badge">
                <div className="host-avatar">G</div>
                <div>
                  <div className="host-name">Grégory</div>
                  <div className="host-role">
                    Votre hôte · Narbonne · Superhôte certifié
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="marque-feats">
          {[
            {
              num: "01",
              title: "Emplacement idéal",
              desc: "Gare à pied, accès simple, emplacement idéal pour découvrir Narbonne.",
            },
            {
              num: "02",
              title: "Arrivée autonome",
              desc: "Check-in flexible et sécurisé — votre séjour commence dès votre arrivée.",
            },
            {
              num: "03",
              title: "+100 séjours réussis",
              desc: "Communication claire et réactive 7j/7, réponse garantie sous 2h.",
            },
            {
              num: "04",
              title: "Séjour pensé",
              desc: "Chaque détail a été conçu pour que vous vous sentiez vraiment bien.",
            },
          ].map((f) => (
            <div key={f.num} className="marque-feat fade-up">
              <div className="marque-feat-num">{f.num}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="logements">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div className="logements-header fade-up">
            <div>
              <p className="section-label">Les logements</p>
              <h2 className="section-title">
                Deux univers,
                <br />
                <em>une même exigence</em>
              </h2>
            </div>
            <p className="section-sub" style={{ maxWidth: 320 }}>
              Deux appartements, deux ambiances — toujours la même attention portée
              au confort et à la décoration.
            </p>
          </div>

          <div className="logements-grid">
            {listings.map((l, i) => (
              <div key={l.title} className={`card fade-up d${i + 1}`}>
                <div className="card-gallery">
                  <img src={l.image} alt={l.title} />
                  <span className={`card-tag${l.available ? "" : " soon"}`}>
                    {l.available ? "Disponible" : "Ouverture imminente"}
                  </span>

                  {l.gallery.length > 1 && (
                    <div className="card-thumbs">
                      {l.gallery.slice(1, 4).map((src, j) => (
                        <div
                          key={j}
                          className="card-thumb"
                          onClick={() => openLightbox(l.gallery, j + 1)}
                        >
                          <img src={src} alt="" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="card-body">
                  <p className="card-style">{l.badge}</p>
                  <h3 className="card-name">{l.title}</h3>
                  <p className="card-desc">{l.description}</p>

                  <div className="card-features">
                    {l.features.map((f) => (
                      <span key={f} className="card-feat">
                        {f}
                      </span>
                    ))}
                  </div>

                  {l.specs && (
                    <div className="card-specs">
                      {l.specs.map((s) => (
                        <div key={s.label} className="card-spec">
                          <span className="card-spec-label">{s.label}</span>
                          <span className="card-spec-value">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="card-footer">
                    {l.available ? (
                      <>
                        <div className="card-price">
                          {l.price} <span>{l.priceUnit}</span>
                        </div>
                        <div className="card-links">
                          <a
                            href={l.airbnbLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-dark"
                          >
                            Airbnb
                          </a>
                          <a
                            href={l.bookingLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-light-outline"
                          >
                            Booking
                          </a>
                        </div>
                      </>
                    ) : (
                      <div style={{ width: "100%" }}>
                        <p
                          style={{
                            fontSize: ".78rem",
                            color: "var(--ink-soft)",
                            marginBottom: ".8rem",
                            display: "flex",
                            alignItems: "center",
                            gap: ".5rem",
                          }}
                        >
                          <Clock size={14} /> Ouverture imminente
                        </p>

                        {waitlistSent ? (
                          <p style={{ fontSize: ".82rem", color: "var(--teal)" }}>
                            ✅ Vous serez parmi les premiers prévenus !
                          </p>
                        ) : (
                          <form
                            onSubmit={handleWaitlist}
                            style={{ display: "flex", gap: ".7rem" }}
                          >
                            <input
                              type="email"
                              placeholder="votre@email.com"
                              value={waitlistEmail}
                              onChange={(e) => setWaitlistEmail(e.target.value)}
                              required
                              style={{
                                flex: 1,
                                padding: ".6rem 1rem",
                                border: "1px solid var(--sand-dark)",
                                borderRadius: 3,
                                fontFamily: "var(--sans)",
                                fontSize: ".85rem",
                                background: "var(--sand)",
                              }}
                            />
                            <button type="submit" className="btn-dark">
                              Me prévenir
                            </button>
                          </form>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="atouts">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <p className="section-label fade-up" style={{ color: "var(--terra-lt)" }}>
            Pourquoi HTS Habitat
          </p>
          <h2 className="section-title fade-up" style={{ color: "white" }}>
            Ce qui fait
            <br />
            <em style={{ color: "var(--terra)" }}>la différence</em>
          </h2>

          <div className="atouts-grid">
            {[
              {
                num: "+100",
                title: "Séjours réussis",
                desc: "Des centaines de voyageurs comblés depuis l'ouverture.",
              },
              {
                num: "4,9★",
                title: "Note Airbnb",
                desc: "Une note quasi-parfaite, maintenue séjour après séjour.",
              },
              {
                num: "2h",
                title: "Temps de réponse",
                desc: "Réponse garantie sous 2h, 7 jours sur 7.",
              },
              {
                num: "9,4",
                title: "Note Booking",
                desc: "Parmi les meilleures locations de Narbonne sur Booking.com.",
              },
            ].map((a, i) => (
              <div key={a.title} className={`atout fade-up d${i + 1}`}>
                <div className="atout-num">{a.num}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="avis">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div className="avis-header fade-up">
            <div>
              <p className="section-label">Avis voyageurs</p>
              <h2 className="section-title">
                Ce que disent
                <br />
                <em>nos voyageurs</em>
              </h2>
            </div>
            <div className="avis-scores">
              <div>
                <span className="avis-score-val">4,9</span>
                <div className="avis-score-lbl">Airbnb</div>
              </div>
              <div>
                <span className="avis-score-val">9,4</span>
                <div className="avis-score-lbl">Booking</div>
              </div>
            </div>
          </div>

          <div className="avis-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`avis-card fade-up d${(i % 3) + 1}`}>
                <div className="avis-stars">★★★★★</div>
                <p className="avis-quote">« {t.text} »</p>
                <div className="avis-author">
                  <div className="avis-initial">{t.name[0]}</div>
                  <div>
                    <div className="avis-name">{t.name}</div>
                    <div className="avis-origin">{t.origin}</div>
                    <div className="avis-date">{t.date}</div>
                  </div>
                </div>
                <a
                  href={t.link}
                  target="_blank"
                  rel="noreferrer"
                  className="avis-platform"
                >
                  {t.platform} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="destination">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div className="dest-intro">
            <div className="fade-up">
              <p className="section-label">La destination</p>
              <h2 className="section-title">
                Narbonne &
                <br />
                <em>ses environs</em>
              </h2>
              <p className="section-sub">
                Entre mer Méditerranée, vignobles du Languedoc et 2 500 ans
                d'histoire, Narbonne est une destination qui surprend à chaque
                coin de rue.
              </p>
            </div>

            <div className="dest-items fade-up">
              {[
                {
                  num: "01",
                  title: "Cathédrale & centre historique",
                  desc: "Classée Cité d'Art et d'Histoire — canal de la Robine et vieille ville à pied.",
                },
                {
                  num: "02",
                  title: "Plages à 15 min",
                  desc: "Narbonne-Plage et Gruissan : 5 km de sable fin, spots de windsurf.",
                },
                {
                  num: "03",
                  title: "Vignobles & gastronomie",
                  desc: "Corbières, dégustations sur place, marchés locaux.",
                },
                {
                  num: "04",
                  title: "Nature & escapades",
                  desc: "Abbaye de Fontfroide, Réserve de Sigean, flamants roses.",
                },
              ].map((d) => (
                <div key={d.num} className="dest-item">
                  <span className="dest-item-num">{d.num}</span>
                  <div>
                    <h4>{d.title}</h4>
                    <p>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dest-grid">
          {destinations.map((d) => (
            <div key={d.title} className="dest-card">
              <img src={d.img} alt={d.title} loading="lazy" />
              <div className="dest-card-overlay">
                <span className="dest-card-tag">{d.tag}</span>
                <h3>{d.title}</h3>
                <p className="dest-card-desc">{d.desc}</p>
                <span className="dest-card-dist">{d.dist}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="reservation">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <p className="section-label" style={{ color: "rgba(255,255,255,.65)" }}>
            Réservation
          </p>
          <h2 className="section-title" style={{ color: "white" }}>
            Réservez votre séjour
            <br />
            <em style={{ opacity: 0.85 }}>facilement</em>
          </h2>
          <p
            className="section-sub"
            style={{ color: "rgba(255,255,255,.7)", maxWidth: 480 }}
          >
            Vérifiez les disponibilités en temps réel et réservez directement —
            ou passez par Airbnb et Booking.
          </p>

          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href={LODGIFY_LINK}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".7rem",
                background: "white",
                color: "var(--ink)",
                padding: ".9rem 2rem",
                borderRadius: 3,
                fontSize: ".82rem",
                fontWeight: 600,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity .2s",
              }}
            >
              Réserver en direct — sans commission
            </a>
            <span
              style={{
                fontSize: ".78rem",
                color: "rgba(255,255,255,.45)",
              }}
            >
              Paiement sécurisé · Confirmation immédiate · Meilleur prix garanti
            </span>
          </div>

          <div className="lodgify-wrap" style={{ marginTop: "1.5rem" }}>
            <div
              id="lodgify-search-bar"
              data-website-id="538798"
              data-language-code="fr"
              data-checkout-page-url="https://checkout.lodgify.com/occitanieetlocation/fr/#/634566"
              data-dates-check-in-label="Arrivée"
              data-dates-check-out-label="Départ"
              data-guests-counter-label="Invités"
              data-search-button-label="Réserver"
              data-new-tab="true"
              data-version="stable"
              data-has-guests-breakdown
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginTop: "2.5rem",
            }}
          >
            <a
              href={AIRBNB_LINK}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                background: "rgba(255,255,255,.1)",
                border: "2px solid rgba(255,255,255,.3)",
                borderRadius: 6,
                padding: "2rem",
                textDecoration: "none",
                color: "white",
                transition: "background .2s, transform .2s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                  }}
                >
                  Airbnb
                </span>
                <span
                  style={{
                    fontSize: ".7rem",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    background: "var(--terra)",
                    padding: ".3rem .8rem",
                    borderRadius: 2,
                  }}
                >
                  ★ 4,9
                </span>
              </div>
              <p
                style={{
                  fontSize: ".85rem",
                  color: "rgba(255,255,255,.7)",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                Réservez en toute sécurité avec la protection voyageur Airbnb.
                Paiement sécurisé, assistance 24h/24.
              </p>
              <span
                style={{
                  fontSize: ".75rem",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(255,255,255,.4)",
                  paddingBottom: ".3rem",
                  alignSelf: "flex-start",
                }}
              >
                Voir l'annonce →
              </span>
            </a>

            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                background: "rgba(255,255,255,.1)",
                border: "2px solid rgba(255,255,255,.3)",
                borderRadius: 6,
                padding: "2rem",
                textDecoration: "none",
                color: "white",
                transition: "background .2s, transform .2s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                  }}
                >
                  Booking.com
                </span>
                <span
                  style={{
                    fontSize: ".7rem",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    background: "var(--terra)",
                    padding: ".3rem .8rem",
                    borderRadius: 2,
                  }}
                >
                  9,4 / 10
                </span>
              </div>
              <p
                style={{
                  fontSize: ".85rem",
                  color: "rgba(255,255,255,.7)",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                Idéal si vous avez déjà un compte Booking. Annulation flexible,
                confirmation immédiate.
              </p>
              <span
                style={{
                  fontSize: ".75rem",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(255,255,255,.4)",
                  paddingBottom: ".3rem",
                  alignSelf: "flex-start",
                }}
              >
                Voir sur Booking →
              </span>
            </a>
          </div>

          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.5rem",
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.1)",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: ".78rem",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.5)",
                  marginBottom: ".3rem",
                }}
              >
                Réservation directe
              </p>
              <p
                style={{
                  fontSize: ".85rem",
                  color: "rgba(255,255,255,.6)",
                  fontWeight: 300,
                }}
              >
                Sans frais de plateforme — disponibilités en temps réel
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <a
                href={LODGIFY_LINK}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "rgba(255,255,255,.12)",
                  border: "1px solid rgba(255,255,255,.25)",
                  color: "white",
                  textDecoration: "none",
                  padding: ".65rem 1.4rem",
                  borderRadius: 3,
                  fontSize: ".75rem",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Réserver en direct
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "rgba(255,255,255,.5)",
                  fontSize: ".78rem",
                  textDecoration: "none",
                  letterSpacing: ".06em",
                }}
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <p className="section-label fade-up">Questions fréquentes</p>
          <h2 className="section-title fade-up">
            Tout ce que vous
            <br />
            <em>devez savoir</em>
          </h2>

          <div className="faq-grid">
            {faq.map((item, i) => (
              <div key={item.q} className="faq-item">
                <button
                  className="faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {item.q}
                  <ChevronDown
                    size={16}
                    className={`faq-chevron${openFaq === i ? " open" : ""}`}
                  />
                </button>
                {openFaq === i && <div className="faq-answer">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: "white", padding: "100px 8vw" }}>
        <div
          className="contact-grid"
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <div className="fade-up">
            <p className="section-label">Contact</p>
            <h2 className="section-title">
              Une question
              <br />
              <em>avant de réserver ?</em>
            </h2>
            <p className="section-sub" style={{ marginBottom: "2rem" }}>
              Nous sommes disponibles pour vous renseigner rapidement et vous aider
              à choisir la formule la plus adaptée.
            </p>

            {[
              {
                icon: <Mail size={15} />,
                label: "Email",
                value: "greg.hosteins@gmail.com",
                href: "mailto:greg.hosteins@gmail.com",
              },
              {
                icon: <Phone size={15} />,
                label: "Téléphone",
                value: "06.01.38.04.41",
                href: "tel:+33601380441",
              },
              {
                icon: <MapPin size={15} />,
                label: "Adresse",
                value: "Narbonne, proche gare et centre-ville",
              },
            ].map((d) => (
              <div key={d.label} className="contact-detail">
                <div className="contact-icon">{d.icon}</div>
                <div>
                  <strong>{d.label}</strong>
                  {d.href ? (
                    <a href={d.href}>
                      <span>{d.value}</span>
                    </a>
                  ) : (
                    <span>{d.value}</span>
                  )}
                </div>
              </div>
            ))}

            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="wa-btn">
              <MessageCircle size={18} /> Écrire sur WhatsApp
            </a>
          </div>

          <div className="fade-up d2">
            {contactSent ? (
              <p style={{ color: "var(--teal)", fontSize: ".9rem" }}>
                ✅ Votre client de messagerie va s'ouvrir. Merci !
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleContact}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Prénom</label>
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      value={contactForm.prenom}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, prenom: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Nom</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={contactForm.nom}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, nom: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Logement</label>
                  <select
                    value={contactForm.logement}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, logement: e.target.value })
                    }
                  >
                    <option>Cocon Bohème</option>
                    <option>Rome Antique Moderne</option>
                    <option>Je ne sais pas encore</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows={4}
                    placeholder="Votre question ou demande…"
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, message: e.target.value })
                    }
                    required
                  />
                </div>

                <div className={`form-consent${consentError ? " field-error" : ""}`}>
                  <input
                    id="rgpd-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (e.target.checked) setConsentError(false);
                    }}
                  />
                  <label htmlFor="rgpd-consent">
                    J’accepte que les informations renseignées soient utilisées
                    uniquement pour répondre à ma demande. Je peux exercer mes
                    droits à l’adresse{" "}
                    <a href="mailto:hts.habitats@gmail.com">hts.habitats@gmail.com</a>.
                  </label>
                </div>

                {consentError && (
                  <div className="form-error">
                    Merci de cocher la case de consentement avant d’envoyer votre
                    message.
                  </div>
                )}

                <div className="form-info">
                  Les données transmises via ce formulaire sont utilisées uniquement
                  pour répondre à votre demande. Pour en savoir plus, consultez nos{" "}
                  <a href="/mentions-legales">mentions légales</a> et notre{" "}
                  <a href="/politique-de-confidentialite">
                    politique de confidentialité
                  </a>.
                </div>

                <button type="submit" className="form-submit">
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          HTS <em>Habitat</em>
        </div>

        <div className="footer-links">
          <a href="#logements">Logements</a>
          <a href="#reservation">Réserver</a>
          <a href="#contact">Contact</a>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-de-confidentialite">Politique de confidentialité</a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} HTS Habitat · Narbonne
        </span>
      </footer>
    </>
  );
}
