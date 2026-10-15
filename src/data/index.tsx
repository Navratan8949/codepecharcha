import {
  Globe2,
  Smartphone,
  Layers3,
  Settings2,
  MonitorSmartphone,
  HeartHandshake,
  Network,
  Zap,
  PenTool,
  Target,
  Video,
} from "lucide-react";

import Link from "next/link";

export type ServiceData = {
  id: string;
  number: string;
  title: string;
  copy: string;
  features: string[];
  icon: typeof Globe2;
  seoTitle?: string;
  seoDescription?: string;
  h1?: string;
  seoOverview?: React.ReactNode;
  faqs?: { question: string; answer: string }[];
};

export const services: ServiceData[] = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    copy: "Fast, responsive websites that give your business a sharper digital front door.",
    features: [
      "Responsive Design",
      "Performance Optimized",
      "SEO Friendly",
      "CMS Integration",
    ],
    icon: Globe2,
    seoTitle: "Website Development Company in Jaipur | Code Pe Charcha",
    seoDescription:
      "Code Pe Charcha builds modern, responsive and SEO-friendly websites for businesses, startups and organizations in Jaipur and across India.",
    h1: "Website Development Company in Jaipur",
    seoOverview: (
      <>
        Fast, responsive websites that give your business a sharper digital
        front door. As a leading website development company in Jaipur, we
        specialize in creating custom web solutions for businesses and startups
        across India. Our team builds SEO-friendly websites optimized for
        performance.{" "}
        <Link
          href="/services/e-commerce-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Explore our E-commerce Development
        </Link>{" "}
        to see how we help online stores grow, or check out our work on{" "}
        <Link
          href="/projects/omnibit"
          className="text-coral underline hover:text-ink transition-colors"
        >
          OmniBit
        </Link>
        .
      </>
    ),
    faqs: [
      {
        question: "How much does website development cost?",
        answer:
          "The cost depends on the complexity and requirements of the project. A simple business website costs less than a fully custom web application. We provide transparent pricing after our initial discovery call.",
      },
      {
        question: "How long does website development take?",
        answer:
          "A standard business website typically takes 2 to 4 weeks. Larger custom websites with complex features can take a few months.",
      },
      {
        question: "Can you build SEO-friendly websites?",
        answer:
          "Yes, all our websites are built with best technical SEO practices, ensuring fast load times, clean code, and proper structure for search engines.",
      },
      {
        question: "Do you provide website maintenance?",
        answer:
          "Yes, we offer ongoing maintenance and support to keep your website secure, fast, and up-to-date.",
      },
    ],
  },
  {
    id: "mobile-app-development",
    number: "02",
    title: "Mobile App Development",
    copy: "Useful Android and iOS experiences, built to feel native and stay maintainable.",
    features: [
      "iOS & Android native feel",
      "Cross-platform (React Native)",
      "App Store Deployment",
      "API Integration",
    ],
    icon: Smartphone,
    seoTitle: "Mobile App Development Company in Jaipur | Code Pe Charcha",
    seoDescription:
      "Build modern Android and iOS mobile applications with Code Pe Charcha for startups, businesses and organizations across Jaipur and India.",
    h1: "Mobile App Development Company in Jaipur",
    seoOverview: (
      <>
        Useful Android and iOS experiences, built to feel native and stay
        maintainable. As a top mobile app development company in Jaipur, we
        design cross-platform solutions for businesses across India. From
        consumer apps to enterprise solutions, our mobile applications ensure
        high performance. See how we integrated complex features in our{" "}
        <Link
          href="/projects/dincharya-attendance-app"
          className="text-coral underline hover:text-ink transition-colors"
        >
          DinCharya Attendance App
        </Link>{" "}
        or pair your app with our{" "}
        <Link
          href="/services/custom-software"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Custom Software Services
        </Link>{" "}
        for a complete ecosystem.
      </>
    ),
    faqs: [
      {
        question: "Can you build Android and iOS apps?",
        answer:
          "Yes, we develop cross-platform mobile apps using frameworks like React Native to ensure your app works seamlessly on both Android and iOS devices.",
      },
      {
        question: "How long does app development take?",
        answer:
          "Most mobile applications take between 2 to 6 months to develop, depending on the complexity of the features and integrations required.",
      },
      {
        question: "Can you integrate APIs and payment gateways?",
        answer:
          "Absolutely. We routinely integrate third-party APIs, payment gateways like Stripe or Razorpay, and custom backends.",
      },
      {
        question: "Do you provide app maintenance?",
        answer:
          "Yes, we provide post-launch support, bug fixes, and performance tweaks to ensure your app stays updated with the latest OS versions.",
      },
    ],
  },
  {
    id: "e-commerce-development",
    number: "03",
    title: "E-commerce Development",
    copy: "Online stores with product, order and payment flows your team can actually run.",
    features: [
      "Custom Storefronts",
      "Payment Gateways",
      "Inventory Management",
      "Secure Checkout",
    ],
    icon: Layers3,
    seoTitle:
      "E-commerce Website Development Company in Jaipur | Code Pe Charcha",
    seoDescription:
      "Build scalable e-commerce websites with product catalogs, shopping carts, payments and custom business features with Code Pe Charcha.",
    h1: "E-commerce Website Development Company in Jaipur",
    seoOverview: (
      <>
        Online stores with product, order and payment flows your team can
        actually run. As an expert e-commerce website development company in
        Jaipur, we build scalable platforms for retailers across India. We
        integrate robust payment gateways and inventory management systems.
        Learn more about our retail capabilities by checking out the{" "}
        <Link
          href="/projects/ejuuz-app"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Ejuuz App
        </Link>{" "}
        or enhance your store's visibility with our{" "}
        <Link
          href="/services/seo-growth"
          className="text-coral underline hover:text-ink transition-colors"
        >
          SEO & Digital Growth
        </Link>{" "}
        service.
      </>
    ),
    faqs: [
      {
        question: "Can you build an online store?",
        answer:
          "Yes, we specialize in building robust, scalable e-commerce platforms tailored to your business needs.",
      },
      {
        question: "Can payment gateways be integrated?",
        answer:
          "We can integrate multiple secure payment gateways, allowing your customers to pay via Credit Cards, UPI, Net Banking, or Wallets seamlessly.",
      },
      {
        question: "Can products and orders be managed through an admin panel?",
        answer:
          "Yes, we provide custom Admin Panels where your team can easily manage products, track orders, and view sales metrics.",
      },
    ],
  },
  {
    id: "custom-software",
    number: "04",
    title: "Custom Software",
    copy: "Purpose-built tools around the way your people work, not the other way around.",
    features: [
      "Tailored Workflows",
      "Scalable Architecture",
      "Legacy Modernization",
      "Cloud Deployment",
    ],
    icon: Settings2,
    seoTitle: "Custom Software Development Company in Jaipur | Code Pe Charcha",
    seoDescription:
      "Code Pe Charcha develops custom software solutions for businesses that need tailored workflows, dashboards, integrations and automation.",
    h1: "Custom Software Development Company in Jaipur",
    seoOverview: (
      <>
        Purpose-built tools around the way your people work, not the other way
        around. As a trusted custom software development company in Jaipur, we
        architect scalable solutions for organizations throughout India. From
        legacy modernization to cloud deployment, we automate operations
        seamlessly. We also build comprehensive{" "}
        <Link
          href="/services/admin-panels"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Admin Panels
        </Link>{" "}
        to manage your software and streamline business logic.
      </>
    ),
    faqs: [
      {
        question: "What is custom software development?",
        answer:
          "Custom software development involves building tailored digital solutions designed specifically for your organization's unique workflows, rather than relying on off-the-shelf software.",
      },
      {
        question: "Can software be built for a specific business workflow?",
        answer:
          "Yes, we architect software that maps exactly to how your team works, automating repetitive tasks and streamlining operations.",
      },
      {
        question: "Can existing systems and APIs be integrated?",
        answer:
          "Yes, we specialize in legacy modernization and can integrate your new custom software with the tools and APIs your business already uses.",
      },
    ],
  },
  {
    id: "admin-panels",
    number: "05",
    title: "Admin Panels",
    copy: "Clear, powerful dashboards for the quiet work behind a growing business.",
    features: [
      "Data Visualization",
      "User Management",
      "Role-based Access",
      "Real-time Metrics",
    ],
    icon: MonitorSmartphone,
  },
  {
    id: "crm-development",
    number: "06",
    title: "CRM Development",
    copy: "Lead, customer and sales systems that keep every important conversation moving.",
    features: [
      "Lead Tracking",
      "Automated Follow-ups",
      "Sales Pipeline",
      "Custom Reporting",
    ],
    icon: Network,
    seoTitle: "CRM Software Development Company in Jaipur | Code Pe Charcha",
    seoDescription:
      "Build custom CRM software for managing leads, customers, sales workflows and business operations with Code Pe Charcha.",
    h1: "CRM Software Development Company in Jaipur",
    seoOverview: (
      <>
        Lead, customer and sales systems that keep every important conversation
        moving. Being a specialized CRM software development company in Jaipur,
        we create tailor-made customer relationship tools for sales teams across
        India. Our custom CRMs feature automated follow-ups and custom
        reporting. Integrate your CRM seamlessly with our{" "}
        <Link
          href="/services/website-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Website Development
        </Link>{" "}
        services for automated lead capturing directly from your site.
      </>
    ),
    faqs: [
      {
        question: "Can CRM software be customized?",
        answer:
          "Yes, our CRM development services are fully customizable to map directly to your unique sales processes and customer management workflows.",
      },
      {
        question: "Can leads, customers and follow-ups be managed?",
        answer:
          "Absolutely. We build comprehensive dashboards that allow your sales team to track leads, automate follow-ups, and manage the entire customer lifecycle.",
      },
      {
        question: "Can a CRM integrate with existing APIs?",
        answer:
          "Yes, we can seamlessly integrate your custom CRM with third-party tools like email marketing platforms, payment gateways, and accounting software.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    number: "07",
    title: "UI/UX Design & Branding",
    copy: "Beautiful, intuitive designs that reflect your brand and provide seamless user experiences.",
    features: [
      "Wireframing",
      "High-fidelity Prototypes",
      "Brand Identity",
      "User Testing",
    ],
    icon: PenTool,
  },
  {
    id: "social-media-marketing",
    number: "08",
    title: "Social Media Marketing",
    copy: "Data-driven campaigns across platforms to build your audience and drive engagement.",
    features: [
      "Content Strategy",
      "Ad Management",
      "Community Growth",
      "Analytics Tracking",
    ],
    icon: HeartHandshake,
  },
  {
    id: "seo-growth",
    number: "09",
    title: "SEO & Digital Growth",
    copy: "Technical and content optimization to improve search rankings and organic traffic.",
    features: [
      "Keyword Research",
      "On-page Optimization",
      "Link Building",
      "Performance Audits",
    ],
    icon: Target,
  },
  {
    id: "video-editing",
    number: "10",
    title: "Video Editing & Production",
    copy: "High-quality video content to tell your story and capture attention in a noisy feed.",
    features: [
      "Motion Graphics",
      "Color Grading",
      "Audio Mixing",
      "Short-form Content",
    ],
    icon: Video,
  },
  {
    id: "api-integration",
    number: "11",
    title: "API Integration",
    copy: "Connect the services you already use into one dependable digital workflow.",
    features: [
      "Third-party APIs",
      "Custom Webhooks",
      "Data Syncing",
      "Secure Authentication",
    ],
    icon: Network,
  },
  {
    id: "maintenance-support",
    number: "12",
    title: "Maintenance & Support",
    copy: "Keeping your digital products secure, fast and running smoothly.",
    features: [
      "Uptime Monitoring",
      "Security Updates",
      "Bug Fixes",
      "Performance Tweaks",
    ],
    icon: Zap,
  },
];

export type ProjectData = {
  id: string;
  name: string;
  category: string;
  copy: string;
  url: string;
  type: "website" | "app" | "software";
  image?: string;
  images?: string[];
  challenge: string;
  scope: string[];
  seoTitle?: string;
  seoDescription?: string;
  h1?: string;
  seoOverview?: React.ReactNode;
  techStack?: string[];
};

export const projects: ProjectData[] = [
  {
    id: "crm",
    name: "CodePeCharcha CRM Solutions",
    category: "CRM & SaaS Platform",
    copy: "A full-featured, multi-tenant CRM & Office Management System for modern sales teams — with Kanban pipeline, employee management, attendance tracking, task assignment, reminders, and real-time notifications all under one dashboard.",
    url: "https://codedev-crm-company-frontend.vercel.app",
    image: "/crm.png",
    type: "software",
    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "React Router v6",
      "Axios",
      "React Beautiful DnD",
      "Lucide React",
      "React Toastify",
      "REST API",
    ],
    challenge:
      "The client needed a full-blown Office Management + CRM system that goes way beyond just storing leads. The challenge was to build a multi-tenant SaaS platform where each company registers separately, manages its own employees with role-based permissions, tracks leads through a Kanban-style drag-and-drop pipeline, assigns tasks, logs attendance, manages meetings, sets reminders, and gets real-time notifications — all in one blazing-fast Single Page Application (SPA) built with Vite + React. Every module had to be permission-gated so employees only see what their role allows. The system also required a SuperAdmin layer above individual company admins for platform-level control.",
    scope: [
      "Every lead in one place — no more scattered WhatsApp messages, Excel sheets, or sticky notes; the entire sales pipeline is visible to your whole team in one dashboard",
      "Visual Drag-and-Drop Pipeline — move leads from 'Pending' to 'Contacted' to 'Qualified' to 'Converted' by dragging them, so every salesperson always knows the exact status of every deal",
      "Never lose a lead again — every lead has a full history of follow-ups, conclusions, and notes so even if an employee leaves, the relationship data stays",
      "Assign leads to the right salesperson — managers can assign specific leads or accounts to specific team members and track their progress without micromanaging",
      "Know where your leads come from — track lead sources so you know which campaign, platform, or referral is actually bringing in business",
      "Full Contact Database — every client's name, email, phone, company, industry, and location stored and searchable, no more digging through email threads",
      "Task Assignment for Your Team — managers give tasks to employees with deadlines, and employees submit completion reports directly in the system",
      "Onboard New Employees Easily — employees register and get verified by the admin before getting access, no unauthorized logins possible",
      "Staff only see what they need to — the CEO sees everything, the salesperson sees only their leads, the accountant sees reports; keeps data secure without complexity",
      "Track Employee Attendance — know who checked in, who's working, and who's absent, all from the same CRM dashboard",
      "Schedule & Track Meetings — plan team meetings, client calls, and follow-ups in a calendar so nothing falls through the cracks",
      "Reminders That Actually Work — set alarms for important follow-ups so your team never forgets to call a lead back",
      "Quick Notes on the Dashboard — sticky notes for personal reminders so your salespeople can stay organized without switching apps",
      "Instant Notifications — the moment something is assigned, approved, or updated, the right person is notified immediately",
      "The whole company can use it — one platform for sales, HR, operations, and management; no need for 5 different tools with 5 different subscriptions",
      "Secure Login for Everyone — every user has a personal account with password protection; company data never gets exposed",
    ],
    seoTitle:
      "CodePeCharcha CRM - Full-Stack Office Management & CRM Platform | Code Pe Charcha",
    seoDescription:
      "CodePeCharcha CRM is a full-featured multi-tenant CRM and Office Management System with Kanban lead pipeline, employee management, attendance tracking, task assignment, and real-time notifications.",
    h1: "CodePeCharcha CRM Platform",
    seoOverview: (
      <>
        A full-featured multi-tenant CRM and Office Management System built for
        modern businesses. From a Kanban-style lead pipeline and contact
        management to employee attendance, task assignment, and real-time
        notifications — this platform handles everything under one dashboard.
        Built using our{" "}
        <Link
          href="/services/crm-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          CRM Development
        </Link>{" "}
        and{" "}
        <Link
          href="/services/custom-software"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Custom Software
        </Link>{" "}
        expertise, the platform features role-based access control, multi-tenant
        company registration, and a blazing-fast Vite + React SPA architecture.
      </>
    ),
  },
  {
    id: "welfare-ngo-trust",
    name: "Welfare NGO Trust",
    category: "NGO & Social Welfare",
    copy: "A modern, highly responsive website for a registered NGO focused on education, healthcare, and community empowerment.",
    url: "#projects",
    image: "/realhumantrust.png",
    type: "website",
    challenge: "The NGO needed a digital presence that accurately reflects their ground-level impact in Gujarat. The challenge was to organize their diverse initiatives (education, healthcare, empowerment) into a cohesive, accessible platform that drives donations and volunteer sign-ups while maintaining high performance and local SEO visibility.",
    scope: [
      "Multi-language Website — visitors can read everything in their own language, no one feels left out",
      "Complete Programme Showcase — explore all offerings: Education, Health & Nutrition, Social Welfare, and more",
      "Transparent Donation Portal — makes it easy for well-wishers anywhere in the world to contribute securely in seconds",
      "News & Notice Board — publish schedules, events, and updates without any technical help",
      "Meet Our People — showcases the managing committee, advisory board, and volunteers, reinforcing credibility and transparency",
      "Photo Gallery — beautifully showcases on-ground activities, events, and achievements to build trust",
      "Contact & Location Map — visitors can find and reach the organization easily without confusion",
      "FAQ Section — answers the most common queries to save administrative time",
      "SEO-Optimized — people searching for NGOs and social work in the region find this website first on Google",
    ],
    seoTitle: "Welfare NGO Trust - NGO Website | Code Pe Charcha",
    seoDescription:
      "A modern, highly responsive website built for an NGO focused on academics, healthcare, and community welfare.",
    h1: "Welfare NGO Trust",
    seoOverview: (
      <>
        A modern, highly responsive website for a registered NGO
        focused on education, healthcare, and community welfare. To achieve their
        goals, we utilized our{" "}
        <Link
          href="/services/website-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Website Development
        </Link>{" "}
        expertise to create an accessible platform that drives donations and
        volunteer sign-ups.
      </>
    ),
  },
  {
    id: "fitness-forma",
    name: "FORMA Fitness",
    category: "Fitness Platform",
    copy: "A high-energy, premium fitness studio website with animated hero sections, trainer profiles, training plan showcases, class schedules, and a membership booking system — designed to motivate users to take action the moment they land.",
    url: "https://fitness-forma.netlify.app",
    image: "/fitness-forma.png",
    type: "website",
    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Netlify",
    ],
    challenge:
      "FORMA Fitness needed a website that felt as intense and premium as the physical studio. Generic fitness websites look flat and uninspiring — the challenge was to create an immersive digital experience with bold typography, cinematic imagery, smooth scroll-driven animations, and a membership booking flow that converts visitors into paying members. Performance had to stay fast despite the heavy visual design, requiring careful optimization of assets and animations.",
    scope: [
      "First impression that stops the scroll — cinematic full-screen hero with bold visuals that instantly communicates premium quality and pushes visitors to join",
      "Training Programs Explained — every program (Strength, Cardio, HIIT, Yoga, Personal Training) has its own section with clear benefits so visitors know exactly what they're signing up for",
      "Meet the Trainers — coach profiles with photos, expertise, and credentials build trust before anyone steps foot in the studio",
      "Class Schedule Display — members can check timings without calling the studio, reducing front-desk load",
      "Membership Plans with Pricing — clear, side-by-side plan comparison so visitors can choose and convert without back-and-forth",
      "Membership Inquiry & Booking Flow — interested visitors can sign up or inquire directly from the website, generating leads 24/7",
      "Real Member Testimonials & Success Stories — social proof that convinces hesitant visitors to take the next step",
      "BMI & Fitness Goal Calculator — interactive widget that hooks visitors and personalizes their experience",
      "Studio Gallery — high-quality photos of equipment, space, and training sessions so visitors feel confident about the environment",
      "Works on Every Device — whether a visitor finds you on Instagram (mobile) or Google (desktop), the experience is flawless",
      "Found on Google — SEO-optimized pages so people searching for gyms or fitness studios in the area land directly on this site",
    ],
    seoTitle: "FORMA Fitness - Premium Fitness Platform | Code Pe Charcha",
    seoDescription:
      "A sleek, premium fitness studio platform designed for those who want to train smarter and move stronger, featuring integrated membership booking systems.",
    h1: "FORMA Fitness",
    seoOverview: (
      <>
        A sleek, premium fitness studio platform designed for those who want to
        train smarter and move stronger. Through our specialized{" "}
        <Link
          href="/services/website-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Website Development
        </Link>{" "}
        services, we built a fast-loading, visually striking platform that
        integrates smoothly with their membership booking systems.
      </>
    ),
  },
  {
    id: "omnibit",
    name: "OmniBit Tech (Concept)",
    category: "SaaS & Tech",
    copy: "A concept B2B SaaS platform with a feature-rich analytics dashboard, multi-workspace support, real-time data visualization, user management, and API-driven architecture — designed for tech companies managing complex data operations.",
    url: "https://omni-bite.vercel.app/",
    image: "/omnibit.png",
    type: "website",
    techStack: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Recharts / Chart.js",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "REST API",
      "Vercel",
    ],
    challenge:
      "OmniBit Tech is a concept B2B SaaS platform built to demonstrate the capability of building enterprise-grade dashboards. The biggest challenge was making a data-heavy interface feel clean and responsive — displaying real-time analytics, user activity logs, revenue charts, and system metrics simultaneously without overwhelming the user. This required meticulous component architecture, efficient state management with Redux Toolkit, and careful data normalization to avoid unnecessary re-renders on large datasets.",
    scope: [
      "All your business metrics in one place — revenue, user growth, churn, MRR, ARR — no more switching between 5 different tools to understand performance",
      "Visual Analytics Charts — instantly see trends in sales and usage with line, bar, and pie charts instead of reading raw data from spreadsheets",
      "Team & User Management — add or remove team members, control who can see what, no technical knowledge needed",
      "Multiple Organizations Supported — manage different clients or business units from a single login",
      "Full Activity Log — every action tracked so you always know who did what and when, no guesswork",
      "In-app Notifications — important alerts show up inside the dashboard so nothing gets missed",
      "Subscription & Billing Management — clients can see their plan, upgrade, or manage billing without raising a support ticket",
      "API Access for Developers — your technical team can connect any external tool using auto-generated API keys, managed right from the dashboard",
      "Search, Filter & Sort Any Data — find exactly what you need in large tables within seconds",
      "Dark Mode & Light Mode — comfortable to use day or night, reducing eye strain for heavy users",
      "Role-Based Access Control — your admin sees everything; regular members only see what's relevant to them, keeping data secure",
    ],
    seoTitle:
      "OmniBit Tech - SaaS Dashboard & B2B Tech Solution | Code Pe Charcha",
    seoDescription:
      "A custom B2B tech solution featuring a complex data dashboard, real-time analytics, and secure data handling for processing large datasets.",
    h1: "OmniBit Tech",
    seoOverview: (
      <>
        A custom B2B tech solution with a complex dashboard, real-time
        analytics, and secure data handling. We leveraged our{" "}
        <Link
          href="/services/custom-software"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Custom Software
        </Link>{" "}
        and{" "}
        <Link
          href="/services/admin-panels"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Admin Panels
        </Link>{" "}
        expertise to design a meticulously planned architecture for real-time
        data visualization.
      </>
    ),
  },
  {
    id: "karma-bhumi",
    name: "Karma Bhumi (Concept)",
    category: "Real Estate",
    copy: "A premium corporate real estate website for a large-scale infrastructure company — featuring project showcases, image galleries, animated statistics, lead generation forms, and a trust-building design that communicates scale and credibility.",
    url: "#projects",
    image: "/karmabhumi.png",
    type: "website",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP (GreenSock)",
      "EmailJS",
      "Google Maps API",
      "Vite",
    ],
    challenge:
      "Karma Bhumi's corporate identity needed to communicate trust, scale, and professionalism at first glance. Showcasing large-scale infrastructure projects required handling high-resolution imagery and video walkthroughs, which posed significant performance challenges. The solution required lazy loading strategies, WebP image format adoption, GSAP-powered scroll-driven animations, and a lead generation system that captures and qualifies inquiries in real-time without third-party form services.",
    scope: [
      "A website that looks as big as your projects — premium design with cinematic visuals that communicates credibility and scale the moment someone lands on it",
      "Completed Projects Portfolio — every finished project showcased with photos, location, area, and year so clients see proof of your track record",
      "Ongoing & Upcoming Projects — keeps existing clients informed and excites prospective buyers about what's coming next",
      "Numbers That Build Trust — animated counters showing projects completed, square feet delivered, years of experience, and cities covered — the kind of stats that close deals",
      "High-Quality Project Gallery — full-screen photo viewer so clients can explore every inch of your work before they even meet you",
      "Company Story & Leadership Team — builds personal trust by showing the people behind the projects",
      "Services Explained Clearly — Residential, Commercial, Infrastructure each presented separately so the right buyer finds exactly what they need",
      "Client Testimonials & Partner Logos — social proof from real clients is the most powerful sales tool on any website",
      "Lead Generation Contact Form — interested buyers submit inquiries 24/7, directly delivered to your inbox, no missed opportunities",
      "Map to Your Office & Project Sites — removes friction for clients trying to visit or locate your sites",
      "Smooth & Fast on Every Device — whether a buyer visits from a phone at a site visit or a desktop in the office, the experience is equally impressive",
      "Found on Google — SEO setup ensures people searching for real estate or construction companies in your city find you first",
    ],
    seoTitle: "Karma Bhumi - Corporate Real Estate Website | Code Pe Charcha",
    seoDescription:
      "A professional corporate website highlighting large-scale infrastructure projects with smooth animations, high-resolution imagery, and lead generation.",
    h1: "Karma Bhumi",
    seoOverview: (
      <>
        A professional corporate website highlighting large-scale infrastructure
        projects with smooth animations. Utilizing our{" "}
        <Link
          href="/services/website-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Website Development
        </Link>{" "}
        solutions, we delivered a premium, high-performance experience with lazy
        loading and optimized assets to convey trust and scale.
      </>
    ),
  },
  {
    id: "healthcare",
    name: "Medical Clinic (Demo)",
    category: "Healthcare",
    copy: "A patient-centric healthcare website demo for a medical clinic — featuring doctor profiles, appointment booking, department-wise services, health blogs, emergency contact, and a secure patient portal.",
    url: "#projects",
    image: "/healthcare.png",
    type: "website",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "MongoDB",
      "Express.js",
      "React Calendar",
    ],
    challenge:
      "Healthcare is one of the most trust-sensitive digital domains. Users arriving on a clinic website are often anxious — they need quick access to the right doctor, a clear understanding of services, and a frictionless path to booking an appointment without confusion. The challenge was to create an empathetic, accessible UI that guided users confidently through the patient journey while ensuring data privacy compliance, WCAG accessibility standards, and a clean, clinically reassuring aesthetic that instills confidence.",
    scope: [
      "Online Appointment Booking — patients can book with any doctor, any department, at any time without calling the clinic, reducing front-desk workload dramatically",
      "Find the Right Doctor Instantly — detailed doctor profiles with photo, qualification, specialty, and experience so patients know exactly who they're seeing before they arrive",
      "Department-wise Services — Cardiology, Orthopedics, Pediatrics, Dermatology, and more clearly presented so patients reach the right department without confusion",
      "Patient Login Portal — returning patients can view their appointment history and download past prescriptions without visiting the clinic",
      "Emergency Section with One-tap Contact — critical for healthcare; ambulance and emergency numbers prominently visible at all times",
      "Health Blog & Articles — builds authority, attracts Google traffic, and educates patients — turning your website into a trusted health resource",
      "Real Patient Testimonials — nothing converts a hesitant new patient faster than reading what others experienced",
      "Insurance & Payment Info — patients know what's covered before they arrive, reducing billing confusion and disputes",
      "FAQ Section — answers the 20 questions the front desk hears every single day, freeing up staff time",
      "Multiple Branch Locations on Map — patients find the nearest clinic easily without calling to ask for the address",
      "Secure & Private — patient data and form submissions are encrypted so both the clinic and patients can trust the platform",
      "Found on Google Maps & Search — local SEO ensures that when someone nearby searches 'clinic near me' or 'doctor in [city]', this website appears at the top",
    ],
    seoTitle: "Medical Clinic - Healthcare Patient Portal | Code Pe Charcha",
    seoDescription:
      "A patient-centric healthcare platform enabling easy appointment booking, service browsing, and doctor profiles with strict data privacy.",
    h1: "Medical Clinic Demo",
    seoOverview: (
      <>
        A patient-centric healthcare platform enabling easy appointment booking,
        service browsing, and doctor profiles. Built using our{" "}
        <Link
          href="/services/website-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Website Development
        </Link>{" "}
        methodology, we prioritized accessibility and trust. For advanced
        patient workflows, it can be extended with our{" "}
        <Link
          href="/services/custom-software"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Custom Software
        </Link>{" "}
        solutions.
      </>
    ),
  },
  {
    id: "school",
    name: "Global School (Demo)",
    category: "Education",
    copy: "A full-featured school website portal catering to prospective parents, enrolled students, and faculty — with announcements, curriculum pages, admissions, events, teacher profiles, online fee payment, and a secure parent-student dashboard.",
    url: "#projects",
    image: "/school.png",
    type: "website",
    techStack: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "NextAuth.js",
      "Razorpay (Fee Payment)",
      "Cloudinary (Media)",
    ],
    challenge:
      "A school website must serve three very different audiences simultaneously — prospective parents researching admissions, currently enrolled students checking results and schedules, and faculty managing content. Organizing this volume of information without creating confusion required a deeply thought-out information architecture. Additionally, the platform needed a secure role-based login system where parents could access their child's performance reports, fee receipts, and messages, while maintaining a public-facing site that projects academic excellence and trust.",
    scope: [
      "A website that converts prospective parents into admissions — everything a parent needs to make a decision (curriculum, fees, faculty, infrastructure, reputation) is clearly presented",
      "Online Admission Application — parents apply directly from the website, eliminating paperwork and reducing admin effort for the school",
      "Fee Structure & Important Dates — all admission info publicly available so parents never have to call just to get basic information",
      "Faculty Profiles — parents see who will teach their child, their qualifications and subject expertise, which is a key trust factor in school selection",
      "Exam Schedules & Holiday Notices — school publishes updates once; every parent sees it instantly, no more missed circulars",
      "Students View Their Results Online — report cards available in the parent-student portal without waiting for physical copies, reducing parental anxiety",
      "Fee Payment Online — parents pay school fees from home with instant digital receipt, no queues, no cash handling",
      "Parent-Teacher Messaging — direct communication channel so parents stay informed about their child without needing to physically visit the school",
      "School Events Gallery — photos from sports day, cultural events, and science fairs show school life at its best, attracting new admissions",
      "Virtual Infrastructure Tour — prospective parents see classrooms, labs, library, and sports facilities online before visiting in person",
      "Admin Updates Without a Developer — school staff can change notices, upload gallery photos, and update curriculum entirely on their own",
      "Found on Google — families searching for schools in your area find this website in search results, bringing in new admissions organically",
    ],
    seoTitle: "Global School - Education Portal Website | Code Pe Charcha",
    seoDescription:
      "A comprehensive school portal for students and parents featuring announcements, curriculum details, and secure role-based access.",
    h1: "Global School Demo",
    seoOverview: (
      <>
        A comprehensive school portal for students and parents featuring
        announcements, curriculum details, and contact forms. With our{" "}
        <Link
          href="/services/website-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Website Development
        </Link>{" "}
        and{" "}
        <Link
          href="/services/admin-panels"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Admin Panels
        </Link>{" "}
        capabilities, we implemented secure role-based access to intuitively
        organize information for distinct audiences.
      </>
    ),
  },
  {
    id: "dincharya-attendance-app",
    name: "DinCharya",
    category: "HR & Attendance App",
    copy: "A complete HR & Attendance management mobile app — employees can mark attendance via GPS geofencing, apply for leaves, view payslips, track shift schedules, and submit daily work reports, while managers get a real-time dashboard for approvals and oversight.",
    url: "#projects",
    type: "app",
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Expo Location API",
      "Expo Local Authentication (Biometric)",
      "Firebase Cloud Messaging (Push Notifications)",
      "AsyncStorage (Offline)",
    ],
    image: "/apps/DinCharya Attendance App/nusmjk7mzxz6yg06cndt.png",
    images: [
      "/apps/DinCharya Attendance App/mfsfktabmy69ailjxhs4.png",
      "/apps/DinCharya Attendance App/nusmjk7mzxz6yg06cndt.png",
      "/apps/DinCharya Attendance App/w8j8xvuggg3ayttevppm.png",
      "/apps/DinCharya Attendance App/ylkxiszdgg4coidrf88r.png",
      "/apps/DinCharya Attendance App/znhxmeqrdqqmwmdkrvaa.png",
    ],
    challenge:
      "Manual attendance registers are prone to proxy marking, errors, and delays. DinCharya needed to solve this for field-based and office employees alike — it required GPS geofencing so employees can only mark attendance within the office perimeter, biometric fingerprint/face unlock for secure verification, and an offline-first architecture that queues attendance data locally and syncs to the server once connectivity is restored. The app also had to handle shift-based scheduling, multiple leave types, payroll data visibility, and manager approval workflows in one unified mobile experience.",
    scope: [
      "Zero proxy attendance — employees can only mark attendance when physically present at the office location, so buddy-punching and fake check-ins become impossible",
      "Fingerprint & Face ID Login — employees mark attendance in seconds using their phone's biometric sensor, no PINs or passwords to forget",
      "Works without internet — if an employee is in a weak network area, attendance is saved on the phone and automatically synced the moment connectivity returns",
      "Daily Work Reports — every employee logs what they worked on each day, giving managers complete visibility without micromanaging",
      "Leave Applications from Phone — employees apply for casual, sick, or earned leave with a reason directly from the app, no forms or emails needed",
      "Manager Approves in One Tap — managers review, approve, or reject leave requests instantly from their phone with a comment",
      "Shift Management — admin assigns morning, evening, or night shifts and employees are notified immediately",
      "Full Attendance History — every employee sees their own monthly record: present, absent, late, half-day, so there are no salary disputes",
      "Payslip on Phone — employees view their monthly salary breakdown anytime, reducing payroll-related queries to HR",
      "Holiday Calendar — the entire team sees official holidays in one place, no confusion about which day is off",
      "Instant Notifications — employees get alerted when leave is approved, shift changes, or any action needs their attention",
      "Admin Control Panel — HR or admin can add employees, define office boundaries, view team reports, and manage everything centrally",
      "Works on Android & iOS — no separate app for different phones, one app for the entire team",
    ],
    seoTitle: "DinCharya - HR & Attendance Mobile App | Code Pe Charcha",
    seoDescription:
      "A robust employee attendance and leave management mobile app with precise geolocation tracking and biometric authentication support.",
    h1: "DinCharya Attendance App",
    seoOverview: (
      <>
        A robust employee attendance and leave management mobile app with
        location tracking and biometric support. Through our{" "}
        <Link
          href="/services/mobile-app-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Mobile App Development
        </Link>{" "}
        services, we engineered an offline-first architecture ensuring secure
        authentication even in poor network coverage.
      </>
    ),
  },
  {
    id: "ejuuz-app",
    name: "Ejuuz App",
    category: "E-Commerce App",
    copy: "A feature-rich mobile e-commerce app with product browsing by category, advanced search & filters, wishlist, cart management, multiple payment options, real-time order tracking, and a seller/vendor management panel.",
    url: "#projects",
    type: "app",
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Razorpay / Stripe",
      "Firebase Cloud Messaging",
      "Cloudinary (Product Images)",
      "Socket.io (Real-time Order)",
    ],
    image: "/apps/Ejuuz App/ifzylhhv3ybadmrhonwn.png",
    images: [
      "/apps/Ejuuz App/cj77ms73uep8sitantq4.png",
      "/apps/Ejuuz App/cxssfc88wiacopeqptny.png",
      "/apps/Ejuuz App/gqfukoojmshrgf8jn499.png",
      "/apps/Ejuuz App/ifzylhhv3ybadmrhonwn.png",
      "/apps/Ejuuz App/o8l3qbtqipbwusfekhvp.png",
      "/apps/Ejuuz App/qnxpt8o84vtzig4i11x1.png",
      "/apps/Ejuuz App/sf1h1t7doyio373cwwsi.png",
      "/apps/Ejuuz App/u5opdkfeebcuc7xo97m7.png",
    ],
    challenge:
      "The e-commerce mobile space is fiercely competitive — users have zero patience for slow loading, confusing navigation, or a checkout process that feels unsafe. Ejuuz needed to deliver a seamless, Amazon-grade shopping experience on mobile with real-time inventory updates, lightning-fast image loading via CDN, advanced multi-parameter search filters (category + price range + rating + availability), and a checkout flow that supports UPI, cards, wallets, and Cash on Delivery. A vendor management panel also had to be built alongside the customer-facing app for sellers to manage their listings, orders, and payouts.",
    scope: [
      "Personalized Home Feed — every shopper sees deals, categories, and trending products tailored to their interest, increasing time spent and purchases made",
      "Browse by Category & Subcategory — customers find what they want in 2 taps without scrolling through irrelevant products",
      "Smart Search with Filters — narrow down by price range, brand, ratings, discount, and availability so shoppers find exactly what they want, faster",
      "Product Pages That Sell — multiple images, size & colour variants, customer reviews with photos, and related product suggestions all on one page to reduce drop-offs",
      "Wishlist — customers save products they love and come back to buy, keeping them engaged with your store",
      "Smooth Cart & Checkout — add to cart, apply coupon, choose address, pay — done in under a minute",
      "Every Payment Method Accepted — UPI, credit/debit card, net banking, wallets, and Cash on Delivery covered so no customer abandons checkout over payment",
      "Live Order Tracking — customers watch their order move from Placed → Confirmed → Packed → Shipped → Delivered in real time, reducing 'where is my order' calls",
      "Order History & Invoice Download — customers can re-order previous purchases or download invoices for returns and business expenses",
      "Returns & Refunds Made Easy — customers raise requests directly from the app without calling support, reducing complaint handling time",
      "Flash Sale Notifications — push alerts for new deals bring customers back to the app exactly when you need traffic",
      "Seller Panel — vendors list products, update inventory, view incoming orders, and track payouts all from their own dashboard",
      "Runs on Android & iOS — your entire customer base covered without needing separate apps",
    ],
    seoTitle: "Ejuuz App - E-Commerce Mobile App | Code Pe Charcha",
    seoDescription:
      "A complete shopping experience on mobile, featuring fast browsing, secure checkout, and real-time order tracking with complex search filters.",
    h1: "Ejuuz E-Commerce App",
    seoOverview: (
      <>
        A complete shopping experience on mobile, featuring fast browsing,
        secure checkout, and real-time order tracking. Utilizing our{" "}
        <Link
          href="/services/e-commerce-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          E-commerce Development
        </Link>{" "}
        and{" "}
        <Link
          href="/services/mobile-app-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Mobile App
        </Link>{" "}
        expertise, we implemented complex search filters and optimized images to
        ensure a lightning-fast user experience.
      </>
    ),
  },
  {
    id: "lms-app",
    name: "Learning Management",
    category: "EdTech App",
    copy: "A comprehensive mobile Learning Management System (LMS) where students enroll in courses, watch video lectures, attempt quizzes, submit assignments, attend live classes, track progress, and earn completion certificates — all from their phone.",
    url: "#projects",
    type: "app",
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Video.js / Expo AV",
      "Socket.io (Live Classes)",
      "Firebase Cloud Messaging",
      "Cloudinary (Video & Media)",
      "JWT Authentication",
    ],
    image: "/apps/LMS APP/uwlfkogjk3gusbd8cfhq.png",
    images: [
      "/apps/LMS APP/dlvesdmccudjxyebg0q1.png",
      "/apps/LMS APP/f6ejzy4yglhjoio3z8y0.png",
      "/apps/LMS APP/gh5qlu9rz1vs2jl5gw6a.png",
      "/apps/LMS APP/jxxo1xvohlamydsac3o9.png",
      "/apps/LMS APP/p0hpa0cd4wnjsc07qnru.png",
      "/apps/LMS APP/uwlfkogjk3gusbd8cfhq.png",
      "/apps/LMS APP/y1bcnqaugchq4nepxx9l.png",
    ],
    challenge:
      "EdTech mobile apps live and die by engagement — students drop off the moment a video buffers, a quiz crashes, or the interface feels boring. The LMS app had to deliver smooth adaptive video streaming across varying network conditions, handle hundreds of concurrent students during live classes without lag, run timed quizzes with auto-submission, and keep students motivated through gamified streaks, badges, and leaderboards. The backend architecture had to be horizontally scalable to absorb sudden traffic spikes during exam seasons.",
    scope: [
      "Browse Courses Easily — students find the right course by category, instructor rating, difficulty, or duration so they start learning without confusion",
      "Paid & Free Course Enrollment — students pay and get instant access, or join free courses without friction, all managed automatically",
      "Video Lectures That Never Buffer — lessons play smoothly even on slow internet, with speed control and the ability to resume exactly where the student left off",
      "Structured Learning Path — each course is divided into clear chapters and modules, so students always know where they are and what's next",
      "Attend Live Classes from Phone — students join real-time classes, ask questions via chat, and raise a virtual hand, just like a real classroom",
      "Timed Quizzes & Exams — assessments run with a countdown timer and auto-submit when time ends, no cheating, no delays",
      "Submit Assignments from Phone — students upload their answers as photos or PDFs, instructors review and return feedback digitally",
      "Know Exactly How Far You've Come — progress bars show completion per chapter so students stay motivated and feel a sense of achievement",
      "Leaderboard & Healthy Competition — top learners are ranked publicly, motivating students to engage more and study harder",
      "Certificates on Completion — a shareable, auto-generated certificate when a student finishes a course — great for their portfolio and your brand",
      "Gamification Keeps Students Hooked — daily streaks, XP points, and level-up milestones make learning feel like a game, drastically reducing dropout rates",
      "Ask & Answer Forum — students raise doubts, instructors respond, and others learn from the discussion, reducing 1:1 support load",
      "Download & Learn Offline — students in areas with poor connectivity can download lectures and watch them without internet",
      "Instructor Dashboard — tutors upload content, view how students are performing, and grade assignments all in one place",
      "Runs on Android & iOS — accessible to every student regardless of which phone they use",
    ],
    seoTitle:
      "Learning Management System - EdTech Mobile App | Code Pe Charcha",
    seoDescription:
      "A mobile learning platform for students to access courses, submit assignments, and track their progress with gamified UX and video streaming.",
    h1: "Learning Management App",
    seoOverview: (
      <>
        A mobile learning platform for students to access courses, submit
        assignments, and track their progress on the go. Built with a scalable
        architecture by our{" "}
        <Link
          href="/services/mobile-app-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Mobile App Development
        </Link>{" "}
        team, it effortlessly handles high concurrency during live classes while
        maintaining a gamified interface.
      </>
    ),
  },
  {
    id: "school-app",
    name: "School Connect",
    category: "Education App",
    copy: "A school communication and management mobile app connecting teachers, parents, and students — with real-time announcements, attendance tracking, homework assignments, report card delivery, fee payment reminders, and a parent-teacher messaging system.",
    url: "#projects",
    type: "app",
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Socket.io (Real-time Chat)",
      "Firebase Cloud Messaging",
      "Cloudinary (Document Storage)",
      "JWT Authentication",
    ],
    image: "/apps/school app/hbulwmipruo8rld73eiu.png",
    images: [
      "/apps/school app/cph84h4ozfonruyopffi.png",
      "/apps/school app/eilwnkrfbrz4qezld59a.png",
      "/apps/school app/hbulwmipruo8rld73eiu.png",
      "/apps/school app/mggtbrntipj7dgnlssw7.png",
      "/apps/school app/mqpxt8lwqnocvjn2zx0i.png",
      "/apps/school app/rbplfurjfv8bwmdmlvaf.png",
    ],
    challenge:
      "Parents of school-going children are constantly anxious about their child's attendance, homework, test scores, and school communications — yet most schools still rely on physical diaries and WhatsApp groups. School Connect needed to replace this chaos with a structured, role-based app where teachers post updates once and parents receive them instantly. The challenge was building a real-time messaging system that is reliable, fast, and simple enough for parents with low digital literacy to use without any training, while also enabling secure document delivery for report cards and fee receipts.",
    scope: [
      "Parents know what's happening in school without calling anyone — attendance, homework, test dates, and teacher messages all visible from their phone",
      "Instant Absence Alerts — the moment a teacher marks a student absent, the parent gets notified on their phone, no more finding out at dinner",
      "Homework Never Gets 'Lost' — teachers post assignments digitally, students submit photos or PDFs from their phone, no more 'I forgot my diary'",
      "Exam Results Delivered Directly — parents and students see subject-wise scores and download report cards the moment results are published, no waiting",
      "Direct Chat Between Parents & Teachers — resolve concerns quickly with private messages, no need to visit school for every small issue",
      "Teacher Sends One Message, Entire Class Receives It — broadcast notices, schedule changes, or reminders to all parents simultaneously in seconds",
      "Track Fee Dues from the App — parents see pending fees and due dates without calling the school office, reducing collection friction",
      "Weekly Timetable on Phone — students always know their class schedule without needing a physical timetable",
      "School Event Photos Shared Instantly — teachers upload sports day or event photos directly to the app so parents who couldn't attend still experience the day",
      "Manage Multiple Children in One App — parents with siblings in the same school switch between children's profiles in a single tap",
      "Teacher Panel Saves Hours Daily — mark attendance, post homework, upload results, and message parents, all from one screen without paperwork",
      "Available on Every Android & iOS Phone — the entire parent and teacher community can use it regardless of which phone they have",
    ],
    seoTitle:
      "School Connect - Education & Communication App | Code Pe Charcha",
    seoDescription:
      "A dedicated school app bridging communication between teachers, parents, and students with real-time updates and secure document sharing.",
    h1: "School Connect App",
    seoOverview: (
      <>
        A dedicated school app bridging communication between teachers, parents,
        and students with real-time updates. Designed by our{" "}
        <Link
          href="/services/mobile-app-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Mobile App
        </Link>{" "}
        specialists, the platform focuses on instant updates and secure document
        sharing, ensuring an intuitive interface for all users.
      </>
    ),
  },
  {
    id: "wavvy-salon-app",
    name: "Wavvy Salon",
    category: "Booking & Lifestyle App",
    copy: "A premium salon & beauty booking app where users discover top stylists nearby, browse services & pricing, view stylist portfolios, book time slots, pay online, collect loyalty points, and get automated reminders — all designed with a luxury aesthetic.",
    url: "#projects",
    type: "app",
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Razorpay (Payments)",
      "Firebase Cloud Messaging",
      "Google Maps API",
      "Cloudinary (Stylist Portfolio)",
      "Socket.io (Real-time Slot Updates)",
    ],
    image: "/apps/wavvy salon app/hsyrp64siw0ylvxljfn5.png",
    images: [
      "/apps/wavvy salon app/fniaoupxuxwggpzuksdh.png",
      "/apps/wavvy salon app/hsyrp64siw0ylvxljfn5.png",
      "/apps/wavvy salon app/j0foixa2zxznl8rgbbk1.png",
      "/apps/wavvy salon app/ljrblylcfdx9ffbi9xan.png",
      "/apps/wavvy salon app/nblzbx656weevx7m8gen.png",
      "/apps/wavvy salon app/t9beq6bph30vnuossp7y.png",
      "/apps/wavvy salon app/x2gzp9viwdkul71j0elp.png",
    ],
    challenge:
      "The beauty booking space is dominated by word-of-mouth and Instagram DMs — most salons have no structured appointment system, leading to double bookings, no-shows, and lost revenue. Wavvy Salon needed to solve this with a consumer app that makes booking as beautiful as the service itself. The challenge was building a real-time slot availability system (no double bookings via Socket.io), a visually rich stylist portfolio browser, an automated SMS/push reminder system that dramatically reduces no-shows, and a loyalty program that keeps customers coming back — all wrapped in a premium, Instagram-worthy UI.",
    scope: [
      "Find the Best Salon Nearby — customers open the app and see top-rated salons and stylists on a map near their location, no more asking friends for recommendations",
      "Every Service with Clear Pricing — customers browse haircut, color, facial, waxing, nails, and bridal packages with prices upfront, no awkward 'how much?' conversations",
      "See the Stylist's Work Before Booking — each stylist has a portfolio gallery of their actual work so customers choose with confidence instead of guessing",
      "Book in Seconds, No Double Bookings — real-time calendar shows live availability and the moment a slot is booked it disappears for everyone else, eliminating scheduling conflicts",
      "Book Multiple Services at Once — clients can combine a haircut, facial, and manicure into one appointment, maximising revenue per visit",
      "Pay Online & Get Instant Confirmation — UPI, card, or wallet payment with a digital booking receipt, no cash juggling or 'did my booking go through?' anxiety",
      "Automated Reminders Kill No-Shows — customers get a reminder 24 hours and 1 hour before their appointment, dramatically reducing the missed appointments that cost salons revenue",
      "Rebook with One Tap — customers see their appointment history and rebook their favourite service with the same stylist in one tap, building repeat business",
      "Loyalty Points on Every Visit — customers earn points per booking and redeem for discounts, giving them a reason to always come back to your salon over a competitor",
      "Referral Program Grows Your Customer Base — customers share their referral code with friends, both get credits, your salon gets new clients for free",
      "Post-visit Ratings Build Your Reputation — after every appointment, customers rate the stylist and service, building a review system that attracts new clients",
      "Festival Offers & First-time Discounts — showcase special deals at the right time to drive bookings during peak seasons",
      "Salon Owner Dashboard — track daily bookings, revenue, stylist performance, and customer data all in one screen without juggling a register and WhatsApp",
      "Runs on Android & iOS — every customer can use it regardless of their phone",
    ],
    seoTitle: "Wavvy Salon - Booking & Lifestyle Mobile App | Code Pe Charcha",
    seoDescription:
      "A premium salon booking app enabling users to discover stylists, book appointments, and explore beauty services with a robust calendar system.",
    h1: "Wavvy Salon App",
    seoOverview: (
      <>
        A premium salon booking app enabling users to discover stylists, book
        appointments, and explore beauty services. Utilizing our{" "}
        <Link
          href="/services/mobile-app-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Mobile App Development
        </Link>{" "}
        expertise, we delivered a highly visual interface and a robust calendar
        scheduling system to reduce no-shows.
      </>
    ),
  },
  {
    id: "clinic-diagnostic-center",
    name: "AarogyaCare — Clinic & Diagnostic Centre Management System",
    category: "Healthcare & Diagnostic ERP",
    copy: "An end-to-end clinical operations and diagnostic laboratory ERP featuring live patient token queues, digital EMR consultations, barcoded specimen tracking, pathologist verification workflows, and integrated GST billing.",
    url: "#projects",
    image: "/clinic-erp.jpg",
    type: "software",
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Lucide React",
      "Motion",
      "Express.js",
      "Node.js",
      "REST APIs",
    ],
    challenge:
      "Multi-specialty outpatient clinics and diagnostic centers frequently suffer from fragmented systems — receptionists struggle with paper tokens, doctors lack quick access to historical vitals and diagnostic reports, and pathology labs manually transfer test parameters into paper formats. AarogyaCare solved this by unifying OPD front desk registration, real-time consultation workspaces with digital Rx templates, barcode-tracked diagnostic worklists with critical panic-range alarms, two-tier pathologist review verification, and day-end multi-tender cash settlement in one synchronized, role-permissioned platform.",
    scope: [
      "OPD Live Token & Queue Management — Digital waiting lounge displays and receptionist token counters eliminate patient overcrowding and calculate real-time wait times",
      "Patient 360° Electronic Medical Records (EMR) — Centralized lifetime patient profile logging vitals, allergies, past diagnoses, chronic conditions, and previous visits",
      "Doctor Clinical Consultation Workspace — Rapid electronic prescription (e-Rx) builder with ICD-10 diagnosis search, dosage calculators, and instant lab test ordering",
      "Diagnostic Pathology & Lab Orders — Automated test ordering linked to patient files with automated specimen collection labels and barcoded tube tracking",
      "Technician Worklist & Machine Interfacing — Direct test result parameter entry with automated reference range checks and highlighted abnormal/critical flags",
      "Pathologist Review & Two-Step Verification — Authorized digital report signing with automated branded PDF report generation and QR verification",
      "Consolidated Clinical & Diagnostic Billing — Single invoice covering OPD doctor consultation fees, diagnostic investigations, and consumables with partial payment logging",
      "Reagents & Clinic Inventory Control — Real-time tracking of test kits, reagents, and clinical consumables with expiry alerts and automated reorder triggers",
      "Multi-Role Permission Security — Strict access boundaries ensuring receptionists, lab technicians, physicians, and billing cashiers only access authorized modules",
      "Day-End Cash Register & Financial Audit — Reconciles cash, UPI, card, and insurance payments against patient invoices with discrepancy prevention",
    ],
    seoTitle:
      "Clinic & Diagnostic Centre Management Software | Healthcare ERP | Code Pe Charcha",
    seoDescription:
      "Enterprise-grade Clinic and Diagnostic Centre Management System by Code Pe Charcha. Featuring OPD queues, EMR consultations, lab test worklists, pathologist review, and billing.",
    h1: "AarogyaCare — Clinic & Diagnostic Centre ERP",
    seoOverview: (
      <>
        A comprehensive healthcare operations platform for modern clinics and
        diagnostic centers. AarogyaCare eliminates operational friction across
        OPD reception, clinical consultations, pathology sample worklists, and
        revenue audits. Powered by our{" "}
        <Link
          href="/services/custom-software"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Custom Software Development
        </Link>{" "}
        and{" "}
        <Link
          href="/services/admin-panels"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Admin Panels &amp; Dashboards
        </Link>{" "}
        expertise, it delivers reliable role-based workflows for doctors,
        pathologists, technicians, and cashiers.
      </>
    ),
  },
  {
    id: "construction-contractor-management",
    name: "NirmanFlow — Construction & Contractor Management Software",
    category: "Construction & Real Estate ERP",
    copy: "A dedicated civil construction and contractor ERP platform managing multi-site project schedules, Bill of Quantities (BOQ), Daily Progress Reports (DPR), Measurement Books (MB), subcontractor RA billing, and site material indents.",
    url: "#projects",
    image: "/construction-erp.jpg",
    type: "software",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
      "Motion",
      "date-fns",
    ],
    challenge:
      "Civil contracting and infrastructure firms routinely face cost overruns, delayed material deliveries, ghost labor attendance, and chaotic subcontractor billing across scattered project sites. NirmanFlow was engineered to bridge the gap between corporate headquarters and on-site field engineers. It automates Bill of Quantities (BOQ) tracking, enables digitized daily site diaries and Measurement Books (MB), standardizes material indents and Goods Receipt Notes (GRN), and provides automated Running Account (RA) billing calculations with retention and statutory tax deductions.",
    scope: [
      "Multi-Site Project Command Center — Real-time tracking of project completion percentages, milestone timelines, financial burn rates, and variance alerts",
      "BOQ & Estimation Analysis — Import structured Bill of Quantities, set item-level rate analyses, and track budgeted vs. actual quantities consumed",
      "Digital Daily Progress Reports (DPR) — Site supervisors submit weather conditions, machinery hours, labor gang muster rolls, and photo evidence from the site",
      "Civil Measurement Book (MB) Recording — Standardized chainage and dimensional quantity measurements with joint verification audit trails",
      "Subcontractor & Client RA Billing — Automated Running Account bill generation with automated deductions for retention money, TDS, GST, and advances",
      "Site Material Indents & Store Requisition — Field engineers raise indent requests against approved budgets, preventing unauthorized site purchases",
      "Store Inventory & GRN Validation — Goods Receipt Notes verify incoming steel, cement, and aggregate quantities before updating physical inventory",
      "Labor Master & Muster Roll Attendance — Daily biometric and contractor gang attendance tracking with daily wage and overtime calculations",
      "Heavy Equipment & Fuel Consumption Logs — Monitors JCBs, cranes, and concrete mixers run-hours alongside diesel fuel consumption efficiency",
      "Safety Audits & Quality Cube Test Registers — Quality assurance logging for concrete compressive strength tests, site hazard reports, and incident registers",
    ],
    seoTitle:
      "Construction & Contractor Management Software | Civil ERP | Code Pe Charcha",
    seoDescription:
      "Comprehensive Construction and Contractor Management ERP by Code Pe Charcha. Streamlining BOQ, DPR, site measurement books, labor muster, and subcontractor RA billing.",
    h1: "NirmanFlow — Construction & Contractor Management ERP",
    seoOverview: (
      <>
        A high-performance construction and contractor operations ERP engineered
        for infrastructure builders and civil contractors. Built leveraging our{" "}
        <Link
          href="/services/custom-software"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Custom Software
        </Link>{" "}
        and{" "}
        <Link
          href="/services/crm-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          CRM &amp; ERP Solutions
        </Link>
        , NirmanFlow gives project owners instant control over field DPRs,
        measurement books, material indents, and running account (RA) billings.
      </>
    ),
  },
  {
    id: "fillkart-luxury-ecommerce",
    name: "Fillkart — Luxury E-Commerce Platform & Atelier Admin Console",
    category: "E-Commerce & Retail Management Platform",
    copy: "A luxury fashion and lifestyle digital flagship pairing a high-converting storefront with an Atelier Admin Console for omnichannel order fulfillment, catalog variant matrices, dynamic promotions, and revenue analytics.",
    url: "#projects",
    image: "/fillkart-ecommerce.jpg",
    type: "software",
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "Framer Motion",
      "Recharts",
      "Lucide React",
      "React Router v7",
    ],
    challenge:
      "High-end fashion brands require an aesthetic digital showcase that matches physical boutique exclusivity while needing a powerful back-office infrastructure to manage SKU variants, dynamic price books, and rapid order dispatch. Fillkart delivers an editorial shopping experience featuring fluid lookbooks, interactive size advisors, and seamless checkout, backed by an Atelier Admin back-office that gives merchants total command over inventory buffers, order statuses, customer cohorts, and automated shipping labels.",
    scope: [
      "Editorial Storefront Experience — Editorial typography, responsive zoom galleries, curated lookbooks, and high-fashion micro-interactions",
      "Faceted Search & Dynamic Catalog Filter — Instant filtering by size, silhouette, material, price range, and color with zero page reloads",
      "Atelier Back-Office Admin Console — Real-time merchant command center displaying sales velocity, order lifecycle stages, and inventory levels",
      "Order Processing & Fulfillment Hub — Manage orders from Confirmed to Packed, Dispatched, In-Transit, and Delivered with shipping tracking integration",
      "Complex SKU & Variant Matrix — Control product sizes, colors, fabric weights, barcodes, and inventory thresholds per warehouse",
      "Promotions & Dynamic Discount Engine — Create flash sale countdowns, tier-based promo codes, free shipping rules, and VIP customer discounts",
      "Multi-Currency & Regional Pricing — Automatic geolocation currency switching with live forex exchange rates and regional tax compliance",
      "Customer Accounts & Wishlist Vault — Persistent client shopping bags, cross-device wishlists, order receipts, and return request processing",
      "Conversion Rate Optimization (CRO) Checkout — Frictionless multi-step checkout with address autocompletion and Razorpay/Stripe card gateways",
      "Real-Time E-Commerce Analytics — Track Average Order Value (AOV), customer acquisition cohorts, gross merchandise value (GMV), and top products",
    ],
    seoTitle:
      "Luxury E-Commerce Platform & Atelier Admin Software | Code Pe Charcha",
    seoDescription:
      "Bespoke luxury e-commerce platform and back-office admin system by Code Pe Charcha. Featuring editorial storefront, live order processing, SKU inventory, and analytics.",
    h1: "Fillkart — Luxury E-Commerce & Retail ERP",
    seoOverview: (
      <>
        A bespoke luxury e-commerce flagship storefront paired with an Atelier
        Admin Operations Console. Harnessing our expertise in{" "}
        <Link
          href="/services/e-commerce-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          E-Commerce Development
        </Link>{" "}
        and{" "}
        <Link
          href="/services/custom-software"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Custom Software Architecture
        </Link>
        , Fillkart combines an editorial customer buying journey with enterprise
        SKU control, fulfillment tracking, and live gross revenue analytics.
      </>
    ),
  },
  {
    id: "hr-attendance-payroll-software",
    name: "KarmikHR — Enterprise HR, Attendance & Payroll Management Software",
    category: "HRMS & Enterprise Payroll Software",
    copy: "A unified Human Resource Management System (HRMS) built for fast-scaling companies — with biometric attendance sync, automated payroll runs, statutory compliance (PF, ESI, TDS), and Employee Self-Service (ESS).",
    url: "#projects",
    image: "/hr-payroll.jpg",
    type: "software",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
      "Motion",
      "date-fns",
    ],
    challenge:
      "Manual attendance spreadsheets, delayed salary payouts, and complex statutory deductions like Provident Fund (PF), Employee State Insurance (ESI), and Tax Deducted at Source (TDS) drain valuable HR bandwidth and trigger costly compliance errors. KarmikHR eliminates manual overhead with an intelligent, self-service HRMS suite that consolidates employee onboarding, shift schedules, geo-fenced punch clocks, automated one-click monthly payroll runs, digital payslip distribution, and full-and-final (FnF) exit settlements.",
    scope: [
      "HR Executive Command Center — Real-time headcount metrics, department breakdown, daily attendance percentages, and pending approval queues",
      "360° Employee Directory & Document Studio — Complete personnel dossiers, salary compensation structures, digital document storage, and printable ID cards",
      "Attendance Register & Punch Simulation — Flexible attendance capture with geo-fencing, biometric machine sync, and missed punch regularization",
      "Shift Rostering & Overtime Rules — Multi-shift scheduling, night allowance computations, rotating shift rosters, and holiday calendar management",
      "Leave Ledger & Approval Workflows — Configurable paid, casual, sick, and maternity leave quotas with real-time balance calculations and manager approvals",
      "One-Click Statutory Payroll Engine — Automated gross-to-net salary computation with Indian statutory formulas for PF, ESI, TDS, and Professional Tax",
      "Printable Digital Payslips — Automatically generated monthly PDF payslips detailing basic pay, HRA, special allowances, and statutory deductions",
      "Employee Self-Service (ESS) Portal — Dedicated employee interface to check in, download tax sheets, submit expense claims, and view team leaves",
      "Recruitment & Onboarding Pipeline — Kanban candidate tracking from application review to interview rounds, offer letters, and onboarding checklists",
      "Full & Final Settlement (FnF) Module — Structured exit process calculating notice period adjustments, leave encashment, gratuity, and clearance sign-offs",
    ],
    seoTitle:
      "HR Attendance & Payroll Management Software | Enterprise HRMS | Code Pe Charcha",
    seoDescription:
      "All-in-one HRMS, Attendance, and Payroll software by Code Pe Charcha. Features geo-fenced punch clocks, statutory PF/ESI/TDS payroll runs, and Employee Self-Service.",
    h1: "KarmikHR — Enterprise Attendance & Payroll Suite",
    seoOverview: (
      <>
        A modern, full-lifecycle Human Resource and Payroll automation suite.
        Developed through our{" "}
        <Link
          href="/services/custom-software"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Custom Software Solutions
        </Link>{" "}
        and{" "}
        <Link
          href="/services/admin-panels"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Enterprise Admin Panels
        </Link>
        , KarmikHR powers seamless attendance tracking, zero-error statutory
        payroll processing, and autonomous employee self-service portals.
      </>
    ),
  },
  {
    id: "manufacturing-production-management",
    name: "ForgeFlow — Manufacturing & Production Management ERP",
    category: "Manufacturing ERP & Production Control",
    copy: "A heavy-duty manufacturing execution and production ERP featuring multi-level Bills of Materials (BOM), Material Requirements Planning (MRP), shop-floor job card routing, WIP stage tracking, and machine maintenance.",
    url: "#projects",
    image: "/manufacturing-erp.jpg",
    type: "software",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
      "Motion",
      "date-fns",
    ],
    challenge:
      "Industrial manufacturing plants face constant hurdles with stock-outs of critical raw materials, untracked shop-floor bottlenecks, scrap inflation, and inaccurate unit manufacturing costs. ForgeFlow was developed to give plant managers and floor supervisors total end-to-end visibility. It automates multi-tier Bill of Materials (BOM) explosions, generates shop-floor job cards, tracks Work-In-Progress (WIP) across machine workstations, monitors quality rejection rates, and tracks Overall Equipment Effectiveness (OEE).",
    scope: [
      "Multi-Level Bill of Materials (BOM) — Configure finished product assemblies, sub-assemblies, raw material quantities, and scrap allowances with version control",
      "Production Planning & Master Scheduling (MPS) — Forecast production capacities, machine runtimes, and allocate work orders against customer sales demand",
      "Material Requirements Planning (MRP) — Automatically calculate raw material requirements to prevent line stoppages and over-purchasing",
      "Work Orders & Stage Routing — Issue production work orders with predefined routing steps: machining, fabrication, welding, coating, and assembly",
      "Shop Floor Job Cards & Operator Logging — Floor supervisors allocate tasks to machines and operators, logging output quantities, cycle times, and scrap",
      "Live Work-in-Progress (WIP) Tracking — Monitor parts flowing through assembly lines with real-time bottleneck identification",
      "In-Process & Final Quality Assurance — Defect classification, tolerance inspection, rejection logs, and quarantine holding workflows",
      "Raw Material & Finished Goods Inventory — Bin-level warehouse tracking with automated Goods Receipt Notes (GRN) and material issue vouchers",
      "Machine Maintenance & OEE Monitoring — Preventive maintenance scheduling, breakdown logging, machine downtime analysis, and equipment efficiency",
      "Batch Costing & Profit Margin Analysis — Computes true unit production cost by combining raw materials, direct labor, and machine hour electricity overheads",
    ],
    seoTitle:
      "Manufacturing & Production Management Software | Industrial ERP | Code Pe Charcha",
    seoDescription:
      "Industrial Manufacturing and Production Management ERP by Code Pe Charcha. Featuring multi-level BOM, MRP calculations, shop-floor job cards, and WIP tracking.",
    h1: "ForgeFlow — Manufacturing & Production ERP",
    seoOverview: (
      <>
        An industrial-grade manufacturing operations and production execution ERP
        tailored for factories and processing plants. Created with our{" "}
        <Link
          href="/services/custom-software"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Custom Software Engineering
        </Link>{" "}
        and{" "}
        <Link
          href="/services/admin-panels"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Admin Panels
        </Link>
        , ForgeFlow synchronizes multi-level BOMs, shop-floor job cards, WIP
        assemblies, and machine maintenance into a single plant command dashboard.
      </>
    ),
  },
  {
    id: "safaisarthi",
    name: "SafaiSarthi — Professional Cleaning Services Platform",
    category: "Home & Commercial Cleaning Services",
    copy: "A hyper-local cleaning services platform for Jaipur featuring instant rate calculation, BHK-based package customizers, interactive before/after transformation galleries, corporate AMC inquiries, and 1-click WhatsApp booking.",
    url: "https://safaisaarthi.com",
    image: "/safaisarthi.jpg",
    type: "website",
    techStack: [
      "Next.js 14",
      "React 18",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Supabase",
    ],
    challenge:
      "The residential and commercial cleaning industry in India is plagued by opaque pricing, unreliable local aggregators, and cumbersome booking forms that create friction. SafaiSarthi needed a spotless digital experience that instills immediate customer trust, displays crystal-clear transparent pricing for flats, villas, and commercial offices, validates service availability by Jaipur pincodes, and enables swift bookings via WhatsApp without requiring tedious customer sign-ups.",
    scope: [
      "Instant Interactive Rate Calculator — Transparent pricing estimates based on property type (1 BHK, 2 BHK, 3 BHK, Villas) and square footage",
      "Specialized Cleaning Service Catalog — Deep home cleaning, sofa and carpet shampooing, kitchen degreasing, bathroom descaling, and water tank sanitation",
      "Corporate & Commercial Facility AMC — Dedicated quotation portal for corporate offices, retail showrooms, hospitals, and educational campuses",
      "Interactive Before/After Transformations — Interactive visual slider comparisons showcasing real on-ground cleaning results across tiles, stone, and upholstery",
      "Localized Pincode & Neighborhood Checker — Validates service availability across Vaishali Nagar, Malviya Nagar, Mansarovar, Jagatpura, and Raja Park",
      "One-Click WhatsApp Booking Integration — Automatically pre-formats customer package selections, address details, and date into a direct WhatsApp chat",
      "Verified Trust & Eco-Chemical Badges — Highlights certified eco-friendly Taski chemicals, background-checked cleaning staff, and 100% satisfaction guarantee",
      "Customer Reviews & Rating Aggregator — Social proof module displaying verified Jaipur client reviews and ratings",
      "Sub-Second Mobile-First Performance — Optimized WebP image delivery, lazy loading, and Core Web Vitals compliance for instant mobile browsing",
      "Hyper-Local Jaipur SEO Architecture — Dominates local search results for house cleaning, sofa dry cleaning, and office sanitization services in Jaipur",
    ],
    seoTitle:
      "SafaiSarthi - Professional Cleaning Services in Jaipur | Code Pe Charcha",
    seoDescription:
      "Explore SafaiSarthi developed by Code Pe Charcha — Jaipur's premier home and corporate cleaning services platform with instant rate calculator and WhatsApp booking.",
    h1: "SafaiSarthi — Professional Cleaning Services Platform",
    seoOverview: (
      <>
        A high-converting local service web platform built for Jaipur&apos;s
        trusted on-demand cleaning provider. Leveraging our{" "}
        <Link
          href="/services/website-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Website Development
        </Link>{" "}
        and{" "}
        <Link
          href="/services/seo-growth"
          className="text-coral underline hover:text-ink transition-colors"
        >
          SEO &amp; Growth
        </Link>{" "}
        capabilities, the platform features instant rate calculators, interactive
        before/after visual comparisons, and direct WhatsApp booking synthesis.
      </>
    ),
  },
  {
    id: "stayora-hotel-operations-management",
    name: "Stayora — Hotel & Operations Management System (PMS)",
    category: "Hospitality & Property Management (PMS)",
    copy: "A cloud-native Property Management System (PMS) and hotel operations ERP featuring an interactive room status tape chart, front desk guest check-in/out, multi-room folio billing, housekeeping task boards, and restaurant F&B POS.",
    url: "#projects",
    image: "/stayora-hotel.jpg",
    type: "software",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
      "Motion",
      "date-fns",
    ],
    challenge:
      "Boutique hotels and luxury resorts struggle with disconnected software: separate tools for front desk room bookings, housekeeping status, restaurant food bills, and accounting ledged to billing leakages and frustrated guests. Stayora unifies the entire hospitality lifecycle into one intuitive interface: front desk agents manage arrivals with speed, housekeepers update room cleanliness in real time from mobile devices, and restaurant dining orders are charged straight to the guest's consolidated master folio.",
    scope: [
      "Interactive Room Grid & Visual Tape Chart — Color-coded room status calendar displaying clean, inspected, dirty, occupied, and maintenance states",
      "Front Desk Fast Check-in & Check-out — Guest registration, ID document upload, key allocation, room change handling, and early/late departure fees",
      "Multi-Room Reservations & Walk-in Engine — Manage direct walk-in reservations, corporate rate agreements, and travel agency block bookings",
      "Consolidated Guest 360° Master Folio — Merges room tariffs, restaurant dining, laundry charges, spa services, and minibar into a single tax invoice",
      "Real-Time Housekeeping Management — Mobile-ready task boards prioritizing checkout room turnarounds, linen change schedules, and supervisor inspections",
      "Restaurant & F&B POS Integration — Order punching, Kitchen Order Tickets (KOT), table management, and seamless 'Charge to Room' billing",
      "Hotel Store Purchasing & Inventory — Tracks F&B perishables, guest amenities, cleaning chemicals, and linens with low-stock warnings",
      "Preventive Facility Maintenance — Log guest room plumbing, HVAC, or electrical issues with SLA priority flags and technician assignment",
      "RevPAR & Occupancy Analytics — Daily insights into Average Daily Rate (ADR), Revenue Per Available Room (RevPAR), occupancy percentage, and booking channels",
      "Multi-Property Switcher & Role Security — Multi-branch hotel chain support with strict role permissions for receptionists, managers, and accountants",
    ],
    seoTitle:
      "Hotel Management System & Property Management ERP (PMS) | Code Pe Charcha",
    seoDescription:
      "Next-gen Hotel & Operations Management Software (PMS) by Code Pe Charcha. Featuring visual room tape chart, guest master folios, housekeeping, and F&B POS.",
    h1: "Stayora — Hotel & Operations Management ERP",
    seoOverview: (
      <>
        A modern, unified Hotel Property Management System (PMS) and hospitality
        operations software. Built using our{" "}
        <Link
          href="/services/custom-software"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Custom Software Development
        </Link>{" "}
        and{" "}
        <Link
          href="/services/admin-panels"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Admin Dashboard Architecture
        </Link>
        , Stayora powers live room grid calendars, front desk express
        check-in, housekeeping task tracking, and unified guest master folios.
      </>
    ),
  },
  {
    id: "wholesale-distribution-management",
    name: "VyavasthaKendra — Wholesale & Distribution ERP",
    category: "Wholesale ERP & Supply Chain Management",
    copy: "A high-volume B2B wholesale and FMCG distribution ERP with multi-warehouse inventory, credit-limit order processing, GST invoicing with E-Way bills, sales route beats, and customer ledger management.",
    url: "#projects",
    image: "/wholesale-erp.jpg",
    type: "software",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
      "Motion",
      "date-fns",
    ],
    challenge:
      "Wholesale distributors handle massive order volumes, multiple godowns, complex customer credit limits, and fluctuating purchase rates. When relying on fragmented billing systems, distributors suffer from uncollected receivables, inventory pilferage, and dispatch bottlenecks. VyavasthaKendra was designed specifically for wholesale supply chains: it manages customer credit boundaries, enables multi-godown stock transfers, tracks field sales beat visits, and automates GST-compliant invoice generation alongside live profitability reports.",
    scope: [
      "B2B Bulk Sales Order Processing — Order punching with custom customer price lists, tiered volume discounts, and automatic credit limit verification",
      "GST Invoicing & E-Way Bill Readiness — Fast tax-compliant invoicing supporting B2B GSTIN validation, thermal dispatch receipts, and credit notes",
      "Multi-Warehouse & Godown Inventory — Real-time visibility across central warehouses and local godowns with inter-godown transfer vouchers",
      "Procurement & Goods Receipt Notes (GRN) — Vendor purchase order management, landed cost computations, batch tracking, and expiry date management",
      "Customer Outstanding & Aging Receivables — 30/60/90 days payment aging analysis, automated payment reminders, and payment receipts entry",
      "Field Salesman Beat Route Management — Assign daily customer visit beats, track order bookings per route, and calculate salesman commissions",
      "Delivery Dispatch & Driver Run Sheets — Consolidates pending dispatches into vehicle load sheets, driver manifests, and delivery route tracking",
      "SKU-Level Profitability & Gross Margins — Analyze profit margins per brand, product category, and customer account to identify top revenue drivers",
      "Supplier Payables & Ledger Accounting — Complete vendor ledger reconciliation, purchase returns, and supplier payment scheduling",
      "Tamper-Proof Audit Log Trail — Enterprise security logging every price override, discount approval, and stock adjustment with user and timestamp tags",
    ],
    seoTitle:
      "Wholesale & Distribution ERP Management Software | Code Pe Charcha",
    seoDescription:
      "Comprehensive Wholesale & Distribution ERP by Code Pe Charcha. Streamlines B2B sales orders, multi-warehouse inventory, customer credit ledgers, and delivery routes.",
    h1: "VyavasthaKendra — Wholesale & Distribution ERP",
    seoOverview: (
      <>
        A mission-critical wholesale and FMCG supply chain ERP built to handle
        high-volume B2B distribution. Delivered using our{" "}
        <Link
          href="/services/custom-software"
          className="text-coral underline hover:text-ink transition-colors"
        >
          Custom Software Development
        </Link>{" "}
        and{" "}
        <Link
          href="/services/crm-development"
          className="text-coral underline hover:text-ink transition-colors"
        >
          CRM &amp; ERP Solutions
        </Link>
        , VyavasthaKendra empowers distributors with multi-godown inventory
        tracking, sales route beat controls, and automated aging receivables.
      </>
    ),
  },
];

export const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Tailwind CSS",
  "React.js",
  "React Native / Expo",
  "Node.js",
  "MongoDB",
  "Express.js",
  "PHP",
  "Next.js",
  "Redux",
  "Firebase",
  "Canva",
  "Figma",
  "Video Editing",
  "Social Media Marketing",
  "SEO & Growth",
  "Google Analytics",
];
