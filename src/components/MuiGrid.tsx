import { Grid, Button } from '@mui/material'

const MuiGrid = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Button variant="contained">Button 1</Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined">Button 2</Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="text">Button 3</Button>
      </Grid>
    </Grid>
  )
}

export default MuiGrid
