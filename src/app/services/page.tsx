import { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Services | Website, App & Custom Software Development | Code Pe Charcha",
  description: "Explore Code Pe Charcha services including website development, mobile apps, e-commerce, CRM, ERP, TMS, NGO software, custom software and API development.",
  alternates: {
    canonical: "https://codepecharcha.in/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
