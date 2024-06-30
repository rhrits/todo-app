import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import { addTask } from '../redux/actions';
import { List, Box } from '@mui/material';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.forEach(task => dispatch(addTask(task)));
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return ( <
        Box display = "flex"
        justifyContent = "center"
        mt = { 2 } >
        <
        List style = {
            { width: '100%', maxWidth: '500px' } } > {
            tasks.map(task => ( <
                TaskItem key = { task.id }
                task = { task }
                />
            ))
        } <
        /List> <
        /Box>
    );
};

export default TaskList;