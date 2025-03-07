import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import PropTypes from 'prop-types';

const projects = [
  {
    title: "SkillPulse_Blockchain",
    description: "A blockchain-based skill verification platform",
    image: "https://via.placeholder.com/300",
    githubUrl: "https://github.com/PreciousMuemi/SkillPulse_Blockchain",
    demoUrl: "https://skillpulse-blockchain.vercel.app",
    techStack: ["React", "Solidity", "IPFS"]
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills",
    image: "https://via.placeholder.com/300",
    githubUrl: "https://github.com/PreciousMuemi/portfolio",
    demoUrl: "https://preciousmuemi.github.io",
    techStack: ["React", "TailwindCSS", "Framer Motion"]
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-[#112240] p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold text-[#64ffda] mb-2">{project.title}</h3>
      <p className="text-[#8892b0] mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span key={index} className="bg-[#0a192f] text-[#64ffda] px-2 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
        >
          <ExternalLink className="mr-2" size={16} />
          GitHub
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
        >
          <ExternalLink className="mr-2" size={16} />
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
    demoUrl: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#64ffda] mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
