"use client";
import { useEffect } from "react";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: "120px", paddingBottom: "80px", color: "var(--ink)", maxWidth: "800px", margin: "0 auto", paddingLeft: "5%", paddingRight: "5%" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Terms of Service</h1>
      <div style={{ lineHeight: "1.8", fontSize: "1rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2>1. Agreement to Terms</h2>
        <p>By accessing our website and engaging our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access our website or engage our services. These Terms apply to all visitors, clients, and others who access or use the Service.</p>

        <h2>2. Services Provided</h2>
        <p><strong>Code Pe Charcha</strong> acts as a digital tech company providing services including, but not limited to:</p>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Custom Website and E-commerce Development</li>
          <li>Mobile Application Development (iOS & Android)</li>
          <li>Custom Software and Admin Dashboards</li>
          <li>Digital Marketing, SEO, and Branding</li>
        </ul>
        <p>All service scopes, deliverables, and timelines will be explicitly defined in a separate Statement of Work (SOW) or Project Proposal signed by both parties prior to the commencement of any project.</p>

        <h2>3. Payments, Deposits, and Refunds</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li><strong>Deposits:</strong> We require an upfront deposit (typically 30% to 50% depending on the project size) before any design or development work begins. This deposit secures your spot in our development queue.</li>
          <li><strong>Refunds:</strong> Due to the custom nature of our work, upfront deposits are strictly <strong>non-refundable</strong> once project research, design, or development has commenced.</li>
          <li><strong>Staged Payments:</strong> Remaining balances are typically divided into milestones. Final delivery of the source code, live deployment, or administrative access will only be granted once the final invoice is paid in full.</li>
        </ul>

        <h2>4. Intellectual Property Rights</h2>
        <p>Upon receipt of full and final payment, the client is granted full ownership and intellectual property rights to the final delivered product (e.g., website frontend, mobile app binary, custom software source code), unless otherwise specified in the Project Proposal. <strong>Code Pe Charcha</strong> retains the right to display the completed project in our portfolio, website, and marketing materials as a case study, unless a Non-Disclosure Agreement (NDA) restricts this.</p>

        <h2>5. Client Responsibilities</h2>
        <p>The successful delivery of any software or marketing project requires timely feedback. You agree to provide necessary assets (logos, text, API keys) and feedback within a reasonable timeframe. Delays on the client's end may result in corresponding delays to the project timeline and delivery dates.</p>

        <h2>6. Limitation of Liability</h2>
        <p>In no event shall <strong>Code Pe Charcha</strong>, nor its developers, partners, agents, or employees, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, loss of business, or other intangible losses, resulting from your use of the software we build, server downtimes, third-party API failures, or bugs discovered after the official handover and warranty period.</p>

        <h2>7. Contact Information</h2>
        <p>If you have any questions about these Terms of Service, please contact us at:</p>
        <p><strong>Email:</strong> <a href="mailto:codepecharchainfo@gmail.com" style={{ color: "var(--coral)", textDecoration: "underline" }}>codepecharchainfo@gmail.com</a></p>
      </div>
    </div>
  );
}
