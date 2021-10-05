import { VStack } from '@chakra-ui/react';
import React from 'react';

import { PostItem } from './PostItem';

export const PostMenu: React.FC = () => {
  return (
    <VStack spacing={12} direction="column" maxW="75%">
      <PostItem />
      <PostItem />
      <PostItem />
    </VStack>
  );
};
