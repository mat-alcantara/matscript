import { Flex, Heading, List, ListItem, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

import { Container } from '../../components/blog/Container';
import { PostHeader } from '../../components/blog/Post/PostHeader';

const Post: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
      </Head>
      <Container>
        <Flex direction="column">
          <PostHeader />
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
