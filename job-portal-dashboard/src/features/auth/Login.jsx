import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('seeker');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ user: username, role }));
        navigate('/dashboard');
    };

    return (
        
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required/>
            
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="seeker">Job Seeker</option>
                <option value="manager">Hiring Manager</option>
                <option value="recruiter">Recruiter</option>
            </select>
            
            <button type="submit">Login</button>
        </form>

  );
};

export default Login;