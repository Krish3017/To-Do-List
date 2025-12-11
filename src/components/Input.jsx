import React, { useState } from "react";

const Input = ({ addTask }) => {
  const [input, setInput] = useState("");

  const add = () => {
    if (!input) return;
    addTask(input);
    setInput("");
  };

  return (
    <div className="flex justify-center items-center gap-10">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter your Task"
        className="border-black border-2 h-10 w-80 rounded-sm text-gray-600 bg-white text-center text-xl mb-5 ml-10"
      />
      <button
        onClick={add}
        className="bg-green-500 text-black border-2 border-green-700 h-7 w-30 rounded-sm cursor-pointer mb-5"
      >
        Add Task
      </button>
    </div>
  );
};

export default Input;
