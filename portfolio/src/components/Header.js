import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold">Ahsan Tahir</h1>
        <p className="text-2xl mt-2">Software Engineer</p>
        <nav className="mt-4">
          <a href="#about" className="text-lg mx-2 hover:underline">About</a>
          <a href="#awards" className="text-lg mx-2 hover:underline">Awards</a>
          <a href="#experience" className="text-lg mx-2 hover:underline">Experience</a>
          <a href="#projects" className="text-lg mx-2 hover:underline">Projects</a>
          <a href="#courses" className="text-lg mx-2 hover:underline">Courses</a>
          <a href="#contact" className="text-lg mx-2 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
