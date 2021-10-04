import React from 'react';
import Navigation from '../../components/Nav';
import { Box, Text } from '@chakra-ui/react';
export default function me() {
  return (
    <>
      <Navigation />
      <Box mt={10}>
        <Text fontSize="5xl" fontWeight="bold" textDecoration="underline">
          About Me
        </Text>
      </Box>
    </>
  );
}
