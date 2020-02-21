import React  from 'react';
import Todo from '../Todo/Todo'
import { Paper, List, Divider} from '@material-ui/core';

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

function TodoList({ todos, removeTodo, toggleTodo, editTodo}) {
    if (todos.length)
    return (
        <Paper>
            <List>
            {todos.map((todo, i) => (
                <React.Fragment>
                <Todo
                id={todo.id}
                task={todo.task} 
                key= {todo.id} 
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo = {toggleTodo}
                editTodo = {editTodo}
                 />
                 {i <todos.length -1 ? <Divider />: ' '}
                <Divider/>
               </React.Fragment>
            ))}
            </List>
        </Paper>
    );
    return null;
}

export default TodoList;
