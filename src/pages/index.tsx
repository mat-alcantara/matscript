import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaRegCalendar,
  FaRegClock,
} from 'react-icons/fa';

import { Header } from './components/blog/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
      </Head>
      <Flex direction="column" w="100%" maxW="980px" mx="auto">
        <Header />
        <Flex mt={8} justify="space-between">
          <VStack spacing={12} direction="column" maxW="75%">
            <Flex direction="column">
              <Heading size="lg">
                Quando quebrar um componente em múltiplos componentes
              </Heading>
              <HStack spacing={8} mt={2}>
                <HStack>
                  <Icon as={FaRegCalendar} />
                  <Text>13 jun</Text>
                </HStack>
                <HStack>
                  <Icon as={FaRegClock} />
                  <Text>2 minutos de leitura</Text>
                </HStack>
              </HStack>
            </Flex>
            <Flex direction="column">
              <Heading size="lg">
                Quando quebrar um componente em múltiplos componentes
              </Heading>
              <HStack spacing={8} mt={4}>
                <HStack>
                  <Icon as={FaRegCalendar} />
                  <Text>13 jun</Text>
                </HStack>
                <HStack>
                  <Icon as={FaRegClock} />
                  <Text>2 minutos de leitura</Text>
                </HStack>
              </HStack>
            </Flex>
            <Flex direction="column">
              <Heading size="lg">
                Quando quebrar um componente em múltiplos componentes
              </Heading>
              <HStack spacing={8} mt={4}>
                <HStack>
                  <Icon as={FaRegCalendar} />
                  <Text>13 jun</Text>
                </HStack>
                <HStack>
                  <Icon as={FaRegClock} />
                  <Text>2 minutos de leitura</Text>
                </HStack>
              </HStack>
            </Flex>
          </VStack>

          <Flex align="center" direction="column" textAlign="center">
            <Image
              src="./profile2.jpg"
              width="175px"
              height="auto"
              borderRadius="50%"
            />
            <Heading size="md" mt={4}>
              Mateus Alcantara
            </Heading>
            <Text mt={4}>Desenvolvedor Backend</Text>
            <Text>Java | Nodejs</Text>
            <HStack mt={2} spacing={2}>
              <Button
                size="sm"
                isFullWidth
                colorScheme="blackAlpha"
                leftIcon={<FaGithub />}
              >
                Github
              </Button>
              <Button
                size="sm"
                colorScheme="blue"
                leftIcon={<FaLinkedin />}
                isFullWidth
              >
                Linkedin
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
