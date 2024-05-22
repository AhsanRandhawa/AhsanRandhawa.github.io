import React from 'react';

const Courses = () => {
  const courses = [
    "Information Theory",
    "Machine Learning",
    "Data Science",
    "Data Structures",
    "Databases",
    "Networks",
    "Algorithms",
    "Artificial Intelligence",
    "Systems",
    "Distributed Algorithms",
    "Computer Security",
    "Abstract Algebra",
    "Analysis",
    "Graph Theory"
  ];

  return (
    <section id="courses" className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded shadow-md hover:bg-gray-700 transition duration-300">
              <p className="text-lg">{course}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
