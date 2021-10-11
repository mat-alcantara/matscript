import {
  Flex,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export const Header: React.FC = () => {
  const logoSize = useBreakpointValue(['25px', '35px', '50px']);

  return (
    <Flex
      as="header"
      direction={['column', 'column', 'row']}
      justify="space-between"
      w="100%"
      align="center"
      py={[2, 4, 8]}
    >
      <HStack spacing={2} as="a" href="/" align="center">
        <Image src="/logo.svg" width={logoSize} height={logoSize} />
        <Heading size="lg" color="#5BA8F5" fontFamily="Roboto Mono">
          matscript
        </Heading>
      </HStack>

      <HStack
        spacing={8}
        fontFamily="Roboto Mono"
        fontSize={['16px', '16px', '18px']}
        color="#0C3048"
        fontWeight="700"
        mt={[2, 2, 0]}
      >
        <HStack as="a" href="/">
          <Text>Blog</Text>
        </HStack>
        <HStack as="a" href="#">
          <Text>Livros</Text>
        </HStack>
        <HStack as="a" href="/about">
          <Text>Sobre</Text>
        </HStack>
      </HStack>
    </Flex>
  );
};
