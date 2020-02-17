import React from 'react';
import useToggle from '../hooks/useToggle';
import EditTodoForm from '../EditTdoForm/EditTodoForm';
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
  

// editTodo it updates the edit todo with the new text field
function Todo({id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggle(false);

    return (
    <ListItem>
      {isEditing ? (<EditTodoForm 
         editTodo ={editTodo}
         id= {id} 
         task={task}
         toggle ={toggle}
         />
        ): (
        <React.Fragment>
        <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
        <ListItemText style={{ textDecoration: completed ? 'line-through': 'none'}}>
        {task}
        </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                
                 <DeleteIcon />
                </IconButton>
                <IconButton aria-label= 'edit' onClick= {toggle}>
                 <EditIcon />
                </IconButton>
                
            </ListItemSecondaryAction>
            </React.Fragment>
      )}
        
    </ListItem>
    )
}

export default Todo;
