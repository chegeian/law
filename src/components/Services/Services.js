import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Services.css";

const servicesData = [
  {
    title: "Legal Consultation",
    description: "Get professional legal advice and guidance for your specific needs.",
    icon: "fas fa-gavel"
  },
  {
    title: "Contract Drafting",
    description: "Receive assistance in drafting and reviewing contracts to protect your interests.",
    icon: "fas fa-file-signature"
  },
  {
    title: "Litigation Support",
    description: "Benefit from our experienced litigators to represent you in court cases.",
    icon: "fas fa-balance-scale"
  },
  {
    title: "Legal Research",
    description: "Access comprehensive legal research services to support your case.",
    icon: "fas fa-search"
  },
  {
    title: "Intellectual Property",
    description: "Protect your intellectual property rights with our specialized legal services.",
    icon: "fas fa-certificate"
  },
  {
    title: "Estate Planning",
    description: "Ensure your assets are distributed according to your wishes with our estate planning services.",
    icon: "fas fa-landmark"
  },
  {
    title: "Family Law",
    description: "Get assistance in family law matters, including divorce, child custody, and adoption.",
    icon: "fas fa-users"
  },
  {
    title: "Corporate Law",
    description: "Navigate complex corporate legal matters with our expert guidance and representation.",
    icon: "fas fa-building"
  },
  {
    title: "Immigration Law",
    description: "Obtain legal assistance for immigration-related issues, visas, and citizenship applications.",
    icon: "fas fa-passport"
  }
];
const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

