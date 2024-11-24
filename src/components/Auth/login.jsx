import React from 'react';
import { toast } from 'react-toastify';

const Login = () => {

const loginHandler = (e) =>{
    e.preventDefault();
    console.log("here")
    toast.success("Logged In successfully!")

}


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <form className="mt-6" onSubmit={(e)=>
            loginHandler(e)
        }>
          <div className="mb-4">
            <label htmlFor="username" className="flex text-sm font-medium text-gray-400 self-start px-3">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Give yourself an identity!"
              className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="flex text-sm font-medium text-gray-400 self-start px-3">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="flex text-sm font-medium text-gray-400 self-start px-3">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
