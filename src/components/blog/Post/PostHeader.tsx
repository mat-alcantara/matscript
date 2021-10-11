import {
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegCalendar,
  FaRegClock,
} from 'react-icons/fa';

import { PostProps } from '../../../pages/post/[slug]';

export const PostHeader: React.FC<PostProps> = ({ post }) => {
  return (
    <Flex direction="column">
      <Heading size="xl" mb={4}>
        {post.title}
      </Heading>
      <Flex justify="space-between" w="100%" align="flex-start">
        <HStack spacing={4}>
          <Image
            src="/profile2.jpg"
            borderRadius="50%"
            width="60px"
            height="60px"
          />

          <Flex direction="column">
            <Heading size="md">Mateus Alcantara</Heading>
            <HStack>
              <HStack spacing={4} mt={2}>
                <HStack>
                  <Icon as={FaRegCalendar} />
                  <Text>{post.createdAt}</Text>
                </HStack>
                <HStack>
                  <Icon as={FaRegClock} />
                  <Text>{`${post.estimateReadingTime} minutos de leitura`}</Text>
                </HStack>
              </HStack>
            </HStack>
          </Flex>
        </HStack>
        <HStack spacing={4} align="center">
          <IconButton
            colorScheme="blackAlpha"
            aria-label="Github"
            icon={<FaGithub fontSize="30px" />}
            variant="ghost"
          />
          <IconButton
            colorScheme="blue"
            aria-label="Linkedin"
            icon={<FaLinkedin fontSize="30px" />}
            variant="ghost"
          />
          <IconButton
            colorScheme="purple"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="30px" />}
            variant="ghost"
          />
        </HStack>
      </Flex>
    </Flex>
  );
};
