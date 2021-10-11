import {
  Flex,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Router from 'next/router';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const { push } = Router;
  const logoSize = useBreakpointValue(['18px', '24px']);
  const iconButtonSize = useBreakpointValue(['sm', 'md', 'lg']);
  const copySize = useBreakpointValue(['12px', '']);

  return (
    <Flex as="footer" justify="space-between" pb={8} pt={16} align="center">
      <Text fontSize={copySize} size="">
        Copyright © Mateus Alcantara
      </Text>
      <HStack spacing={[0, 2]}>
        <IconButton
          size={iconButtonSize}
          aria-label="Github"
          icon={<FaGithub fontSize={logoSize} />}
          variant="ghost"
          onClick={() => push('https://github.com/mat-alcantara')}
        />
        <IconButton
          size={iconButtonSize}
          aria-label="Linkedin"
          icon={<FaLinkedin fontSize={logoSize} />}
          variant="ghost"
          onClick={() => push('https://www.linkedin.com/in/mat-alcantara/')}
        />
        <IconButton
          size={iconButtonSize}
          aria-label="Instagram"
          icon={<FaInstagram fontSize={logoSize} />}
          variant="ghost"
          onClick={() => push('https://www.instagram.com/mat.alcantara/')}
        />
      </HStack>
    </Flex>
  );
};
