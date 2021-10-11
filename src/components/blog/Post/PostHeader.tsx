import {
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Router from 'next/router';
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
  const { push } = Router;
  const showSocialMediaButtons = useBreakpointValue([false, false, true]);
  const headingSize = useBreakpointValue(['md', 'md', 'lg', 'xl']);
  const nameSize = useBreakpointValue(['sm', 'sm', 'md']);

  return (
    <Flex direction="column">
      <Heading size={headingSize} mb={4}>
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
            <Heading size={nameSize}>Mateus Alcantara</Heading>

            <Stack direction="row" spacing={4} mt={2}>
              <HStack>
                <Icon as={FaRegCalendar} />
                <Text fontSize={['12px', '']}>{post.createdAt}</Text>
              </HStack>
              <HStack>
                <Icon as={FaRegClock} />
                <Text
                  fontSize={['12px', '']}
                >{`${post.estimateReadingTime} minutos de leitura`}</Text>
              </HStack>
            </Stack>
          </Flex>
        </HStack>
        {showSocialMediaButtons && (
          <HStack spacing={4} align="center">
            <IconButton
              colorScheme="blackAlpha"
              aria-label="Github"
              icon={<FaGithub fontSize="30px" />}
              variant="ghost"
              onClick={() => push('https://github.com/mat-alcantara')}
            />
            <IconButton
              colorScheme="blue"
              aria-label="Linkedin"
              icon={<FaLinkedin fontSize="30px" />}
              variant="ghost"
              onClick={() => push('https://www.linkedin.com/in/mat-alcantara/')}
            />
            <IconButton
              colorScheme="purple"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="30px" />}
              variant="ghost"
              onClick={() => push('https://www.instagram.com/mat.alcantara/')}
            />
          </HStack>
        )}
      </Flex>
    </Flex>
  );
};
