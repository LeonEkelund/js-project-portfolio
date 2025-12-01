import styled from "styled-components";

const skills = [
  {
    title: "Code",
    items: [
      "HTML5",
      "CSS3",
      "Javascript ES6",
      "React",
      "Typescript",
      "Tailwind",
      "GitHub",
      "Electron",
    ],
  },
  {
    title: "Toolbox",
    items: [
      "Every popular DAW",
      "Jira",
      "Adobe Suite",
      "Figma",
      "Blender",
    ],
  },
  {
    title: "Upcoming",
    items: ["Node.js"],
  },
  {
    title: "More",
    items: [],
  },
];

const SkillsSection = () => {
  return (
    <SkillsWrapper>
      <SkillsInner>
        <Title>Skills</Title>

        <Columns>
          {skills.map((group) => (
            <Column key={group.title}>
              <CategoryLabel>{group.title}</CategoryLabel>
              <List>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </List>
            </Column>
          ))}
        </Columns>
      </SkillsInner>
    </SkillsWrapper>
  );
};

export default SkillsSection;

// STYLING

const SkillsWrapper = styled.section`
  width: 100%;
  background: #000;
  color: #fff;
  padding: 6rem 1.5rem;
  display: flex;
  justify-content: center;
`;

const SkillsInner = styled.div`
  width: 100%;
  max-width: 900px;

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  font-weight: 800;
  margin: 0 0 3rem 0;
`;

const Columns = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: flex-start;

  /* IPAD */
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;    
    align-items: center;       
    justify-content: flex-start;
    text-align: center;         
    gap: 2rem;
  }

  /* MOBILE */
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1.5rem;
  }
`;

const Column = styled.div`
  min-width: 140px;

  /* IPAD */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 260px;              
  }

  /* MOBILE */
  @media (max-width: 767px) {
    width: 100%;
  }
`;



const CategoryLabel = styled.div`
  display: flex;
  padding: 2px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 1px solid #fff;
  background: transparent;
  font-size: 0.85rem;
  margin-bottom: 0.75rem;

  /* MOBILE */
  @media (max-width: 767px) {
    width: max-content;
    min-width: 120px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;
