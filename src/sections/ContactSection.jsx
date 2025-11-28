import styled from "styled-components";
import leonImage from "../assets/leonimage.jpg";

const ContactSection = () => {
  return (
    <ContactWrapper>
      <Content>
        <Title>Let’s Talk</Title>

        <Avatar src={leonImage} alt="Leon Ekelund" />

        <Name>Leon Ekelund</Name>
        <Info>0709752924</Info>
        <Info>leongudmundssonekelund@gmail.com</Info>

        <Icons>
          <a href="#" aria-label="LinkedIn"></a>
          <a href="#" aria-label="GitHub"></a>
          <a href="#" aria-label="Website"></a>
          <a href="#" aria-label="Twitter"></a>
          <a href="#" aria-label="Instagram"></a>
        </Icons>
      </Content>
    </ContactWrapper>
  );
};

export default ContactSection;

// STYLING

const ContactWrapper = styled.section`
  width: 100%;
  background: #fff;
  color: #000;
  padding: 6rem 1.5rem;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  font-weight: 800;
  margin-bottom: 2.5rem;
`;

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  margin-bottom: 10px;
`;


const Name = styled.p`
  font-weight: 700;
  margin: 0;
`;

const Info = styled.p`
  margin: 0.3rem 0;
  font-size: 0.95rem;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.5rem;

  a {
    text-decoration: none;
    color: #000;
    font-weight: 600;
    font-size: 0.9rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;
