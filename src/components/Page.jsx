import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import Card from "./Card";

export default function Page() {
  const [tasks, setTasks] = useState([]); 

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const editTask = (id) => {
    const item = tasks.find(t => t.id === id);
    if (!item) return;
    const newText = window.prompt("Edit task", item.text);
    if (newText === null) return; 
    setTasks(tasks.map(t => (t.id === id ? { ...t, text: newText } : t)));
  };

  return (
    <div>
      <Header />
      <Input addTask={addTask} />

      {tasks.map(t => (
        <Card
          key={t.id}
          task={t}
          onEdit={() => editTask(t.id)}
          onDelete={() => deleteTask(t.id)}
        />
      ))}
    </div>
  );
}
