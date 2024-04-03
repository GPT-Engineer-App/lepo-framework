import React, { useState } from "react";
import { Box, Heading, Text, VStack, Image, Button, Link, Code, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Welcome to Lepo.js
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Lepo.js is a lightweight frontend framework for building modern web applications.
        </Text>
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwZnJhbWV3b3JrJTIwbG9nb3xlbnwwfHx8fDE3MTIxMDM3NTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Lepo.js Logo" boxSize="200px" />
        <Text fontSize="lg">Lepo.js provides a simple and intuitive way to create interactive UIs.</Text>
        <Button leftIcon={<FaGithub />} as={Link} href="https://github.com/lepo-js" target="_blank" colorScheme="blue">
          GitHub Repository
        </Button>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Features
          </Heading>
          <UnorderedList spacing={2}>
            <ListItem>Component-based architecture</ListItem>
            <ListItem>Virtual DOM for efficient rendering</ListItem>
            <ListItem>Declarative syntax</ListItem>
            <ListItem>CLI for quick project setup</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Getting Started
          </Heading>
          <Code p={4} borderRadius="md" backgroundColor="gray.100">
            npm install -g lepo-cli
            <br />
            lepo init my-app
            <br />
            cd my-app
            <br />
            npm start
          </Code>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Counter Example
          </Heading>
          <Text fontSize="lg" mb={4}>
            Click the button to increment the counter:
          </Text>
          <Button colorScheme="green" onClick={() => setCount(count + 1)}>
            Count: {count}
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
