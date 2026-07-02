import React from 'react';

const PropertyManagement = ({ setPage }) => {
  const highlights = [
    { title: 'Market Analysis', desc: 'Comprehensive market analysis for pricing' },
    { title: 'Compliance', desc: 'Legal and regulatory compliance handling' },
    { title: 'Direct Access', desc: 'Direct-line communication for all owners' },
    { title: 'Transparency', desc: 'Quarterly financial reporting and transparency' }
  ];

  const services = [
    { title: 'Tenant Screening', desc: 'Thorough background, credit, and rental history checks.' },
    { title: 'Rent Collection', desc: 'Secure and timely payments with tracking systems.' },
    { title: 'Maintenance', desc: '24/7 support with trusted service professionals.' },
    { title: 'Regular Inspections', desc: 'Regular property inspections for upkeep and compliance.' }
  ];

  const steps = [
    {
      num: '01',
      title: 'Goal Alignment & Market Research',
      desc: 'We take the time to understand your property, investment goals, and expectations. Our team evaluates market conditions and provides expert guidance to position your property for success from day one.'
    },
    {
      num: '02',
      title: 'Pricing & Preparation',
      desc: 'We prepare your property for the rental market by optimizing pricing, handling documentation, and ensuring everything is ready for listing. Our goal is to make your property attractive and competitive.'
    },
    {
      num: '03',
      title: 'Targeted Marketing & Exposure',
      desc: 'Your property is showcased across premium platforms with high-quality listings and targeted exposure. We focus on attracting reliable tenants quickly to reduce vacancy time.'
    },
    {
      num: '04',
      title: 'Tenant Screening & Selection',
      desc: 'We conduct thorough background checks, credit verification, and screening to select the right tenants. Our process ensures long-term stability and peace of mind for property owners.'
    },
    {
      num: '05',
      title: 'Full-Service Management',
      desc: 'From rent collection to maintenance coordination and regular updates, we handle all day-to-day operations. You stay informed while we ensure your property runs smoothly and efficiently.'
    }
  ];

  return (
    <div className="management-page container section-padding animate-fade-in" style={{ marginTop: '80px' }}>
      {/* Hero Intro */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '60px' }}>
        <div>
          <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700' }}>
            Rental Management
          </span>
          <h1 style={{ fontSize: '42px', margin: '8px 0 12px 0' }} className="text-gradient">
            Property Management Made Simple
          </h1>
          <h2 style={{ fontSize: '18px', color: 'var(--accent-gold)', fontWeight: '500', marginBottom: '24px' }}>
            Maximize your rental income while we handle everything—stress‑free.
          </h2>
          <div style={{ width: '50px', height: '3px', backgroundColor: 'var(--primary)', marginBottom: '30px' }} />
          
          <p style={{ color: '#1A202C', fontSize: '15px', marginBottom: '20px', lineHeight: '1.7' }}>
            At Vivanta Realty, we believe owning a property should feel rewarding — not overwhelming. Our property management services are designed to give homeowners and investors complete peace of mind.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '30px' }}>
            From tenant management to maintenance and rent collection, we take care of every detail with professionalism and care. Whether you own one property or multiple investments, we ensure everything runs smoothly.
          </p>
          <button className="btn btn-primary" onClick={() => setPage('contact')}>
            Get Free Consultation
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {highlights.map((item, idx) => (
            <div key={idx} className="card-glass" style={{ padding: '24px' }}>
              <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '16px', marginBottom: '8px' }}>
                {item.title}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ marginTop: '80px', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '40px' }} className="text-gradient">
          Our Full-Service Solutions
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {services.map((service, idx) => (
            <div key={idx} className="card-glass" style={{ borderTop: '4px solid var(--primary)', padding: '30px' }}>
              <h3 style={{ fontSize: '18px', color: '#1A202C', marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Steps Process */}
      <div style={{ marginTop: '80px' }}>
        <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '10px' }} className="text-gradient">
          Our Management Process
        </h2>
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', fontSize: '14px', marginBottom: '40px' }}>
          How we help you successfully prepare, market, screen, and manage your property.
        </p>

        <div className="steps-container">
          {steps.map((step, idx) => (
            <div key={idx} className="step-item">
              <div className="step-num">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyManagement;
