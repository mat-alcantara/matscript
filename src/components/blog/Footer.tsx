import { Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <Flex as="footer" justify="space-between" pb={8} pt={16} align="center">
      <Text>Copyright © Mateus Alcantara</Text>
      <HStack spacing={2}>
        <IconButton
          size="lg"
          aria-label="Github"
          icon={<FaGithub fontSize="24px" />}
          variant="ghost"
        />
        <IconButton
          size="lg"
          aria-label="Linkedin"
          icon={<FaLinkedin fontSize="24px" />}
          variant="ghost"
        />
        <IconButton
          size="lg"
          aria-label="Instagram"
          icon={<FaInstagram fontSize="24px" />}
          variant="ghost"
        />
      </HStack>
    </Flex>
  );
};
