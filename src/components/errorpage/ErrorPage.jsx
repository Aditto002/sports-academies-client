import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/14032880/pexels-photo-14032880.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }}
    >
      <div className="text-center animate__animated animate__bounce mt-15">
        <h1 className="text-9xl font-bold text-red-500 animate__animated animate__slideInLeft">
          404
        </h1>
        <p className="text-3xl font-medium text-white">Page Not Found</p>
       <Link to='/'> <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
          Home
        </button></Link>
      </div>
    </div>
  );
}

export default ErrorPage;
