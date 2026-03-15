import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, MapPin, CheckCircle2, Menu, X, ChevronRight, TreePine, Scissors, Zap, CircleDot } from "lucide-react";
import heroImage from "@/assets/hero-climber.webp";

const easing = [0.25, 0.1, 0.25, 1] as const;

const services = [
  { title: "Tree Removals", desc: "Safe, efficient removal of hazardous or unwanted trees using precision rigging and expert techniques.", icon: TreePine },
  { title: "Trimming & Pruning", desc: "Structural pruning to improve tree health, safety, and aesthetic value for your property.", icon: Scissors },
  { title: "Emergency Tree Services", desc: "24/7 rapid response for storm damage, fallen trees, and hazardous limb failure.", icon: Zap },
  { title: "Stump Removals", desc: "Complete removal of unsightly stumps to reclaim your landscape's footprint.", icon: CircleDot },
];

const testimonials = [
  {
    text: "I am blown away by Bruno Tree Service.!!! They showed up on time! They were professional! They left the property immaculate. They did everything we discussed & more even when the temps were 92 degrees. If you need tree, brush, trimming, removal this is the company to hire. I am so grateful to have met Fransisco / family & crew. They will be our solid go to tree company at our Condo from here on out!!!",
    author: "Colleen M.",
    source: "Yelp Review",
  },
];

const BrunoTreeService = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface-elevated/90 backdrop-blur-md shadow-card"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-forest rounded-lg flex items-center justify-center text-primary-foreground font-serif text-xl font-bold">
              B
            </div>
            <span className="font-serif text-xl font-bold tracking-tight uppercase">
              Bruno <span className="text-forest">Tree Service</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-forest transition-colors">Services</a>
            <a href="#about" className="hover:text-forest transition-colors">About</a>
            <a href="#testimonials" className="hover:text-forest transition-colors">Testimonials</a>
            <a
              href="tel:7043459861"
              className="flex items-center gap-2 bg-forest text-primary-foreground px-5 py-2.5 rounded-full hover:bg-forest-dark transition-all shadow-cta active:scale-95"
            >
              <Phone size={16} />
              (704) 345-9861
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-surface-elevated/95 backdrop-blur-md border-t border-border overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium py-2">Services</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium py-2">About</a>
                <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium py-2">Testimonials</a>
                <a
                  href="tel:7043459861"
                  className="flex items-center justify-center gap-2 bg-forest text-primary-foreground px-5 py-3 rounded-full font-semibold shadow-cta"
                >
                  <Phone size={16} />
                  (704) 345-9861
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional arborist climbing and working in a tree with safety equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bark/80 via-bark/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-surface-elevated/20 backdrop-blur-sm text-primary-foreground text-xs font-bold uppercase tracking-widest mb-6 border border-primary-foreground/20">
              Expert Tree Care in North Carolina
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-[1.15] mb-6 text-balance text-white">
              Introducing Bruno Tree Service: Let Our Family Take Care of Yours!
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-lg leading-relaxed">
              We take pride in delivering reliable tree care for residential and commercial properties across Charlotte and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#quote"
                className="px-8 py-4 bg-forest text-white rounded-2xl font-semibold shadow-cta hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:7043459861"
                className="px-8 py-4 bg-transparent text-white border border-white/40 rounded-2xl font-semibold hover:border-white/70 transition-all text-sm uppercase tracking-wider"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-forest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-oak mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 p-8 rounded-3xl text-center cursor-default group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground group-hover:bg-primary-foreground/20 transition-colors">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-foreground mb-3">{service.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-8 py-3 bg-surface-elevated/20 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 rounded-full font-semibold hover:bg-surface-elevated/30 transition-all text-sm"
            >
              Learn More <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {testimonials.map((t, i) => (
            <div key={i}>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed text-foreground mb-8">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <p className="text-muted-foreground font-medium">
                —{t.author} <em className="text-oak">{t.source}</em>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Form + About Section */}
      <section id="quote" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* About / Free On-Site Quotes */}
            <div id="about">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Free On-Site Quotes
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We believe in providing accurate and reliable estimates. That's why we offer free, in-person quotes, ensuring we fully understand your tree care needs.
              </p>

              <div className="mt-12">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Locally Rooted</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Based in Monroe, NC, we proudly extend our tree care services to Charlotte and the surrounding areas. Our team is dedicated to keeping your property safe and beautiful.
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                    <Phone size={18} />
                  </div>
                  <a href="tel:7043459861" className="text-foreground font-medium hover:text-forest transition-colors">(704) 345-9861</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:brunotreeservice1@gmail.com" className="text-foreground font-medium hover:text-forest transition-colors">brunotreeservice1@gmail.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                    <MapPin size={18} />
                  </div>
                  <span className="text-foreground font-medium">Charlotte, NC & Surrounding Areas</span>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-surface-elevated rounded-4xl shadow-elevated p-8 md:p-12">
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
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Request Your Free Quote</h3>
                    <p className="text-muted-foreground text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-2xl bg-secondary border-0 ring-1 ring-border focus:ring-2 focus:ring-forest outline-none transition-all text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Phone Number</label>
                      <input
                        required
                        type="tel"
                        className="w-full px-4 py-3 rounded-2xl bg-secondary border-0 ring-1 ring-border focus:ring-2 focus:ring-forest outline-none transition-all text-foreground"
                        placeholder="(704) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Location</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-2xl bg-secondary border-0 ring-1 ring-border focus:ring-2 focus:ring-forest outline-none transition-all text-foreground"
                        placeholder="Charlotte, NC"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Service Type</label>
                      <select className="w-full px-4 py-3 rounded-2xl bg-secondary border-0 ring-1 ring-border focus:ring-2 focus:ring-forest outline-none transition-all text-foreground">
                        <option>Tree Removal</option>
                        <option>Trimming & Pruning</option>
                        <option>Stump Removal</option>
                        <option>Emergency Service</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-forest text-primary-foreground rounded-2xl font-bold hover:bg-forest-dark transition-all shadow-cta active:scale-[0.98] text-sm uppercase tracking-wider mt-2"
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
                    <div className="w-20 h-20 bg-forest/10 text-forest rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Quote Requested!</h3>
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

      {/* Footer */}
      <footer className="bg-bark text-primary-foreground/60 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 text-primary-foreground mb-6">
              <div className="w-8 h-8 bg-forest rounded flex items-center justify-center font-serif font-bold">B</div>
              <span className="font-serif text-lg font-bold uppercase tracking-tight">Bruno Tree Service</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Professional arboriculture services for Charlotte and surrounding areas. Fully licensed and insured for your peace of mind.
            </p>
          </div>

          <div>
            <h4 className="text-primary-foreground font-bold mb-6 uppercase text-xs tracking-widest">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span>Monday — Friday</span> <span className="text-primary-foreground">8:00 AM — 7:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday — Sunday</span> <span className="text-primary-foreground">7:00 AM — 8:00 PM</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><Mail size={14} /> <a href="mailto:brunotreeservice1@gmail.com" className="hover:text-primary-foreground transition-colors">brunotreeservice1@gmail.com</a></li>
              <li className="flex items-center gap-3"><Phone size={14} /> <a href="tel:7043459861" className="hover:text-primary-foreground transition-colors">(704) 345-9861</a></li>
              <li className="flex items-center gap-3"><MapPin size={14} /> Charlotte, NC & Surrounding Areas</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-16 mt-16 border-t border-primary-foreground/10 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Bruno Tree Service. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrunoTreeService;
