import { Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <Flex as="footer" justify="space-between" py={16}>
      <Text>Copyright © Mateus Alcantara</Text>
      <HStack spacing={4}>
        <IconButton
          colorScheme="blue"
          aria-label="Github"
          icon={<FaGithub />}
        />
        <IconButton
          colorScheme="blue"
          aria-label="Linkedin"
          icon={<FaLinkedin />}
        />
        <IconButton
          colorScheme="blue"
          aria-label="Instagram"
          icon={<FaInstagram />}
        />
      </HStack>
    </Flex>
  );
};
