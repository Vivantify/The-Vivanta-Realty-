import React from 'react';
import LeadForm from '../components/LeadForm';

const ListWithUs = () => {
  return (
    <div className="list-page container section-padding animate-fade-in" style={{ marginTop: '80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'start' }}>
        {/* Marketing Content */}
        <div>
          <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700' }}>
            Sell Your Property
          </span>
          <h1 style={{ fontSize: '42px', margin: '8px 0 12px 0' }} className="text-gradient">
            List Your Home With Vivanta Realty
          </h1>
          <h2 style={{ fontSize: '20px', color: 'var(--accent-gold)', fontWeight: '500', marginBottom: '24px' }}>
            Strategic Marketing That Makes Your Home Stand Out
          </h2>
          <div style={{ width: '50px', height: '3px', backgroundColor: 'var(--primary)', marginBottom: '30px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '14px', lineHeight: '1.7' }}>
            <p style={{ color: '#1A202C', fontSize: '16px', fontWeight: '600' }}>
              List Your Home With Us — Get Maximum Exposure and Top Market Value
            </p>
            <p>
              Showcase your home to serious buyers with expert marketing and trusted local guidance. When you list with us, you gain access to high‑impact marketing, professional photography and video tours, and expert staging advice designed to highlight your home’s best features and help it stand out in a competitive market.
            </p>
            <p>
              We promote your property across top real estate platforms, social media channels, and trusted local networks—maximizing visibility and attracting serious, qualified buyers quickly.
            </p>
            <p>
              Our dedicated agents craft a custom pricing strategy tailored to your neighborhood and current market trends, helping you achieve the strongest possible return on your investment.
            </p>
            <p>
              We handle every detail—from managing showings and negotiating offers to coordinating inspections and keeping you informed at every step. Our priority is transparent communication and expert guidance, so you feel confident and supported throughout the entire selling process.
            </p>
            <p>
              Beyond just selling your home, we focus on delivering an exceptional client experience—making each step as efficient and stress‑free as possible, while driving a successful result. Whether you’re selling your first home or your tenth, our team has the knowledge and resources to make your property the next success story.
            </p>
          </div>
        </div>

        {/* Lead Capture Form */}
        <div>
          <LeadForm type="seller" />
        </div>
      </div>
    </div>
  );
};

export default ListWithUs;
