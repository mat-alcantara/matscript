import { Flex, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Header } from './components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
      </Head>
      <Header />
      <Flex pt="100px" minHeight="5000px" position="relative">
        <Flex direction="column" mt={64} align="center" w="100%">
          <Text>Oi, meu nome é</Text>
          <Heading color="primaryBlue">Mateus Alcantara</Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
