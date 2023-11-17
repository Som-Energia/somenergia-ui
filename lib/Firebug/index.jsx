import React from 'react'
import Button from '@mui/material/Button'
import Logo from '../../src/assets/logo.svg'

export default function Firebug(props) {
  React.useEffect(() => {}, []) // Dummy use of React
  return (
    <Button variant="contained">
      <img src={Logo} />
    </Button>
  )
}
