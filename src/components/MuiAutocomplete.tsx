import { Autocomplete, TextField, Box } from '@mui/material'
import { useState } from 'react'

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null)
  const options = ['USA', 'Kenya', 'Canada', 'Australia']

  return (
    <Box width="250px">
      <Autocomplete
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        options={options}
        renderInput={(params) => <TextField {...params} label="Select Country" />}
      />
    </Box>
  )
}

export default MuiAutocomplete
