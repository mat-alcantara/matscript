import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegCalendar, FaRegClock } from 'react-icons/fa';

import { Post } from '../../../pages';

interface PostItemProps {
  post: Post;
}

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const headingSize = useBreakpointValue(['sm', 'lg']);
  const descriptionSize = useBreakpointValue(['14px', '16px']);

  return (
    <Flex direction="column">
      <Box as="a" href={`/post/${post.slug}`}>
        <Heading size={headingSize}>{post.title}</Heading>
      </Box>

      <HStack spacing={8} mt={2}>
        <HStack>
          <Icon as={FaRegCalendar} />
          <Text fontSize={descriptionSize}>{post.createdAt}</Text>
        </HStack>
        <HStack>
          <Icon as={FaRegClock} />
          <Text
            fontSize={descriptionSize}
          >{`${post.estimateReadingTime} minutos de leitura`}</Text>
        </HStack>
      </HStack>
    </Flex>
  );
};
