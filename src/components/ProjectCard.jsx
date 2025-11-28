
import styled from "styled-components";
import ProjectButton from "./ProjectButton";

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
          <ProjectButton text="Live demo" link={liveLink} />
          <ProjectButton text="View Code" link={codeLink} />
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
  gap: 3rem;
  margin: 5rem 0;

  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;

  img {
    width: 100%;
    border-radius: 16px;
  }
`;

const Content = styled.div`
  flex: 1;
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
  gap: 1rem;
  margin-top: 1rem;
`;
