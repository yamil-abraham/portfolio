import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const ToggleThemeButton = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      marginLeft={5}
      aria-label="Toggle Theme"
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    />
  )
}

export default ToggleThemeButton
