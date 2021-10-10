import { Box, Flex } from '@chakra-ui/react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import React from 'react';

import { Container } from '../../components/blog/Container';
import { PostHeader } from '../../components/blog/Post/PostHeader';
import { getPrismicClient } from '../../services/prismic';
import { getEstimatedReadingTime } from '../../utils/getEstimateReadindTime';

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    createdAt: string;
    estimateReadingTime: number;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
      </Head>
      <Container>
        <Flex direction="column">
          <PostHeader />
          <Box
            className="postContent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Flex>
      </Container>
    </>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { slug } = params;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('posts', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    createdAt:
      response.first_publication_date &&
      format(new Date(response.first_publication_date), 'd MMM', {
        locale: ptBR,
      }),
    estimateReadingTime: getEstimatedReadingTime(
      RichText.asText(response.data.content),
    ),
  };

  return {
    props: {
      post,
    },
  };
};
