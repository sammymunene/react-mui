import { Paper, Typography } from '@mui/material'

const MuiPaper = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h6">This is a Paper component</Typography>
    </Paper>
  )
}

export default MuiPaper
