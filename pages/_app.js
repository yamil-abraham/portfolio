import React from 'react'
import Layout from '../components/layout/main'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../libs/theme'
import Fonts from '../components/Fonts'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
