import React from 'react';

const GetPrequalified = () => {
  return (
    <div className="prequalified-page container section-padding animate-fade-in" style={{ marginTop: '80px' }}>
      
      {/* Karthik Mortgage Header & Intro */}
      <div style={{ marginBottom: '50px' }}>
        <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700' }}>
          Home Financing
        </span>
        <h1 style={{ fontSize: '42px', margin: '8px 0 24px 0', color: 'var(--primary)', fontWeight: '800' }}>
          Karthik Mortgage – Your Home Financing Partner
        </h1>
        <div style={{ width: '60px', height: '3.5px', backgroundColor: 'var(--primary)', marginBottom: '30px' }} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
          <p style={{ color: '#2D3748', fontSize: '15.5px', lineHeight: '1.75', margin: 0 }}>
            At Vivanta Realty, we believe buying a home should be exciting—not overwhelming, which is why we’ve partnered with Karthik Mortgage, a client-first mortgage company focused on making homeownership simple, affordable, and accessible.
          </p>
          <p style={{ color: '#2D3748', fontSize: '15.5px', lineHeight: '1.75', margin: 0 }}>
            With years of experience in residential financing, Karthik Mortgage offers <span style={{ color: 'var(--primary)', fontWeight: '700' }}>tailored loan options</span>, competitive rates, and expert guidance to help you navigate every step of the loan process — from prequalification to closing.
          </p>
          <p style={{ color: '#2D3748', fontSize: '15.5px', lineHeight: '1.75', margin: 0 }}>
            Whether you're a <span style={{ color: 'var(--primary)', fontWeight: '700' }}>first-time homebuyer</span>, upgrading to a larger space, or exploring investment opportunities, Karthik Mortgage is here to deliver <span style={{ color: 'var(--primary)', fontWeight: '700' }}>smart financing solutions</span> built around your unique goals.
          </p>
        </div>
      </div>

      {/* Why Choose Karthik Mortgage Grid Section */}
      <div style={{ marginBottom: '40px', borderTop: '1px solid var(--border)', paddingTop: '40px' }}>
        <h2 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '30px', fontWeight: '800' }}>
          Why Choose Karthik Mortgage?
        </h2>
        
        <div className="cta-grid-container">
          {/* Left Side: List of Benefits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)', flexShrink: 0 }} />
              <p style={{ fontSize: '15.5px', fontWeight: '700', color: '#2D3748', margin: 0 }}>
                Fast & easy online application
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)', flexShrink: 0 }} />
              <p style={{ fontSize: '15.5px', fontWeight: '700', color: '#2D3748', margin: 0 }}>
                Loan programs tailored to your situation
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)', flexShrink: 0 }} />
              <p style={{ fontSize: '15.5px', fontWeight: '700', color: '#2D3748', margin: 0 }}>
                Low down payment options starting from 1% for qualified borrowers
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)', flexShrink: 0 }} />
              <p style={{ fontSize: '15.5px', fontWeight: '700', color: '#2D3748', margin: 0 }}>
                Transparent, supportive, and responsive service throughout the process.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)', flexShrink: 0 }} />
              <p style={{ fontSize: '15.5px', fontWeight: '700', color: '#2D3748', margin: 0 }}>
                Quick prequalification – no guesswork, no stress
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Action Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '320px', width: '100%', marginLeft: 'auto' }}>
            <a
              href="https://karthikmortgage.my1003app.com/2507848/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-center"
              style={{
                display: 'block',
                padding: '16px 24px',
                fontSize: '16px',
                fontWeight: '700',
                borderRadius: '8px',
                boxShadow: '0 6px 18px rgba(237, 122, 28, 0.25)',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
            >
              Get Prequalified
            </a>
            <a
              href="https://www.karthikmortgage.com/calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-center"
              style={{
                display: 'block',
                padding: '16px 24px',
                fontSize: '16px',
                fontWeight: '700',
                borderRadius: '8px',
                boxShadow: '0 6px 18px rgba(237, 122, 28, 0.25)',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
            >
              Mortgage Calculator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPrequalified;
