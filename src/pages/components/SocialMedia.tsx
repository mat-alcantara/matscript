import { Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const SocialMedia: React.FC = () => {
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
        <Divider h="100px" orientation="vertical" />
      </Flex>
      <Flex direction="column" align="center">
        <Text letterSpacing="0.1em" sx={{ writingMode: 'tb-rl' }}>
          mateuscastro.al@gmail.com
        </Text>
        <Divider mt={4} h="100px" orientation="vertical" />
      </Flex>
    </Flex>
  );
};
