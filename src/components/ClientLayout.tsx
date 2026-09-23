"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Instagram, Linkedin, Mail, Menu, X, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const queryClient = new QueryClient();

const navLinks = [
  ["Home", "/#home"],
  ["Services", "/#services"],
  ["Projects", "/#projects"],
  ["Reviews", "/#testimonials"],
  ["Why Us", "/#why-us"],
  ["Pricing", "/#pricing"],
  ["Contact", "/#contact"],
];

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    width="34"
    height="34"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.002 2.532c-7.447 0-13.486 6.037-13.486 13.486 0 2.373.618 4.686 1.792 6.726l-1.921 7.02 7.181-1.884c1.99.106 3.992.518 6.434.518 7.447 0 13.486-6.037 13.486-13.486s-6.039-13.486-13.486-13.486zM24.015 21.054c-.332.937-1.916 1.793-2.656 1.865-.738.071-1.57.199-4.819-1.144-3.905-1.616-6.425-5.603-6.619-5.864-.191-.259-1.579-2.106-1.579-4.019 0-1.913.987-2.855 1.336-3.235.352-.379.761-.475 1.011-.475.249 0 .498.001.728.012.241.011.564-.093.882.671.336.804 1.139 2.784 1.239 2.986.099.201.165.437.031.701-.132.264-.201.428-.399.664-.199.233-.42.521-.599.704-.2.203-.414.428-.18.831.235.405 1.042 1.724 2.235 2.785 1.545 1.375 2.827 1.799 3.23 1.998.401.2.637.165.877-.101.237-.266 1.017-1.186 1.291-1.593.272-.405.545-.337.915-.199.371.137 2.348 1.107 2.748 1.306.4.199.667.299.764.465.097.165.097.962-.235 1.899z" />
  </svg>
);

function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <span className={footer ? "footer-wordmark" : ""}>
      <span className="wordmark">
        <Image
          src="/logo.jpg"
          alt="Code Pe Charcha Logo"
          width={40}
          height={40}
          className="rounded-md object-cover"
          style={{ objectFit: "contain" }}
        />
        <span className="wordmark-copy">
          <strong>Code Pe Charcha</strong>
          <small>Web • Apps • Software Solutions</small>
        </span>
      </span>
    </span>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const close = () => setOpen(false);
  return (
    <div className="navbar-wrapper">
      <header
        className={`site-nav ${scrolled ? "scrolled" : ""}`}
        data-testid="navigation-header"
      >
        <Link
          href="/#home"
          className="wordmark"
          onClick={close}
          data-testid="link-home-logo"
        >
          <Wordmark />
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map(([label, href]) => (
            <Link
              href={href}
              key={href}
              data-testid={`link-nav-${label.toLowerCase()}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <motion.a
          className="nav-cta"
          href="/#contact"
          data-testid="link-nav-start"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Project <ArrowUpRight size={14} />
        </motion.a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          data-testid="button-mobile-menu"
        >
          <Menu size={22} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
          >
            <div className="mobile-menu-header">
              <Wordmark />
              <button 
                className="menu-toggle" 
                onClick={close}
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>
            <div className="mobile-menu-links">
              {navLinks.map(([label, href], i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.04, ease: "easeOut" }}
                >
                  <Link
                    href={href}
                    onClick={close}
                    data-testid={`link-mobile-${label.toLowerCase()}`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.04, ease: "easeOut" }}
              >
                <Link
                  className="mobile-nav-cta"
                  href="/#contact"
                  onClick={close}
                  data-testid="link-mobile-start"
                >
                  Start a Project <ArrowUpRight size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <Wordmark footer />
            <p>
              Code ki baat, business ke saath. We craft practical digital
              products for ambitious teams. Let's build something amazing
              together.
            </p>
            <div className="mt-4 text-sm text-ink/70">
              <p><strong>Code Pe Charcha</strong></p>
              <p>Muhana Mandi Mod, Sanganer</p>
              <p>Jaipur, Rajasthan, India - 302029</p>
              <p className="mt-2"><a href="tel:+918949936535" className="hover:text-coral transition-colors">+91 89499 36535</a></p>
            </div>
            <div className="newsletter-box">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="newsletter-input"
              />
              <button className="button-coral newsletter-btn">Subscribe</button>
            </div>
          </div>
          <div>
            <span className="footer-label">Explore</span>
            <div className="footer-links">
              {navLinks.map(([label, href]) => (
                <Link
                  href={href}
                  key={href}
                  data-testid={`link-footer-${label.toLowerCase()}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <span className="footer-label">Services</span>
            <div className="footer-links">
              <Link href="/services/website-development" data-testid="link-footer-service-website">
                Website Development
              </Link>
              <Link href="/services/mobile-app-development" data-testid="link-footer-service-mobile">
                Mobile Apps
              </Link>
              <Link
                href="/services/e-commerce-development"
                data-testid="link-footer-service-commerce"
              >
                E-commerce
              </Link>
              <Link
                href="/services/custom-software"
                data-testid="link-footer-service-software"
              >
                Custom Software
              </Link>
              <Link href="/services/crm-development" data-testid="link-footer-service-crm">
                CRM
              </Link>
              <Link href="/services/admin-panels" data-testid="link-footer-service-admin">
                Admin Panels
              </Link>
            </div>
          </div>
          <div>
            <span className="footer-label">Find us</span>
            <div className="footer-links">
              <a
                href="https://facebook.com/codepecharcha"
                target="_blank"
                rel="noreferrer"
                data-testid="link-social-facebook"
                className="social-link"
              >
                <Facebook size={16} />{" "}
                <span className="social-text">Facebook</span>
              </a>
              <a
                href="https://instagram.com/codepecharcha"
                target="_blank"
                rel="noreferrer"
                data-testid="link-social-instagram"
                className="social-link"
              >
                <Instagram size={16} />{" "}
                <span className="social-text">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                data-testid="link-social-linkedin"
                className="social-link"
              >
                <Linkedin size={16} />{" "}
                <span className="social-text">LinkedIn</span>
              </a>
              <a
                href="mailto:codepecharchainfo@gmail.com"
                data-testid="link-footer-email"
                className="social-link"
              >
                <Mail size={16} /> <span className="social-text">Email us</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© 2026 Code Pe Charcha. All rights reserved.</span>
            <div className="legal-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
          <div className="socials">
            <Link
              href="/#home"
              data-testid="link-footer-top"
              className="back-to-top"
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--ink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: "clamp(2rem, 6vw, 4rem)",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span className="loading-text-premium">LOADING</span>
        <span
          style={{
            display: "flex",
            gap: "4px",
            marginLeft: "12px",
            color: "var(--coral)",
          }}
        >
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
          >
            .
          </motion.span>
        </span>
      </div>
    </motion.div>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence>
          {isLoading && <Preloader key="preloader" />}
        </AnimatePresence>
        <Navbar />
        {children}
        <a
          href="https://wa.me/918949936535"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        <Footer />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
