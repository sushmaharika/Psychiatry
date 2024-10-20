import React from 'react';

const Services = () => {
  return (
    <section className="bg-white p-8">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="flex justify-around mt-6">
        <div className="text-center">
          <img src="/assets/images/psychiatry-icon.png" alt="Psychiatry" className="w-12 h-12 mx-auto" />
          <p className="mt-2">Psychiatry Evaluations</p>
        </div>
        <div className="text-center">
          <img src="/assets/images/assessment-icon.png" alt="Assessment" className="w-12 h-12 mx-auto" />
          <p className="mt-2">Medication Assessment</p>
        </div>
        <div className="text-center">
          <img src="/assets/images/weightloss-icon.png" alt="Weight Loss" className="w-12 h-12 mx-auto" />
          <p className="mt-2">Supervised Weight Loss</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
