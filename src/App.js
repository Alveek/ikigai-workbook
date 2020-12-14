import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
  Button,
  Container,
  SimpleGrid,
  Box,
  Text,
  Heading,
  Link,
} from '@chakra-ui/react';
import Card from './Card';
import ShuffledOutput from './ShuffledOutput';

function App() {
  const [loveInputItem, setLoveInputItem] = useState('');
  const [loveList, setLoveList] = useState([]);
  const [goodAtInputItem, setGoodAtInputItem] = useState('');
  const [goodAtList, setGoodAtList] = useState([]);
  const [worldNeedsInputItem, setWorldNeedsInputItem] = useState('');
  const [worldNeedsList, setWorldNeedsList] = useState([]);

  const [shuffled1, setShuffled1] = useState([]);
  const [shuffled2, setShuffled2] = useState([]);
  const [shuffled3, setShuffled3] = useState([]);

  function handleLove(e) {
    if (loveInputItem) {
      setLoveList(st => [...st, loveInputItem]);
      setLoveInputItem('');
    }
  }

  function handleGoodAt() {
    if (goodAtInputItem) {
      setGoodAtList(st => [...st, goodAtInputItem]);
      setGoodAtInputItem('');
    }
  }

  function handleWorldNeeds() {
    if (worldNeedsInputItem) {
      setWorldNeedsList(st => [...st, worldNeedsInputItem]);
      setWorldNeedsInputItem('');
    }
  }

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleShuffle() {
    if (loveList.length && goodAtList.length && worldNeedsList.length) {
      setShuffled1([
        getRandomItem(loveList),
        getRandomItem(goodAtList),
        getRandomItem(worldNeedsList),
      ]);

      setShuffled2([
        getRandomItem(loveList),
        getRandomItem(goodAtList),
        getRandomItem(worldNeedsList),
      ]);

      setShuffled3([
        getRandomItem(loveList),
        getRandomItem(goodAtList),
        getRandomItem(worldNeedsList),
      ]);
    }
  }
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="1120px" px={4} py={10}>
        <Heading textTransform="uppercase" textAlign="center" as="h1" mb="10">
          Find Your Ikigai*
        </Heading>
        <SimpleGrid minChildWidth="200px" spacing={8}>
          <Card
            color="pink.400"
            lightColor="pink.200"
            title="I LOVE ..."
            inputItem={loveInputItem}
            list={loveList}
            handleClick={handleLove}
            setInputItem={setLoveInputItem}
          />

          <Card
            color="yellow.400"
            title="I'M GOOD AT ..."
            inputItem={goodAtInputItem}
            list={goodAtList}
            handleClick={handleGoodAt}
            setInputItem={setGoodAtInputItem}
          />

          <Card
            color="blue.400"
            title="WORLD NEEDS ..."
            inputItem={worldNeedsInputItem}
            list={worldNeedsList}
            handleClick={handleWorldNeeds}
            setInputItem={setWorldNeedsInputItem}
          />
        </SimpleGrid>
        <SimpleGrid mb="10">
          <Button
            mt={10}
            onClick={handleShuffle}
            borderRadius="none"
            colorScheme="yellow"
            justifySelf="center"
          >
            SHUFFLE
          </Button>
        </SimpleGrid>
        {shuffled1.length ? (
          <SimpleGrid minChildWidth="200px" spacing={8}>
            <ShuffledOutput color="pink.50" shuffled={shuffled1} />
            <ShuffledOutput color="yellow.50" shuffled={shuffled2} />
            <ShuffledOutput color="blue.50" shuffled={shuffled3} />
          </SimpleGrid>
        ) : (
          <Box>
            <Text fontSize="2xl">
              *This is an unofficial workbook for an{' '}
              <Link
                color="blue.600"
                href="https://youtu.be/BAzs3amtEFA"
                isExternal
              >
                Ikigai Workshop
              </Link>{' '}
              by the amazing{' '}
              <Link color="blue.600" href="https://thefutur.com/" isExternal>
                thefutur
              </Link>
              .
            </Text>
            <Text fontSize="xl">
              This app doesn't collect any data. After refreshing this page all
              your data will disappear.
            </Text>
            <Text
              bg="black"
              color="white"
              width="max-content"
              p={2}
              fontSize="lg"
              mt={3}
              fontWeight="bold"
            >
              #thefuturwashere
            </Text>
          </Box>
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
