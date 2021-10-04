import React from 'react';
import Navigation from '../Nav';
import { Box, Text, Center, Container, Flex, Button } from '@chakra-ui/react';
import Footer from '../Footer';
export default function me() {
  return (
    <>
      <Navigation />
      <Box textAlign="center">
        <Center h="70vh">
          <Container>
            <Box
              borderWidth="1px"
              borderRadius={4}
              padding="3"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                {/* Profile */}
                <Flex>
                  <Text fontSize="lg" color="gray" fontWeight="semibold">
                    riyaraa
                  </Text>
                </Flex>
                <Box mt={2}>
                  <Text fontSize="md">
                    Fullstack Website Developer Foccusing in Javascript
                  </Text>
                </Box>
                <Text fontSize="md" textAlign="left" mt={2}>
                  Developer based From Indonesia
                </Text>
              </Box>
              <Box>
                <Button size="xs">Detail</Button>
              </Box>
            </Box>
            <Box>
              <Text fontSize="4xl" fontWeight="bold" mt="10">
                Hello, Im Rino Satya Putra
              </Text>
              <Text fontSize="lg" fontWeight="semibold" mt="2">
                Fullstack Web as Junior Software Engineer, 18 Years.
              </Text>
            </Box>
          </Container>
        </Center>
      </Box>
      <Footer />
    </>
  );
}
