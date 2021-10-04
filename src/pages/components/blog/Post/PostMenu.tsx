import { Flex, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaRegCalendar, FaRegClock } from 'react-icons/fa';

export const PostMenu: React.FC = () => {
  return (
    <VStack spacing={12} direction="column" maxW="75%">
      <Flex direction="column">
        <Heading size="lg">
          Quando quebrar um componente em múltiplos componentes
        </Heading>
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
      <Flex direction="column">
        <Heading size="lg">
          Quando quebrar um componente em múltiplos componentes
        </Heading>
        <HStack spacing={8} mt={4}>
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
      <Flex direction="column">
        <Heading size="lg">
          Quando quebrar um componente em múltiplos componentes
        </Heading>
        <HStack spacing={8} mt={4}>
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
    </VStack>
  );
};
