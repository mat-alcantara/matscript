import { Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import Router from 'next/router';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const { push } = Router;

  return (
    <Flex as="footer" justify="space-between" pb={8} pt={16} align="center">
      <Text>Copyright © Mateus Alcantara</Text>
      <HStack spacing={[0, 2]}>
        <IconButton
          size="lg"
          aria-label="Github"
          icon={<FaGithub fontSize="24px" />}
          variant="ghost"
          onClick={() => push('https://github.com/mat-alcantara')}
        />
        <IconButton
          size="lg"
          aria-label="Linkedin"
          icon={<FaLinkedin fontSize="24px" />}
          variant="ghost"
          onClick={() => push('https://www.linkedin.com/in/mat-alcantara/')}
        />
        <IconButton
          size="lg"
          aria-label="Instagram"
          icon={<FaInstagram fontSize="24px" />}
          variant="ghost"
          onClick={() => push('https://www.instagram.com/mat.alcantara/')}
        />
      </HStack>
    </Flex>
  );
};
