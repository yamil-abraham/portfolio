import { Image } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Cartoons = () => {
  const constraintsRef = useRef(null)

  const [isDropped, setIsDropped] = useState(false)

  const handleDragEnd = () => {
    setIsDropped(true)
    setTimeout(() => {
      setIsDropped(false)
    }, 200)
  }

  const variantCartoon = {
    hover: {
      scale: 1.2,
    },
  }

  const variants = {
    drop: {
      rotate: 360, // Rotación de 360 grados

      transition: {
        duration: 50, // Duración de la animación en segundos
        ease: 'easeInOut',
        loop: Infinity,
      },
    },
    dropped: {
      rotate: -40, // Escalar el elemento al soltarlo
      transition: {
        duration: 0.3, // Duración de la animación en segundos
        ease: 'easeInOut',
      },
    },
    hover: {
      rotate: 50, // Escalar el elemento al soltarlo
      transition: {
        duration: 0.1, // Duración de la animación en segundos
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      style={{
        background:
          'radial-gradient(50% 50% at 50% 50%, rgba(7, 2, 26, 1) 0%, rgba(7, 2, 26, 0.00) 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        paddingTop: 150,
      }}
      ref={constraintsRef}
    >
      <motion.div
        style={{
          zIndex: 3,
          backgroundImage: 'url(https://i.imgur.com/8a8Nq09.png)',
          minWidth: '265px',
          height: '145px',
        }}
        drag
        dragConstraints={constraintsRef}
        whileDrag="hover" // Aplicar la animación "drop" mientras se arrastra
        animate={isDropped ? 'dropped' : 'drop'} // Aplicar la animación "dropped" cuando se suelta
        variants={variants}
        onDragEnd={handleDragEnd} // Manejar el evento de finalización del arrastre
      ></motion.div>

      <motion.div variants={variantCartoon} whileHover={'hover'}>
        <Image
          zIndex={1}
          alt="image"
          src="https://i.imgur.com/BTeyeZ5.png"
          marginBottom={5}
          minWidth={'300px'}
        />
      </motion.div>

      <motion.div
        style={{
          zIndex: 3,
          backgroundImage: 'url(https://i.imgur.com/NrSvePm.png)',
          minWidth: '290px',
          height: '310px',
        }}
        drag
        dragConstraints={constraintsRef}
        whileDrag="hover" // Aplicar la animación "drop" mientras se arrastra
        animate={isDropped ? 'dropped' : 'drop'} // Aplicar la animación "dropped" cuando se suelta
        variants={variants}
        onDragEnd={handleDragEnd} // Manejar el evento de finalización del arrastre
      ></motion.div>
    </motion.div>
  )
}

export default Cartoons
