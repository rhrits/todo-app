import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(state => state.isDarkMode);

    const handleDeleteTask = () => {
        dispatch(deleteTask(task.id));
    };

    const handleEditTask = () => {
        const updatedTaskText = prompt("Edit task", task.text);
        if (updatedTaskText) {
            dispatch(editTask(task.id, {...task, text: updatedTaskText }));
        }
    };

    const handleToggleCompletion = () => {
        dispatch(editTask(task.id, {...task, completed: !task.completed }));
    };

    return ( <
        ListItem style = {
            {
                width: '500px',
                margin: '8px auto',
                backgroundColor: isDarkMode ? 'white' : '#f0f0f0',
                borderRadius: '4px',
                color: isDarkMode ? 'black' : 'inherit',
            }
        } >
        <
        Checkbox checked = { task.completed }
        onChange = { handleToggleCompletion }
        style = {
            {
                color: task.completed ? 'grey' : 'inherit',
                height: '20px',
                width: '20px',
            }
        }
        /> <
        ListItemText primary = { task.text }
        style = {
            { textDecoration: task.completed ? 'line-through' : 'none' } }
        /> <
        IconButton onClick = { handleEditTask }
        style = {
            { color: 'green' } } >
        <
        Edit / >
        <
        /IconButton> <
        IconButton onClick = { handleDeleteTask }
        style = {
            { color: 'green' } } >
        <
        Delete / >
        <
        /IconButton> <
        /ListItem>
    );
};

export default TaskItem;