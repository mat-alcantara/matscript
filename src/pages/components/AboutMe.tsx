import { Divider, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <Flex mt={48} w="100%">
      <Flex align="center" w="100%">
        <Heading
          whiteSpace="nowrap"
          size="lg"
          color="primaryBlue"
          fontFamily="Roboto Mono"
        >
          02. Sobre mim
        </Heading>
        <Divider ml={8} />
      </Flex>
    </Flex>
  );
};
