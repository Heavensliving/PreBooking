// Home.js
import React, { useState } from 'react';
import './Home.css';
import { FaPlus, FaQrcode, FaTimes } from 'react-icons/fa';
import gpayImage from '../assets/Gpay.jpeg'; // Adjust the path based on your structure
import PreBookForm from './PreBookForm'; // Import the PreBookForm
import Amenities from './Amenities';


const Home = () => {
  const [isQrVisible, setQrVisible] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false); // State for form visibility

  const handleQrClick = () => {
    setQrVisible(!isQrVisible);
  };

  const handlePreBookClick = () => {
    setFormVisible(true); // Open the form
  };

  const handleCloseForm = () => {
    setFormVisible(false); // Close the form
  };

  return (
    <>
    <div className="home-container">
    <div className="header">
    <h1 className="logo">Heavens <span className='logoSub'>Living</span></h1>
    <h2 className="animated-text">Flora Inn</h2>
    <h3 className="animated-text">Booking Portal</h3>
  </div>



      {/* Main content wrapper to control layout */}
     
    </div>

    <Amenities />

<div className="main-content">
      
{/* Buttons for PreBook and QR */}
<div className="button-group">
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
</div>
</>
   
  );
};

export default Home;
