import { Global } from '@emotion/react'
import React from 'react'

const Fonts = () => {
  return (
    <Global
      styles={`@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Heebo:wght@100&display=swap')`}
    ></Global>
  )
}

export default Fonts
