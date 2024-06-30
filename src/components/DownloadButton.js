import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import jsPDF from 'jspdf';

const DownloadButton = () => {
    const tasks = useSelector(state => state.tasks);

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text('To-Do List', 10, 10);
        tasks.forEach((task, index) => {
            doc.text(`${index + 1}. ${task.text}`, 10, 20 + index * 10);
        });
        doc.save('todo-list.pdf');
    };

    return ( <
        Button variant = "contained"
        color = "primary"
        onClick = { handleDownload } >
        Download To - Do List as PDF <
        /Button>
    );
};

export default DownloadButton;