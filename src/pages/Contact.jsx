import React from 'react';
import LeadForm from '../components/LeadForm';

const Contact = () => {
  return (
    <div className="contact-page container section-padding animate-fade-in" style={{ marginTop: '80px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700' }}>
          Get In Touch
        </span>
        <h1 style={{ fontSize: '42px', margin: '8px 0 12px 0' }} className="text-gradient">Let’s Start a Conversation</h1>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 16px auto' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
          Tell us what you’re planning, and we’ll follow up with recommendations and a plan that works for you.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div className="card-glass" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '20px', color: '#1A202C', marginBottom: '24px' }}>Office Contact Info</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Address */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                <div style={{ color: 'var(--primary)', marginTop: '4px' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#1A202C', marginBottom: '4px' }}>Location</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    1428 Baileys Run Ct,<br />
                    Raleigh, North Carolina 27606
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                <div style={{ color: 'var(--primary)', marginTop: '4px' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#1A202C', marginBottom: '4px' }}>Phone Number</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>+1 (470)-706-5858</p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                <div style={{ color: 'var(--primary)', marginTop: '4px' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#1A202C', marginBottom: '4px' }}>Email Address</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>karthik@thevivantarealty.com</p>
                </div>
              </div>


            </div>
          </div>

          {/* Minimal Map Box */}
          <div className="card-glass" style={{ padding: '0', overflow: 'hidden', height: '220px', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6))',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '20px',
              zIndex: 2
            }}>
              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginBottom: '4px' }}>Raleigh Triangle Area</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Serving Raleigh, Cary, Durham, Apex, and Garner NC</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" 
              alt="NC Map Area" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
            />
          </div>
        </div>

        {/* Message Form Side */}
        <div>
          <LeadForm type="contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
