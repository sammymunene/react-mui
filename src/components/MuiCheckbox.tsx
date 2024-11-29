import { Checkbox, FormControlLabel, Box } from '@mui/material'
import { useState } from 'react'

const MuiCheckbox = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <Box width="250px">
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label="Accept Terms and Conditions"
      />
    </Box>
  )
}

export default MuiCheckbox
