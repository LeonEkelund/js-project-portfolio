
import styled from 'styled-components';

const TechSection = () => {
  return (
    <TechWrapper>
      <TechInner>
        <TechTitle>Tech</TechTitle>
        <TechText>
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
          Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming,
          GitHub.
        </TechText>
      </TechInner>
    </TechWrapper>
  );
};

export default TechSection;

// STYLING

const TechWrapper = styled.section`
  width: 100%;
  background: #000000;         
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 6rem 1.5rem;
`;

const TechInner = styled.div`
  max-width: 100%;
  text-align: center;
`;

const TechTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 800;
  margin: 0 0 1.5rem 0;
`;

const TechText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
`;
