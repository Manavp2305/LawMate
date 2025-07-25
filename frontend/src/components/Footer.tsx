import React from "react";

const Footer = () => (
  <footer id="footer" className="border-t flex justify-center py-8 bg-blue-50">
    <div className="text-sm text-gray-500 text-center">
      © {new Date().getFullYear()} LawMate. All rights reserved.<br />
      Built with <span className="text-blue-700">♥</span> by LawMate Team
    </div>
  </footer>
);

export default Footer; 