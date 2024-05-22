import React, { useState } from 'react';

const Experience = () => {
  const [showMore, setShowMore] = useState({});

  const experiences = [
    {
      title: "Research Assistant for Distributed Computing",
      organization: "Amherst College Computer Science Department",
      duration: "June 2023 - Present",
      details: [
        "Collaborated with Dr. William Rosenbaum to research the PULL model of distributed computing",
        "Crafted algorithms to prove upper bounds for any distributed algorithm in the PULL model",
        "Writing a 50-page thesis documenting these findings"
      ]
    },
    {
      title: "President",
      organization: "Amherst College Computer Science Club",
      duration: "January 2023 - Present",
      details: [
        "Organized events, including CS formal, tech talks, and weekly algorithmic problem-solving events, for 100+ students",
        "Coordinated a team of 10 people to spearhead Amherst College’s first Hackathon"
      ]
    },
    {
      title: "Software Engineering Intern",
      organization: "Quantitative Reasoning for College Science Study",
      duration: "October 2022 - December 2023",
      details: [
        "Reduced batch processing time by a factor of 20 through integrating efficient API calls to Qualtrics and redesigning the ETL pipeline",
        "Built a public database by leveraging Pandas to clean and organize survey data from 15,000+ records, while encrypting private data",
        "Increased scalability by adding functionality that automatically updates the instructors’ list on Qualtrics",
        "Improved codebase robustness by implementing unit tests"
      ]
    },
    {
      title: "Undergraduate Teaching Assistant",
      organization: "Amherst College Computer Science Department",
      duration: "September 2022 - December 2022",
      details: [
        "Tutored 100+ students in advanced Computer Science courses",
        "Developed solutions for assignments with well-defined expectations, actively assisting the professor in their creation",
        "Created grading rubric, and grading standards and provided detailed feedback to students"
      ]
    },
    {
      title: "Research Assistant for Evolutionary Computing",
      organization: "Amherst College Computer Science Department",
      duration: "June 2022 - July 2022",
      details: [
        "Collaborated with Dr. Lee Spector to find a new way to implement mutations for PushGP - genetic programming that works with the evolution of push programs",
        "Ideated anywhere-UMAD: a new variation of Uniform Mutation by Addition and Deletion",
        "Implemented the new mutation type in Propeller - a push-based genetic programming system in Clojure",
        "Ran simulations on a cluster to confirm that this new mutation method works as well as UMAD but with more flexibility regarding the distribution used to add or remove genes"
      ]
    }
  ];

  const toggleShowMore = (index) => {
    setShowMore((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="experience" className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold">{experience.title}</h3>
              <p className="text-lg">{experience.organization}</p>
              <p className="text-sm text-gray-600">{experience.duration}</p>
              <button
                className="mt-2 mb-2 text-blue-400 hover:underline"
                onClick={() => toggleShowMore(index)}
              >
                {showMore[index] ? "Show Less" : "Show More"}
              </button>
              {showMore[index] && (
                <ul className="list-disc list-inside ml-4 mt-2 text-lg">
                  {experience.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
