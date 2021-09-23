import React from 'react';
import { Spinner as ChakraSpinner, Box } from '@chakra-ui/react';

const Spinner = () => {
  return (
    <Box w="100%" h="8rem" p={6}>
      <ChakraSpinner
        h="6rem"
        w="6rem"
        thickness="16px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.900"
        size="xl" />
    </Box>
  )
};

export default Spinner
