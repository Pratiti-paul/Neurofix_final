import React from 'react';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './LoginModal.css';

function LoginModal({ onClose }) {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      onClose(); 
    } catch (error) {
      console.error('Google sign-in error:', error.message);
      alert('Sign-in failed: ' + error.message);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Welcome to NeuroFix</h2>
        <button className="google-btn" onClick={handleGoogleSignIn}>
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            style={{ height: '20px', marginRight: '10px' }}
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
