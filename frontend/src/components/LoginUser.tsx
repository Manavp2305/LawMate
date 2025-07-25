import React from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginUser = () => (
  <section className="flex justify-center items-center min-h-[60vh] bg-gradient-to-b from-white to-blue-50 px-3 py-12">
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">User Login</h2>
      <form className="flex flex-col gap-4">
        <div className="flex items-center gap-2 bg-white border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-400">
          <MdEmail className="text-gray-400" />
          <input type="email" placeholder="Email" className="flex-1 py-3 bg-transparent focus:outline-none" required />
        </div>
        <div className="flex items-center gap-2 bg-white border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-400">
          <FaLock className="text-gray-400" />
          <input type="password" placeholder="Password" className="flex-1 py-3 bg-transparent focus:outline-none" required />
        </div>
        <button type="submit" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition">Login</button>
      </form>
    </div>
  </section>
);

export default LoginUser; 