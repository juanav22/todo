import React from "react";

import AddTask from "../organisms/add-task";
import Header from "../molecules/header";
import Layout from "../templates/layout";
import TasksGroup from "../organisms/tasks-group";

function App() {
  const [tasks, setTasks] = React.useState([]);
  
  const addTask = (taskName) => {
    console.log(taskName);
    const isTaskNameInTasks = tasks.includes(taskName.toLowerCase());

    if (!isTaskNameInTasks && taskName !== " ") {
      setTasks([ ...tasks, taskName.toLowerCase()]);
    }
  };

  const deleteTask = (taskToDelete) => {
    const filteredTaskList = tasks.filter((task) => task !== taskToDelete);

    setTasks(filteredTaskList);
  };

  return (
    <Layout>
      <Header />
      <AddTask onAddClick={addTask} />
      <TasksGroup taskList={tasks} onDeleteTask={deleteTask} />
    </Layout> 
  );
}

export default App;