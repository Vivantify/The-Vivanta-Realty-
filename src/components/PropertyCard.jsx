import React from 'react';

const PropertyCard = ({ price, address, imageUrl, index }) => {


  // High-quality fallback images of modern houses if the CDN fails
  const localFallbacks = [
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80'
  ];

  const displayImage = imageUrl || localFallbacks[index % localFallbacks.length];

  return (
    <div className="sold-card animate-slide-up" style={{ animationDelay: `${(index % 6) * 0.1}s` }}>
      <div className="sold-img-wrapper">
        <img 
          src={displayImage} 
          alt={address} 
          className="sold-img" 
          onError={(e) => {
            // If the CDN url fails to load, use an Unsplash fallback based on index
            e.target.src = localFallbacks[index % localFallbacks.length];
          }}
          loading="lazy"
        />
        <span className="sold-badge">Sold</span>
      </div>
      <div className="sold-info">
        <h4 className="sold-price">{price}</h4>
        <p className="sold-address">{address}</p>

      </div>
    </div>
  );
};

export default PropertyCard;
