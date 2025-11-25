import HeaderSection from './sections/HeaderSection';
// import TechSection from './sections/TechSection';
// import ProjectsSection from './sections/ProjectsSection';
// import ThoughtsSection from './sections/ThoughtsSection';
// import SkillsSection from './sections/SkillsSection';
// import ContactSection from './sections/ContactSection';

import GlobalStyle from './styles/GlobalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <header>
        <HeaderSection />
      </header>

      {/* <main>
        <TechSection />
        <ProjectsSection />
        <ThoughtsSection />
        <SkillsSection />
      </main>

      <footer>
        <ContactSection />
      </footer> */}
    </>
  );
};
