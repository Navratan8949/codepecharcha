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
    features: ["Responsive Design", "Performance Optimized", "SEO Friendly", "CMS Integration"],
    icon: Globe2,
    seoTitle: "Website Development Company in Jaipur | Code Pe Charcha",
    seoDescription: "Code Pe Charcha builds modern, responsive and SEO-friendly websites for businesses, startups and organizations in Jaipur and across India.",
    h1: "Website Development Company in Jaipur",
    seoOverview: (
      <>
        Fast, responsive websites that give your business a sharper digital front door. As a leading website development company in Jaipur, we specialize in creating custom web solutions for businesses and startups across India. Our team builds SEO-friendly websites optimized for performance. <Link href="/services/e-commerce-development" className="text-coral underline hover:text-ink transition-colors">Explore our E-commerce Development</Link> to see how we help online stores grow, or check out our work on <Link href="/projects/omnibit" className="text-coral underline hover:text-ink transition-colors">OmniBit</Link>.
      </>
    ),
    faqs: [
      { question: "How much does website development cost?", answer: "The cost depends on the complexity and requirements of the project. A simple business website costs less than a fully custom web application. We provide transparent pricing after our initial discovery call." },
      { question: "How long does website development take?", answer: "A standard business website typically takes 2 to 4 weeks. Larger custom websites with complex features can take a few months." },
      { question: "Can you build SEO-friendly websites?", answer: "Yes, all our websites are built with best technical SEO practices, ensuring fast load times, clean code, and proper structure for search engines." },
      { question: "Do you provide website maintenance?", answer: "Yes, we offer ongoing maintenance and support to keep your website secure, fast, and up-to-date." }
    ],
  },
  {
    id: "mobile-app-development",
    number: "02",
    title: "Mobile App Development",
    copy: "Useful Android and iOS experiences, built to feel native and stay maintainable.",
    features: ["iOS & Android native feel", "Cross-platform (React Native)", "App Store Deployment", "API Integration"],
    icon: Smartphone,
    seoTitle: "Mobile App Development Company in Jaipur | Code Pe Charcha",
    seoDescription: "Build modern Android and iOS mobile applications with Code Pe Charcha for startups, businesses and organizations across Jaipur and India.",
    h1: "Mobile App Development Company in Jaipur",
    seoOverview: (
      <>
        Useful Android and iOS experiences, built to feel native and stay maintainable. As a top mobile app development company in Jaipur, we design cross-platform solutions for businesses across India. From consumer apps to enterprise solutions, our mobile applications ensure high performance. See how we integrated complex features in our <Link href="/projects/dincharya-attendance-app" className="text-coral underline hover:text-ink transition-colors">DinCharya Attendance App</Link> or pair your app with our <Link href="/services/custom-software" className="text-coral underline hover:text-ink transition-colors">Custom Software Services</Link> for a complete ecosystem.
      </>
    ),
    faqs: [
      { question: "Can you build Android and iOS apps?", answer: "Yes, we develop cross-platform mobile apps using frameworks like React Native to ensure your app works seamlessly on both Android and iOS devices." },
      { question: "How long does app development take?", answer: "Most mobile applications take between 2 to 6 months to develop, depending on the complexity of the features and integrations required." },
      { question: "Can you integrate APIs and payment gateways?", answer: "Absolutely. We routinely integrate third-party APIs, payment gateways like Stripe or Razorpay, and custom backends." },
      { question: "Do you provide app maintenance?", answer: "Yes, we provide post-launch support, bug fixes, and performance tweaks to ensure your app stays updated with the latest OS versions." }
    ],
  },
  {
    id: "e-commerce-development",
    number: "03",
    title: "E-commerce Development",
    copy: "Online stores with product, order and payment flows your team can actually run.",
    features: ["Custom Storefronts", "Payment Gateways", "Inventory Management", "Secure Checkout"],
    icon: Layers3,
    seoTitle: "E-commerce Website Development Company in Jaipur | Code Pe Charcha",
    seoDescription: "Build scalable e-commerce websites with product catalogs, shopping carts, payments and custom business features with Code Pe Charcha.",
    h1: "E-commerce Website Development Company in Jaipur",
    seoOverview: (
      <>
        Online stores with product, order and payment flows your team can actually run. As an expert e-commerce website development company in Jaipur, we build scalable platforms for retailers across India. We integrate robust payment gateways and inventory management systems. Learn more about our retail capabilities by checking out the <Link href="/projects/ejuuz-app" className="text-coral underline hover:text-ink transition-colors">Ejuuz App</Link> or enhance your store's visibility with our <Link href="/services/seo-growth" className="text-coral underline hover:text-ink transition-colors">SEO & Digital Growth</Link> service.
      </>
    ),
    faqs: [
      { question: "Can you build an online store?", answer: "Yes, we specialize in building robust, scalable e-commerce platforms tailored to your business needs." },
      { question: "Can payment gateways be integrated?", answer: "We can integrate multiple secure payment gateways, allowing your customers to pay via Credit Cards, UPI, Net Banking, or Wallets seamlessly." },
      { question: "Can products and orders be managed through an admin panel?", answer: "Yes, we provide custom Admin Panels where your team can easily manage products, track orders, and view sales metrics." }
    ],
  },
  {
    id: "custom-software",
    number: "04",
    title: "Custom Software",
    copy: "Purpose-built tools around the way your people work, not the other way around.",
    features: ["Tailored Workflows", "Scalable Architecture", "Legacy Modernization", "Cloud Deployment"],
    icon: Settings2,
    seoTitle: "Custom Software Development Company in Jaipur | Code Pe Charcha",
    seoDescription: "Code Pe Charcha develops custom software solutions for businesses that need tailored workflows, dashboards, integrations and automation.",
    h1: "Custom Software Development Company in Jaipur",
    seoOverview: (
      <>
        Purpose-built tools around the way your people work, not the other way around. As a trusted custom software development company in Jaipur, we architect scalable solutions for organizations throughout India. From legacy modernization to cloud deployment, we automate operations seamlessly. We also build comprehensive <Link href="/services/admin-panels" className="text-coral underline hover:text-ink transition-colors">Admin Panels</Link> to manage your software and streamline business logic.
      </>
    ),
    faqs: [
      { question: "What is custom software development?", answer: "Custom software development involves building tailored digital solutions designed specifically for your organization's unique workflows, rather than relying on off-the-shelf software." },
      { question: "Can software be built for a specific business workflow?", answer: "Yes, we architect software that maps exactly to how your team works, automating repetitive tasks and streamlining operations." },
      { question: "Can existing systems and APIs be integrated?", answer: "Yes, we specialize in legacy modernization and can integrate your new custom software with the tools and APIs your business already uses." }
    ],
  },
  {
    id: "admin-panels",
    number: "05",
    title: "Admin Panels",
    copy: "Clear, powerful dashboards for the quiet work behind a growing business.",
    features: ["Data Visualization", "User Management", "Role-based Access", "Real-time Metrics"],
    icon: MonitorSmartphone,
  },
  {
    id: "crm-development",
    number: "06",
    title: "CRM Development",
    copy: "Lead, customer and sales systems that keep every important conversation moving.",
    features: ["Lead Tracking", "Automated Follow-ups", "Sales Pipeline", "Custom Reporting"],
    icon: Network,
    seoTitle: "CRM Software Development Company in Jaipur | Code Pe Charcha",
    seoDescription: "Build custom CRM software for managing leads, customers, sales workflows and business operations with Code Pe Charcha.",
    h1: "CRM Software Development Company in Jaipur",
    seoOverview: (
      <>
        Lead, customer and sales systems that keep every important conversation moving. Being a specialized CRM software development company in Jaipur, we create tailor-made customer relationship tools for sales teams across India. Our custom CRMs feature automated follow-ups and custom reporting. Integrate your CRM seamlessly with our <Link href="/services/website-development" className="text-coral underline hover:text-ink transition-colors">Website Development</Link> services for automated lead capturing directly from your site.
      </>
    ),
    faqs: [
      { question: "Can CRM software be customized?", answer: "Yes, our CRM development services are fully customizable to map directly to your unique sales processes and customer management workflows." },
      { question: "Can leads, customers and follow-ups be managed?", answer: "Absolutely. We build comprehensive dashboards that allow your sales team to track leads, automate follow-ups, and manage the entire customer lifecycle." },
      { question: "Can a CRM integrate with existing APIs?", answer: "Yes, we can seamlessly integrate your custom CRM with third-party tools like email marketing platforms, payment gateways, and accounting software." }
    ],
  },
  {
    id: "ui-ux-design",
    number: "07",
    title: "UI/UX Design & Branding",
    copy: "Beautiful, intuitive designs that reflect your brand and provide seamless user experiences.",
    features: ["Wireframing", "High-fidelity Prototypes", "Brand Identity", "User Testing"],
    icon: PenTool,
  },
  {
    id: "social-media-marketing",
    number: "08",
    title: "Social Media Marketing",
    copy: "Data-driven campaigns across platforms to build your audience and drive engagement.",
    features: ["Content Strategy", "Ad Management", "Community Growth", "Analytics Tracking"],
    icon: HeartHandshake,
  },
  {
    id: "seo-growth",
    number: "09",
    title: "SEO & Digital Growth",
    copy: "Technical and content optimization to improve search rankings and organic traffic.",
    features: ["Keyword Research", "On-page Optimization", "Link Building", "Performance Audits"],
    icon: Target,
  },
  {
    id: "video-editing",
    number: "10",
    title: "Video Editing & Production",
    copy: "High-quality video content to tell your story and capture attention in a noisy feed.",
    features: ["Motion Graphics", "Color Grading", "Audio Mixing", "Short-form Content"],
    icon: Video,
  },
  {
    id: "api-integration",
    number: "11",
    title: "API Integration",
    copy: "Connect the services you already use into one dependable digital workflow.",
    features: ["Third-party APIs", "Custom Webhooks", "Data Syncing", "Secure Authentication"],
    icon: Network,
  },
  {
    id: "maintenance-support",
    number: "12",
    title: "Maintenance & Support",
    copy: "Keeping your digital products secure, fast and running smoothly.",
    features: ["Uptime Monitoring", "Security Updates", "Bug Fixes", "Performance Tweaks"],
    icon: Zap,
  },
];

export type ProjectData = {
  id: string;
  name: string;
  category: string;
  copy: string;
  url: string;
  type: "website" | "app";
  image?: string;
  images?: string[];
  challenge: string;
  scope: string[];
  seoTitle?: string;
  seoDescription?: string;
  h1?: string;
  seoOverview?: React.ReactNode;
};

export const projects: ProjectData[] = [
  {
    id: "real-human-trust",
    name: "Real Human Trust",
    category: "NGO & Social Welfare",
    copy: "A modern, highly responsive website for a registered NGO focused on education, healthcare, and community empowerment.",
    url: "https://realhumantrust.org",
    image: "/realhumantrust.png",
    type: "website",
    challenge: "Real Human Trust needed a digital presence that accurately reflects their ground-level impact in Gujarat. The challenge was to organize their diverse initiatives (education, healthcare, empowerment) into a cohesive, accessible platform that drives donations and volunteer sign-ups while maintaining high performance and local SEO visibility.",
    scope: ["NGO Branding & Strategy","Responsive Web Development","Donation Integration","SEO & Analytics"],
    seoTitle: "Real Human Trust - NGO Website | Code Pe Charcha",
    seoDescription: "A modern, highly responsive website built for Real Human Trust, a registered NGO focused on education, healthcare, and community empowerment.",
    h1: "Real Human Trust",
    seoOverview: (
      <>
        A modern, highly responsive website for a registered NGO focused on education, healthcare, and community empowerment. To achieve their goals, we utilized our <Link href="/services/website-development" className="text-coral underline hover:text-ink transition-colors">Website Development</Link> expertise to create an accessible platform that drives donations and volunteer sign-ups.
      </>
    )
  },
  {
    id: "fitness-forma",
    name: "FORMA Fitness",
    category: "Fitness Platform",
    copy: "A sleek, premium fitness studio platform designed for those who want to train smarter and move stronger.",
    url: "https://fitness-forma.netlify.app",
    image: "/fitness-forma.png",
    type: "website",
    challenge: "FORMA Fitness required a high-energy, premium digital experience that matched their physical studio's vibe. The goal was to build a fast-loading, visually striking platform that motivates users to join, showcases training plans effectively, and seamlessly integrates with their membership booking systems.",
    scope: ["Premium UI/UX Design","Interactive Animations","Performance Optimization","Membership Portal Integration"],
    seoTitle: "FORMA Fitness - Premium Fitness Platform | Code Pe Charcha",
    seoDescription: "A sleek, premium fitness studio platform designed for those who want to train smarter and move stronger, featuring integrated membership booking systems.",
    h1: "FORMA Fitness",
    seoOverview: (
      <>
        A sleek, premium fitness studio platform designed for those who want to train smarter and move stronger. Through our specialized <Link href="/services/website-development" className="text-coral underline hover:text-ink transition-colors">Website Development</Link> services, we built a fast-loading, visually striking platform that integrates smoothly with their membership booking systems.
      </>
    )
  },
  {
    id: "omnibit",
    name: "OmniBit Tech (Concept)",
    category: "SaaS & Tech",
    copy: "A custom B2B tech solution with a complex dashboard, real-time analytics, and secure data handling.",
    url: "#projects",
    image: "/omnibit.png",
    type: "website",
    challenge: "As a B2B SaaS platform, OmniBit Tech needed a complex data dashboard that remained intuitive. The main hurdle was processing and visualizing large datasets in real-time without overwhelming the user, requiring a meticulously planned component architecture and state management strategy.",
    scope: ["SaaS Dashboard Design","Complex State Management","Data Visualization","API Integration"],
    seoTitle: "OmniBit Tech - SaaS Dashboard & B2B Tech Solution | Code Pe Charcha",
    seoDescription: "A custom B2B tech solution featuring a complex data dashboard, real-time analytics, and secure data handling for processing large datasets.",
    h1: "OmniBit Tech",
    seoOverview: (
      <>
        A custom B2B tech solution with a complex dashboard, real-time analytics, and secure data handling. We leveraged our <Link href="/services/custom-software" className="text-coral underline hover:text-ink transition-colors">Custom Software</Link> and <Link href="/services/admin-panels" className="text-coral underline hover:text-ink transition-colors">Admin Panels</Link> expertise to design a meticulously planned architecture for real-time data visualization.
      </>
    )
  },
  {
    id: "karma-bhumi",
    name: "Karma Bhumi (Concept)",
    category: "Real Estate",
    copy: "A professional corporate website highlighting large-scale infrastructure projects with smooth animations.",
    url: "#projects",
    image: "/karmabhumi.png",
    type: "website",
    challenge: "Karma Bhumi's corporate website needed to convey trust and scale. Showcasing massive infrastructure projects required high-resolution imagery and video, which posed a performance challenge. We focused on lazy loading, modern image formats, and smooth scroll animations to deliver a premium feel without sacrificing speed.",
    scope: ["Corporate Identity","Asset Optimization","Scroll-Driven Animations","Lead Generation Forms"],
    seoTitle: "Karma Bhumi - Corporate Real Estate Website | Code Pe Charcha",
    seoDescription: "A professional corporate website highlighting large-scale infrastructure projects with smooth animations, high-resolution imagery, and lead generation.",
    h1: "Karma Bhumi",
    seoOverview: (
      <>
        A professional corporate website highlighting large-scale infrastructure projects with smooth animations. Utilizing our <Link href="/services/website-development" className="text-coral underline hover:text-ink transition-colors">Website Development</Link> solutions, we delivered a premium, high-performance experience with lazy loading and optimized assets to convey trust and scale.
      </>
    )
  },
  {
    id: "healthcare",
    name: "Medical Clinic (Demo)",
    category: "Healthcare",
    copy: "A patient-centric healthcare platform enabling easy appointment booking, service browsing, and doctor profiles.",
    url: "#projects",
    image: "/healthcare.png",
    type: "website",
    challenge: "Healthcare platforms must prioritize accessibility, trust, and ease of use. The challenge was creating a frictionless patient journey from browsing services to booking appointments, ensuring strict data privacy and clear, empathetic communication throughout the interface.",
    scope: ["Accessible UI Design","Appointment Booking Flow","Patient Portal","Security & Compliance"],
    seoTitle: "Medical Clinic - Healthcare Patient Portal | Code Pe Charcha",
    seoDescription: "A patient-centric healthcare platform enabling easy appointment booking, service browsing, and doctor profiles with strict data privacy.",
    h1: "Medical Clinic Demo",
    seoOverview: (
      <>
        A patient-centric healthcare platform enabling easy appointment booking, service browsing, and doctor profiles. Built using our <Link href="/services/website-development" className="text-coral underline hover:text-ink transition-colors">Website Development</Link> methodology, we prioritized accessibility and trust. For advanced patient workflows, it can be extended with our <Link href="/services/custom-software" className="text-coral underline hover:text-ink transition-colors">Custom Software</Link> solutions.
      </>
    )
  },
  {
    id: "hotel",
    name: "Luxury Hotel (Demo)",
    category: "Hospitality",
    copy: "A premium hospitality website featuring high-quality image galleries, room booking capabilities, and elegant design.",
    url: "#projects",
    image: "/hotel.png",
    type: "website",
    challenge: "For the Luxury Hotel project, the digital experience had to mirror the physical luxury of the property. We focused on immersive imagery, elegant typography, and a seamless booking engine that maximizes conversion rates while providing a serene user experience.",
    scope: ["Immersive Visual Design","Booking Engine Integration","Responsive Layouts","Performance Tuning"],
    seoTitle: "Luxury Hotel - Premium Hospitality Website | Code Pe Charcha",
    seoDescription: "A premium hospitality website featuring high-quality image galleries, room booking capabilities, and an elegant booking engine integration.",
    h1: "Luxury Hotel Demo",
    seoOverview: (
      <>
        A premium hospitality website featuring high-quality image galleries, room booking capabilities, and elegant design. By leveraging our <Link href="/services/website-development" className="text-coral underline hover:text-ink transition-colors">Website Development</Link> expertise, we focused on immersive visual design and performance tuning to maximize conversion rates.
      </>
    )
  },
  {
    id: "school",
    name: "Global School (Demo)",
    category: "Education",
    copy: "A comprehensive school portal for students and parents featuring announcements, curriculum details, and contact forms.",
    url: "#projects",
    image: "/school.png",
    type: "website",
    challenge: "The Global School portal needed to serve multiple distinct audiences: prospective parents, current students, and faculty. Organizing this wealth of information intuitively while providing secure access to the student dashboard was the primary technical and UX challenge.",
    scope: ["Information Architecture","Role-based Access","CMS Integration","Parent Communication Hub"],
    seoTitle: "Global School - Education Portal Website | Code Pe Charcha",
    seoDescription: "A comprehensive school portal for students and parents featuring announcements, curriculum details, and secure role-based access.",
    h1: "Global School Demo",
    seoOverview: (
      <>
        A comprehensive school portal for students and parents featuring announcements, curriculum details, and contact forms. With our <Link href="/services/website-development" className="text-coral underline hover:text-ink transition-colors">Website Development</Link> and <Link href="/services/admin-panels" className="text-coral underline hover:text-ink transition-colors">Admin Panels</Link> capabilities, we implemented secure role-based access to intuitively organize information for distinct audiences.
      </>
    )
  },
  {
    id: "dincharya-attendance-app",
    name: "DinCharya",
    category: "HR & Attendance App",
    copy: "A robust employee attendance and leave management mobile app with location tracking and biometric support.",
    url: "#projects",
    type: "app",
    image: "/apps/DinCharya Attendance App/nusmjk7mzxz6yg06cndt.png",
    images: ["/apps/DinCharya Attendance App/mfsfktabmy69ailjxhs4.png","/apps/DinCharya Attendance App/nusmjk7mzxz6yg06cndt.png","/apps/DinCharya Attendance App/w8j8xvuggg3ayttevppm.png","/apps/DinCharya Attendance App/ylkxiszdgg4coidrf88r.png","/apps/DinCharya Attendance App/znhxmeqrdqqmwmdkrvaa.png"],
    challenge: "Managing employee attendance securely and efficiently was the core requirement for DinCharya. The mobile app required precise geolocation tracking, biometric authentication integration, and an offline-first architecture to ensure reliability even in areas with poor network coverage.",
    scope: ["Mobile App Development","Geolocation Services","Biometric Auth","Offline Sync"],
    seoTitle: "DinCharya - HR & Attendance Mobile App | Code Pe Charcha",
    seoDescription: "A robust employee attendance and leave management mobile app with precise geolocation tracking and biometric authentication support.",
    h1: "DinCharya Attendance App",
    seoOverview: (
      <>
        A robust employee attendance and leave management mobile app with location tracking and biometric support. Through our <Link href="/services/mobile-app-development" className="text-coral underline hover:text-ink transition-colors">Mobile App Development</Link> services, we engineered an offline-first architecture ensuring secure authentication even in poor network coverage.
      </>
    )
  },
  {
    id: "ejuuz-app",
    name: "Ejuuz App",
    category: "E-Commerce App",
    copy: "A complete shopping experience on mobile, featuring fast browsing, secure checkout, and real-time order tracking.",
    url: "#projects",
    type: "app",
    image: "/apps/Ejuuz App/ifzylhhv3ybadmrhonwn.png",
    images: ["/apps/Ejuuz App/cj77ms73uep8sitantq4.png","/apps/Ejuuz App/cxssfc88wiacopeqptny.png","/apps/Ejuuz App/gqfukoojmshrgf8jn499.png","/apps/Ejuuz App/ifzylhhv3ybadmrhonwn.png","/apps/Ejuuz App/o8l3qbtqipbwusfekhvp.png","/apps/Ejuuz App/qnxpt8o84vtzig4i11x1.png","/apps/Ejuuz App/sf1h1t7doyio373cwwsi.png","/apps/Ejuuz App/u5opdkfeebcuc7xo97m7.png"],
    challenge: "Ejuuz App needed to compete in a crowded e-commerce space by offering a lightning-fast shopping experience. The challenge was optimizing product images, implementing complex search filters, and ensuring a seamless, secure checkout flow on mobile devices.",
    scope: ["E-Commerce Mobile UX","Payment Gateway Integration","Search & Filtering","Push Notifications"],
    seoTitle: "Ejuuz App - E-Commerce Mobile App | Code Pe Charcha",
    seoDescription: "A complete shopping experience on mobile, featuring fast browsing, secure checkout, and real-time order tracking with complex search filters.",
    h1: "Ejuuz E-Commerce App",
    seoOverview: (
      <>
        A complete shopping experience on mobile, featuring fast browsing, secure checkout, and real-time order tracking. Utilizing our <Link href="/services/e-commerce-development" className="text-coral underline hover:text-ink transition-colors">E-commerce Development</Link> and <Link href="/services/mobile-app-development" className="text-coral underline hover:text-ink transition-colors">Mobile App</Link> expertise, we implemented complex search filters and optimized images to ensure a lightning-fast user experience.
      </>
    )
  },
  {
    id: "lms-app",
    name: "Learning Management",
    category: "EdTech App",
    copy: "A mobile learning platform for students to access courses, submit assignments, and track their progress on the go.",
    url: "#projects",
    type: "app",
    image: "/apps/LMS APP/uwlfkogjk3gusbd8cfhq.png",
    images: ["/apps/LMS APP/dlvesdmccudjxyebg0q1.png","/apps/LMS APP/f6ejzy4yglhjoio3z8y0.png","/apps/LMS APP/gh5qlu9rz1vs2jl5gw6a.png","/apps/LMS APP/jxxo1xvohlamydsac3o9.png","/apps/LMS APP/p0hpa0cd4wnjsc07qnru.png","/apps/LMS APP/uwlfkogjk3gusbd8cfhq.png","/apps/LMS APP/y1bcnqaugchq4nepxx9l.png"],
    challenge: "The EdTech mobile app had to deliver video content and interactive assessments flawlessly. Keeping students engaged required a gamified interface, while the backend needed to handle high concurrency during live classes and exam submissions.",
    scope: ["Video Streaming Integration","Gamified UX","Real-time Assessments","Scalable Backend Architecture"],
    seoTitle: "Learning Management System - EdTech Mobile App | Code Pe Charcha",
    seoDescription: "A mobile learning platform for students to access courses, submit assignments, and track their progress with gamified UX and video streaming.",
    h1: "Learning Management App",
    seoOverview: (
      <>
        A mobile learning platform for students to access courses, submit assignments, and track their progress on the go. Built with a scalable architecture by our <Link href="/services/mobile-app-development" className="text-coral underline hover:text-ink transition-colors">Mobile App Development</Link> team, it effortlessly handles high concurrency during live classes while maintaining a gamified interface.
      </>
    )
  },
  {
    id: "school-app",
    name: "School Connect",
    category: "Education App",
    copy: "A dedicated school app bridging communication between teachers, parents, and students with real-time updates.",
    url: "#projects",
    type: "app",
    image: "/apps/school app/hbulwmipruo8rld73eiu.png",
    images: ["/apps/school app/cph84h4ozfonruyopffi.png","/apps/school app/eilwnkrfbrz4qezld59a.png","/apps/school app/hbulwmipruo8rld73eiu.png","/apps/school app/mggtbrntipj7dgnlssw7.png","/apps/school app/mqpxt8lwqnocvjn2zx0i.png","/apps/school app/rbplfurjfv8bwmdmlvaf.png"],
    challenge: "Bridging the communication gap between teachers and parents required a real-time messaging system. The School Connect app focuses on instant updates, secure document sharing for report cards, and an intuitive interface that users of all tech literacy levels can navigate easily.",
    scope: ["Real-time Messaging","Secure Document Delivery","Cross-platform Mobile App","Push Notifications"],
    seoTitle: "School Connect - Education & Communication App | Code Pe Charcha",
    seoDescription: "A dedicated school app bridging communication between teachers, parents, and students with real-time updates and secure document sharing.",
    h1: "School Connect App",
    seoOverview: (
      <>
        A dedicated school app bridging communication between teachers, parents, and students with real-time updates. Designed by our <Link href="/services/mobile-app-development" className="text-coral underline hover:text-ink transition-colors">Mobile App</Link> specialists, the platform focuses on instant updates and secure document sharing, ensuring an intuitive interface for all users.
      </>
    )
  },
  {
    id: "wavvy-salon-app",
    name: "Wavvy Salon",
    category: "Booking & Lifestyle App",
    copy: "A premium salon booking app enabling users to discover stylists, book appointments, and explore beauty services.",
    url: "#projects",
    type: "app",
    image: "/apps/wavvy salon app/hsyrp64siw0ylvxljfn5.png",
    images: ["/apps/wavvy salon app/fniaoupxuxwggpzuksdh.png","/apps/wavvy salon app/hsyrp64siw0ylvxljfn5.png","/apps/wavvy salon app/j0foixa2zxznl8rgbbk1.png","/apps/wavvy salon app/ljrblylcfdx9ffbi9xan.png","/apps/wavvy salon app/nblzbx656weevx7m8gen.png","/apps/wavvy salon app/t9beq6bph30vnuossp7y.png","/apps/wavvy salon app/x2gzp9viwdkul71j0elp.png"],
    challenge: "Wavvy Salon aimed to modernize the beauty booking process. The app needed a highly visual interface to showcase stylist portfolios, a robust calendar system for real-time availability, and automated reminders to reduce no-shows.",
    scope: ["Calendar & Scheduling","Portfolio Galleries","Automated Reminders","Loyalty Program UI"],
    seoTitle: "Wavvy Salon - Booking & Lifestyle Mobile App | Code Pe Charcha",
    seoDescription: "A premium salon booking app enabling users to discover stylists, book appointments, and explore beauty services with a robust calendar system.",
    h1: "Wavvy Salon App",
    seoOverview: (
      <>
        A premium salon booking app enabling users to discover stylists, book appointments, and explore beauty services. Utilizing our <Link href="/services/mobile-app-development" className="text-coral underline hover:text-ink transition-colors">Mobile App Development</Link> expertise, we delivered a highly visual interface and a robust calendar scheduling system to reduce no-shows.
      </>
    )
  }
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
