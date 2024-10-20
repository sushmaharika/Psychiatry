import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-white p-8">
        <h1 className="text-4xl font-bold">Need a Mental Health Provider?</h1>
        <p className="mt-4 text-lg">Get help for anxiety, depression, addiction, and more.</p>
        <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
