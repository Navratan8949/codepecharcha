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

export type ServiceData = {
  id: string;
  number: string;
  title: string;
  copy: string;
  features: string[];
  icon: typeof Globe2;
};

export const services: ServiceData[] = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    copy: "Fast, responsive websites that give your business a sharper digital front door.",
    features: ["Responsive Design", "Performance Optimized", "SEO Friendly", "CMS Integration"],
    icon: Globe2,
  },
  {
    id: "mobile-app-development",
    number: "02",
    title: "Mobile App Development",
    copy: "Useful Android and iOS experiences, built to feel native and stay maintainable.",
    features: ["iOS & Android native feel", "Cross-platform (React Native)", "App Store Deployment", "API Integration"],
    icon: Smartphone,
  },
  {
    id: "e-commerce-development",
    number: "03",
    title: "E-commerce Development",
    copy: "Online stores with product, order and payment flows your team can actually run.",
    features: ["Custom Storefronts", "Payment Gateways", "Inventory Management", "Secure Checkout"],
    icon: Layers3,
  },
  {
    id: "custom-software",
    number: "04",
    title: "Custom Software",
    copy: "Purpose-built tools around the way your people work, not the other way around.",
    features: ["Tailored Workflows", "Scalable Architecture", "Legacy Modernization", "Cloud Deployment"],
    icon: Settings2,
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
    title: "SEO & Pages Growth",
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
    scope: ["NGO Branding & Strategy","Responsive Web Development","Donation Integration","SEO & Analytics"]
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
    scope: ["Premium UI/UX Design","Interactive Animations","Performance Optimization","Membership Portal Integration"]
  },
  {
    id: "omnibit",
    name: "OmniBit Tech",
    category: "SaaS & Tech",
    copy: "A custom B2B tech solution with a complex dashboard, real-time analytics, and secure data handling.",
    url: "#projects",
    image: "/omnibit.png",
    type: "website",
    challenge: "As a B2B SaaS platform, OmniBit Tech needed a complex data dashboard that remained intuitive. The main hurdle was processing and visualizing large datasets in real-time without overwhelming the user, requiring a meticulously planned component architecture and state management strategy.",
    scope: ["SaaS Dashboard Design","Complex State Management","Data Visualization","API Integration"]
  },
  {
    id: "karma-bhumi",
    name: "Karma Bhumi",
    category: "Real Estate",
    copy: "A professional corporate website highlighting large-scale infrastructure projects with smooth animations.",
    url: "#projects",
    image: "/karmabhumi.png",
    type: "website",
    challenge: "Karma Bhumi's corporate website needed to convey trust and scale. Showcasing massive infrastructure projects required high-resolution imagery and video, which posed a performance challenge. We focused on lazy loading, modern image formats, and smooth scroll animations to deliver a premium feel without sacrificing speed.",
    scope: ["Corporate Identity","Asset Optimization","Scroll-Driven Animations","Lead Generation Forms"]
  },
  {
    id: "healthcare",
    name: "Medical Clinic",
    category: "Healthcare",
    copy: "A patient-centric healthcare platform enabling easy appointment booking, service browsing, and doctor profiles.",
    url: "#projects",
    image: "/healthcare.png",
    type: "website",
    challenge: "Healthcare platforms must prioritize accessibility, trust, and ease of use. The challenge was creating a frictionless patient journey from browsing services to booking appointments, ensuring strict data privacy and clear, empathetic communication throughout the interface.",
    scope: ["Accessible UI Design","Appointment Booking Flow","Patient Portal","Security & Compliance"]
  },
  {
    id: "hotel",
    name: "Luxury Hotel",
    category: "Hospitality",
    copy: "A premium hospitality website featuring high-quality image galleries, room booking capabilities, and elegant design.",
    url: "#projects",
    image: "/hotel.png",
    type: "website",
    challenge: "For the Luxury Hotel project, the digital experience had to mirror the physical luxury of the property. We focused on immersive imagery, elegant typography, and a seamless booking engine that maximizes conversion rates while providing a serene user experience.",
    scope: ["Immersive Visual Design","Booking Engine Integration","Responsive Layouts","Performance Tuning"]
  },
  {
    id: "school",
    name: "Global School",
    category: "Education",
    copy: "A comprehensive school portal for students and parents featuring announcements, curriculum details, and contact forms.",
    url: "#projects",
    image: "/school.png",
    type: "website",
    challenge: "The Global School portal needed to serve multiple distinct audiences: prospective parents, current students, and faculty. Organizing this wealth of information intuitively while providing secure access to the student dashboard was the primary technical and UX challenge.",
    scope: ["Information Architecture","Role-based Access","CMS Integration","Parent Communication Hub"]
  }
,
  {
    id: "dincharya attendance app",
    name: "DinCharya",
    category: "HR & Attendance App",
    copy: "A robust employee attendance and leave management mobile app with location tracking and biometric support.",
    url: "#projects",
    type: "app",
    image: "/apps/DinCharya Attendance App/nusmjk7mzxz6yg06cndt.png",
    images: ["/apps/DinCharya Attendance App/mfsfktabmy69ailjxhs4.png","/apps/DinCharya Attendance App/nusmjk7mzxz6yg06cndt.png","/apps/DinCharya Attendance App/w8j8xvuggg3ayttevppm.png","/apps/DinCharya Attendance App/ylkxiszdgg4coidrf88r.png","/apps/DinCharya Attendance App/znhxmeqrdqqmwmdkrvaa.png"],
    challenge: "Managing employee attendance securely and efficiently was the core requirement for DinCharya. The mobile app required precise geolocation tracking, biometric authentication integration, and an offline-first architecture to ensure reliability even in areas with poor network coverage.",
    scope: ["Mobile App Development","Geolocation Services","Biometric Auth","Offline Sync"]
  },
  {
    id: "ejuuz app",
    name: "Ejuuz App",
    category: "E-Commerce App",
    copy: "A complete shopping experience on mobile, featuring fast browsing, secure checkout, and real-time order tracking.",
    url: "#projects",
    type: "app",
    image: "/apps/Ejuuz App/ifzylhhv3ybadmrhonwn.png",
    images: ["/apps/Ejuuz App/cj77ms73uep8sitantq4.png","/apps/Ejuuz App/cxssfc88wiacopeqptny.png","/apps/Ejuuz App/gqfukoojmshrgf8jn499.png","/apps/Ejuuz App/ifzylhhv3ybadmrhonwn.png","/apps/Ejuuz App/o8l3qbtqipbwusfekhvp.png","/apps/Ejuuz App/qnxpt8o84vtzig4i11x1.png","/apps/Ejuuz App/sf1h1t7doyio373cwwsi.png","/apps/Ejuuz App/u5opdkfeebcuc7xo97m7.png"],
    challenge: "Ejuuz App needed to compete in a crowded e-commerce space by offering a lightning-fast shopping experience. The challenge was optimizing product images, implementing complex search filters, and ensuring a seamless, secure checkout flow on mobile devices.",
    scope: ["E-Commerce Mobile UX","Payment Gateway Integration","Search & Filtering","Push Notifications"]
  },
  {
    id: "lms app",
    name: "Learning Management",
    category: "EdTech App",
    copy: "A mobile learning platform for students to access courses, submit assignments, and track their progress on the go.",
    url: "#projects",
    type: "app",
    image: "/apps/LMS APP/uwlfkogjk3gusbd8cfhq.png",
    images: ["/apps/LMS APP/dlvesdmccudjxyebg0q1.png","/apps/LMS APP/f6ejzy4yglhjoio3z8y0.png","/apps/LMS APP/gh5qlu9rz1vs2jl5gw6a.png","/apps/LMS APP/jxxo1xvohlamydsac3o9.png","/apps/LMS APP/p0hpa0cd4wnjsc07qnru.png","/apps/LMS APP/uwlfkogjk3gusbd8cfhq.png","/apps/LMS APP/y1bcnqaugchq4nepxx9l.png"],
    challenge: "The EdTech mobile app had to deliver video content and interactive assessments flawlessly. Keeping students engaged required a gamified interface, while the backend needed to handle high concurrency during live classes and exam submissions.",
    scope: ["Video Streaming Integration","Gamified UX","Real-time Assessments","Scalable Backend Architecture"]
  },
  {
    id: "school app",
    name: "School Connect",
    category: "Education App",
    copy: "A dedicated school app bridging communication between teachers, parents, and students with real-time updates.",
    url: "#projects",
    type: "app",
    image: "/apps/school app/hbulwmipruo8rld73eiu.png",
    images: ["/apps/school app/cph84h4ozfonruyopffi.png","/apps/school app/eilwnkrfbrz4qezld59a.png","/apps/school app/hbulwmipruo8rld73eiu.png","/apps/school app/mggtbrntipj7dgnlssw7.png","/apps/school app/mqpxt8lwqnocvjn2zx0i.png","/apps/school app/rbplfurjfv8bwmdmlvaf.png"],
    challenge: "Bridging the communication gap between teachers and parents required a real-time messaging system. The School Connect app focuses on instant updates, secure document sharing for report cards, and an intuitive interface that users of all tech literacy levels can navigate easily.",
    scope: ["Real-time Messaging","Secure Document Delivery","Cross-platform Mobile App","Push Notifications"]
  },
  {
    id: "wavvy salon app",
    name: "Wavvy Salon",
    category: "Booking & Lifestyle App",
    copy: "A premium salon booking app enabling users to discover stylists, book appointments, and explore beauty services.",
    url: "#projects",
    type: "app",
    image: "/apps/wavvy salon app/hsyrp64siw0ylvxljfn5.png",
    images: ["/apps/wavvy salon app/fniaoupxuxwggpzuksdh.png","/apps/wavvy salon app/hsyrp64siw0ylvxljfn5.png","/apps/wavvy salon app/j0foixa2zxznl8rgbbk1.png","/apps/wavvy salon app/ljrblylcfdx9ffbi9xan.png","/apps/wavvy salon app/nblzbx656weevx7m8gen.png","/apps/wavvy salon app/t9beq6bph30vnuossp7y.png","/apps/wavvy salon app/x2gzp9viwdkul71j0elp.png"],
    challenge: "Wavvy Salon aimed to modernize the beauty booking process. The app needed a highly visual interface to showcase stylist portfolios, a robust calendar system for real-time availability, and automated reminders to reduce no-shows.",
    scope: ["Calendar & Scheduling","Portfolio Galleries","Automated Reminders","Loyalty Program UI"]
  }
];

export const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Tailwind CSS",
  "React.js",
  "React Native CLI",
  "Expo",
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
