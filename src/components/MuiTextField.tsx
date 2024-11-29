import { Stack, TextField, InputAdornment, IconButton} from '@mui/material'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const MuiTextField = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const [value, setValue] = useState('')

  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
        <TextField label='Outlined'variant='outlined'/>

        <TextField 
        label='password' 
        type='password' 
        variant='outlined' 
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={!value}
        helperText={!value ? 'Required' : 'Do not share your Password!'}
        />

<TextField 
        label='Filled' 
        variant='filled'
        size='medium' 
        color='secondary'
        helperText='Do not share your password!'
        required
        disabled
        />        
        
        <TextField 
        label='Filled' 
        variant='outlined'
        size='medium' 
        color='secondary'
        required
        />
        <TextField 
        label='Read only' 
        inputProps={{ readOnly: true }}
        />

        </Stack>

        <Stack spacing={4} direction="row">
            <TextField
            label="Amount"
            variant="outlined"
            InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            />

            <TextField
            label="Weight"
            variant="outlined"
            InputProps={{
                endAdornment: <InputAdornment position="end">KG</InputAdornment>,
            }}
            />
        </Stack> 
        

        <Stack spacing={4} direction="row">

        <TextField
            color='secondary'
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
            ),
            }}
        />

        </Stack>
    </Stack>

  )
}

export default MuiTextField
