import React, { useState } from 'react'
import { Link } from '@chakra-ui/react'

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const handleHover = () => {
    setIsHovered(true)
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
  }

  const handlePress = () => {
    setIsPressed(true)
  }

  const handleRelease = () => {
    setIsPressed(false)
  }

  return (
    <Link
      href="/"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
      style={{
        display: 'inline-block',
        transform: `scale(${isHovered ? 1.1 : 1}) scale(${
          isPressed ? 0.6 : 1
        }) `,
        transition: 'transform 0.3s ease',
      }}
    >
      <svg
        width="55"
        height="58"
        viewBox="0 0 55 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 20 }}
      >
        <rect width="54.2222" height="57.4118" rx="15" fill="#C5C4C4" />
        <rect
          x="7.33594"
          y="3.18951"
          width="41.1451"
          height="44.6536"
          rx="13"
          fill="white"
        />
        <path
          d="M17.856 22.1441H15.346V24.2041H17.716V25.2341H15.346V28.5241H14.256V21.1241H17.856V22.1441ZM20.4397 22.1041L20.3797 23.9841C20.6397 23.8974 20.9397 23.8541 21.2797 23.8541C21.9731 23.8541 22.5364 24.0541 22.9697 24.4541C23.4097 24.8674 23.6297 25.4208 23.6297 26.1141C23.6297 26.9341 23.3697 27.5641 22.8497 28.0041C22.3697 28.4241 21.7231 28.6341 20.9097 28.6341C20.2364 28.6341 19.6764 28.5374 19.2297 28.3441V27.2841C19.7497 27.5374 20.3231 27.6641 20.9497 27.6641C21.4297 27.6641 21.8164 27.5474 22.1097 27.3141C22.4231 27.0608 22.5797 26.7041 22.5797 26.2441C22.5797 25.2908 22.0464 24.8141 20.9797 24.8141C20.4264 24.8141 19.8697 24.8941 19.3097 25.0541L19.3797 21.1041H23.2597V22.1041H20.4397Z"
          fill="#7B7B7B"
        />
      </svg>
    </Link>
  )
}

export default Logo
