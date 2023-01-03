import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import todos from '../../store/todos';
import './AddTodo.css';

const AddTodo = observer(() => {
  const [userInput, setUserInput] = useState('');

  const changehandler = (e) => {
    setUserInput(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    todos.addTask(userInput);
    setUserInput('');
  };

  return (
    <div className="addTodo-container">
      <form onSubmit={SubmitHandler}>
        <input
          onChange={changehandler}
          value={userInput}
          type="text"
          placeholder="Напишите заметку..."
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
});

export default AddTodo;
