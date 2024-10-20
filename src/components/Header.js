import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="logo text-xl">Psychiatry</div>
      <nav className="space-x-4">
        <a href="#about" className="hover:underline">About Us</a>
        <a href="#services" className="hover:underline">Our Services</a>
        <a href="#testimonials" className="hover:underline">Testimonials</a>
      </nav>
      <a href="#get-started" className="bg-yellow-500 text-black px-4 py-2 rounded-lg">Get Started</a>
    </header>
  );
};

export default Header;
