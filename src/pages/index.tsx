import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Header } from './components/blog/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
      </Head>
      <Flex w="100%" maxW="740px" mx="auto">
        <Header />
      </Flex>
    </>
  );
};

export default Home;
