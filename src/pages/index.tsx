import { Flex } from '@chakra-ui/react';
import Prismic from '@prismicio/client';
import { format } from 'date-fns';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import React from 'react';

import { Header } from '../components/blog/Header';
import { PersonalInfo } from '../components/blog/PersonalInfo';
import { PostMenu } from '../components/blog/Post/PostMenu';
import { getPrismicClient } from '../services/prismic';
import { getEstimatedReadingTime } from '../utils/getEstimateReadindTime';

export interface Post {
  slug: string;
  createdAt: string;
  title: string;
}

interface HomeProps {
  posts: Post[];
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ptBR } = require('date-fns/locale');

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
      </Head>
      <Flex direction="column" w="100%" maxW="980px" mx="auto">
        <Header />
        <Flex mt={8} justify="space-between">
          <PostMenu posts={posts} />
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

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      createdAt:
        post.first_publication_date &&
        format(new Date(post.first_publication_date), 'd MMM', {
          locale: ptBR,
        }),
      readingTime: getEstimatedReadingTime(RichText.asText(post.data.content)),
    };
  });

  return {
    props: { posts },
  };
};

export default Home;
