import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {
  FaBed, FaVideo, FaWifi, FaTshirt, FaHamburger, FaWater, FaShieldAlt, FaMusic, FaFire, FaUsers, FaDumbbell,
  FaSpa, FaUtensils, FaCoffee, FaListAlt, FaBriefcase, FaLaptop, FaDoorOpen, FaPlug, FaGamepad, FaYinYang,
  FaThLarge, FaGlassCheers, FaWhatsapp
} from 'react-icons/fa';
import './Amenities.css';

const amenitiesList = [
  { icon: <FaBed />, text: 'Fully Furnished Rooms' },
  { icon: <FaVideo />, text: 'CCTV Surveillance' },
  { icon: <FaWifi />, text: 'High Speed Wifi' },
  { icon: <FaTshirt />, text: 'Professional House Keeping' },
  { icon: <FaHamburger />, text: 'Healthy Food' },
  { icon: <FaWater />, text: 'Hot & Cool Water' },
  { icon: <FaShieldAlt />, text: 'Security' },
  { icon: <FaMusic />, text: 'Entertainment Zone' },
  { icon: <FaFire />, text: 'Barbeque Area' },
  { icon: <FaUsers />, text: 'Gathering Corner' },
  { icon: <FaDumbbell />, text: 'Gym' },
  { icon: <FaSpa />, text: 'Meditation Area' },
  { icon: <FaUtensils />, text: 'AC Dining Hall' },
  { icon: <FaDoorOpen />, text: '24/7 Gate Open' },
  { icon: <FaPlug />, text: 'Power Backup' },
  { icon: <FaGamepad />, text: 'Games Area' },
  { icon: <FaYinYang />, text: 'Yoga Area' },
  { icon: <FaThLarge />, text: 'Customized Rooms' },
  { icon: <FaGlassCheers />, text: 'Unlimited Juice' },
  { icon: <FaCoffee />, text: 'Coffee Vending Machine' },
  { icon: <FaListAlt />, text: 'Customized Food Menu' },
  { icon: <FaBriefcase />, text: 'Conference Room' },
  { icon: <FaLaptop />, text: 'Working Area' }
];

const Amenities = () => {
  const gridRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // State for contact modal
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false); // State for pricing modal

  useEffect(() => {
    const grid = gridRef.current;
    let scrollAmount = 1;
    let scrollDirection = 'down';

    const autoScroll = () => {
      if (!grid) return;

      if (scrollDirection === 'down') {
        grid.scrollTop += scrollAmount; // Scroll down
        if (grid.scrollTop + grid.clientHeight >= grid.scrollHeight) {
          scrollDirection = 'up'; // Switch direction at the bottom
        }
      } else {
        grid.scrollTop -= scrollAmount; // Scroll up
        if (grid.scrollTop === 0) {
          scrollDirection = 'down'; // Switch direction at the top
        }
      }
    };

    const intervalId = setInterval(autoScroll, 50); // Control the speed of the scroll

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleContactDetailsClick = () => {
    setIsContactModalOpen(true); // Open the contact modal
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false); // Close the contact modal
  };

  const handlePricingClick = () => {
    setIsPricingModalOpen(true); // Open the pricing modal
  };

  const closePricingModal = () => {
    setIsPricingModalOpen(false); // Close the pricing modal
  };


  return (
    <div className="amenities-container">
      {/* New Section with Boxed Buttons */}
      <div className="buttons-section">
        <button className="box-button" onClick={handleContactDetailsClick} style={{backgroundColor:"white",color:"#247a4d", fontWeight:"500"}}>Contact Details</button>
        <button className="box-button" style={{backgroundColor:"white",color:"#247a4d", fontWeight:"500"}}>Gallery</button> {/* Add onClick handler for Gallery */}
        <button className="box-button" onClick={handlePricingClick} style={{backgroundColor:"white",color:"#247a4d", fontWeight:"500"}}>Pricing</button>
      </div>

      <div className="amenities-grid scrollable" ref={gridRef}>
        {amenitiesList.map((amenity, index) => (
          <div key={index} className="amenity-item">
            <div className="amenity-icon-circle">
              {amenity.icon}
            </div>
            <p className="amenity-text">{amenity.text}</p>
          </div>
        ))}
      </div>

      {/* Modal for Contact Details */}
      {isContactModalOpen && (
        <div className="contactdetailmodal-overlay">
          <div className="contactdetailmodal-content">
            <h2>Contact Details</h2>
            <p>Email: heavensliving@gmail.com</p>
            <p>Phone: +91 8660 796 594</p>
            <p>WhatsApp: +91 8660 796 594</p>
            <p style={{ marginBottom: '20px' }}>Feel free to contact us.</p>
            <p>Expected date of property opening: December 2024</p>
            <button onClick={closeContactModal}>Close</button>
          </div>
        </div>
      )}

      {/* Modal for Pricing */}
      {isPricingModalOpen && (
        <div className="pricingmodal-overlay">
          <div className="pricingmodal-content">
            <h2>Our Pricing</h2>
            <p style={{ fontWeight: 'bold', color: '#ff0000' }}>Early Bird Offer is going!</p>
            <div className="price-chart">
              <div className="price-row">
                <span>4 Sharing:</span>
                <span className="striked-rate">₹7500</span>
                <span className="offer-rate">₹6500</span>
              </div>
              <div className="price-row">
                <span>3 Sharing:</span>
                <span className="striked-rate">₹8500</span>
                <span className="offer-rate">₹7000</span>
              </div>
              <div className="price-row">
                <span>2 Sharing:</span>
                <span className="striked-rate">₹9500</span>
                <span className="offer-rate">₹8000</span>
              </div>
            </div>
            <p style={{ marginTop: '20px' }}>
              <strong>Note:</strong><br />
              All deposits will be ₹3000.<br />
              Refundable deposit: ₹1000.<br />
              Pre-booking: ₹999 (non-refundable, will be reduced from your deposit).<br /><br></br>
              <strong style={{ color: '#ff0000' }}>The offer amount is only for prebooking after that, it will change to the normal rate.</strong>
            </p>
            <button onClick={closePricingModal}>Close</button>
          </div>
        </div>
      )}

      {/* New Section Below Amenities */}
      <div className="pricing-section">
        <div className="pricing-rectangle">
          <button className="pricing-button"></button>
          <button className="whatsapp-button">
            <FaWhatsapp className="whatsapp-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
