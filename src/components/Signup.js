import React, { useState } from 'react';
import firebase from './components/firebase'; // Import Firebase configuration
import './SignupForm.css'; // Import CSS file for styling
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track signup success

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Create user with email and password
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User has successfully signed up.'); // Log success message

      // Automatically log in the user after successful signup
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User has successfully logged in.'); // Log login success message

      // Set signupSuccess to true to display login link
      setSignupSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      {/* Display login link if signup was successful */}
      {signupSuccess && (
        <p>
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      )}
    </div>
  );
}

export default SignupForm;
