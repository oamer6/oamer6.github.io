import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="407-492-6425">407-492-6425</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>email</LinkTitle>
          <LinkItem href="mailto:ossama.amer03@gmail.com">ossama.amer03@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>The thing about trains... <br/> It doesn't matter where you're going, what matters is deciding to get on</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/oamer6">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/ossama-amer/">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/ossamaamer_/">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
