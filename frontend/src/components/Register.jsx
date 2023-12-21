import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

      
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            newErrors.password = 'Password must Contain multiple characters > 8';
        }

        if (!confirmPassword.trim()) {
            newErrors.confirmPassword = 'Confirm Password is required';
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.")
                    navigate('/login');
                }
                
            })
            .catch(err => console.log(err));

        setErrors({});
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
                <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
                    <h2 className='mb-3 text-primary'>Register</h2>
                    <p>Fill your Values here !</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="Name" className="form-label">
                                <strong >Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                            {errors.name && <div className="text-danger">{errors.name}</div>}
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="Email" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                id="Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="Password1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                id="Password1"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="ConfirmPassword" className="form-label">
                                <strong>Confirm Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="form-control"
                                id="ConfirmPassword"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                required
                            />
                            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>

                    <p className='container my-2'>Already have an account ?</p>
                    <Link to='/login' className="btn btn-secondary">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;
