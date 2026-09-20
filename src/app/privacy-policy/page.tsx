"use client";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: "120px", paddingBottom: "80px", color: "var(--ink)", maxWidth: "800px", margin: "0 auto", paddingLeft: "5%", paddingRight: "5%" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Privacy Policy</h1>
      <div style={{ lineHeight: "1.8", fontSize: "1rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>Welcome to <strong>Code Pe Charcha</strong>. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you use our website or engage our IT, software development, and digital marketing services.</p>

        <h2>2. Information We Collect</h2>
        <p>We collect information that you voluntarily provide to us when expressing an interest in obtaining information about our services or contracting us for a project. This includes:</p>
        <ul style={{ paddingLeft: "20px" }}>
          <li><strong>Personal Contact Details:</strong> Name, email address, phone number (including WhatsApp), and billing address.</li>
          <li><strong>Project Information:</strong> Briefs, ideas, business data, or assets you share with us to help us build your software or marketing campaign.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, operating system, and interactions with our website (collected via cookies and analytics).</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul style={{ paddingLeft: "20px" }}>
          <li>To provide, operate, and maintain our services (building websites, apps, and software).</li>
          <li>To communicate with you, including sending project updates, invoices, and answering inquiries.</li>
          <li>To improve, personalize, and expand our website and marketing strategies.</li>
          <li>To find and prevent fraud and ensure legal compliance.</li>
        </ul>

        <h2>4. Data Sharing and Third Parties</h2>
        <p>We <strong>do not</strong> sell, rent, or trade your personal information to third parties. We may share your data only in the following necessary situations:</p>
        <ul style={{ paddingLeft: "20px" }}>
          <li><strong>Service Providers:</strong> We may share data with trusted third-party vendors (e.g., hosting providers like AWS/Vercel, payment gateways like Razorpay/Stripe) strictly for the purpose of executing your project or processing payments.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information where legally required to do so in order to comply with applicable law, governmental requests, or a judicial proceeding.</li>
        </ul>

        <h2>5. Data Security & Intellectual Property</h2>
        <p>We implement industry-standard security measures to protect your personal data and project assets. For custom software development, we often sign Non-Disclosure Agreements (NDAs) to guarantee that your proprietary business ideas remain confidential.</p>

        <h2>6. Cookies and Tracking</h2>
        <p>Our website may use "cookies" to enhance user experience. Your web browser places cookies on its hard drive for record-keeping purposes. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions or concerns regarding this Privacy Policy, please contact us directly at:</p>
        <p><strong>Email:</strong> <a href="mailto:codepecharchainfo@gmail.com" style={{ color: "var(--coral)", textDecoration: "underline" }}>codepecharchainfo@gmail.com</a></p>
      </div>
    </div>
  );
}
