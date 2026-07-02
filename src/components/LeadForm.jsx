import React, { useState } from 'react';

const LeadForm = ({ type = 'contact' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: type === 'seller' ? 'Selling My Home' : 'General Inquiry',
    message: '',
    propertyAddress: '',
    timeline: 'Immediate',
    file: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="card-glass text-center animate-fade-in" style={{ padding: '40px', border: '1px solid var(--success)' }}>
        <div style={{ color: 'var(--success)', fontSize: '50px', marginBottom: '20px' }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline' }}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 style={{ fontSize: '22px', marginBottom: '12px', color: '#FFFFFF' }}>Thank you for reaching out!</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
          Your message has been successfully sent to Karthik and the Vivanta Realty team. We will review your details and contact you shortly.
        </p>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              subject: type === 'seller' ? 'Selling My Home' : 'General Inquiry',
              message: '',
              propertyAddress: '',
              timeline: 'Immediate',
              file: null
            });
          }}
          style={{ marginTop: '24px' }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="card-glass animate-fade-in" style={{ padding: '36px' }}>
      <h3 style={{ fontSize: '22px', marginBottom: '8px', color: '#FFFFFF' }}>
        {type === 'seller' ? 'Speak With an Agent' : 'Send Us a Message'}
      </h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px' }}>
        {type === 'seller' 
          ? 'Share a few details below, and one of our agents will contact you shortly.' 
          : 'Tell us what you’re planning, and we’ll follow up with recommendations.'}
      </p>

      {errorMsg && (
        <div style={{ padding: '12px 16px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '6px', color: '#EF4444', fontSize: '14px', marginBottom: '20px' }}>
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="input-group">
          <label className="input-label">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="form-control"
            required
          />
        </div>

        {/* Email & Phone */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="input-group">
            <label className="input-label">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="form-control"
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className="form-control"
            />
          </div>
        </div>

        {/* If Seller, show Property Fields */}
        {type === 'seller' && (
          <div className="animate-fade-in">
            <div className="input-group">
              <label className="input-label">Property Address *</label>
              <input
                type="text"
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleChange}
                placeholder="123 Main St, Raleigh, NC 27601"
                className="form-control"
                required={type === 'seller'}
              />
            </div>
            
            <div className="input-group">
              <label className="input-label">Selling Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="form-control"
              >
                <option value="Immediate">Immediate (Within 1 month)</option>
                <option value="1-3 Months">1 to 3 months</option>
                <option value="3-6 Months">3 to 6 months</option>
                <option value="Just Curious">Just curious / Researching</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Upload Property Images / Files</label>
              <div 
                style={{
                  border: '2px dashed var(--border)',
                  borderRadius: '8px',
                  padding: '24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  transition: 'var(--transition)'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                onClick={() => document.getElementById('file-upload').click()}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ margin: '0 auto 8px auto', display: 'block', color: 'var(--text-muted)' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {formData.file ? formData.file.name : 'Click to drag or upload files'}
                </span>
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Message */}
        <div className="input-group">
          <label className="input-label">Message / Details *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={type === 'seller' ? 'Tell us a bit about your property, desired price, or condition...' : 'How can we help you today?'}
            rows="5"
            className="form-control"
            style={{ resize: 'vertical' }}
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '12px' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ animation: 'spin 1s linear infinite', display: 'inline', marginRight: '6px' }}>
                <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              Sending Inquiry...
            </>
          ) : (
            'Submit Inquiry'
          )}
        </button>
      </form>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LeadForm;
