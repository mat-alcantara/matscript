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
      position="sticky"
      top={0}
      zIndex="3"
      boxShadow="var(--chakra-shadows-sm)"
      bg="var(--chakra-colors-white)"
    >
      <Image src="./logo.svg" width="42px" height="42px" />
      <HStack spacing={8} fontFamily="Roboto Mono" fontSize="13px">
        <HStack as="a" href="#">
          <Text color="blue.600">01.</Text>
          <Text>Sobre</Text>
        </HStack>
        <HStack as="a" href="#">
          <Text color="blue.600">02.</Text>
          <Text>Experiencia</Text>
        </HStack>
        <HStack as="a" href="#">
          <Text color="blue.600">03.</Text>
          <Text>Projetos</Text>
        </HStack>
        <HStack as="a" href="#">
          <Text color="blue.600">04.</Text>
          <Text>Contato</Text>
        </HStack>
        <Button variant="solid" colorScheme="blue">
          Currículo
        </Button>
      </HStack>
    </Flex>
  );
};
