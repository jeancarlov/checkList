import React from 'react';
import TextField from '@material-ui/core/TextField';

// use the usedInput hook to handle the state of the edit 

// now added the new prop call editTodo and it needs to be call when its summited 
// use and event listerner or a form tag wiht an onSubmit

import usedInputState from '../hooks/useInputState';

function EditTodoForm({id, task, editTodo, toggleEditForm}) {
    const [value, handleChange, reset] = usedInputState(task);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset ();
            toggleEditForm();
        }}>
        <TextField margin= 'normal' value ={value} onChange={handleChange} fullWidth>
            
        </TextField>
        </form>
    )
}

export default EditTodoForm;
