import { Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';

export const Header: NextPage = () => {
  return (
    <Flex
      px={16}
      h="75px"
      align="center"
      justify="space-between"
      w="100%"
      position="fixed"
      top={0}
      zIndex="3"
      boxShadow="var(--chakra-shadows-sm)"
      bg="#0D1117"
    >
      <Image src="./logo.svg" width="42px" height="42px" />
      <HStack spacing={8} fontFamily="Roboto Mono" fontSize="13px">
        <HStack as="a" href="#">
          <Text color="#5BA8F5">01.</Text>
          <Text>Sobre mim</Text>
        </HStack>

        <HStack as="a" href="#">
          <Text color="#5BA8F5">02.</Text>
          <Text>Projetos</Text>
        </HStack>
        <HStack as="a" href="#">
          <Text color="#5BA8F5">03.</Text>
          <Text>Blog</Text>
        </HStack>
        <Button variant="solid" colorScheme="blue">
          Currículo
        </Button>
      </HStack>
    </Flex>
  );
};
