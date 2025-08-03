// src/components/MainContent.tsx
import React from 'react';
import styled from 'styled-components';

const ContentSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.large} 0;
  }
`;

const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.headingSize};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const DummyParagraph = styled.p`
  font-size: ${({ theme }) => theme.fonts.bodySize};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl} auto;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 0.95em;
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

const ThemedButton = styled.button`
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  font-size: ${({ theme }) => theme.fonts.bodySize};
`;

interface MainContentProps {
  title: string;
  paragraph: string;
  buttonText?: string;
}

const MainContent: React.FC<MainContentProps> = ({ title, paragraph, buttonText = 'Discover More' }) => {
  return (
    <ContentSection>
      <MainTitle>{title}</MainTitle>
      <DummyParagraph>{paragraph}</DummyParagraph>
      <ThemedButton>{buttonText}</ThemedButton>
    </ContentSection>
  );
};

export default MainContent;