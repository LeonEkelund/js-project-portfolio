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
  max-width: 900px;
  width: 100%;
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
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const Column = styled.div`
  min-width: 140px;
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
