import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import store from './redux/store';
import App from './App';
import { lightTheme, darkTheme } from './theme';

const ThemedApp = () => {
    const isDarkMode = useSelector(state => state.isDarkMode);
    return ( <
        ThemeProvider theme = { isDarkMode ? darkTheme : lightTheme } >
        <
        CssBaseline / >
        <
        App / >
        <
        /ThemeProvider>
    );
};

ReactDOM.render( <
    Provider store = { store } >
    <
    ThemedApp / >
    <
    /Provider>,
    document.getElementById('root')
);