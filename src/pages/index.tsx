import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { AboutMe } from './components/AboutMe';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialMedia } from './components/SocialMedia';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
      </Head>
      <Header />
      <SocialMedia />

      <Flex direction="column" w="100%" maxW="900px" mx="auto" as="main">
        <Box h="100%" minH="100vh">
          <Hero />
        </Box>
        <Box h="100%" minH="100vh">
          <AboutMe />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
