import React, { useState } from "react";

const LostPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');  

  // Email Validation Function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

// check if the email is valid
  if(!isValidEmail(email)){
    setError('Please enter a valid email address.');
    return;
  }

  setLoading(true);
  try{
    //Simulate API call
    const response = await fetch('https://jobdhundo-backend-nl7q.onrender.com/auth/check-email', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if(!response.ok){
        throw new Error('Email not found or server error');
    }
    const result = await response.text();

    // Message + Redirect
    setMessage(result + "! Redirecting...");
    setTimeout(() => {
      window.location.href = `/reset-password?email=${email}`;
    }, 2000);
  }
  catch(error){
    setError(error.message);
  }
  finally{
    setLoading(false);
  }
   
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-purple-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-pink-600">Forgot Password</h2>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">@</span>
            <input
              type="email"
              className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 text-white font-semibold rounded-xl transition duration-300 ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600'
            }`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Reset Password'}
          </button>
          <p className="text-center text-gray-600">
            Remembered your password?{' '}
            <a href="/Join" className="text-pink-500 hover:underline">
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LostPassword;
