import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from '@chakra-ui/react'
import Logo from './Logo'
import { HamburgerIcon } from '@chakra-ui/icons'
import ToggleThemeButton from './theme-toggle-button'
import { motion } from 'framer-motion'

const Navbar = (props) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  const navbarVariants = {
    scrolled: {
      position: 'fixed',
      zIndex: 2,
      backdropFilter: 'blur(50px)',
      backgroundColor: 'rgba(0,0,0,0.4)',
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
    normal: {
      backdropFilter: 'blur(0px)',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      transition: {
        duration: 2,
        ease: 'easeOut',
      },
    },
  }

  return (
    <>
      <motion.nav
        as="nav"
        initial={'normal'}
        animate={isScrolled ? 'scrolled' : 'normal'}
        variants={navbarVariants}
        {...props}
      >
        <Box display={'flex'} width={'50%'}>
          <Logo />
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems={'center'}
            justifyContent={'space-around'}
            flexGrow={1}
            marginLeft={2}
          >
            <Link to="about" smooth={true} duration={1000}>
              <button>ABOUT</button>
            </Link>
            <Link to="skills" smooth={true} duration={1000}>
              <button>SKILLS</button>
            </Link>
            <Link to="projects" smooth={true} duration={1000}>
              <button>PROJECTS</button>
            </Link>
            <Link to="contact" smooth={true} duration={1000}>
              <button>CONTACT</button>
            </Link>
            <ToggleThemeButton />
          </Stack>
        </Box>

        <Box
          flex={1}
          display={{ base: 'inline-block', md: 'none' }}
          align={'right'}
        >
          <Box m={6} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outline'}
                aria-label="Options"
              />
              <MenuList>
                <Link to={'home'} smooth={true} duration={1000}>
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link to={'about'} smooth={true} duration={1000}>
                  <MenuItem>About</MenuItem>
                </Link>
                <Link to={'skills'} smooth={true} duration={1000}>
                  <MenuItem>Skills</MenuItem>
                </Link>
                <Link to={'projects'} smooth={true} duration={1000}>
                  <MenuItem>Projects</MenuItem>
                </Link>
                <Link to={'contact'} smooth={true} duration={1000}>
                  <MenuItem>Contacs</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </motion.nav>
    </>
  )
}

export default Navbar
