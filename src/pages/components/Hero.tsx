import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFileAlt, FaGithub } from 'react-icons/fa';

export const Hero: React.FC = () => {
  return (
    <Flex direction="column" mt={48} w="100%">
      <Text color="#5BA8F5" fontWeight="600" fontFamily="Roboto Mono">
        Oi, meu nome é
      </Text>
      <Heading lineHeight="68px" size="3xl" color="gray.50" mt={4}>
        Mateus Alcantara.
      </Heading>
      <Heading lineHeight="68px" size="3xl" color="gray.100">
        Eu sou um Desenvolvedor
      </Heading>
      <Text maxW="540px" color="gray.200" mt={4} fontSize="20px">
        Apaixonado por tecnologia e programação, eu gosto de usar minhas
        habilidades para criar produtos que tem o potencial de tornar a vida das
        pessoas mais fáceis. <br />
        <br />
        Tecnologias: HTML, CSS, Javascript, Typescript, ReactJS, NextJS, NodeJS,
        SQL, NoSQL
      </Text>
      <Flex mt={8} w="100%" minW="450px">
        <Button variant="outline" colorScheme="blue" leftIcon={<FaGithub />}>
          Github
        </Button>
        <Button
          variant="outline"
          colorScheme="blue"
          ml={4}
          leftIcon={<FaFileAlt />}
        >
          Currículo
        </Button>
      </Flex>
    </Flex>
  );
};
