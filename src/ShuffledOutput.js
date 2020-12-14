import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  Textarea,
} from '@chakra-ui/react';

export default function ShuffledOutput({ shuffled, color }) {
  return (
    <Grid gap={6}>
      <GridItem>
        <HStack border="1px solid black" borderBottom="0">
          <Box
            w="32px"
            color="white"
            p={2}
            bg="pink.500"
            borderRight="1px solid black"
          >
            L
          </Box>
          <Text>{shuffled[0]}</Text>
        </HStack>
        <HStack border="1px solid black" borderBottom="0">
          <Box
            w="32px"
            color="white"
            p={2}
            bg="yellow.500"
            borderRight="1px solid black"
          >
            G
          </Box>
          <Text>{shuffled[1]}</Text>
        </HStack>
        <HStack border="1px solid black">
          <Box
            w="32px"
            color="white"
            p={2}
            bg="blue.500"
            borderRight="1px solid black"
          >
            W
          </Box>
          <Text>{shuffled[2]}</Text>
        </HStack>
      </GridItem>

      <GridItem p={2} bg={color}>
        <Heading as="h3" size="md" mb={3}>
          Tangible:{' '}
        </Heading>
        <Textarea rows="2" borderRadius="none"></Textarea>
        <Textarea rows="2" borderRadius="none"></Textarea>
      </GridItem>
      <GridItem p={2} bg={color}>
        <Heading as="h3" size="md" mb={3}>
          Digital:
        </Heading>
        <Textarea rows="2" borderRadius="none"></Textarea>
        <Textarea rows="2" borderRadius="none"></Textarea>
      </GridItem>
      <GridItem p={2} bg={color}>
        <Heading as="h3" size="md" mb={3}>
          Service:
        </Heading>
        <Textarea rows="2" borderRadius="none"></Textarea>
        <Textarea rows="2" borderRadius="none"></Textarea>
      </GridItem>
    </Grid>
  );
}
