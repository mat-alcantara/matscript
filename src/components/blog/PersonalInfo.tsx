import { Button, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const PersonalInfo: React.FC = () => {
  return (
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
  );
};
