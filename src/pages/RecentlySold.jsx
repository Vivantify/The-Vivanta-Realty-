import React, { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';

const RecentlySold = () => {
  const soldProperties = useMemo(() => [
    { price: '$477,000', address: '2118 Terrawood Dr, Durham, NC 27703', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/1-7bb580c6-1920w.jpg' },
    { price: '$514,469', address: '232 Sprenger St, Garner, NC 27529', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/1-1920w.webp' },
    { price: '$574,990', address: '1304 Shearwater Way, Knightdale, NC 27545', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/3-1920w.jpg' },
    { price: '$348,000', address: '118 N Finley Landing Pkwy #3, Smithfield, NC 27577', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/4-1920w.jpg' },
    { price: '$842,432', address: '2520 Terri Creek Dr #26, Fuquay Varina, NC 27526', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/2-1920w.webp' },
    { price: '$355,000', address: '131 Finley Landing Pkwy #74, Smithfield, NC 27577', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/5-1920w.jpg' },
    { price: '$474,360', address: '333 Carova Bend Carolina Spgs LOT 297, Apex, NC 27539', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/6-3a0210a8-1920w.webp' },
    { price: '$496,990', address: '212 Eden View Bnd #684, Raleigh, NC 27610', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/3-1920w.webp' },
    { price: '$590,135', address: '7706 Litcham Dr, Raleigh, NC 27615', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/7-abf10079-1920w.webp' },
    { price: '$461,670', address: '1784 Aspen River Ln #113, Apex, NC 27502', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/8-1920w.jpg' },
    { price: '$610,775', address: '140 Yellow River Way, Garner, NC 27529', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/4-1920w.webp' },
    { price: '$617,343', address: '139 Yellow River Way, Garner, NC 27529', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/5-1920w.webp' },
    { price: '$341,500', address: '428 Ribbon Rail St, Fuquay Varina, NC 27526', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/9-1920w.webp' },
    { price: '$770,000', address: '3657 Manifest Pl, Cary, NC 27519', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/6-3a0210a8-1920w.webp' },
    { price: '$479,900', address: '2212 Fletchers Ridge Dr, Durham, NC 27703', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/10-1920w.jpg' },
    { price: '$606,000', address: '150 Tawny Slope Ct, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/11-1920w.jpg' },
    { price: '$469,810', address: '400 Carolina Springs Boulevard LOT 209, Apex, NC 27539', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/12-1920w.jpg' },
    { price: '$470,460', address: '521 Brittany Ct, Durham, NC 27703', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/13-1920w.jpg' },
    { price: '$518,000', address: '1552 Underbrush Dr, Durham, NC 27703', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/14-1920w.jpg' },
    { price: '$530,100', address: '104 Archbrook Bnd #68, Raleigh, NC 27610', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/15-1920w.jpg' },
    { price: '$707,000', address: '641 Rockcastle Dr, Cary, NC 27519', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/16-1920w.jpg' },
    { price: '$459,900', address: '2128 Terrawood Dr #118, Durham, NC 27703', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/17-1920w.jpg' },
    { price: '$900,600', address: '2229 Lorelai Ln, Cary, NC 27519', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/18-1920w.jpg' },
    { price: '$524,500', address: '560 Citrus Petal Rd, Fuquay Varina, NC 27526', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/19-1920w.jpg' },
    { price: '$520,000', address: '5026 Megara Run, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/20-1920w.jpg' },
    { price: '$362,500', address: '2246 Kasota Ln, Raleigh, NC 27610', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/21-1920w.jpg' },
    { price: '$960,000', address: '1213 Meadow Queen Ln, Apex, NC 27502', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/22-1920w.webp' },
    { price: '$343,000', address: '1933 Trexler Ct, Raleigh, NC 27606', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/23-1920w.jpg' },
    { price: '$497,855', address: '2124 Steggemann St, Apex, NC 27502', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/24-1920w.jpg' },
    { price: '$560,000', address: '3709 Bailey Lake Dr, Fuquay Varina, NC 27526', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/29-1920w.jpg' },
    { price: '$660,000', address: '3304 Olancha Ct, New Hill, NC 27562', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/30-1920w.jpg' },
    { price: '$527,000', address: '237 Steer St, Rolesville, NC 27571', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/32-1920w.jpg' },
    { price: '$510,905', address: '112 Yulan Way, Garner, NC 27529', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/36-1920w.webp' },
    { price: '$339,990', address: '5604 Preveza Pl, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/37-1920w.jpeg' },
    { price: '$450,000', address: '2004 Eva Pearl Dr LOT 80, Apex, NC 27502', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/38-1920w.jpg' },
    { price: '$414,270', address: '1705 Winter Jasmine Ln, Wake Forest, NC 27587', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/39-1920w.jpg' },
    { price: '$499,000', address: '709 N Firebrick Dr, Cary, NC 27519', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/40-a523598b-1920w.jpg' },
    { price: '$540,000', address: '151 Glen Clova Dr, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/41-97c840e7-1920w.jpg' },
    { price: '$501,860', address: '159 Glen Clova Dr, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/42-0efea426-1920w.jpg' },
    { price: '$472,805', address: '108 Keyshore Bnd #162, Raleigh, NC 27610', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/43-654ec0f1-1920w.jpg' },
    { price: '$465,980', address: '132 Katrine Way, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/44-d75aceac-1920w.jpg' },
    { price: '$645,000', address: '2958 Thirlestane Dr, Apex, NC 27502', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/48-1920w.webp' },
    { price: '$724,900', address: '405 Greenmoor Path, Apex, NC 27523', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/50-1920w.webp' },
    { price: '$609,683', address: '205 Terra Bella Ln NE #229, Holly Springs, NC 27540', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/51-1920w.webp' },
    { price: '$615,000', address: '301 Shakespeare St, Morrisville, NC 27560', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/53-1920w.webp' },
    { price: '$477,950', address: '154 Karlov Rd, Garner, NC 27529', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/54-1920w.webp' },
    { price: '$392,000', address: '4808 Trikala Ave, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/55-1920w.webp' },
    { price: '$370,000', address: '332 Dove Cottage Ln, Cary, NC 27519', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/332+Dove+Cottage+Ln-+Cary-+NC+27519-1920w.webp' },
    { price: '$582,480', address: '17 Fountainhead Ln, Garner, NC 27529', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/17+Fountainhead+Ln-+Garner-+NC+27529-1920w.webp' },
    { price: '$315,000', address: '333 Amber Acorn Ave, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/333+Amber+Acorn+Ave-+Raleigh-+NC+27603-1920w.webp' },
    { price: '$585,000', address: '773 Denburn Pl, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/773+Denburn+Pl-+Raleigh-+NC+27603-1920w.webp' },
    { price: '$562,000', address: '336 Calvander Ln, Apex, NC 27539', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/336+Calvander+Ln-+Apex-+NC+27539-1920w.webp' },
    { price: '$340,000', address: '184 N Finley Landing Pkwy, Smithfield, NC 27577', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/184+N+Finley+Landing+Pkwy+Smithfield-+NC+-+27577-1920w.webp' },
    { price: '$472,000', address: '1012 Cassa Clubhouse Way, Knightdale, NC 27545', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/1012+Cassa+Clubhouse+Way-+Knightdale-+NC+27545-1920w.webp' },
    { price: '$475,000', address: '1704 Goldfinch Perch Ln, Knightdale, NC 27545', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/1704+Goldfinch+Perch+Ln-+Knightdale-+NC+27545-1920w.webp' },
    { price: '$602,132', address: '192 Sargents St, Garner, NC 27529', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/192+Sargents+St-+Garner-+NC+27529-1920w.webp' },
    { price: '$533,000', address: '141 Hazy Hill Ln, Garner, NC 27529', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/141+Hazy+Hill+Ln-+Garner-+NC+27529-1920w.webp' },
    { price: '$625,000', address: '203 Spencor Mill Road, Morrisville, NC 27560', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/203+Spencor+Mill+Road-+Morrisville-+NC+27560-1920w.webp' },
    { price: '$401,000', address: '312 Abbots Mill Dr, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/312+Abbots+Mill+Dr-+Raleigh-+NC+-+27603-1920w.jpg' },
    { price: '$459,990', address: '112 Katrine Way, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/112+Katrine+Way-+Raleigh-+NC+-+27603-1920w.webp' },
    { price: '$566,500', address: '275 Glen Clova Dr, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/275+Glen+Clova+Dr-+Raleigh-+NC+-+27603-1920w.jpg' },
    { price: '$348,000', address: '424 Glen Clova Dr, Raleigh, NC 27603', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/424+Glen+Clova+Dr-+Raleigh-+NC+-+27603-1920w.webp' }
  ], []);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const itemsPerPage = 9;

  // Search filter
  const searchedProperties = useMemo(() => {
    return soldProperties.filter((property) =>
      property.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [soldProperties, searchTerm]);

  // Sort logic
  const sortedProperties = useMemo(() => {
    const propertiesCopy = [...searchedProperties];
    
    const getNumericPrice = (priceStr) => {
      return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
    };

    if (sortBy === 'price-low') {
      return propertiesCopy.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
    } else if (sortBy === 'price-high') {
      return propertiesCopy.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
    } else if (sortBy === 'address') {
      return propertiesCopy.sort((a, b) => a.address.localeCompare(b.address));
    }
    
    return propertiesCopy; // default/unsorted
  }, [searchedProperties, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);
  
  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPageNum - 1) * itemsPerPage;
    return sortedProperties.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedProperties, currentPageNum]);

  // Handle resetting page num when filter changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPageNum(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPageNum(1);
  };

  return (
    <div className="sold-page container section-padding animate-fade-in" style={{ marginTop: '80px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700' }}>
          Transaction History
        </span>
        <h1 style={{ fontSize: '42px', margin: '8px 0 12px 0' }} className="text-gradient">Recently Sold Listings</h1>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 16px auto' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
          Here’s a selection of homes we’ve recently sold across the Triangle and greater North Carolina.
        </p>
      </div>

      {/* Filter and Search controls */}
      <div className="search-filter-bar card-glass" style={{ padding: '20px', marginBottom: '40px' }}>
        <div className="search-input-wrapper">
          <label className="input-label" style={{ marginBottom: '6px', display: 'block' }}>Search Address</label>
          <input
            type="text"
            placeholder="Search by city, zip, or street..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="form-control"
          />
        </div>
        <div className="sort-select-wrapper">
          <label className="input-label" style={{ marginBottom: '6px', display: 'block' }}>Sort Listings</label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="form-control"
          >
            <option value="default">Default Order</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="address">Address: A to Z</option>
          </select>
        </div>
      </div>

      {/* Properties Grid */}
      {paginatedProperties.length > 0 ? (
        <>
          <div className="sold-grid">
            {paginatedProperties.map((property, idx) => (
              <PropertyCard
                key={idx}
                price={property.price}
                address={property.address}
                imageUrl={property.img}
                index={(currentPageNum - 1) * itemsPerPage + idx}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '50px' }}>
              <button
                className="btn btn-secondary"
                disabled={currentPageNum === 1}
                onClick={() => setCurrentPageNum(prev => Math.max(1, prev - 1))}
                style={{ padding: '8px 16px', fontSize: '14px' }}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  className={`btn ${pageNum === currentPageNum ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setCurrentPageNum(pageNum)}
                  style={{ padding: '8px 16px', fontSize: '14px', minWidth: '40px' }}
                >
                  {pageNum}
                </button>
              ))}

              <button
                className="btn btn-secondary"
                disabled={currentPageNum === totalPages}
                onClick={() => setCurrentPageNum(prev => Math.min(totalPages, prev + 1))}
                style={{ padding: '8px 16px', fontSize: '14px' }}
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="card-glass text-center" style={{ padding: '50px', marginTop: '20px' }}>
          <p style={{ color: 'var(--text-muted)' }}>No properties match your filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default RecentlySold;
