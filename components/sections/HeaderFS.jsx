import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const HeaderFS = () => {
  const gradientBgH1 = 'linear-gradient(to right, #ED7D26, #7600C6, #7600C6)'
  const gradientBgH2 = 'linear-gradient(to right, #08ABE2, #7600C6, #7600C6)'

  const refHeaders = useRef(null)
  const isInView = useInView(refHeaders)

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    } else {
      mainControls.start('hidden')
    }
  })

  const variantsUp = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const variantsDown = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const variantsLeft = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const variantsRight = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <>
      <motion.div variants={variantsUp} initial="hidden" animate={mainControls}>
        <Heading ref={refHeaders} borderRadius="lg" align="center" margin={5}>
          Hi!, I&apos;m Facundo
        </Heading>
      </motion.div>

      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          flexGrow={1}
        >
          <motion.div
            variants={variantsRight}
            initial="hidden"
            animate={mainControls}
          >
            <Heading
              as="h2"
              whiteSpace="nowrap"
              fontSize={{ base: '60px', xl: '120px' }}
              sx={{
                background: gradientBgH1,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              FULL STACK
            </Heading>
          </motion.div>

          <motion.div
            variants={variantsLeft}
            initial="hidden"
            animate={mainControls}
          >
            <Heading
              as="h2"
              fontSize={{ base: '60px', xl: '120px' }}
              sx={{
                background: gradientBgH2,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              DEVELOPER
            </Heading>
          </motion.div>
          <motion.div
            variants={variantsDown}
            initial="hidden"
            animate={mainControls}
          >
            <Text
              fontSize={{ base: '10px', xl: '16px' }}
              textAlign={'center'}
              style={{
                padding: 5,
                color: '#607B96',

                fontFamily: "'Fira Code', monospace",
                fontWeight: 450,
              }}
            >
              {'//'} you can also see it on my Github page
            </Text>
            <Box display={'flex'} padding={2}>
              <Text
                fontSize={{ base: '10px', xl: '16px' }}
                style={{
                  color: '#4D5BCE',
                  fontFamily: "'Fira Code', monospace",
                  fontWeight: 500,
                  paddingRight: 7,
                }}
              >
                {'const '}
              </Text>
              <Text
                fontSize={{ base: '10px', xl: '16px' }}
                style={{
                  color: '#43D9AD',
                  fontFamily: "'Fira Code', monospace",
                  fontWeight: 500,
                  paddingRight: 7,
                }}
              >
                {' githubLink ='}
              </Text>
              <Link
                fontSize={{ base: '10px', xl: '16px' }}
                href="https://github.com/FacundoInza"
                isExternal
                style={{
                  color: '#E99287',
                  fontFamily: "'Fira Code', monospace",
                  fontWeight: 500,
                }}
              >
                “https://github.com/FacundoInza”
                <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  )
}

export default HeaderFS
