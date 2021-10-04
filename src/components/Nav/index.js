import React from 'react';
import { Flex, Spacer, Link, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link as Href } from 'react-router-dom';
export default function index() {
  const name = 'rino';
  return (
    <>
      <nav>
        <Flex alignItems="center">
          <Href to="/">
            <Text fontWeight="bold">@{name}</Text>
          </Href>
          <Spacer />
          <Flex alignItems="center">
            <Href to="/me">
              <Link fontSize="xl" fontWeight="bold" mx={3}>
                About
              </Link>
            </Href>
            <Href to="/blog">
              <Link fontSize="xl" fontWeight="bold" mx={3}>
                Blog
              </Link>
            </Href>
            <Href to="/show-case">
              <Link fontSize="xl" fontWeight="bold" mx={3}>
                Projects
              </Link>
            </Href>
            <Href to="/talks">
              <Link fontSize="xl" fontWeight="bold" mx={3}>
                Lets Talk
              </Link>
            </Href>
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </nav>
    </>
  );
}
