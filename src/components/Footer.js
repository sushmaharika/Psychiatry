import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold">Contact Us</h3>
          <p>123 Psychiatry St, Mental Health City</p>
          <p>Email: contact@psychiatry.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <img src="/assets/images/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
            <img src="/assets/images/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
            <img src="/assets/images/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
          </div>
        </div>
      </div>
      <p className="mt-8 text-center">© 2024 Psychiatry All rights reserved</p>
    </footer>
  );
};

export default Footer;
