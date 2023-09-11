import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" padding={10}>
      <Flex align="center" justify="center">
        <Text ml={2}>&copy; Copyright Facundo Inza</Text>
      </Flex>
    </Box>
  )
}

export default Footer
