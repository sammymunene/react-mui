import { Switch, FormControlLabel, Box } from '@mui/material'
import { useState } from 'react'

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <Box width="250px">
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Enable Notifications"
      />
    </Box>
  )
}

export default MuiSwitch
