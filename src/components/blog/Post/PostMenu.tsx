import { VStack } from '@chakra-ui/react';
import React from 'react';

import { Post } from '../../../pages';
import { PostItem } from './PostItem';

interface PostMenuProps {
  posts: Post[];
}

export const PostMenu: React.FC<PostMenuProps> = ({ posts }) => {
  return (
    <VStack spacing={12} direction="column" maxW="75%">
      {posts.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
    </VStack>
  );
};
