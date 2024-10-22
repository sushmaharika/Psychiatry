import React from 'react';

const Services = () => {
  return (
    <section className="bg-white p-8">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="flex justify-around mt-6">
        <div className="text-center">
          <img src="https://media.istockphoto.com/id/1398189720/photo/young-smiling-caucasian-child-psychologist-sitting-with-an-adorable-little-girl-in-a-clinic.jpg?s=612x612&w=0&k=20&c=JWEjxpIoPtAApa8jQHe5OGPAUyFnE2QdYLO8uf1uw6k=" alt="Psychiatry" className="w-12 h-12 mx-auto" />
          <p className="mt-2">Psychiatry Evaluations</p>
        </div>
        <div className="text-center">
          <img src="https://media.istockphoto.com/id/1273886962/photo/close-up-of-doctor-is-touching-digital-virtual-screen-for-analytics-medical-data-medical.jpg?s=612x612&w=0&k=20&c=4YKZr6jmWCeZXGAlpcD8YF9HeV9FrC2bVklq5gtm9EA=" alt="Assessment" className="w-12 h-12 mx-auto" />
          <p className="mt-2">Medication Assessment</p>
        </div>
        <div className="text-center">
          <img src="https://media.istockphoto.com/id/1498161183/photo/woman-measuring-belly-fat.webp?a=1&b=1&s=612x612&w=0&k=20&c=XCMJhtsmChgvRympJopJf594uWlYdPsKp6YKw7Ylxpo=" alt="Weight Loss" className="w-12 h-12 mx-auto" />
          <p className="mt-2">Supervised Weight Loss</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
