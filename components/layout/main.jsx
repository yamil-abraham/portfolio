import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" overflowX={'hidden'}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Facundo Inza - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.xl" pt={20}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Main
