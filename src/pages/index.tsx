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
        <Flex direction="column" mt={16} mx="auto">
          <Text color="primaryBlue" fontWeight="600" fontFamily="Roboto Mono">
            Oi, meu nome é
          </Text>
          <Heading lineHeight="68px" size="3xl" color="gray.50" mt={4}>
            Mateus Alcantara.
          </Heading>
          <Heading lineHeight="68px" size="3xl" color="gray.100">
            Eu sou um Desenvolvedor Fullstack
          </Heading>
          <Text maxW="540px" color="gray.200" mt={4} fontSize="20px">
            Apaixonado por tecnologia e programação, eu gosto de usar minhas
            habilidades para criar produtos que tem o potencial de tornar a vida
            das pessoas mais fáceis. Atualmente desenvolvo como autonomo.
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
