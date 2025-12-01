import styled from "styled-components";
import leonImage from "../assets/leonimage.jpg";
import headerimage2 from "../assets/HeaderImage2.jpg";
import headerimage3 from "../assets/HeaderImage3.jpg";

const HeaderSection = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <TextGroup>
          <Title>
            Hi there, I'm <Name>Leon Ekelund</Name>
          </Title>
          <ImageWrapper>
            <img src={leonImage} alt="Portrait of Leon Ekelund" />
            <img src={headerimage2} alt="Abstract background 1" />
            <img src={headerimage3} alt="Abstract background 2" />
          </ImageWrapper>

          <Subtitle>
            Creative Frontend Developer with a Background in EV charging and Music
          </Subtitle>
        </TextGroup>

      </HeaderContent>
    </HeaderWrapper>
  );
};

export default HeaderSection;

// STYLING

const HeaderWrapper = styled.section`
  background: #fff;
  width: 100%;
    padding-bottom: 5rem
`;

const HeaderContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

const ImageWrapper = styled.div`
  /* Desktop / default */
  width: 100%;
  max-width: 358px;
  aspect-ratio: 358 / 382;
  position: relative;
  margin: 0 auto;
  margin-top: 100px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    border-radius: 24px;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }

  /* center portrait (1st img = leonImage) */
  img:nth-child(1) {
    z-index: 3;
    transform: translate(-50%, -55%);
  }

  /* left background card */
  img:nth-child(2) {
    z-index: 1;
    transform: translate(-68%, -50%) rotate(-8deg);
  }

  /* right background card */
  img:nth-child(3) {
    z-index: 2;
    transform: translate(-32%, -50%) rotate(8deg);
  }

  /* Regular small phones */
  @media (max-width: 480px) {
    max-width: 280px;

    /* make the cards a bit smaller so they don't stick out */
    img {
      width: 92%;
    }

    img:nth-child(2) {
      transform: translate(-62%, -50%) rotate(-6deg);
    }

    img:nth-child(3) {
      transform: translate(-38%, -50%) rotate(6deg);
    }
  }

  /* Extra tiny screens (iPhone 5, etc.) */
  @media (max-width: 360px) {
    max-width: 230px;

    img {
      width: 88%;
    }

    img:nth-child(2) {
      transform: translate(-60%, -50%) rotate(-4deg);
    }

    img:nth-child(3) {
      transform: translate(-40%, -50%) rotate(4deg);
    }
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
  margin-top: 2rem;
  opacity: 0.8;
  margin-top: 60px;
`;
