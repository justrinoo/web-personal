import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import MyComponent from './router';
import theme from './theme';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" marginTop={6}>
        <MyComponent />
      </Container>
    </ChakraProvider>
  );
}

export default App;
