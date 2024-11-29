import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([])
  console.log({formats,})

  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats)
  }
  return (
    <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
            <Button variant='text' href='htttps://google.com'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='outlined' color='error'>error</Button>
            <Button variant='contained' color='warning'>warning</Button>
            <Button variant='text' color='info'>info</Button>
            <Button variant='contained' color='success'>success</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained'size='small'>Small</Button>
            <Button variant='contained'size='medium' color="success">medium</Button>
            <Button variant='outlined'size='large' color="error">large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
        <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
        <Button variant="contained" disableElevation onClick={()=>alert('Clicked')} endIcon={<SendIcon />}>Send</Button>
        
        <IconButton aria-label='send' color='secondary' size="small">
          <SendIcon />
        </IconButton>
        </Stack>

        <Stack direction='row'>
          
        <ButtonGroup 
        variant='outlined' 
        color='secondary' 
        orientation='vertical' 
        size='small'
        aria-label="alignment button group"
        >
          <Button onClick={()=> alert('Start')}>Start</Button>
          <Button>Center</Button>
          <Button>End</Button>
        </ButtonGroup>        

        </Stack>

        <Stack direction='row'>
          <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange}>

          <ToggleButton value='bold' aria-label='bold'>
              <FormatBoldIcon />
            </ToggleButton>
            
            <ToggleButton value='Italic' aria-label='italic'>
              <FormatItalicIcon />
            </ToggleButton>
            
            <ToggleButton value='Underlined' aria-label='underlined'>
              <FormatUnderlinedIcon />
            </ToggleButton>
            
          </ToggleButtonGroup>
        </Stack>

    </Stack>
  )
}

export default MuiButton
