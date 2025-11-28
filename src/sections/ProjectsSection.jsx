import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import projectImg1 from "../assets/project1.jpg";
import projectImg2 from "../assets/project2.jpg";
import projectImg3 from "../assets/project3.jpg";

const projects = [
  {
    image: projectImg1,
    tech: ["HTML5", "CSS3", "React", "Tailwind"],
    title: "Pomodoro timer",
    description: "A pomodoro timer with a clean UI.",
    liveLink: "https://fatalistimer.netlify.app/",
    codeLink: "https://github.com/LeonEkelund/fatalis-timer"
  },
  {
    image: projectImg2,
    tech: ["HTML5", "CSS3", "Typescript", "Tailwind"],
    title: "Quiz bonanza",
    description:
      "An accessible quiz that works fully without your mouse, using API.",
    liveLink: "https://quizbonanza.netlify.app/",
    codeLink: "https://github.com/gabriellaberko/js-project-accessibility"
  },
  {
    image: projectImg3,
    tech: ["React", "Tailwind", "Lenis", "Framer Motion"],
    title: "Band page",
    description:
      "A modern bandpage with animations and smoothscroll.",
    liveLink: "https://band-page.netlify.app/",
    codeLink: "https://github.com/LeonEkelund/band-page"
  }
];

const ProjectsSection = () => {
  return (
    <Wrapper>
      <h2>Featured Projects</h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          {...project}
          reverse={index % 2 !== 0}
        />
      ))}
    </Wrapper>
  );
};

export default ProjectsSection;

// STYLING

const Wrapper = styled.section`
  padding: 6rem 1.5rem;
  max-width: 80%;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 2.5rem;
  }
`;
