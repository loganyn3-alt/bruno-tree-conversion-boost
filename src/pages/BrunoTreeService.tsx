import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, MapPin, CheckCircle2, ChevronRight, TreePine, Scissors, Zap, CircleDot } from "lucide-react";
import heroImage from "@/assets/hero-climber.webp";

const easing = [0.25, 0.1, 0.25, 1] as const;

const services = [
  { title: "Tree Removals", icon: TreePine },
  { title: "Trimming & Pruning", icon: Scissors },
  { title: "Emergency Tree Services", icon: Zap },
  { title: "Stump Removals", icon: CircleDot },
];

const testimonials = [
  {
    text: "I am blown away by Bruno Tree Service.!!! They showed up on time! They were professional! They left the property immaculate. They did everything we discussed & more even when the temps were 92 degrees. If you need tree, brush, trimming, removal this is the company to hire. I am so grateful to have met Fransisco / family & crew. They will be our solid go to tree company at our Condo from here on out!!!",
    author: "Colleen M.",
    source: "Yelp Review",
  },
];

const BrunoTreeService = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Sticky Header */}
      <nav
        className={`fixed top-0 w-full z-50 border-b border-border transition-all duration-300 ${
          scrolled ? "bg-surface-elevated shadow-card" : "bg-background"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold tracking-tight text-brown">
              Bruno Tree Service, LLC
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-foreground">
            <a href="#services" className="hover:text-brown transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-brown transition-colors">
              About
            </a>
            <a
              href="tel:7043459861"
              className="flex items-center gap-2 bg-olive text-primary-foreground px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-olive-dark transition-all shadow-cta active:scale-95"
            >
              <Phone size={16} />
              (704) 345-9861
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional arborist climbing and working in a tree with safety equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-24 pt-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal leading-[1.1] mb-6 text-white">
              Introducing Bruno Tree Service: Let Our Family Take Care of Yours!
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
              We take pride in delivering reliable, professional services rooted in trust, integrity, and a commitment to excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <a
                href="#quote"
                className="px-8 py-4 bg-olive text-white rounded-lg font-semibold shadow-cta hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:7043459861"
                className="px-8 py-4 bg-transparent text-white border border-white/40 rounded-lg font-semibold hover:border-white/70 transition-all text-sm uppercase tracking-wider"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-brown mb-8">About Us</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            We are a family-owned and operated business dedicated to providing exceptional tree care. With years of experience and a passion for preserving the beauty and safety of your property.
          </p>
          <a
            href="#quote"
            className="inline-block px-12 py-4 bg-brown text-primary-foreground font-medium text-sm tracking-wide"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Wave Divider: About → Services */}
      <div className="relative">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20 block bg-background">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="hsl(var(--olive))" />
        </svg>
      </div>

      {/* Services Section — olive green background with white icons */}
      <section id="services" className="py-24 bg-olive">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-white mb-4">Our services</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-center cursor-default group"
              >
                <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center text-white/90">
                  <service.icon size={56} strokeWidth={0.8} />
                </div>
                <h3 className="text-lg font-serif font-normal text-white">{service.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="#quote"
              className="inline-block px-12 py-4 bg-secondary/80 text-foreground font-medium text-sm tracking-wide hover:bg-secondary transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Wave Divider: Services → Testimonials */}
      <div className="relative">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20 block bg-olive">
          <path d="M0,0 L0,40 C360,0 720,80 1080,40 C1260,20 1380,30 1440,40 L1440,0 Z" fill="hsl(var(--olive))" />
          <path d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,30 1440,40 L1440,80 L0,80 Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {testimonials.map((t, i) => (
            <div key={i}>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif font-normal leading-relaxed text-brown mb-10">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <p className="text-brown font-medium text-lg">
                —{t.author} <em className="text-muted-foreground">{t.source}</em>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Form + Free On-Site Quotes Section */}
      <section id="quote" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Free On-Site Quotes info */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-brown mb-6">
                Free On-Site Quotes
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                We believe in providing accurate and reliable estimates. That's why we offer free, in-person quotes, ensuring we fully understand your tree care needs.
              </p>

              <div>
                <h3 className="text-3xl font-serif font-normal text-brown mb-4">Locally Rooted</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  Based in Monroe, NC, we proudly extend our tree care services to Charlotte and the surrounding areas. Our team is dedicated to keeping your property safe and beautiful.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-brown" />
                  <a href="tel:7043459861" className="text-foreground hover:text-brown transition-colors">(704) 345-9861</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-brown" />
                  <a href="mailto:brunotreeservice1@gmail.com" className="text-foreground hover:text-brown transition-colors">brunotreeservice1@gmail.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={18} className="text-brown" />
                  <span className="text-foreground">Charlotte, NC & Surrounding Areas</span>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-surface-elevated rounded-2xl shadow-elevated p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleQuoteSubmit}
                    className="space-y-5"
                  >
                    <h3 className="text-2xl font-serif font-normal text-brown mb-2">Request Your Free Quote</h3>
                    <p className="text-muted-foreground text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border-0 ring-1 ring-border focus:ring-2 focus:ring-olive outline-none transition-all text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Phone Number</label>
                      <input
                        required
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border-0 ring-1 ring-border focus:ring-2 focus:ring-olive outline-none transition-all text-foreground"
                        placeholder="(704) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Location</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border-0 ring-1 ring-border focus:ring-2 focus:ring-olive outline-none transition-all text-foreground"
                        placeholder="Charlotte, NC"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Service Type</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-secondary border-0 ring-1 ring-border focus:ring-2 focus:ring-olive outline-none transition-all text-foreground">
                        <option>Tree Removal</option>
                        <option>Trimming & Pruning</option>
                        <option>Stump Removal</option>
                        <option>Emergency Service</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-olive text-primary-foreground rounded-xl font-bold hover:bg-olive-dark transition-all shadow-cta active:scale-[0.98] text-sm uppercase tracking-wider mt-2"
                    >
                      Request My Quote
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-20 h-20 bg-olive/10 text-olive rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-serif font-normal text-brown mb-3">Quote Requested!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you! We'll contact you within 24 hours to schedule your free on-site assessment.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — Hours & Contact on cream */}
      <footer className="py-20 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16 text-center">
          <div>
            <h4 className="text-2xl font-serif font-normal text-brown mb-8">Hours</h4>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p>Monday — Friday</p>
                <p className="text-foreground">8:00 am — 7:00 pm</p>
              </div>
              <div>
                <p>Saturday — Sunday</p>
                <p className="text-foreground">7:00 am — 8:00 pm</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-serif font-normal text-brown mb-8">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <p><a href="mailto:brunotreeservice1@gmail.com" className="hover:text-brown transition-colors underline">brunotreeservice1@gmail.com</a></p>
              <p><a href="tel:7043459861" className="hover:text-brown transition-colors underline">(704) 345-9861</a></p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 pt-16 mt-16 border-t border-border text-xs text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} Bruno Tree Service. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BrunoTreeService;
