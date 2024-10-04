import React, { useRef, useEffect } from 'react';
import { FaBed, FaVideo, FaWifi, FaTshirt, FaHamburger, FaWater, FaShieldAlt, FaMusic, FaFire, FaUsers, FaDumbbell, FaSpa, FaUtensils, FaCoffee, FaListAlt, FaBriefcase, FaLaptop } from 'react-icons/fa';
import { FaDoorOpen, FaPlug } from 'react-icons/fa'; // Import new icons for the additional amenities
import { FaGamepad, FaYinYang, FaThLarge, FaGlassCheers } from 'react-icons/fa'; // Add icons for new amenities
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
  { icon: <FaDoorOpen />, text: 'Smoking Room' }, // New amenity
  { icon: <FaDoorOpen />, text: '24/7 Gate Open' }, // New amenity
  { icon: <FaPlug />, text: 'Power Backup' }, // New amenity
  { icon: <FaGamepad />, text: 'Games Area' }, // New amenity
  { icon: <FaYinYang />, text: 'Yoga Area' }, // New amenity
  { icon: <FaThLarge />, text: 'Customized Rooms' }, // New amenity
  { icon: <FaGlassCheers />, text: 'Unlimited Juice' }, // New amenity
  { icon: <FaCoffee />, text: 'Coffee Vending Machine' },
  { icon: <FaListAlt />, text: 'Customized Food Menu' },
  { icon: <FaBriefcase />, text: 'Conference Room' },
  { icon: <FaLaptop />, text: 'Working Area' }
];

const Amenities = () => {
  const gridRef = useRef(null);

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

  return (
    <div className="amenities-container">
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
    </div>
  );
};

export default Amenities;
