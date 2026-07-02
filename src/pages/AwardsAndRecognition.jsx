import React from 'react';

const AwardsAndRecognition = () => {
  return (
    <div className="awards-page container section-padding animate-fade-in" style={{ marginTop: '80px' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '42px', margin: '8px 0 16px 0', color: 'var(--primary)', fontWeight: '800', lineHeight: '1.2' }}>
          Built on Trust. Recognized for Excellence.
        </h1>
        <div style={{ width: '60px', height: '3.5px', backgroundColor: 'var(--primary)', margin: '0 auto 20px auto' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7', fontWeight: '500' }}>
          <span style={{ color: 'var(--primary)', fontWeight: '700' }}>Vivanta Realty</span> is proud to be recognized among the <span style={{ color: 'var(--primary)', fontWeight: '700' }}>Triangle's Top 500 real estate professionals for 2025</span>, highlighting our commitment to client-focused service, market expertise, and consistent results.
        </p>
      </div>

      {/* Main Award Detail Section */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '50px', 
        alignItems: 'center',
        marginBottom: '80px',
        borderTop: '1px solid var(--border)',
        paddingTop: '50px'
      }}>
        {/* Left Side: Badge */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="card-glass" style={{ padding: '24px', borderRadius: 'var(--border-radius)', display: 'inline-block', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
            <img 
              src="/top500-badge.png" 
              alt="Triangle Real Producers Top 500 Agent 2025 Badge" 
              style={{ width: '100%', maxWidth: '340px', height: 'auto', display: 'block', borderRadius: '8px' }} 
            />
          </div>
        </div>

        {/* Right Side: Narrative */}
        <div style={{ textAlign: 'left', position: 'relative' }}>
          {/* Quote Mark */}
          <div style={{ 
            fontSize: '80px', 
            color: 'var(--primary)', 
            lineHeight: '1', 
            fontFamily: 'serif', 
            fontWeight: '900',
            opacity: '0.15',
            position: 'absolute',
            top: '-40px',
            left: '-10px',
            pointerEvents: 'none'
          }}>
            “
          </div>
          
          <h2 style={{ 
            fontSize: '28px', 
            color: '#1A202C', 
            fontWeight: '800', 
            margin: '0 0 16px 0',
            borderBottom: '2px solid var(--primary)',
            paddingBottom: '8px',
            display: 'inline-block'
          }}>
            Triangle Real Producers Top 500 Agent – 2025
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: '1.75' }}>
            <p>
              We are honored to celebrate the recognition of <span style={{ color: 'var(--primary)', fontWeight: '700' }}>Karthikeyan Kaduvettipalayam Sankarappan</span> as a Triangle Real Producers Top 500 Agent – 2025, an elite distinction awarded to the most successful, influential, and highly respected real estate professionals across the Triangle region. The Top 500 recognition represents far more than production numbers—it reflects dedication, consistency, market expertise, and an unwavering commitment to delivering exceptional client experiences. This achievement is reserved for professionals who continue to raise industry standards through excellence, innovation, and proven results.
            </p>
            <p>
              Karthikeyan’s success has been built on a foundation of trust, strategic market insight, and a client-centered philosophy that prioritizes long-term relationships over transactions. Through personalized guidance, transparent communication, and a passion for helping families and investors achieve their real estate goals, he has consistently delivered meaningful outcomes and lasting value. Being recognized among the region’s top-performing professionals further reinforces his reputation as a trusted advisor and industry leader.
            </p>
            <p>
              Membership within this exclusive network provides opportunities to collaborate with distinguished real estate experts, participate in premier industry events, and be featured among the most accomplished professionals shaping the future of real estate. This milestone is a reflection of hard work, commitment, and the pursuit of excellence—while also serving as motivation to continue delivering extraordinary service and results for every client. Through Vivanta Realty, clients can move forward with confidence, knowing they are represented by a professional whose dedication and performance place him among the very best in the industry.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Press spread */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '60px', marginTop: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700' }}>
            Magazine Feature Spread
          </span>
          <h2 style={{ fontSize: '32px', margin: '8px 0 12px 0', color: '#1A202C' }}>Real Producers Magazine Profile</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 16px auto' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '700px', margin: '0 auto' }}>
            Browse the full biographical feature layout published in Real Producers Magazine, outlining Karthik's background and path in real estate.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '40px',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
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

export default AwardsAndRecognition;
