// Home.js
import React, { useState } from 'react';
import './Home.css';
import { FaPlus, FaQrcode, FaTimes, FaInfoCircle } from 'react-icons/fa'; // Import the icons
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import gpayImage from '../assets/Gpay.jpeg'; // Adjust the path based on your structure
import PreBookForm from './PreBookForm'; // Import the PreBookForm
import Amenities from './Amenities';

const Home = () => {
  const [isQrVisible, setQrVisible] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false); // State for form visibility
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

  const handleQrClick = () => {
    setQrVisible(!isQrVisible);
  };

  const handlePreBookClick = () => {
    setFormVisible(true); // Open the form
  };

  const handleCloseForm = () => {
    setFormVisible(false); // Close the form
  };

  const handleInfoClick = () => {
    setModalOpen(!isModalOpen); // Toggle the modal
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/yourwhatsappnumber', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <>
      <div className="home-container">
        <div className="header">
          <h1 className="logo">Heavens <span className='logoSub'>Living</span></h1>
          <h2 className="animated-text">Flora Inn</h2>
          <h3 className="animated-text">Booking Portal</h3>
        </div>
      </div>

      <div className="main-content">
        {!isModalOpen && <Amenities />} {/* Hide amenities when modal is open */}

        {/* Buttons for Info, PreBook, and QR */}
        <div className="button-group">
          <button className="info-button" onClick={handleInfoClick}>
            {isModalOpen ? <FaTimes className="info-icon animated-warning" /> : <FaInfoCircle className="info-icon animated-warning" />}
            <span className="help-text">Help</span>
          </button>
          <button className="prebook-button" onClick={handlePreBookClick}>
            <FaPlus className="add-icon" /> PreBook
          </button>
          <button className="qr-button" onClick={handleQrClick}>
            {isQrVisible ? <FaTimes className="qr-icon" /> : <FaQrcode className="qr-icon" />}
          </button>
        </div>

        {/* QR Code Image */}
        {isQrVisible && (
          <div className="qr-modal">
            <img src={gpayImage} alt="Gpay QR Code" className="qr-code-image" />
          </div>
        )}

        {/* Transparent form modal */}
        {isFormVisible && <PreBookForm onClose={handleCloseForm} />}

        {/* Modal for info */}
        {isModalOpen && (
          <div className="howtobookmodal">
            <div className="howtobookmodal-content">
              <h2 style={{textAlign:'center'}}>How to Book</h2>
              <ul>
                <li className="step"><strong>Step 1:</strong> Click on QR code and pay pre-book amount of <strong style={{fontSize:"18px"}}>₹999/-</strong>.</li>
                <li className="step"><strong>Step 2:</strong> Click on PreBook button and fill all the details.</li>
                <li className="step"><strong>Step 3:</strong> Submit the form and you will get a success message.</li>
              </ul>
              <p>Now the pre-booking has been completed, and you can contact us for any further details.</p>
              <div style={{display:"flex",justifyContent:"center"}}>
              <button onClick={handleInfoClick} className='howtobookclosebtn'>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* WhatsApp Contact Button */}
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <FaWhatsapp className="whatsapp-icon" />
      </button>
    </>
  );
};

export default Home;
