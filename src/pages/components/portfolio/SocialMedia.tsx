import { Divider, Flex, IconButton, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';

export const SocialMedia: React.FC = () => {
  const { push } = useRouter();

  return (
    <Flex
      position="fixed"
      w="100%"
      px="64px"
      justify="space-between"
      bottom="0px"
      fontFamily="Roboto Monospace"
    >
      <Flex direction="column" align="center">
        <Flex
          direction="column"
          h="100%"
          align="center"
          justify="space-between"
        >
          <IconButton
            mt={4}
            colorScheme="transparent"
            aria-label="Github"
            icon={<FaGithub fontSize="25px" />}
            onClick={() => push('https://github.com/mat-alcantara')}
          />
          <IconButton
            mt={4}
            colorScheme="transparent"
            aria-label="Linkedin"
            icon={<FaLinkedin fontSize="25px" />}
            onClick={() => push('https://www.linkedin.com/in/mat-alcantara/')}
          />
          <IconButton
            mt={4}
            colorScheme="transparent"
            aria-label="Hacker Rank"
            icon={<SiHackerrank fontSize="25px" />}
            onClick={() => push('https://www.hackerrank.com/mateuscastro_al')}
          />
          <IconButton
            mt={4}
            colorScheme="transparent"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="25px" />}
            onClick={() => push('https://www.instagram.com/mat.alcantara/')}
          />
        </Flex>

        <Divider mt={4} minH="100px" h="100%" orientation="vertical" />
      </Flex>
      <Flex direction="column" align="center">
        <Text
          as="a"
          fontSize="20px"
          letterSpacing="0.1em"
          sx={{ writingMode: 'tb-rl' }}
          href="mailto: mateuscastro.al@gmail.com"
        >
          mateuscastro.al@gmail.com
        </Text>
        <Divider mt={4} minH="100px" h="100%" orientation="vertical" />
      </Flex>
    </Flex>
  );
};
