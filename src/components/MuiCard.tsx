import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const MuiCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/150"
        alt="image"
      />
      <CardContent>
        <Typography variant="h6">Card Title</Typography>
        <Typography variant="body2" color="text.secondary">
          This is a description of the card.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MuiCard
