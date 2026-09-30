"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Monitor, Smartphone, ShoppingCart, Code2, Users, LayoutDashboard, Truck, Heart, Database, Settings } from "lucide-react";
import { motion } from "framer-motion";

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

const servicesData = [
  {
    id: "website-development",
    number: "01",
    title: "Business Website Development",
    icon: Monitor,
    copy: "Modern, responsive websites tailored to represent your company.",
    features: [
      "Modern responsive websites",
      "Company/business websites",
      "Landing pages",
      "SEO-friendly structure",
      "Mobile responsive design",
      "Contact/enquiry forms",
      "Google Maps integration"
    ]
  },
  {
    id: "mobile-app-development",
    number: "02",
    title: "Mobile App Development",
    icon: Smartphone,
    copy: "High-performance applications for Android and iOS platforms.",
    features: [
      "Android apps",
      "iOS apps",
      "Cross-platform apps",
      "React Native development",
      "API integration",
      "Push notifications"
    ]
  },
  {
    id: "e-commerce-development",
    number: "03",
    title: "E-Commerce Development",
    icon: ShoppingCart,
    copy: "Scalable online stores with seamless shopping experiences.",
    features: [
      "Product management",
      "Categories",
      "Cart and checkout",
      "Online payments",
      "Order management",
      "Admin panel",
      "Customer management"
    ]
  },
  {
    id: "custom-software",
    number: "04",
    title: "Custom Software Development",
    icon: Code2,
    copy: "Bespoke software solutions designed for your unique workflows.",
    features: [
      "Custom business software",
      "Workflow automation",
      "Admin panels",
      "Role-based access",
      "Reports and dashboards",
      "Business-specific modules"
    ]
  },
  {
    id: "crm-development",
    number: "05",
    title: "CRM Software",
    icon: Users,
    copy: "Customer relationship management systems to grow your sales.",
    features: [
      "Customer management",
      "Lead management",
      "Follow-ups",
      "Sales tracking",
      "Staff/user management",
      "Reports and analytics"
    ]
  },
  {
    id: "erp-development",
    number: "06",
    title: "ERP / Business Management",
    icon: LayoutDashboard,
    copy: "Comprehensive tools to manage all your business operations.",
    features: [
      "Business operations management",
      "Employee/user management",
      "Inventory",
      "Accounts/workflows",
      "Reports",
      "Role-based access"
    ]
  },
  {
    id: "tms-development",
    number: "07",
    title: "Transport Management System (TMS)",
    icon: Truck,
    copy: "Advanced logistics software for fleet and delivery management.",
    features: [
      "Fleet & vehicle management",
      "Driver management",
      "Trip & route planning",
      "Fuel & expense tracking",
      "Load/unload and delivery tracking",
      "Customer & consignment management",
      "Invoice/payment tracking",
      "Reports & analytics",
      "Multi-user access"
    ]
  },
  {
    id: "ngo-software",
    number: "08",
    title: "NGO Website + Software",
    icon: Heart,
    copy: "Digital solutions for NGOs including member management and events.",
    features: [
      "NGO website",
      "Member management",
      "Member ID & QR cards",
      "Appointment letters",
      "Donation receipts",
      "Certificate generation",
      "Events management",
      "Analytics & reports",
      "Manager/coordinator panel",
      "Audit reports",
      "Multi-language support",
      "WhatsApp/call integration",
      "Custom NGO features"
    ]
  },
  {
    id: "api-development",
    number: "09",
    title: "API Development & Integrations",
    icon: Database,
    copy: "Secure APIs connecting your systems and third-party services.",
    features: [
      "REST APIs",
      "Third-party API integrations",
      "Payment gateway integration",
      "WhatsApp/SMS integrations",
      "Database/API integration",
      "Backend integrations"
    ]
  },
  {
    id: "admin-panels",
    number: "10",
    title: "Admin Panel Development",
    icon: Settings,
    copy: "Powerful dashboards to control and monitor your business data.",
    features: [
      "Dashboard",
      "User management",
      "Role-based permissions",
      "CRUD management",
      "Reports",
      "Analytics",
      "Custom business modules"
    ]
  }
];

export default function ServicesPage() {
  useReveal();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ paddingBottom: '4rem', paddingTop: '8rem' }}>
        <div className="section-shell">
          <div style={{ maxWidth: '800px' }}>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Digital Solutions Built Around Your Business
            </h1>
            <p className="hero-copy reveal reveal-delay-1" style={{ marginBottom: '2.5rem', fontSize: '1.125rem' }}>
              From websites and mobile apps to custom business software, CRM, ERP and industry-specific solutions — Code Pe Charcha builds technology around your actual business needs.
            </p>
            <div className="hero-actions reveal reveal-delay-2">
              <Link href="/#contact" className="button-coral">
                Discuss Your Project <ArrowUpRight size={16} />
              </Link>
              <a href="#all-services" className="button-ghost">
                View Services <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section" id="all-services">
        <div className="section-shell">
          <div className="services-head reveal">
            <div>
              <div className="section-kicker">01 / Our Capabilities</div>
              <h2>Comprehensive Digital Services</h2>
            </div>
          </div>
          
          <div className="service-grid">
            {servicesData.map(({ id, number, title, copy, features, icon: Icon }, index) => (
              <Link
                href={`/services/${id}`}
                key={title}
                className="service-card-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <motion.article
                  className={`service-card reveal reveal-delay-${(index % 3) + 1}`}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="service-icon-wrapper">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3>{title}</h3>
                  <p className="service-copy">{copy}</p>

                  <ul className="service-features">
                    {features?.map((feature) => (
                      <li key={feature} className="service-feature-item">
                        <Check size={14} className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-footer">
                    <span className="service-index">{number}</span>
                    <span className="service-arrow">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light" style={{ backgroundColor: "#FCFAF6" }}>
        <div className="section-shell">
          <div className="reveal">
            <div className="section-kicker">02 / Advantages</div>
            <h2>Why Choose Code Pe Charcha</h2>
            <p className="section-intro" style={{ marginBottom: "3rem" }}>
              We focus on delivering high-quality, practical technology solutions for businesses.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              "Custom-built solutions",
              "Modern technologies",
              "Responsive interfaces",
              "Scalable architecture",
              "API integrations",
              "Business-focused development",
              "Ongoing support"
            ].map((point, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 3) + 1}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <Check size={20} style={{ color: 'var(--coral)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontWeight: 500, fontSize: '1.05rem' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section section-dark">
        <div className="section-shell process-layout">
          <div className="process-intro reveal">
            <div className="section-kicker">03 / Our Process</div>
            <h2>How We Work</h2>
            <p className="section-intro">
              A simple, transparent process from your initial idea to the final deployed product.
            </p>
          </div>
          
          <div className="process-steps">
            {[
              { num: "01", title: "Requirement Discussion", copy: "We understand your business and exactly what you need to build." },
              { num: "02", title: "Planning", copy: "We map out the features, architecture, and timeline for the project." },
              { num: "03", title: "UI/Development", copy: "We design and build the product with continuous feedback." },
              { num: "04", title: "Testing", copy: "Rigorous testing to ensure everything works perfectly." },
              { num: "05", title: "Deployment", copy: "Launching your product to the live server or app stores." },
              { num: "06", title: "Support", copy: "Ongoing maintenance and support to keep things running smoothly." }
            ].map((step, index) => (
              <article className={`process-step reveal reveal-delay-${(index % 3) + 1}`} key={step.num}>
                <span className="step-number">{step.num}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-shell cta-inner">
          <div className="reveal">
            <div className="section-kicker" style={{ color: "var(--ink)" }}>
              04 / Start Today
            </div>
            <h2>Have a Project in Mind?</h2>
            <p>
              Tell us about your business requirement and let's discuss the right digital solution.
            </p>
          </div>
          
          <div className="cta-actions reveal reveal-delay-1" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <Link href="/#contact" className="button-coral" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Start Your Project <ArrowUpRight size={18} />
            </Link>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginTop: '1rem', opacity: 0.8 }}>
              <a href="tel:8949936535" style={{ textDecoration: 'none', color: 'inherit' }}>WhatsApp/Phone: 8949936535</a>
              <span style={{ opacity: 0.5 }}>•</span>
              <a href="mailto:codepecharchainfo@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>codepecharchainfo@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
