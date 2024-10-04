import React, { useState } from 'react';
import './PreBookForm.css'; // Add styles if needed

const PreBookForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    customAmount: '',
    customAmountDetails: '',
    transactionId: '',
    referralName: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false); // State for submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://prebookingb.onrender.com/api/prebook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Submission successful:', data);
        setIsSubmitted(true); // Set submission status to true
        setTimeout(onClose, 3000); // Close the form after 3 seconds
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="form-modal">
      {isSubmitted ? (
        <div className="success-message">
          <h3>Thank you for pre-booking!</h3>
          <p>Your request has been successfully submitted.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 style={{ textAlign: "center" }}>Enter Your Details</h3>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Contact Number:
            <input 
              type="tel" 
              name="contactNumber" 
              value={formData.contactNumber} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            PreBook Amount: <strong><span style={{ color: "#247a4d" }}>999 Rupees</span></strong>
          </label>
          <label>
            Custom Amount (optional):
            <input 
              type="number" 
              name="customAmount" 
              value={formData.customAmount} 
              onChange={handleChange} 
            />
          </label>

          {formData.customAmount && (
            <label>
              Custom Amount Details:
              <input 
                type="text" 
                name="customAmountDetails" 
                value={formData.customAmountDetails} 
                onChange={handleChange} 
                placeholder="Enter details about custom amount" 
                required 
              />
            </label> 
          )}

          <label>
            Referral Name (optional):
            <input 
              type="text" 
              name="referralName" 
              value={formData.referralName} 
              onChange={handleChange} 
              placeholder="Enter your referral name (if any)" 
            />
          </label>

          <label>
            Transaction ID:
            <input 
              type="text" 
              name="transactionId" 
              value={formData.transactionId} 
              onChange={handleChange} 
              required 
            />
          </label>

          <div className="button-container">
            <button 
              type="button" 
              className="close-button" 
              onClick={onClose}
            >
              Close
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PreBookForm;
