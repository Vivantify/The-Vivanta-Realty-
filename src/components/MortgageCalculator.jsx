import React, { useState, useEffect } from 'react';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(90000); // 20% by default
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  // Sync down payment dollar amount when percentage changes
  const handlePercentChange = (percent) => {
    setDownPaymentPercent(percent);
    const dollars = Math.round((homePrice * percent) / 100);
    setDownPayment(dollars);
  };

  // Sync down payment percentage when dollar amount changes
  const handleDollarChange = (dollars) => {
    setDownPayment(dollars);
    const percent = Math.round((dollars / homePrice) * 100);
    setDownPaymentPercent(percent);
  };

  // Keep down payment aligned when home price changes
  useEffect(() => {
    const dollars = Math.round((homePrice * downPaymentPercent) / 100);
    setDownPayment(dollars);
  }, [homePrice]);

  // Perform mortgage math
  const loanAmount = homePrice - downPayment;
  const monthlyRate = (interestRate / 100) / 12;
  const totalPayments = loanTerm * 12;

  let monthlyPAndI = 0;
  if (monthlyRate === 0) {
    monthlyPAndI = loanAmount / totalPayments;
  } else {
    monthlyPAndI = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
                   (Math.pow(1 + monthlyRate, totalPayments) - 1);
  }

  // Estimated additions
  const monthlyTaxes = Math.round((homePrice * 0.011) / 12); // ~1.1% property tax
  const monthlyInsurance = 95; // Flat estimated insurance
  const totalMonthlyPayment = Math.round(monthlyPAndI + monthlyTaxes + monthlyInsurance);

  return (
    <div className="card-glass animate-fade-in" style={{ padding: '40px', marginTop: '30px' }}>
      <h3 style={{ fontSize: '24px', marginBottom: '8px', color: '#FFFFFF' }}>Interactive Mortgage Calculator</h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '14px' }}>
        Estimate your monthly payments with custom inputs for home price, down payment, and rates.
      </p>

      <div className="calc-container">
        {/* Sliders & Inputs */}
        <div className="calc-sliders">
          {/* Home Price */}
          <div className="slider-group">
            <div className="slider-header">
              <span>Home Price</span>
              <span>${homePrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="100000"
              max="2000000"
              step="10000"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="range-input"
            />
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Math.max(0, Number(e.target.value)))}
              className="form-control"
              style={{ marginTop: '8px', padding: '8px 12px', fontSize: '14px' }}
            />
          </div>

          {/* Down Payment */}
          <div className="slider-group">
            <div className="slider-header">
              <span>Down Payment ({downPaymentPercent}%)</span>
              <span>${downPayment.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="80"
              step="1"
              value={downPaymentPercent}
              onChange={(e) => handlePercentChange(Number(e.target.value))}
              className="range-input"
            />
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <span style={{ position: 'absolute', left: '12px', top: '10px', color: 'var(--text-muted)', fontSize: '14px' }}>$</span>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => handleDollarChange(Math.max(0, Number(e.target.value)))}
                  className="form-control"
                  style={{ padding: '8px 12px 8px 24px', fontSize: '14px' }}
                />
              </div>
              <div style={{ width: '80px', position: 'relative' }}>
                <span style={{ position: 'absolute', right: '12px', top: '10px', color: 'var(--text-muted)', fontSize: '14px' }}>%</span>
                <input
                  type="number"
                  value={downPaymentPercent}
                  onChange={(e) => handlePercentChange(Math.min(100, Math.max(0, Number(e.target.value))))}
                  className="form-control"
                  style={{ padding: '8px 24px 8px 12px', fontSize: '14px' }}
                />
              </div>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="slider-group">
            <div className="slider-header">
              <span>Interest Rate</span>
              <span>{interestRate}%</span>
            </div>
            <input
              type="range"
              min="2"
              max="12"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="range-input"
            />
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(Math.max(0, Number(e.target.value)))}
              className="form-control"
              style={{ marginTop: '8px', padding: '8px 12px', fontSize: '14px' }}
            />
          </div>

          {/* Loan Term */}
          <div className="slider-group">
            <div className="slider-header">
              <span>Loan Term</span>
              <span>{loanTerm} Years</span>
            </div>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="form-control"
              style={{ padding: '8px 12px', fontSize: '14px' }}
            >
              <option value={30}>30 Years (Fixed)</option>
              <option value={20}>20 Years (Fixed)</option>
              <option value={15}>15 Years (Fixed)</option>
              <option value={10}>10 Years (Fixed)</option>
            </select>
          </div>
        </div>

        {/* Results Circular Visualizer */}
        <div className="calc-results">
          <div className="payment-circle">
            <span className="payment-value">${totalMonthlyPayment.toLocaleString()}</span>
            <span className="payment-label">/ Month</span>
          </div>

          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Principal & Interest:</span>
              <strong style={{ color: '#FFFFFF' }}>${Math.round(monthlyPAndI).toLocaleString()}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Est. Property Tax (1.1%):</span>
              <strong style={{ color: '#FFFFFF' }}>${monthlyTaxes}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Home Insurance:</span>
              <strong style={{ color: '#FFFFFF' }}>${monthlyInsurance}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '4px', fontSize: '16px' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '600' }}>Total Payment:</span>
              <strong style={{ color: 'var(--accent-gold)' }}>${totalMonthlyPayment.toLocaleString()}</strong>
            </div>
          </div>

          <div style={{ marginTop: '24px', fontSize: '12px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            *Calculations are estimates. Actual rates and fees depend on credit score and lender terms.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
