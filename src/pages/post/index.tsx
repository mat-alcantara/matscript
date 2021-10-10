import {
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegCalendar,
  FaRegClock,
} from 'react-icons/fa';

import { Container } from '../../components/blog/Container';
import { Header } from '../../components/blog/Header';

const Post: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
      </Head>
      <Container>
        <Flex direction="column">
          <Flex justify="space-between" w="100%" align="flex-start">
            <HStack spacing={4}>
              <Image
                src="./profile2.jpg"
                width="60px"
                height="60px"
                borderRadius="50%"
              />
              <Flex direction="column">
                <Heading size="md">Mateus Alcantara</Heading>
                <HStack>
                  <HStack spacing={4} mt={2}>
                    <HStack>
                      <Icon as={FaRegCalendar} />
                      <Text>13 jun</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaRegClock} />
                      <Text>2 minutos de leitura</Text>
                    </HStack>
                  </HStack>
                </HStack>
              </Flex>
            </HStack>
            <HStack spacing={2} align="center">
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
          <Flex direction="column" mt={8} fontSize="21px">
            <Text mt={2}>
              Esse artigo é uma tradução do artigo do Kent C. Dodds When to
              break up a component into multiple components. Utilizarei os
              mesmos exemplos, porém acrescentarei mais comentários quando
              necessário.
            </Text>

            <Heading mt={8}>
              Quando quebrar um componente em múltiplos componentes
            </Heading>
            <Text mt={2}>
              Como citado no artigo Prop Driling, nada te impede de criar uma
              aplicação inteira em um único componente. Apesar do código ficar
              gigantesco e desorganizado, ele funcionaria corretamente. Porém
              isso resultaria em alguns problemas:
            </Text>
            <List>
              <ListItem>
                Problemas de performance: A cada alteração de estado você teria
                uma re-renderização de toda a aplicação.
              </ListItem>
              <ListItem>
                Problemas com a reutilização de partes do código
              </ListItem>
              <ListItem>
                Problema com states: Saber onde cada state é utilizado seria um
                problema. Você acaba perdendo o controle do que está acontecendo
                em determinadas partes do código, além de dificultar na
                resolução de bugs.
              </ListItem>
              <ListItem>
                Testagem seria feita 100% por integração: Seria muito difícil
                testar partes isoladas do código.
              </ListItem>
              <ListItem>
                Trabalhar em equipe no código seria um problema. É muito difícil
                ter diversas pessoas ao mesmo tempo alterando o mesmo código. A
                chance de gerar conflitos de merge são muito grandes.
              </ListItem>
              <ListItem>
                Seria impossível utilizar componentes de terceiros, já que toda
                a aplicação é escrita como um único componente.
              </ListItem>
            </List>
            <Text>
              Quebre seu componente em vários depois que tiver algum desses
              problemas, não antes. É mais fácil resolver duplicações de código
              do que abstrações desnecessárias. Não tenha medo de seu componente
              ficar muito longo.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Post;
