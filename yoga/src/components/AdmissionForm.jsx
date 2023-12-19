import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/AdmissionForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdmissionForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    selectedBatch: '',
  });

  const [ageError, setAgeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Handle email validation separately
    if (name === 'email') {
      validateEmail(value);
    }
  };




  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setEmailError('Enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Age validation
    const age = parseInt(formData.age, 10);

    if (isNaN(age) || age < 18 || age > 65) {
      setAgeError('Age must be between 18 and 65');
      return;
    } else {
      setAgeError('');
    }

    // Assuming you have an API endpoint for form submission
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setPaymentStatus('Form submitted successfully');

        navigate('/payment');
      } else {
        console.error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };


  return (
    <div className="container mt-5">

      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Yoga Class Admission Form</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className={`form-control ${ageError ? 'is-invalid' : ''}`}
                required
              />
              {ageError && <div className="invalid-feedback">{ageError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="selectedBatch" className="form-label">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                    required
                  />
                  {/* Display email error message if needed */}
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                Select Batch:
              </label>
              <select
                id="selectedBatch"
                name="selectedBatch"
                value={formData.selectedBatch}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Select Batch</option>
                <option value="6-7AM">6-7AM</option>
                <option value="7-8AM">7-8AM</option>
                <option value="8-9AM">8-9AM</option>
                <option value="5-6PM">5-6PM</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>

            {/* Display payment status */}
            {paymentStatus && (
              <div className={`alert mt-3 ${paymentStatus.includes('successful') ? 'alert-success' : 'alert-danger'}`}>
                {paymentStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdmissionForm;