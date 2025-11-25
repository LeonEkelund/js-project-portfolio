import styled from 'styled-components';
import leonImage from '../assets/leonimage.png';


const HeaderSection = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <ImageCard />

        <TextGroup>
          <Title>
            Hi there, I'm <Name>Leon Ekelund</Name>
          </Title>
          <Subtitle>Frontend Developer</Subtitle>
        </TextGroup>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default HeaderSection;

/* ================= STYLES ================= */

const HeaderWrapper = styled.section`
  background: white;
  width: 100%;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;

  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageCard = styled.div`
  width: 280px;
  height: 360px;
  border-radius: 12px;

  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${leonImage}) center / cover no-repeat,
    #D9D9D9;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`;

const Name = styled.span`
  display: block;
  font-size: 3.2rem;
  font-weight: 800;
  margin-top: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  opacity: 0.8;
`;
