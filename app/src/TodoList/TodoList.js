import React, {Fragment} from 'react';

import { Paper, List, ListItem, Divider, ListItemText } from '@material-ui/core';

function TodoList(props) {
    return (
        <Paper>
            <List>
            {props.todos.map(todo => (
                <React.Fragment>
                <ListItem>
                    <ListItemText>{todo.task}</ListItemText>
                </ListItem>
                <Divider/>
               </React.Fragment>
            ))}
            
            </List>
        </Paper>
    )
}

export default TodoList
