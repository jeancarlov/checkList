import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from '../hooks/useInputState';

// function TodoForm(props) {
//     const [ value, handleChange, reset ] =  useInputState('');
//     return (
//         <Paper>
//         {value}
//             <TextField  value= { value} onChange= {handleChange}/>
//         </Paper>
//     )};

function TodoForm({addTodo}) {
    const [ value, handleChange, reset ] =  useInputState('');
    return (
        <Paper style= {{ margin: '1rem', padding:'0 1rem'}}>
            <form  onSubmit = {e=>{
                e.preventDefault();
                addTodo(value);
                reset();
            }}
            >
            <TextField  value= { value} onChange= {handleChange} margin='normal' label= 'Add New Todo'/>
            </form>
        </Paper>
    )};

export default TodoForm;
