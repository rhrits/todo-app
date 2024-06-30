import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import DownloadButton from './components/DownloadButton';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/actions';

const App = () => {
    const isDarkMode = useSelector(state => state.isDarkMode);
    const dispatch = useDispatch();

    return ( <
        div >
        <
        AppBar position = "static" >
        <
        Toolbar >
        <
        Typography variant = "h6"
        style = {
            { flexGrow: 1 } } >
        To - Do App <
        /Typography> <
        IconButton onClick = {
            () => dispatch(toggleTheme()) }
        color = "inherit" > { isDarkMode ? < Brightness7 / > : < Brightness4 / > } <
        /IconButton> <
        /Toolbar> <
        /AppBar> <
        div style = {
            { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh', padding: '16px' } } >
        <
        TaskInput / >
        <
        TaskList / >
        <
        Box mt = { 2 } >
        <
        DownloadButton / >
        <
        /Box> <
        /div> <
        /div>
    );
};

export default App;