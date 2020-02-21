import React, {useState, useEffect} from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/v4';
// import Grid from '@material-ui/core/Grid';


function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
    // const initialTodos =[ 
    //     { id:1, task: 'test1', completed:false},
    //     { id:2, task: 'test2', completed:true},
    //     { id:3, task: 'test3', completed:false}
    // ];
    //hook
    const [todos, setTodos] = useState(initialTodos);

    //useEffect function will run everytime a component runs
    useEffect(()=>{
        // alert("in useEffect mode");

        //sync todo in local stores 
        window.localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]);

    const addTodo = newTodoText => {
        setTodos([ ...todos, { id: uuid(), task: newTodoText, completed: false}])
    };
    const removeTodo= todoId => { 
        // filter out removed todo
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        // call setTodos with new todos array
        setTodos(updatedTodos)
    };

    const toggleTodo = todoId => { 
        const updatedTodos= todos.map(todo => 
            todo.id === todoId? { ...todo, completed:  !todo.completed} : todo
            );
            setTodos(updatedTodos);
        };

    const editTodo = (todoId, newTask) => { 
        const updatedTodos= todos.map(todo => 
                todo.id === todoId? { ...todo, task: newTask} : todo
                );
                setTodos(updatedTodos);    
    };

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
                    <TodoList todos={todos}
                    removeTodo={removeTodo}  
                    toggleTodo={toggleTodo}
                    editTodo= {editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}



export default TodoApp;



