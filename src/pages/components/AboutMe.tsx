import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <Flex direction="column" justify="center" w="100%">
      <Flex align="center" w="100%">
        <Heading
          whiteSpace="nowrap"
          size="lg"
          color="#5BA8F5"
          fontFamily="Roboto Mono"
        >
          02. Sobre mim
        </Heading>
        <Divider ml={8} />
      </Flex>
      <Flex mt={16}>
        <Flex display="column" justify="flex-start" align="flex-start">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Box />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Flex>
        <Flex ml={16} align="center">
          <Image src="./profile2.jpg" borderRadius="50%" />
        </Flex>
      </Flex>
    </Flex>
  );
};
