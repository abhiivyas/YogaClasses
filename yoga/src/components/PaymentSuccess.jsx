import React from 'react';
import "../styles/PaymentSuccess.css";
import imgSrc from "../components/img.jpg"

const PaymentSuccess = () => {
  
  return (
    <div className="payment-success-container">
      <div className="container">
       <div className='paymentSuccess_img'>
       <img src={imgSrc}  alt="" />
       </div>
        <h1>Congratulations! Your payment is successful.</h1>
     {/* <button>
     <Link to="/profile">See Profile</Link>
     </button> */}
      </div>
      <div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
