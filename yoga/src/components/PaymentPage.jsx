import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [amount, setAmount] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const navigate = useNavigate()
  

  
  const completePayment = async () => {
    
    if (!amount || !creditCardNumber || creditCardNumber.length !== 8) {
      alert('Please enter valid amount and 8-digit credit card number');
      return;
    }

    
    await new Promise((resolve) => setTimeout(resolve, 2000));

    
    const paymentResponse = { success: true, message: 'Payment successful' };

    console.log('Payment Response:', paymentResponse);
    
    setPaymentStatus('Payment successful!');

    
    navigate("/paymentsuccessful")
  };


  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Enrollment Fee</h2>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount (Rs):
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="creditCardNumber" className="form-label">
              Credit Card Number (8 digits):
            </label>
            <input
              type="number"
              id="creditCardNumber"
              value={creditCardNumber}
              onChange={(e) => setCreditCardNumber(e.target.value)}
              className="form-control"
              maxLength="8"
              required
            />
          </div>
          <button className="btn btn-success" onClick={completePayment}>
            Pay
          </button>

          {}
          {paymentStatus && (
            <div className="mt-3 alert alert-success">{paymentStatus}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
