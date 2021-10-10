import { Button, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import Router from 'next/router';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const PersonalInfo: React.FC = () => {
  const { push } = Router;
  return (
    <Flex align="center" direction="column" textAlign="center">
      <Image
        src="./profile2.jpg"
        width="200px"
        height="auto"
        borderRadius="50%"
      />
      <Heading size="md" mt={4}>
        Mateus Alcantara
      </Heading>
      <Text mt={4}>Desenvolvedor Backend</Text>
      <Text>Nodejs</Text>
      <HStack mt={2} spacing={2}>
        <Button
          size="sm"
          isFullWidth
          colorScheme="blackAlpha"
          leftIcon={<FaGithub />}
          onClick={() => push('https://github.com/mat-alcantara')}
        >
          Github
        </Button>
        <Button
          size="sm"
          colorScheme="blue"
          leftIcon={<FaLinkedin />}
          isFullWidth
          as="a"
          target="_blank"
          onClick={() => push('https://www.linkedin.com/in/mat-alcantara/')}
        >
          Linkedin
        </Button>
      </HStack>
    </Flex>
  );
};
