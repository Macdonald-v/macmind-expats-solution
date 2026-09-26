import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/slider-commercial.webp",
    title: "Professional Printing Solutions",
    text: "Production printers, photocopiers and dependable technical support for modern businesses.",
  },
  {
    image: "/images/slider-kyocera-birds.webp",
    title: "Kyocera Printing Technology",
    text: "Reliable equipment for offices, production environments and high-volume document workflows.",
  },
  {
    image: "/images/slider-kyocera-range.jfif",
    title: "Printers & Multifunction Systems",
    text: "Explore practical printing equipment for everyday office and professional production needs.",
  },
  {
    image: "/images/slider-office-printer.webp",
    title: "Office Printing Made Simple",
    text: "Efficient printing solutions designed to keep your team productive.",
  },
  {
    image: "/images/slider-free-training.webp",
    title: "Free Training & Network Installation",
    text: "We help with setup, network installation and user training for your printing equipment.",
  },
  {
    image: "/images/slider-service.webp",
    title: "Professional Repair & Maintenance",
    text: "Technical support to keep your printers and copiers working reliably.",
  },
  {
    image: "/images/slider-production.webp",
    title: "Production Printing Solutions",
    text: "Solutions for commercial print, direct mail and demanding production workflows.",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const previous = () => setActive((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setActive((current) => (current + 1) % slides.length);

  return (
    <div className="hero-slider" aria-label="Macmind Expats printing solutions slideshow">
      {slides.map((slide, index) => (
        <div
          className={`hero-slide ${index === active ? "active" : ""}`}
          key={slide.image}
          aria-hidden={index !== active}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="hero-slide-overlay" />
          <div className="hero-slide-content">
            <span>Macmind Expats Solutions</span>
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}

      <button className="hero-slider-arrow prev" onClick={previous} aria-label="Previous slide">
        <ChevronLeft size={22} />
      </button>
      <button className="hero-slider-arrow next" onClick={next} aria-label="Next slide">
        <ChevronRight size={22} />
      </button>

      <div className="hero-slider-dots" aria-label="Choose slide">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
