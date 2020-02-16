import React from 'react'
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function TodoItem({ task, completed}) {
    return (
    <ListItem>
        <Checkbox tabIndex={-1} checked={completed}/>
        <ListItemText style={{ textDecoration: completed ? 'line-through': 'none'}}>
        {task}
        </ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                 <DeleteIcon />
                </IconButton>
                <IconButton>
                 <EditIcon />
                </IconButton>
                
            </ListItemSecondaryAction>
    </ListItem>
    )
}

export default TodoItem
