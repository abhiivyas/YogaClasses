import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdmissionForm from './components/AdmissionForm';
import PaymentPage from './components/PaymentPage';
import PaymentSuccess from './components/PaymentSuccess';
import Home from './components/Home';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/paymentsuccessful" element={<PaymentSuccess />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
         </Routes>
     </Router>
  )
}

export default App