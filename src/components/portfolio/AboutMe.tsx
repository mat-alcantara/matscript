import { Divider, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <Flex direction="column" justify="center" w="100%">
      <Flex align="center">
        <Heading
          whiteSpace="nowrap"
          size="lg"
          color="#5BA8F5"
          fontFamily="Roboto Mono"
        >
          Sobre mim
        </Heading>
        <Divider ml={8} />
      </Flex>
      <Flex mt={16} align="flex-start">
        <VStack>
          <Text float="left" textAlign="justify" maxW="980px">
            <Image
              float="right"
              w="450px"
              src="./profile2.jpg"
              height="auto"
              borderRadius="4px"
              ml={8}
              mb={4}
            />
            Meu nome é Mateus Alcantara, eu tenho 24 anos e eu sou
            Desenvolvedor. A minha paixão por programação começou em 2016,
            quando ainda na faculdade de Engenharia Elétrica eu tive o meu
            primeiro contato com a linguagem C++. Infelizmente por problemas
            financeiros eu não pude dar continuidade ao meu curso, porém o amor
            por programação nunca saiu de mim. <br />
            <br />
            Após esse período, passei a trabalhar em uma empresa familiar que se
            encontrava a beira da falềncia. Nesta empresa, fundamos o setor de
            Marcenaria, onde fiquei responsável tanto pela parte gerencial,
            quanto pelo trabalho braçal. Em 3 anos nós expandimos o setor ao
            ponto de se tornar o setor mais lucrativo da empresa.
            <br />
            <br />
            Apesar da rápida expansão, enfrentamos muitos problemas gerenciais,
            principalmente pela dificuldade na comunicação entre as lojas e a
            Marcenaria. Foi então que eu decidi que resolveria todos esses
            problemas com a ajuda da programação. Essa jornada começou a 2 anos
            atrás, e desde então, não houve um dia sequer em que eu não tenha
            tido contato com programação. Com a ajuda de conhecimentos
            adquiridos como autodidata, eu criei o site que hoje gerencia todos
            os pedidos da Marcenaria, e com o tempo acrescentei ferramentas para
            facilitar outros setores da empresa.
            <br />
            <br />
            Já são mais de 2 anos completamente apaixonado pelo que eu faço,
            acordando todos os dias às 5AM para poder estudar programação antes
            do trabalho, utilizando os meus conhecimentos para resolver
            problemas reais, errando, acertando, aprendendo, e reforçando a
            minha certeza de que é isso o que eu amo fazer, e que é isso o que
            eu quero fazer pro resto da minha vida. E com isso em mente,
            atualmente eu me encontro em busca de novos desafios, com o objetivo
            de obter aprendizado ao mesmo tempo em que eu possa ajudar a
            construir projetos que farão do mundo um lugar melhor.
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};
