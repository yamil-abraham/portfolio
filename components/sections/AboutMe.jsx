import { Box, Button, ButtonGroup, Heading } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const AboutMe = () => {
  const refAbout = useRef(null)
  const isInView = useInView(refAbout)

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    } else {
      mainControls.start('hidden')
    }
  })

  const handleDownload = () => {
    window.open('https://docdro.id/dc9JNZb', '_blank')
  }
  const containerVariants = {
    hidden: {
      filter: 'blur(20px)',
      scale: 1.2,
    },
    visible: {
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
      },
    },
  }

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: '-20vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.9,
      },
    },
  }

  const leftVariants = {
    hidden: {
      opacity: 0,
      x: '20vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.9,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate={mainControls}
    >
      <Box
        borderRadius="20px"
        background={`linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)`}
        width="100%"
        height={{ base: '1150px', lg: '700px' }}
        display={'flex'}
        alignItems={'center'}
        flexDirection={{ base: 'column', lg: 'row' }}
        padding={{ base: 2, lg: 20 }}
        ref={refAbout}
      >
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={mainControls}
        >
          <Box
            backgroundColor="rgba(0, 0, 0, 0.5)"
            backgroundImage="url(https://i.imgur.com/vQRkNFE.png)"
            backgroundSize="cover"
            backgroundPosition="center"
            width={'330px'}
            height={'440px'}
            borderRadius={'45px'}
            margin={{ base: 3, md: 10 }}
          />
        </motion.div>

        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={mainControls}
        >
          <Box
            width={{ base: '100%', md: '80%' }}
            marginLeft={{ base: 2, md: 20 }}
          >
            <Heading fontSize={{ base: 40, md: 56 }}>About Me</Heading>
            <Heading fontSize={{ base: 20, md: 25 }} color={'#C7A052'}>
              IA ENGINEER
            </Heading>
            <p style={{ marginTop: 8 }}>
              I'm an IT enthusiast 💻 with a serious passion for all things tech! 🚀
              I've built my career around the idea that technology can truly make the world a better place, and I'm here to prove it. 😎

            </p>
            <p style={{ marginTop: 8 }}>
              I thrive on diving headfirst into challenging tech puzzles, and my knack for finding innovative solutions is what keeps me going. 
              🧩 Whether it's collaborating with diverse teams or tinkering with the latest gadgets, I'm all about boosting efficiency and making things happen. 🤓
            </p>
            <p style={{ marginTop: 8 }}>
              Staying on top of the ever-evolving tech landscape is my jam, and I firmly believe that staying current with
              the latest trends is vital in our mission to drive positive change in society. 🌟
              My entrepreneurial spirit is the engine behind a constant flow of new ideas,
              and I'm committed to harnessing technology's incredible potential to not only solve problems but also create opportunities for a brighter, more connected world. 🌈💡
              So, let's connect and explore the endless possibilities that technology offers! 🌐🤝
            </p>
            <Box marginTop={5}>
              <ButtonGroup>
                <Button
                  paddingLeft={8}
                  paddingRight={8}
                  borderRadius={45}
                  border={'solid 1px #C7A052'}
                  color={'#C7A052'}
                >
                  Contact Me
                </Button>

                <Button
                  marginLeft={1}
                  paddingLeft={8}
                  paddingRight={8}
                  borderRadius={45}
                  border={'solid 1px #C7A052'}
                  color={'#C7A052'}
                  onClick={handleDownload}
                >
                  Download CV
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  )
}

export default AboutMe
