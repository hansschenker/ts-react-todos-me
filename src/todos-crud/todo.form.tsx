import React, { useState } from "react";

type TodoFormProps = {
  addTodo: (title: string) => void;
};
const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };
  return (
    <form>
      <input
        name="title"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      <button type="submit" onClick={handleSubmit}>Add Todo</button>
    </form>
  );
};

export default TodoForm;
