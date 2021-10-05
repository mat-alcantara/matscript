import { Box, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FaRegCalendar, FaRegClock } from 'react-icons/fa';

export const PostItem: React.FC = () => {
  return (
    <Flex direction="column">
      <Box as="a" href="https://google.com/">
        <Heading size="lg">
          Quando quebrar um componente em múltiplos componentes
        </Heading>
      </Box>

      <HStack spacing={8} mt={2}>
        <HStack>
          <Icon as={FaRegCalendar} />
          <Text>13 jun</Text>
        </HStack>
        <HStack>
          <Icon as={FaRegClock} />
          <Text>2 minutos de leitura</Text>
        </HStack>
      </HStack>
    </Flex>
  );
};
