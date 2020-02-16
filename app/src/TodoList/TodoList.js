import React, {Fragment} from 'react';
import TodoItem from '../TodoItem/TodoItem'

import { Paper, List, ListItem, Divider, ListItemText } from '@material-ui/core';

// function TodoList(props) {
//     return (
//         <Paper>
//             <List>
//             {props.todos.map(todo => (
//                 <React.Fragment>
//                 <ListItem>
//                     <ListItemText>
//                     <TodoItem />
//                     </ListItemText>
//                 </ListItem>
//                 <Divider/>
//                </React.Fragment>
//             ))}
            
//             </List>
//         </Paper>
//     )
// }

function TodoList(props) {
    return (
        <Paper>
            <List>
            {props.todos.map(todo => (
                <React.Fragment>
                <TodoItem task={todo.task} key= {todo.id} completed={todo.completed} />

                <Divider/>
               </React.Fragment>
            ))}
            
            </List>
        </Paper>
    )
}

export default TodoList
