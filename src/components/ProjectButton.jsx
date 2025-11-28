
import styled from "styled-components";

const ProjectButton = ({ icon, text, link }) => {
  return (
    <Button href={link} target="_blank">
      {icon}
      {text}
    </Button>
  );
};

export default ProjectButton;

// STYLING

const Button = styled.a`
  background: #000;
  color: #fff;
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 0.9rem;
`;
