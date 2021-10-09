import { Flex } from '@chakra-ui/react';
import Prismic from '@prismicio/client';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import React from 'react';

import { Header } from '../components/blog/Header';
import { PersonalInfo } from '../components/blog/PersonalInfo';
import { PostMenu } from '../components/blog/Post/PostMenu';
import { getPrismicClient } from '../services/prismic';

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')],
    { fetch: ['posts.title', 'posts.content'], pageSize: 100 },
  );

  console.log(response);

  return {
    props: { posts: 'ok' },
  };
};

export default Home;
