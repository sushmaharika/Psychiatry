import React from 'react';

const TreatmentFocus = () => {
  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center">Our Treatment Focus</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <div className="text-center">
          <img src="/assets/images/mental-health.jpg" alt="Mental Health" className="mx-auto rounded-full" />
          <h3 className="mt-4 text-xl font-bold">Mental Health</h3>
          <p>Mental health is our priority...</p>
          <button className="mt-2 bg-yellow-500 text-black px-4 py-2 rounded-lg">Learn More</button>
        </div>
        <div className="text-center">
          <img src="/assets/images/addiction-recovery.jpg" alt="Addiction" className="mx-auto rounded-full" />
          <h3 className="mt-4 text-xl font-bold">Addiction and Recovery</h3>
          <p>We offer treatments for overcoming addiction...</p>
          <button className="mt-2 bg-yellow-500 text-black px-4 py-2 rounded-lg">Learn More</button>
        </div>
        <div className="text-center">
          <img src="/assets/images/weight-loss.jpg" alt="Weight Loss" className="mx-auto rounded-full" />
          <h3 className="mt-4 text-xl font-bold">Supervised Weight Loss</h3>
          <p>Our supervised weight loss programs help...</p>
          <button className="mt-2 bg-yellow-500 text-black px-4 py-2 rounded-lg">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentFocus;
