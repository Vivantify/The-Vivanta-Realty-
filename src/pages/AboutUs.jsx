import React from 'react';

const AboutUs = ({ setPage }) => {
  return (
    <div className="about-page container section-padding animate-fade-in" style={{ marginTop: '80px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700' }}>
          Learn More
        </span>
        <h1 style={{ fontSize: '42px', margin: '8px 0 12px 0' }} className="text-gradient">About Vivanta Realty</h1>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto' }} />
      </div>

      {/* Main Philosophy Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', marginBottom: '80px', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1A202C' }}>
            The Best Luxury Real Estate in North Carolina
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '15px' }}>
            Our agents are industry leaders, delivering attentive, high‑touch service so every client can move forward with confidence.
          </p>
          <p style={{ marginBottom: '20px', fontSize: '14px', color: 'var(--text-muted)' }}>
            We specialize in neighborhoods and communities across the Triangle and greater North Carolina, helping you understand each area’s lifestyle, amenities, and value.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            With strong negotiation skills and strategic marketing, we work tirelessly to secure the best possible outcome for your purchase or sale.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="card-glass" style={{ textAlign: 'center', padding: '30px' }}>
            <h3 style={{ fontSize: '36px', color: 'var(--primary)', marginBottom: '8px' }}>Top 500</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Triangle Real Producers Agent - 2025</p>
          </div>
          <div className="card-glass" style={{ textAlign: 'center', padding: '30px' }}>
            <h3 style={{ fontSize: '36px', color: 'var(--accent-gold)', marginBottom: '8px' }}>100%</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Client-Centric Philosophy & Focus</p>
          </div>
          <div className="card-glass" style={{ textAlign: 'center', padding: '30px' }}>
            <h3 style={{ fontSize: '36px', color: '#1A202C', marginBottom: '8px' }}>60+</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Properties Sold Recently in NC</p>
          </div>
          <div className="card-glass" style={{ textAlign: 'center', padding: '30px' }}>
            <h3 style={{ fontSize: '36px', color: 'var(--primary)', marginBottom: '8px' }}>24/7</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Owner & Tenant Support Available</p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="card-glass" style={{ padding: '50px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'center' }}>
        <div>
          <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700' }}>
            Executive Leadership
          </span>
          <h2 style={{ fontSize: '28px', margin: '8px 0 6px 0', color: '#1A202C' }}>Founder & CEO</h2>
          <h3 style={{ fontSize: '18px', color: 'var(--accent-gold)', fontWeight: '500', marginBottom: '24px' }}>
            Karthikeyan Kaduvettipalayam Sankarappan
          </h3>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
            Driven by a passion for real estate and a commitment to excellence, Karthikeyan founded Vivanta Realty to create a more transparent, client‑focused experience. With a strong background in property solutions and business strategy, he guides clients with integrity, personalized advice, and a clear roadmap from first conversation to closing—helping families and investors make confident, well‑informed decisions.
          </p>
          <button className="btn btn-primary" onClick={() => setPage('contact')} style={{ marginTop: '30px' }}>
            Schedule Consultation With Founder
          </button>
        </div>
        <div style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden', height: '400px', border: '1px solid var(--border)' }}>
          <img
            src="/karthik.jpg"
            alt="Karthikeyan"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Media & Press Recognition Section */}
      <div style={{ marginTop: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700' }}>
            Media & Recognition
          </span>
          <h2 style={{ fontSize: '32px', margin: '8px 0 12px 0', color: '#1A202C' }}>Featured Profile: Agent on the Rise</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 16px auto' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '700px', margin: '0 auto' }}>
            Showcased in Real Producers Magazine for exceeding expectations and delivering exceptional real estate results across North Carolina.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '40px',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto 20px auto'
        }}>
          <div className="card-glass" style={{ padding: '20px', borderRadius: 'var(--border-radius)', overflow: 'hidden', width: '100%' }}>
            <img 
              src="/about-magazine-2.jpg" 
              alt="Real Producers Magazine Feature Cover" 
              style={{ width: '100%', height: 'auto', borderRadius: 'calc(var(--border-radius) - 10px)', display: 'block', boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }} 
            />
          </div>
          <div className="card-glass" style={{ padding: '20px', borderRadius: 'var(--border-radius)', overflow: 'hidden', width: '100%' }}>
            <img 
              src="/about-magazine-1.jpg" 
              alt="Real Producers Magazine Feature Content" 
              style={{ width: '100%', height: 'auto', borderRadius: 'calc(var(--border-radius) - 10px)', display: 'block', boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
