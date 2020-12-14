import React from 'react';
import { Box, Input, Text, Button, HStack, Heading } from '@chakra-ui/react';

export default function Card({
  inputItem,
  list,
  handleClick,
  setInputItem,
  title,
  color,
}) {
  return (
    <Box maxW="352px" bg={color} borderColor={color} borderWidth="1px">
      <Heading
        as="h2"
        size="md"
        bg={color}
        p={2}
        color="white"
        fontWeight="bold"
      >
        {title}
      </Heading>
      <HStack spacing={0}>
        <Input
          onChange={e => {
            setInputItem(e.target.value);
          }}
          onKeyPress={e => {
            if (e.key === 'Enter' && e.target.value !== '') handleClick();
          }}
          value={inputItem}
          borderRadius="0"
          placeholder="Type here..."
          bg="white"
        />
        <Button onClick={handleClick} borderRadius="0">
          Add
        </Button>
      </HStack>
      <Box p={4} fontWeight="bold">
        {list.map((item, index) => {
          return (
            <Text key={Math.random() * 10000}>
              {index + 1} {item}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
}
