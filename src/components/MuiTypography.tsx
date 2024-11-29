// typography involves the appearance of text in your application
import {Typography} from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>Heading</Typography>
      <Typography variant='h2'>Heading</Typography>
      <Typography variant='h3'>Heading</Typography>
      <Typography variant='h4'gutterBottom component='h1'>Heading</Typography>
      <Typography variant='h5'>Heading</Typography>
      <Typography variant='h6'>Heading</Typography>

      <Typography variant='subtitle1'>subtitle 1</Typography>
      <Typography variant='subtitle2'>subtitle 2</Typography>

      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quas blanditiis laudantium laboriosam nostrum rem, neque voluptates, expedita nesciunt ullam doloremque, tempore necessitatibus excepturi non quisquam aliquid quis dignissimos sequi!</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas distinctio, recusandae placeat et, itaque, fuga aliquam quae nostrum corporis pariatur rem provident non excepturi sed. Veritatis cum assumenda ducimus.</Typography>


      </div>
  )
}

export default MuiTypography
