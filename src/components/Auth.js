import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithGoogle, signOut } from '../redux/actions';
import { Button, Box, Typography } from '@mui/material';

const Auth = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    return ( <
        Box textAlign = "center"
        mt = { 2 } > {
            user ? ( <
                >
                <
                Typography variant = "h6" > Hello, { user.displayName } < /Typography> <
                Button variant = "contained"
                color = "secondary"
                onClick = {
                    () => dispatch(signOut()) } >
                Sign Out <
                /Button> <
                />
            ) : ( <
                Button variant = "contained"
                color = "primary"
                onClick = {
                    () => dispatch(signInWithGoogle()) } >
                Sign In with Google <
                /Button>
            )
        } <
        /Box>
    );
};

export default Auth;