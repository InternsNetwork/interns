import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ContentWithMargins = styled.div`
  margin-left: auto;
  margin-right: auto;

  max-width: 1000px;
  @media (min-width: 1000px) {
    min-width: 1000px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const ImprintLink = styled.a`
  color: #007ea7;
  text-decoration: none;
  cursor: pointer;
`;

const CopyrightNotice = styled.span`
  color: rgba(0, 23, 31, 0.3);
`;

export const Footer = () => (
  <footer>
    <ContentWithMargins>
      <FooterContent>
        <div>
          <CopyrightNotice>Copyright © 2018 InternsNetwork</CopyrightNotice>
        </div>
      </FooterContent>
    </ContentWithMargins>
  </footer>
);

export default Footer;
