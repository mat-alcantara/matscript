import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

import { Header } from '../components/blog/Header';
import { AboutMe } from '../components/portfolio/AboutMe';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara | Sobre mim</title>
      </Head>
      <Flex direction="column" w="100%" maxW="980px" mx="auto">
        <Header />
        <Flex mt={8}>
          <AboutMe />
        </Flex>
      </Flex>
    </>
  );
};

export default About;
