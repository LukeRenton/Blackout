import React, { useState } from 'react';
import './DonationPage.css';
import DonationService from '../../services/Donation.service';

export default function DonationPage(props) {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonation = (amount) => {
    setDonationAmount(amount);
    // Add your code here to handle the donation (e.g., integrate with Stripe or PayPal)
  };

  const handleCustomDonation = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code here to handle the donation (e.g., integrate with Stripe or PayPal)
    if (donationAmount > 0) {
      const service = new DonationService;
      service.addDonation(props.user,donationAmount);
    }
  };

  return (
    <div className='donation_root'>
      <div className="donation_container">
        <h1>Donate Now</h1>
        <div className="donation-boxes">
          <div className="donation-box" 
          style={{ opacity: 0.1}} 
          onClick={() => handleDonation(10)}>R10</div>
          <div className="donation-box" 
          style={{ opacity: 0.25}}
          onClick={() => handleDonation(25)}>R25</div>
          <div className="donation-box" 
          style={{ opacity: 0.5}}
          onClick={() => handleDonation(50)}>R50</div>
          <div className="donation-box" 
          style={{ opacity: 0.75}}
          onClick={() => handleDonation(100)}>R100</div>
          <div className="donation-box" 
          style={{ opacity: 1.0}}
          onClick={() => handleDonation(200)}>R200</div>
        </div>
        <form className="custom-donation-form" onSubmit={(e) => {handleSubmit(e)}}>
          <label className='lbl_custom-amount' htmlFor="custom-amount">Enter custom amount:</label>
          <input
            type="number"
            id="custom-amount"
            name="custom-amount"
            min="1"
            value={donationAmount}
            onChange={handleCustomDonation}
            placeholder="Custom Amount"
          />
          <button type="submit">Donate</button>
        </form>
      </div>
    </div>
  );
};