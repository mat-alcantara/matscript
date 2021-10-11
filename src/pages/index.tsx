import { Flex } from '@chakra-ui/react';
import Prismic from '@prismicio/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import React from 'react';

import { Container } from '../components/blog/Container';
import { PersonalInfo } from '../components/blog/PersonalInfo';
import { PostMenu } from '../components/blog/Post/PostMenu';
import { getPrismicClient } from '../services/prismic';
import { getEstimatedReadingTime } from '../utils/getEstimateReadindTime';

export interface Post {
  slug: string;
  createdAt: string;
  title: string;
  estimateReadingTime: number;
}

interface HomeProps {
  posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
      </Head>
      <Container>
        <Flex justify="space-between" w="100%">
          <PostMenu posts={posts} />
          <PersonalInfo />
        </Flex>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
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
      estimateReadingTime: getEstimatedReadingTime(
        RichText.asText(post.data.content),
      ),
    };
  });

  return {
    props: { posts },
  };
};

export default Home;
