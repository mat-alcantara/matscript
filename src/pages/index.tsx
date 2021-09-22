import { Flex, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Header } from './components/Header';
import { SocialMedia } from './components/SocialMedia';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
      </Head>
      <Header />
      <SocialMedia />

      <Flex pt="100px" w="700px" mx="auto" as="main" minH="100vh - 100px">
        <Flex direction="column" mt={16}>
          <Text color="#5BA8F5" fontWeight="600" fontFamily="Roboto Mono">
            Oi, meu nome é
          </Text>
          <Heading lineHeight="68px" size="3xl" color="gray.50" mt={4}>
            Mateus Alcantara.
          </Heading>
          <Heading lineHeight="68px" size="3xl" color="gray.100">
            Eu sou um Desenvolvedor
          </Heading>
          <Text maxW="540px" color="gray.200" mt={4} fontSize="20px">
            Apaixonado por tecnologia e programação, eu gosto de usar minhas
            habilidades para criar produtos que tem o potencial de tornar a vida
            das pessoas mais fáceis. Atualmente desenvolvo como autonomo em
            ReactJS, NodeJS e Typescript.
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
