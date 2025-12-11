import React from "react";

const Card = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-white border-black border-2 rounded-2xl text-black flex h-12 w-180 items-center justify-between mt-5 ml-80">
      <div className="px-3 text-xl text-black">
        {task.text || "No task yet"}
      </div>
      <div className="flex gap-5 mr-3">
        <button
          onClick={onEdit}
          className="w-20 h-7 bg-pink-300 text-black border-2 border-black rounded-sm cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="w-20 h-7 bg-pink-300 text-black border-2 border-black rounded-sm cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
