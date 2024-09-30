import React, { useState } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../styles/Auth.scss';

const Auth = () => {
    const { login, register } = useKindeAuth();
    const navigate = useNavigate(); // Use useNavigate for redirection
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isRegistering) {
                await register({ email, password }); // Registration logic
            } else {
                await login({ email, password }); // Login logic
            }
            navigate('/profile'); // Redirect to profile on success
        } catch (error) {
            console.error('Authentication failed:', error);
        }
    };

    return (
        <div className="auth-container">
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
            </form>
            <p onClick={() => setIsRegistering(!isRegistering)} style={{ cursor: 'pointer' }}>
                {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
            </p>
        </div>
    );
};

export default Auth;
