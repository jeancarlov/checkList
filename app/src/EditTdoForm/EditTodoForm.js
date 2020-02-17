import React from 'react';
import TextField from '@material-ui/core/TextField';

// use the usedInput hook to handle the state of the edit 
import usedInputState from '../hooks/useInputState';

function EditTodoForm() {
    const [value, handleChange, reset] = usedInputState('');
    return (
        <TextField margin= 'normal' value ={value} onChange= {handleChange} fullWidth>
            
        </TextField>
    )
}

export default EditTodoForm
