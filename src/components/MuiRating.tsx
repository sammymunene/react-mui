import { Rating, Box } from '@mui/material'
import { useState } from 'react'

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue)
  }

  return (
    <Box width="250px">
      <Rating name="simple-controlled" value={value} onChange={handleChange} />
    </Box>
  )
}

export default MuiRating
