import React from "react";

const LoginLawyer = () => (
  <section className="flex justify-center items-center min-h-[60vh] bg-gradient-to-b from-white to-blue-50 px-3 py-12">
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Lawyer Login</h2>
      <form className="flex flex-col gap-4">
        <input type="email" placeholder="Email" className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <input type="password" placeholder="Password" className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <button type="submit" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition">Login</button>
      </form>
    </div>
  </section>
);

export default LoginLawyer; 