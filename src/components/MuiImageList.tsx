import { ImageList, ImageListItem } from '@mui/material'

const MuiImageList = () => {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3}>
      <ImageListItem>
        <img src="https://plus.unsplash.com/premium_photo-1732115973201-6aac974f4eb8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
      </ImageListItem>
      <ImageListItem>
        <img src="https://plus.unsplash.com/premium_photo-1732115973201-6aac974f4eb8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
      </ImageListItem>
      <ImageListItem>
        <img src="https://plus.unsplash.com/premium_photo-1732115973201-6aac974f4eb8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
      </ImageListItem>
    </ImageList>
  )
}

export default MuiImageList
