import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!dob.trim()) {
      newErrors.dob = 'Date of Birth is required';
    }

    if (!age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(age) || +age <= 5) {
      newErrors.age = 'Invalid age';
    }

    if (!gender.trim()) {
      newErrors.gender = 'Gender is required';
    }

    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
      newErrors.mobile = 'Invalid mobile number';
    }

    if (!address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(pincode)) {
      newErrors.pincode = 'Invalid pincode';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    axios.post('http://localhost:3001/profile', { dob, age, gender, mobile, address, pincode})
    .then(() => {
      alert("Profile registered Successfully!");
      navigate('/home');
    })
    .catch((err) => {
      alert("Profile not Registered");
      navigate('/register');
      console.error(err); 
    })
    
    setErrors({});

  };

  

  return (
    <div>
        <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
          <div className="bg-white p-3 rounded mt-3" style={{width : '40%'}}>
            <h2 className='mb-2 text-primary'>Profile</h2>
            <p>Share more Explore More !</p>
            <form onSubmit={handleSubmit}>
            <div className="mb-2 text-start">
            <label htmlFor="dob" className="form-label">
              <strong>Date of Birth</strong>
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
              required
            />
            {errors.dob && <div className="text-danger">{errors.dob}</div>}
          </div>

          <div className="mb-2 text-start">
            <label htmlFor="age" className="form-label">
              <strong>Age</strong>
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              required
            />
            {errors.age && <div className="text-danger">{errors.age}</div>}
          </div>

          <div className="mb-2 text-start">
            <label htmlFor="gender" className="form-label">
              <strong>Gender</strong>
            </label>
            <select
              className="form-control"
              id="gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <div className="text-danger">{errors.gender}</div>}
          </div>

          <div className="mb-2 text-start">
            <label htmlFor="mobile" className="form-label">
              <strong>Mobile</strong>
            </label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
              required
            />
            {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
          </div>

          <div className="mb-2 text-start">
            <label htmlFor="address" className="form-label">
              <strong>Address</strong>
            </label>
            <textarea
              className="form-control"
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
            {errors.address && <div className="text-danger">{errors.address}</div>}
          </div>

          <div className="mb-2 text-start">
            <label htmlFor="pincode" className="form-label">
              <strong>Pincode</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              value={pincode}
              onChange={(event) => setPincode(event.target.value)}
              required
            />
            {errors.pincode && <div className="text-danger">{errors.pincode}</div>}
          </div>

          <button type="submit" className="btn btn-primary">Add Profile</button>
          </form>
        </div>
      </div>
    



    </div>
  )
}

export default Profile