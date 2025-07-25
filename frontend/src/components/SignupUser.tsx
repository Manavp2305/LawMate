import React from "react";
import { FaUser, FaPhone, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SignupUser = () => (
  <section className="flex-1 w-full h-full flex justify-center items-center bg-gradient-to-b from-white to-blue-50 px-3 py-12">
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">User Signup</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-2 md:col-span-1 bg-white border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-400">
          <FaUser className="text-gray-400" />
          <input type="text" placeholder="Name" className="flex-1 py-3 bg-transparent focus:outline-none" required />
        </div>
        <div className="flex items-center gap-2 md:col-span-1 bg-white border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-400">
          <MdEmail className="text-gray-400" />
          <input type="email" placeholder="Email" className="flex-1 py-3 bg-transparent focus:outline-none" required />
        </div>
        <div className="flex items-center gap-2 md:col-span-1 bg-white border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-400">
          <FaPhone className="text-gray-400" />
          <input type="tel" placeholder="Phone Number" className="flex-1 py-3 bg-transparent focus:outline-none" required />
        </div>
        <div className="flex items-center gap-2 md:col-span-1 bg-white border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-400">
          <FaLock className="text-gray-400" />
          <input type="password" placeholder="Password" className="flex-1 py-3 bg-transparent focus:outline-none" required />
        </div>
        <div className="flex items-center gap-2 md:col-span-2 bg-white border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-400">
          <FaLock className="text-gray-400" />
          <input type="password" placeholder="Confirm Password" className="flex-1 py-3 bg-transparent focus:outline-none" required />
        </div>
        <button type="submit" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition md:col-span-2">Signup</button>
      </form>
    </div>
  </section>
);

export default SignupUser; 