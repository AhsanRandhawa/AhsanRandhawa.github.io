import React, { useState } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState({});

  const projects = [
    {
      title: "Database Web App for Amherst College Religion Library",
      duration: "Sep 2023 - Dec 2023",
      description: [
        "Designed the relational database for the religion library at Amherst College",
        "Utilized React with Tailwind CSS to implement the front-end for the website of the library",
        "Implemented REST API calls in the development of the web application, incorporating CRUD operations"
      ],
      technologies: ["React", "Tailwind CSS", "PostgreSQL", "TypeScript"],
      github: "https://github.com/AhsanRandhawa/DivineManuscriptsDB",
      live: ""
    },
    {
      title: "MinervAI – HACKUMASS XI Winner",
      duration: "Nov 2023 - Nov 2023",
      description: [
        "Simulated a classroom environment for educators by leading the production code for the backend of the pedagogy AI tool",
        "Crafted a professor agent and multiple student agents with distinct personalities and backgrounds using Microsoft's semantic kernel",
        "Significantly enhanced processing speed by implementing concurrent code for API requests to GPT-4",
        "Enhanced question analysis by employing cosine similarity of vectorized questions to detect question similarity among different students"
      ],
      technologies: ["Python", "TensorFlow", "OpenAI", "Semantic Kernel", "TypeScript"],
      github: "https://github.com/AhsanRandhawa/MinervAI",
      live: "https://devpost.com/software/minervai"
    },
    {
      title: "Premier League Analysis",
      duration: "April 2023 - May 2023",
      description: [
        "Created a blog post identifying the highest-performing teams in the Premier League by utilizing web-scraping and k-means cluster analysis",
        "Created interactive tables and network graphs by employing the Shiny App and igraph packages"
      ],
      technologies: ["R", "Shiny", "igraph"],
      github: "https://github.com/stat231-s23/blog2-TheBigThree",
      live: "https://stat231-s23.github.io/blog2-TheBigThree/"
    },
    {
      title: "Wordle Bot",
      duration: "March 2023 - April 2023",
      description: [
        "Crafted a Wordle Bot using Java and Spring Boot, utilizing information theory to generate optimal guesses based on user feedback",
        "Built a dynamic React front-end, enabling real-time user interactions and secure API communication with the backend",
        "Deployed the application on AWS Elastic Beanstalk"
      ],
      technologies: ["Java"],
      github: "https://github.com/AhsanRandhawa/WordleBot",
      live: "http://wordlebot-env-1.eba-kwi9hfra.us-east-2.elasticbeanstalk.com"
    },
    {
      title: "SKARTA – A 2D Platformer Game",
      duration: "April 2020 - June 2020",
      description: [
        "Spearheaded a highly skilled 3-person team to craft an immersive 2D Platformer Java game, showcasing proficiency in Object-Oriented Programming",
        "Engineered a cutting-edge physics engine synchronized with innovative gameplay elements like character-switching and wall-sliding",
        "Designed captivating game levels and bosses boasting intricate attack patterns",
        "Implemented robust data storage solutions and optimized performance through parallel threads"
      ],
      technologies: ["Java"],
      github: "https://github.com/AhsanRandhawa/SKARTA",
      live: "https://drive.google.com/drive/folders/1twxcHBOsECYPwAMWRgG7u49S_gbG2SgN?usp=sharing"
    }
  ];

  const toggleShowMore = (index) => {
    setShowMore((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="projects" className="p-8 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.duration}</p>
              <button
                className="mt-2 mb-2 text-blue-400 hover:underline"
                onClick={() => toggleShowMore(index)}
              >
                {showMore[index] ? "Show Less" : "Show More"}
              </button>
              {showMore[index] && (
                <>
                  <ul className="list-disc list-inside ml-4 mt-2 text-lg">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-lg">Technologies Used:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 text-lg">
                    {project.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}
              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mr-4"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;