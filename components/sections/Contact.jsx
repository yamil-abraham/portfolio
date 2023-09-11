import React, { useEffect, useRef, useState } from 'react'

import { motion, useAnimation, useInView } from 'framer-motion'

import {
  Box,
  FormControl,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react'

import CodeContact from '../commons/CodeContact'
import SocialMedia from '../commons/SocialMedia'
import { fetchSendEmail } from '../../services/axios'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const toast = useToast()

  const refContact = useRef(null)
  const isInView = useInView(refContact)
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('animate')
    } else {
      mainControls.start('initial')
    }
  })

  const containerVariants = {
    initial: {
      filter: 'blur(20px)',
      scale: 1.2,
    },
    animate: {
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
      },
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Aquí puedes realizar la lógica para enviar el formulario o hacer lo que necesites con los datos recopilados
    // Reiniciar los campos del formulario

    const contentEmail = {
      firstName,
      lastName,
      message,
      email,
    }

    sendEmail(contentEmail)
  }

  const sendEmail = async (contentEmail) => {
    const data = await fetchSendEmail(contentEmail)
    if (data.error) {
      toast({
        title: '',
        description: data.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } else {
      toast({
        title: '',
        description: data.message,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <motion.div
      ref={refContact}
      variants={containerVariants}
      initial={'initial'}
      animate={mainControls}
    >
      <Box
        borderRadius={'18px'}
        backgroundColor="rgba(7, 3, 40, 1)"
        width="100%"
        height={{ base: '1100px', lg: '800px' }}
        display={'flex'}
        alignItems={'center'}
        flexDirection={{ base: 'column', lg: 'row' }}
        padding={{ base: 10, lg: 20 }}
      >
        <CodeContact
          message={message}
          firstName={firstName}
          lastName={lastName}
          email={email}
        />
        <Box
          width={{ base: '100%', xl: '50%' }}
          height={{ base: '50%', xl: '100%' }}
          display={'flex'}
          justifyContent={'center'}
          padding={{ base: 5, xl: 15 }}
          marginTop={20}
        >
          <Box>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Box display="flex">
                <FormControl
                  id="firstName"
                  width="50%"
                  marginRight="1rem"
                  marginBottom="1rem"
                >
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    bg="rgba(51, 8, 104, 0.67)"
                    color="white"
                    _placeholder={{
                      color: 'white',
                      opacity: '0.8',
                    }}
                    border="none"
                    borderRadius="0"
                    _focus={{
                      outline: 'none',
                    }}
                  />
                </FormControl>

                <FormControl id="lastName" width="50%" marginBottom="1rem">
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    bg="rgba(51, 8, 104, 0.67)"
                    color="white"
                    _placeholder={{
                      color: 'white',
                      opacity: '0.8',
                    }}
                    border="none"
                    borderRadius="0"
                    _focus={{
                      outline: 'none',
                    }}
                  />
                </FormControl>
              </Box>

              <FormControl id="email" marginBottom="1rem">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  bg="rgba(51, 8, 104, 0.67)"
                  color="white"
                  _placeholder={{
                    color: 'white',
                    opacity: '0.8',
                  }}
                  border="none"
                  borderRadius="0"
                  _focus={{
                    outline: 'none',
                  }}
                />
              </FormControl>

              <FormControl id="message" marginBottom="1rem">
                <Textarea
                  resize="vertical"
                  minH="300px"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  bg="rgba(51, 8, 104, 0.67)"
                  color="white"
                  _placeholder={{
                    color: 'white',
                    opacity: '0.8',
                  }}
                  border="none"
                  borderRadius="0"
                  _focus={{
                    outline: 'none',
                  }}
                />
              </FormControl>

              <Button
                type="submit"
                marginLeft={1}
                paddingLeft={8}
                paddingRight={8}
                borderRadius={45}
                border={'solid 1px #C7A052'}
                color={'#C7A052'}
              >
                Send
              </Button>
            </form>
            <Box display={'flex'} justifyContent={'center'} margin={5}>
              <SocialMedia />
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}

export default Contact
