// Amenities.js
import React from 'react';
import { FaBed, FaVideo, FaWifi, FaTshirt, FaHamburger, FaWater, FaShieldAlt, FaMusic, FaFire, FaUsers, FaDumbbell, FaSpa, FaUtensils } from 'react-icons/fa';
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
  { icon: <FaUtensils />, text: 'AC Dining Hall' }
];

const Amenities = () => {
  return (
    <>
    <div className="amenities-container">
      <div className="amenities-grid">
        {amenitiesList.map((amenity, index) => (
          <div key={index} className="amenity-item">
            <div className="amenity-icon-circle">
              {amenity.icon}
            </div>
            <p className="amenity-text">{amenity.text}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Amenities;
