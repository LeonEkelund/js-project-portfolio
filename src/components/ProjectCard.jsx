
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
  align-items: center;          /* center image + text vertically */
  gap: 7.8rem;                  /* ≈125px, like Figma */
  margin: 5rem auto;
  width: 100%;                  /* <-- NEW: all cards same width */
  max-width: 1100px;

  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 479px;              /* fixed width, doesn't shrink */
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
    object-fit: contain;        /* full image visible */
    border-radius: 12px;
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 479px;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  flex-direction: column;  /* STACK */
  gap: 0.5rem;             /* 8px between buttons */
  margin-top: 1rem;
`;
