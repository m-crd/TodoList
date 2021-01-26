import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import Form from "./components/Form";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    // { title: "Faire la vaisselle", isDone: false },
  ]);

  // fonction pour mettre à jour l'input
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  // fonction pour ajouter une tâche dans tasks
  const handleSubmit = (event) => {
    event.preventDefault();

    // Créer une copie de tasks
    const newTasks = [...tasks];
    // Modifier la copie
    newTasks.push({
      title: input,
      isDone: false,
    });
    // Mettre à jour tasks avec la copie
    setTasks(newTasks);
    // Remettre l'input à vide
    setInput("");
  };
  // fonction pour mettre à jour l'état (barrée ou pas) de la tâche
  const handleClickCheck = (index) => {
    const newTasks = [...tasks];
    // si isDone est true, on le passe à false
    // si isDone est false, on le passe à true
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
  };
  // fonction pour supprimer une tâche
  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    // Supprimer l'élément à l'index donné
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>TO DO LIST</h2>
      <Task
        tasks={tasks}
        handleClickCheck={handleClickCheck}
        handleDeleteTask={handleDeleteTask}
      />
      <Form
        setTasks={setTasks}
        tasks={tasks}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
      />
    </div>
  );
}

export default App;
