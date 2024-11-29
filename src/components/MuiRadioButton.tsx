import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box } from '@mui/material'
import { useState } from 'react'

const MuiRadioButton = () => {
  const [value, setValue] = useState('female')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Box width="250px">
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup row value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButton
