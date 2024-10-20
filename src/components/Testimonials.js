import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center">What Our Patients Are Saying</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-4 bg-white shadow-lg">
          <p>"Psychiatry took a lot of the anxiety out of the process..."</p>
          <p className="mt-2 font-bold">- John Doe</p>
        </div>
        <div className="p-4 bg-white shadow-lg">
          <p>"Their services helped me get back on track..."</p>
          <p className="mt-2 font-bold">- Jane Smith</p>
        </div>
        <div className="p-4 bg-white shadow-lg">
          <p>"Excellent care and knowledgeable professionals..."</p>
          <p className="mt-2 font-bold">- Sarah Lee</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
