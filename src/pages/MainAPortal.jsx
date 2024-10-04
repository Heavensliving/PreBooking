import React, { useState, useEffect } from 'react';
import './MainAPortal.css';

const MainAPortal = () => {
  const [counts, setCounts] = useState({
    totalBookings: 0,
    totalAmount: 0,
    preBooked: 0,
    customPayment: 0,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [preBookDetails, setPreBookDetails] = useState([]); // Start with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total bookings
        const bookingsResponse = await fetch('http://localhost:5000/api/prebook/count');
        const bookingsData = await bookingsResponse.json();

        // Fetch custom payment total
        const customPaymentResponse = await fetch('http://localhost:5000/api/prebook/custom-payment-sum');
        const customPaymentData = await customPaymentResponse.json();

        const preBookedAmount = bookingsData.totalBookings * 999;
        const customPaymentAmount = customPaymentData.totalCustomPayment;
        const totalAmount = preBookedAmount + customPaymentAmount;

        setCounts(prevCounts => ({
          ...prevCounts,
          totalBookings: bookingsData.totalBookings,
          preBooked: preBookedAmount,
          customPayment: customPaymentAmount,
          totalAmount: totalAmount,
        }));

        // Fetch pre-book details
        const preBookResponse = await fetch('http://localhost:5000/api/prebook/all');
        const preBookData = await preBookResponse.json();
        setPreBookDetails(preBookData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtered details based on search term
  const filteredDetails = preBookDetails.filter(detail =>
    detail.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Milestones
  const milestones = [0, 50, 75, 100, 125, 180];

  // Determine progress percentage
  const totalBookings = counts.totalBookings;
  const progressPercentage = (totalBookings / milestones[milestones.length - 1]) * 100;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Flora Inn Admin</h2>
      <div className="admin-box-container">
        <div className="admin-box">
          Total Bookings
          <div className="count">{counts.totalBookings}</div>
        </div>
        <div className="admin-box">
          Total Amount
          <div className="count">₹{counts.totalAmount}</div>
        </div>
        <div className="admin-box">
          Pre Booked
          <div className="count">₹{counts.preBooked}</div>
        </div>
        <div className="admin-box">
          Custom Payment
          <div className="count">₹{counts.customPayment}</div>
        </div>
      </div>

      {/* Title for Checkpoint */}
      <h3 style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>Checkpoint</h3>

      {/* Horizontal Progress Tracker */}
      <div className="progress-container">
        <div className="progress-line" style={{ width: `${progressPercentage}%` }}></div>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`milestone ${totalBookings >= milestone ? 'achieved' : ''}`}
            style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
          >
            <div className="milestone-dot"></div>
            <span className="milestone-label">{milestone}</span>
          </div>
        ))}
      </div>

      {/* Scrollable pre-book details section */}
      <div className="scrollable-section">
        <h3 style={{ color: 'white', textAlign: 'center' }}>Pre-Book Details</h3>

        {/* Search option placed below the pre-book details */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <div className="scrollable-container">
          {filteredDetails.length === 0 ? (
            <p style={{ color: 'white', textAlign: 'center' }}>No data to show</p>
          ) : (
            filteredDetails.map((detail, index) => (
              <div className="detail-box" key={index}>
                <p><strong>Name:</strong> {detail.name}</p>
                <p><strong>Contact:</strong> {detail.contactNumber}</p> {/* Use contactNumber */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MainAPortal;
