import React from 'react';

const FounderSection = () => {
  return (
    <section className="bg-white p-8">
      <div className="flex items-center">
        <img src="/assets/images/founder.jpg" alt="Founder" className="w-1/4 rounded-lg" />
        <div className="ml-8">
          <h2 className="text-2xl font-bold">Meet The Founder</h2>
          <p>Dr. Habiba Rajkumar, expert in mental health care...</p>
          <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
