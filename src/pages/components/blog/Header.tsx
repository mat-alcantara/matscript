import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <Flex justify="space-between" w="100%" align="center" py={8}>
      <HStack spacing={2} as="a" href="/">
        <Image src="./logo.svg" width="50px" height="50px" />
        <Heading size="lg" color="#5BA8F5" fontFamily="Roboto Mono">
          Matscript
        </Heading>
      </HStack>

      <HStack
        spacing={8}
        fontFamily="Roboto Mono"
        fontSize="18px"
        color="#0C3048"
        fontWeight="700"
      >
        <HStack as="a" href="#">
          <Text>Blog</Text>
        </HStack>
        <HStack as="a" href="#">
          <Text>Livros</Text>
        </HStack>
        <HStack as="a" href="#">
          <Text>Sobre</Text>
        </HStack>
      </HStack>
    </Flex>
  );
};
