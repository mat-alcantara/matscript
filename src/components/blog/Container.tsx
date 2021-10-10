import { Flex } from '@chakra-ui/react';

import { Header } from '../portfolio/Header';
import { Footer } from './Footer';

export const Container: React.FC = ({ children }) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      minH="100vh"
      h="100%"
      w="100%"
      maxW="980px"
      mx="auto"
    >
      <Flex direction="column">
        <Header />
        <Flex as="main" mt={8}>
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};
