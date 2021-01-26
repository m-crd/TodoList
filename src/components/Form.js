import React from "react";

const Form = ({ setTasks, tasks, handleChange, handleSubmit, input }) => {
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <input
        value={input}
        onChange={(event) => {
          handleChange(event);
        }}
        type="text"
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default Form;
