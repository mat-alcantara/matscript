import { Box, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FaRegCalendar, FaRegClock } from 'react-icons/fa';

import { Post } from '../../../pages';

interface PostItemProps {
  post: Post;
}

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <Flex direction="column">
      <Box as="a" href={`/post/${post.slug}`}>
        <Heading size="lg">{post.title}</Heading>
      </Box>

      <HStack spacing={8} mt={2}>
        <HStack>
          <Icon as={FaRegCalendar} />
          <Text>{post.createdAt}</Text>
        </HStack>
        <HStack>
          <Icon as={FaRegClock} />
          <Text>{post.estimateReadingTime} minutos de leitura</Text>
        </HStack>
      </HStack>
    </Flex>
  );
};
