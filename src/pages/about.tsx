import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

import { Container } from '../components/blog/Container';
import { AboutMe } from '../components/portfolio/AboutMe';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara | Sobre mim</title>
      </Head>
      <Container>
        <AboutMe />
      </Container>
    </>
  );
};

export default About;
