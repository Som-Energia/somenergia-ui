import Button from '@mui/material/Button'
import Logo from './firebug.svg'

export default function Firebug() {
  return (
    <Button variant="contained">
      <img src={Logo} alt='firebug' />
    </Button>
  )
}
