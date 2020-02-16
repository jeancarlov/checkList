import React, {useState} from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
// import Grid from '@material-ui/core/Grid';


function TodoApp() {
    const initialTodos =[
        { id:1, task: 'test1', completed:false},
        { id:2, task: 'test2', completed:true},
        { id:3, task: 'test3', completed:false}
    ];
    //hook
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = newTodoText => {
        setTodos([ ...todos, { id: 4, task: newTodoText, completed: false}])
    }
    return (
        <Paper 
        style={{
            padding: 0,
            margin:0,
            height: '100hv',
            backgroundColor: ''
        }
        }
        elevation={0}>
        <AppBar color= 'primary' position= 'static' style= {{height: '64px'}}>
            <Toolbar>
                 <Typography color='inherit'>TODOS WITH HOOKS</Typography>
            </Toolbar>
        </AppBar>
        <Grid container justify='center' style= {{ marginTop: '1rem'}}>
            <Grid item xs={11} md={8} lg={4}>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} />
            </Grid>
        </Grid>
        </Paper>
    );
};

export default TodoApp
