import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-lg">Feel free to reach out to me via email or phone. You can also connect with me on LinkedIn and GitHub.</p>
        <p className="text-lg mt-4">Email: <a href="mailto:ahsantahirrandhawa01@gmail.com" className="text-blue-500 hover:underline">ahsantahirrandhawa01@gmail.com</a></p>
        <p className="text-lg mt-2">Phone: <a href="tel:+14132756363" className="text-blue-500 hover:underline">413-275-6363</a></p>
        <p className="text-lg mt-2">LinkedIn: <a href="http://www.linkedin.com/in/ahsantahircs" className="text-blue-500 hover:underline">linkedin.com/in/ahsantahircs</a></p>
        <p className="text-lg mt-2">GitHub: <a href="https://github.com/AhsanRandhawa" className="text-blue-500 hover:underline">github.com/AhsanRandhawa</a></p>
      </div>
    </section>
  );
};

export default Contact;
