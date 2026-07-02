import React, { useState } from 'react';

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = review.text.split(' ');
  const isLongText = words.length > 90;

  const displayedText = isExpanded 
    ? review.text 
    : (isLongText ? `${words.slice(0, 90).join(' ')}...` : review.text);

  return (
    <div className="review-card" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      minHeight: '370px', // Standard min-height to fit 90 words cleanly
      height: '100%', // Allows CSS Grid stretch to keep heights in each row uniform
      overflow: 'hidden',
      padding: '30px', // Spacious padding matching the attached layout screenshot
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Stars */}
        <div className="stars" style={{ marginBottom: '14px' }}>
          {Array(5).fill().map((_, i) => (
            <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z" />
            </svg>
          ))}
        </div>
        
        {/* Testimonial Text */}
        <p className="review-text" style={{ 
          fontSize: '13.5px', 
          lineHeight: '1.6', 
          color: 'var(--text-muted)', 
          fontStyle: 'italic',
          marginBottom: '10px',
          flexGrow: 1
        }}>
          "{displayedText}"
        </p>

        {/* Read More / Read Less Toggle */}
        {isLongText && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary)',
              fontWeight: '600',
              fontSize: '13px',
              cursor: 'pointer',
              padding: '0',
              marginBottom: '14px',
              textAlign: 'left',
              display: 'inline-block',
              width: 'fit-content'
            }}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>

      {/* Author Section with Divider Line */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px', marginTop: 'auto' }}>
        <h4 className="review-author" style={{ fontSize: '15px', color: '#2D3748', margin: 0, fontWeight: '700' }}>{review.author}</h4>
        <div className="review-meta" style={{ fontSize: '12px', color: 'var(--primary)', marginTop: '2px', fontWeight: '500' }}>{review.meta}</div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const reviewsData = [
    {
      author: 'Arunkumar Venkatachalam',
      meta: 'Bought a Single Family home in 2024 in Raleigh, NC',
      text: "I recently had the pleasure of working with Karthik as my realtor in buying my second home, and I couldn't be more satisfied with the experience. Karthik was incredibly detail-oriented and helpful, guiding me through every step of the process while advocating for my best interests as if he were making the purchase for himself. His extensive local area knowledge was invaluable, and his attention to detail was truly impressive. Additionally, Karthik's team was incredibly patient and supportive, making the entire process smooth and stress-free. Having worked with other realtors in the past, I can confidently say that Karthik was truly exceptional and caring. I highly recommend Karthik to anyone in need of a knowledgeable and dedicated realtor."
    },
    {
      author: 'vnikith reddy',
      meta: 'Bought a home in 2024 in Fuquay Varina, NC',
      text: "I recently had the pleasure of working with Karthikeyan to close on my new home, and I couldn't be happier with the experience. From start to finish, Karthikeyan was always available and incredibly easy to deal with. He guided me through every step of the process with professionalism and clear communication, making what could have been a stressful experience smooth and straightforward. I highly recommend Karthikeyan to anyone looking for a dedicated and reliable realtor."
    },
    {
      author: 'Pankaj Bajpai',
      meta: 'Bought a home in 2024',
      text: "Karthik helped us in buying a home using a virtual tour as we were at remote location and he proactively investigated all the key aspects which everyone wants in their home by himself. He was approachable all the time and answered all the queries and because of his immense experience in real estate we were able to do closing very quickly and easily. Thanks! to Karthik. I will highly recommend him and consider him for my future transactions."
    },
    {
      author: 'Gaurav Verma',
      meta: 'Bought a Single Family home in 2024 in Monroe, NC',
      text: "Karthik is responsive and professional. We worked on finding the property for almost 6 months but he was never like I am wasting his time. He was clear in expectation. Easy to work with."
    },
    {
      author: 'vairamuthu alagesan',
      meta: 'Bought a Single Family home in 2024 in Raleigh, NC',
      text: "Karthikeyan did a great job and helped me buying property. His expertise and knowledge as a realtor and the information he provided is outstanding. He is responsive for all my queries in a timely manner. Overall great experience working with him."
    },
    {
      author: 'AmitKulwal',
      meta: 'Bought a Single Family home in 2024 in Wake Forest, NC',
      text: "I want to express my appreciation for the outstanding service Karthik provided during the process of buying our dream property, his professionalism, attention to detail, and dedication truly made a difference in our experience.Quick responses to messages and calls showcased his dedication. From our initial consultation to the final closing, Karthik demonstrated an impressive understanding of the local market dynamics and trends. His guidance and insights were invaluable in helping us make informed decisions every step of the way."
    },
    {
      author: 'Sathiyamoorthy N',
      meta: 'Bought a Single Family home in 2024 in Raleigh, NC',
      text: "I had the pleasure of working with Karthik as my real estate agent while purchasing my first home, and I cannot recommend him highly enough. From the very beginning, Karthik exhibited an exceptional level of professionalism, knowledge, and dedication that made the entire home-buying process smooth and stress-free. As a first-time homebuyer, I had many questions and concerns. Karthik was incredibly patient and took the time to explain every step in detail, ensuring that I fully understood what to expect. His deep knowledge of the local real estate market was evident as he provided valuable insights into various neighborhoods, pricing trends, and potential investment opportunities. Karthik was always accessible and responsive, promptly returning calls and emails, which made communication seamless. If you are looking for a real estate agent who is knowledgeable, trustworthy, and dedicated to your best interests, I highly recommend Karthik."
    },
    {
      author: 'Sudhakar Asaithambi',
      meta: 'Bought a Single Family home in 2024 in Cary, NC',
      text: "Karthik did an outstanding job assisting us with the purchase of our home. Karthik's expertise was evident from our first meeting. He took the time to understand our preferences and lifestyle, evident when he found a home in a kid-friendly neighborhood close to great schools, matching our wishlist and he provided a detailed analysis of market trends, helping us understand the best time to buy. I've already recommended him to couple of my friends. When I am looking to buy or sell again I will not hesitate to call him."
    },
    {
      author: 'sambasvrao',
      meta: 'Bought a Single Family home in 2024 in Raleigh, NC',
      text: "Karthik took care of everything from beginning to closing the house and he was very responsive over the text and phone calls and explained everything from scratch to understand in a better way.His understanding skills about the market and tremendous.Highly recommended."
    },
    {
      author: 'ptharthius',
      meta: 'Bought a Single Family home in 2024 in Fuquay Varina, NC',
      text: "Karthik did a great job in assisting us with the purchase of our house . From the get go he was very focused to understand our requirements on the house and showcased the possibilities, gave good insights on the location, very responsive and was involved from the beginning of the house hunt until we closed . Great professional to work with ... Appreciate all your efforts Karthik ..."
    },
    {
      author: 'prasanth gutta',
      meta: 'Bought a home in 2024 in Apex, NC',
      text: "Karthikeyan did an excellent job of explaining us market conditions and gave us regular updates which made our home buying process very easy. He was always there to answer our questions and very knowledgeable on market."
    },
    {
      author: 'MageshwaranJanarthanam',
      meta: 'Bought a home in 2024',
      text: "I was fortunate to know Karthik through one of my friend and have him as my realtor, Karthik's dedication, expertise, and commitment is unparallel. we met three or four times only and I was able to get my questions and concerns addressed fully. Karthik's communications and transparency helped me a lot. I highly recommend Karthik for anyone in search of a home ... wish you the best Karthik ..."
    },
    {
      author: 'ashwin kumar boinala',
      meta: 'Bought a Single Family home in 2024 in Apex, NC',
      text: "I recently had the pleasure of working with Karthik while searching for my new home, and I can't praise the experience enough. From our initial meeting to the closing of my home, Karthik demonstrated professionalism, market knowledge, and a genuine interest in helping me find the perfect property that met all my criteria. I highly recommend Karthik to anyone looking to buy or sell a property."
    },
    {
      author: 'Vignesh Natarajan',
      meta: 'Bought a Single Family home in 2024 in New Hill, NC',
      text: "Exceptional Service from Karthik - Highly Recommend! I recently had the pleasure of working with Karthik as my buyer agent during the closing process of purchasing my new home in North Carolina, and I cannot praise his professionalism and dedication enough. From our initial meeting to the final steps of the closing process, Karthik demonstrated an unparalleled level of expertise and commitment. His knowledge of the local real estate market was impressive, and he guided me through every aspect of the home buying journey with ease. Karthik's communication skills were outstanding. He was always prompt in responding to my inquiries and kept me informed at every stage of the process. His attention to detail ensured that no aspect of the transaction was overlooked, giving me peace of mind throughout. What truly sets Karthik apart is his genuine care for his clients. He took the time to understand my needs and preferences, and he worked tirelessly to find the perfect home for me. His patience, professionalism, and friendly demeanor made the entire experience enjoyable and stress-free. I am thrilled with my new home, and I have Karthik to thank for making it possible. I wholeheartedly recommend Karthik to anyone in need of a reliable and trustworthy buyer agent. If you're looking for a seamless home buying experience, look no further than Karthik. Thank you, Karthik, for your exceptional service and for helping me find my dream home!"
    },
    {
      author: '78j6dssqbv',
      meta: 'Bought a Single Family home in 2024 in Garner, NC',
      text: "Karthik did an outstanding job in explaining the home owing process . He was always available to answer any queries being first time home buyers . He also helped us to get a competitive price ."
    },
    {
      author: 'Prakash Balasundaram',
      meta: 'Bought a home in 2023',
      text: "We had a fantastic experience working with Karthik. We found him knowledgeable, professional, and dedicated to helping us find the perfect home. He was always available to answer any questions we had throughout the process. We would gladly recommend him to anyone who is in process of finding a dream home."
    },
    {
      author: 'Sathish Selvaraj',
      meta: 'Bought a home in 2023 in Raleigh, NC',
      text: "Working with Karthik as my realtor was an absolute pleasure throughout my first home-buying journey. His comprehensive understanding of real estate, mortgage intricacies, and the evolving landscape around RTP Triangle made the experience enjoyable and insightful. Karthik's transparency and proactive approach were invaluable; he consistently represented my interests, promptly addressing any concerns with the builder and mortgage firm. His well-rounded knowledge not only guided me through the process but also empowered me to make informed decisions. Karthik's dedication to ensuring a smooth transaction while advocating for his clients sets him apart. I highly recommend Karthik for anyone seeking a reliable, knowledgeable, and supportive realtor for their home purchase."
    },
    {
      author: 'jay chapla jc',
      meta: 'Consulted me on buying or selling a home in Raleigh, NC',
      text: "Karthik's expertise made my home-buying experience exceptional. His in-depth knowledge of the mortgage process and strategies in this challenging market set him apart. He patiently explained each step, making the complex easy to understand. Karthik's dedication and availability showcased his commitment to client satisfaction. He's a true professional who ensures a smooth and positive journey to homeownership."
    },
    {
      author: 'Dhaval Parikh',
      meta: 'Made an offer on a Single Family home in Prattville, AL, but it did not work out',
      text: "Karthik did an excellent job in helping us match with the right mortgage lender. He's very knowledgeable, professional and was patient in answering all our questions! Would highly recommend him and would definitely love to work with him in the future!"
    },
    {
      author: 'phanikumar jami',
      meta: 'Bought a Single Family home in 2023 in Raleigh, NC',
      text: "It was nice to working with Karthik and really helpful his ideas and tips. He is local to Garner city area. So, aware most of the things like 540 road extension plans, local schools. Karthik was helped us to educate home buying process, loan process and other items. He was available and very responsive most of the times."
    },
    {
      author: 'AnandP3',
      meta: 'Bought a home in 2023',
      text: "I recently had the pleasure of working with Karthik for my home purchase in the Triangle area of Raleigh, NC, and I couldn't be more pleased with the experience. From the outset, Karthik demonstrated exceptional professionalism and deep knowledge of the real estate market. He was not only adept at negotiating great deals with the new home builder but also took charge of all communications, ensuring a seamless and stress-free process for me. What truly set Karthik apart was his commitment to keeping me informed and educated throughout the process. He frequently provided clear overviews of each step, ensuring that I understood the complexities of real estate transactions. His diligence in reviewing all documents was commendable, ensuring that everything was accurate and in line with what the builder had promised. Karthik's ability to provide the best solutions to any concerns that arose was incredibly reassuring. His guidance was invaluable, and his dedication to my interests was evident in every interaction. I highly recommend Karthik to anyone looking for a knowledgeable, reliable, and effective realtor in the Triangle area. His expertise, combined with his client-first approach, makes him an outstanding choice for any potential homebuyer or seller."
    },
    {
      author: 'raj bagavathy',
      meta: 'Bought a Single Family home in 2023 in Raleigh, NC',
      text: "Karthikeyan is a closing ninja! He made the entire closing process so smooth and stress-free, it was like a dream. From the moment we started working together, Karthikeyan was incredibly organized and efficient. He kept us updated on every step of the process and made sure that we were always prepared for what was coming next. Karthikeyan was also incredibly knowledgeable about all aspects of the home buying process and paperwork. He was able to answer all of our questions clearly and concisely, and he always made sure that we understood what we were signing. I was especially impressed with Karthikeyan's ability to anticipate and resolve any potential problems that arose during the process. He was always calm and collected, and he never let anything get us off track. Overall, I had an absolutely phenomenal experience working with Karthikeyan on closing my house. He is a true asset to any buyer."
    },
    {
      author: 'vamsi datta2010',
      meta: 'Bought a home in 2023 in Apex, NC',
      text: "Provided me listings actively, helped me to submit the offer on time to get the home . Competed with other mortgage lenders and made sure he matched with other lenders that I got . Finally I closed the loan and house with karthik"
    },
    {
      author: 'zuser20150713150515490',
      meta: 'Bought a Single Family home in 2023 in Morrisville, NC',
      text: "Karthik did an excellent job. He is very helpful and easily approachable. He is knowledgeable and on top of what one needs to do for home buying. He is someone who is very easy to work with. I can definitely recommend him to anyone who is looking to buy or sell home and even for home loan. He helped me with loan as well. He was on top of it and we were able to get loan approval within 5 days."
    },
    {
      author: 'kumar83',
      meta: 'Bought a Single Family home in 2023 in Garner, NC',
      text: "Karthik did an Outstanding job assisting us with the purchase of our first home. His expertise in the market's geographic area was instrumental in determining a competitive purchase price while considering the future resale value. Karthik was very much involved in all aspects of closing. He was friendly responsive and set up regular followups and always gave great advice."
    },
    {
      author: 'SANTHOSH MOHANDASS',
      meta: 'Bought a Single Family home in 2023 in Garner, NC',
      text: "Karthik helped me to find my dream home. He played an important role to help me decide the right home. He guided me in all steps of the home buying process. He ensures good customer satisfaction by being transparent and honest to his clients"
    },
    {
      author: 'sushmitha pagidela',
      meta: 'Bought a home in 2025',
      text: "I had a pleasure of working with Karthik to purchase my first townhome in June and I could not be more grateful for his help throughout the process. As a first-time homebuyer, I had a lots of questions/concerns but he took the time to explain every step clearly and patiently, and he was always a call away answering the most basic questions at times. He was responsive, professional, and genuinely invested in helping me to make the right decisions. From the first showing to closing in just a couple of weeks, the entire experience was smooth and stress-free thanks to his expertise and guidance. I highly recommend Karthik to anyone looking for a knowledgable and supporting real estate agent. Thank you again for helping me achieve this milestone."
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter reviews by author, text, or metadata (location/year)
  const filteredReviews = reviewsData.filter(
    (review) =>
      review.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.meta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="reviews-page container section-padding animate-fade-in" style={{ marginTop: '80px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700' }}>
          Client Testimonials
        </span>
        <h1 style={{ fontSize: '42px', margin: '8px 0 12px 0' }} className="text-gradient">What Our Clients Say</h1>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 16px auto' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
          Read verified feedback from families, investors, and first-time homebuyers across North Carolina.
        </p>
      </div>

      {/* Search Input */}
      <div className="search-filter-bar" style={{ justifyContent: 'center' }}>
        <div className="search-input-wrapper" style={{ maxWidth: '500px' }}>
          <input
            type="text"
            placeholder="Search reviews by name, city (e.g. Raleigh, Apex, Garner)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
            style={{ width: '100%' }}
          />
        </div>
      </div>

      {/* Reviews Grid */}
      {filteredReviews.length > 0 ? (
        <div className="reviews-grid">
          {filteredReviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>
      ) : (
        <div className="card-glass text-center" style={{ padding: '40px', marginTop: '20px' }}>
          <p style={{ color: 'var(--text-muted)' }}>No reviews found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
