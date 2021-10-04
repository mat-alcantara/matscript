import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <Flex justify="space-between" w="100%" align="center" py={8}>
      <HStack spacing={4} as="a" href="/">
        <Image src="./logo.svg" width="42px" height="42px" />
        <Heading size="md" color="#5BA8F5" fontFamily="Roboto Mono">
          Matscript
        </Heading>
      </HStack>

      <HStack spacing={8}>
        <HStack as="a" href="#">
          <Text color="#0C3048">Posts</Text>
        </HStack>
        <HStack as="a" href="#">
          <Text color="#0C3048">Sobre mim</Text>
        </HStack>
      </HStack>
    </Flex>
  );
};
