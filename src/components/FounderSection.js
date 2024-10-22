import React from 'react';

const FounderSection = () => {
  return (
    <section className="bg-white p-8">
      <div className="flex items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvl7fLhrV28AluLphV1fXUXfWHozHUqWy6g&s" alt="Founder" className="w-1/4 rounded-lg" />
        <div className="ml-8">
          <h2 className="text-2xl font-bold">Meet The Founder</h2>
          <p>Dr. Swetha Raj, expert in mental health care...</p>
          <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
