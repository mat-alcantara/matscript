import { Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';

export const Header: NextPage = () => {
  return (
    <Flex px={16} h="100px" align="center" justify="space-between" w="100%">
      <Image src="./logo.svg" width="42px" height="42px" />
      <HStack spacing={8} fontFamily="Roboto Mono" fontSize="13px">
        <HStack as="a" href="#">
          <Text color="primaryBlue">01.</Text>
          <Text>Sobre</Text>
        </HStack>
        <HStack as="a" href="#">
          <Text color="primaryBlue">02.</Text>
          <Text>Experiencia</Text>
        </HStack>
        <HStack as="a" href="#">
          <Text color="primaryBlue">03.</Text>
          <Text>Projetos</Text>
        </HStack>
        <HStack as="a" href="#">
          <Text color="primaryBlue">04.</Text>
          <Text>Contato</Text>
        </HStack>
        <Button variant="solid" colorScheme="blue">
          Currículo
        </Button>
      </HStack>
    </Flex>
  );
};
