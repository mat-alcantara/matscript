import { Flex } from '@chakra-ui/react';

import { Footer } from './Footer';
import { Header } from './Header';

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
      px={[8, 8, 8, 8, 4]}
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
