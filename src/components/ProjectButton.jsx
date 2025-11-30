import styled from "styled-components";

const ProjectButton = ({ icon, text, link }) => {
  return (
    <Button href={link} target="_blank">
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <span>{text}</span>
    </Button>
  );
};

export default ProjectButton;

/* STYLING */

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;

  width: 250px;
  height: 48px;
  padding: 0 16px;
  box-sizing: border-box;

  background: #000000;
  color: #ffffff;
  border-radius: 12px;

  text-decoration: none;
  font-size: 0.875rem; /* 14px */
  font-weight: 500;

  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.8;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    color: #ffffff; 
  }
`;
