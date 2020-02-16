import React from 'react'
import { ListItem, ListItemText, Checkbox } from '@material-ui/core';

function TodoItem({ task, completed}) {
    return (
    <ListItem>
        <Checkbox checked={completed}/>
        <ListItemText>
        {task}
        </ListItemText>
    </ListItem>
    )
}

export default TodoItem
