import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Header } from '../components/blog/Header';
import { PersonalInfo } from '../components/blog/PersonalInfo';
import { PostMenu } from '../components/blog/Post/PostMenu';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
      </Head>
      <Flex direction="column" w="100%" maxW="980px" mx="auto">
        <Header />
        <Flex mt={8} justify="space-between">
          <PostMenu />
          <PersonalInfo />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
