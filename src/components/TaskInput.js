import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { TextField, Button, Box } from '@mui/material';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask({ id: Date.now(), text: task, completed: false }));
            setTask('');
        }
    };

    return ( <
        Box display = "flex"
        justifyContent = "center"
        alignItems = "center"
        flexDirection = "column"
        mt = { 2 } >
        <
        TextField value = { task }
        onChange = {
            (e) => setTask(e.target.value) }
        placeholder = "Enter a task"
        variant = "outlined"
        fullWidth style = {
            { maxWidth: '500px', marginBottom: '16px' } }
        /> <
        Button onClick = { handleAddTask }
        variant = "contained"
        color = "primary" >
        Add Task <
        /Button> <
        /Box>
    );
};

export default TaskInput;