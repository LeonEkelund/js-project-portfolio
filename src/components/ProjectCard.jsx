
import styled from "styled-components";
import ProjectButton from "./ProjectButton";
import { FaGlobe, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  image,
  tech,
  title,
  description,
  liveLink,
  codeLink,
  reverse
}) => {
  return (
    <Card reverse={reverse}>
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>

      <Content>
        <TechList>
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </TechList>

        <h3>{title}</h3>
        <p>{description}</p>

        <Buttons>
          <ProjectButton
            icon={<FaGlobe />}
            text="Live demo"
            link={liveLink}
          />
          <ProjectButton
            icon={<FaGithub />}
            text="View Code"
            link={codeLink}
          />
        </Buttons>
      </Content>
    </Card>
  );
};


export default ProjectCard;

/* STYLING */

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5rem;         
  margin: 4rem auto; 
  width: 100%;
  max-width: 1000px;  

  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  /* IPAD */
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.75rem;
    margin: 3rem auto;
    padding: 0 1.5rem;  
  }

  /* MOBILE */
  @media (max-width: 600px) {
    gap: 1.5rem;
    margin: 2.5rem auto;
    padding: 0 1.25rem;
  }
`;

const ImageWrapper = styled.div`
  /* DESKTOP */
  flex: 0 0 479px;
  height: 479px;
  border-radius: 16px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 16px;
    display: block;
  }

  /* IPAD:
  @media (max-width: 1024px) {
    flex: 0 0 auto;
    width: 100%;
    max-width: none;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  /* MOBILE:
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;     
  text-align: left;

    /* IPAD:
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 650px;
  }
  /* MOBILE:
  @media (max-width: 600px) {
    max-width: none;
  }
`;

const TechList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  span {
    border: 1px solid #000;
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    border-radius: 4px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;