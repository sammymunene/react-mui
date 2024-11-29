import { Stack, Button } from '@mui/material'

const MuiStack = () => {
  return (
    <Stack spacing={2}>
      <Button variant="contained">Button 1</Button>
      <Button variant="outlined">Button 2</Button>
      <Button variant="text">Button 3</Button>
    </Stack>
  )
}

export default MuiStack
