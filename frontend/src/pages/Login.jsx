import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can later add real login logic here
    navigate('/home'); // Redirect to home after login
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Login</h2>
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
