import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [amount, setAmount] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const navigate = useNavigate()
  

  // Mock function for payment (replace with actual implementation)
  const completePayment = async () => {
    // Validate amount and credit card number
    if (!amount || !creditCardNumber || creditCardNumber.length !== 8) {
      alert('Please enter valid amount and 8-digit credit card number');
      return;
    }

    // Simulating payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock payment response
    const paymentResponse = { success: true, message: 'Payment successful' };

    console.log('Payment Response:', paymentResponse);
    // Handle payment response and update UI accordingly

    // For simplicity, you can display a success message here
    setPaymentStatus('Payment successful!');

    // Send email to the user
    const emailData = {
      name: 'User Name', // Replace with the actual user's name
      email: 'user@example.com', // Replace with the actual user's email
      selectedBatch: 'Selected Batch', // Replace with the actual selected batch
    };

    // try {
    //   const response = await fetch('http://localhost:3001/api/send-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(emailData),
    //   });

    //   if (response.ok) {
    //     console.log('Email sent successfully');
    //   } else {
    //     console.error('Failed to send email');
    //   }
    // } catch (error) {
    //   console.error('Error sending email:', error);
    // }
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

          {/* Display payment status */}
          {paymentStatus && (
            <div className="mt-3 alert alert-success">{paymentStatus}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
