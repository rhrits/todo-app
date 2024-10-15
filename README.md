# React To-Do Application
This is a simple To-Do application built using React and Material-UI. The application allows users to add, view, edit, and delete tasks, and provides an option to download the to-do list in PDF format. The application supports both light and dark themes.

[Website](https://hr-todoapp.netlify.app/)

## Features
- Add a new task
- View a list of tasks
- Edit an existing task
- Delete a task
- Download the to-do list in PDF format
- Toggle between light and dark themes

## Technologies Used
- React
- Material-UI
- Redux

## Installation
1.	Clone the repository:

```
git clone https://github.com/yourusername/my-todo-app.git
```

```
cd my-todo-app
```
2.	Install dependencies:
```
npm install
```
3.	Start the development server:
```
npm start
```

## Project Structure
```
src/
  components/
    ├── TaskInput.js
    ├── TaskItem.js
    ├── TaskList.js
    ├── DownloadButton.js
  redux/
    ├── actions.js
    ├── reducers.js
    ├── store.js
  ├── theme.js
  ├── App.js
  ├── index.js

```
## Usage
1.	Open your browser and navigate to http://localhost:3000 to view the application.
2.	Use the input field to add new tasks.
3.	Edit or delete tasks using the respective buttons.
4.	Toggle between light and dark themes using the theme switcher.
5.	Download the to-do list as a PDF using the download button.
