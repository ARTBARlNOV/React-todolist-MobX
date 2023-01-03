import { observer } from 'mobx-react-lite';
import React from 'react';
import todos from '../../store/todos';
import './Todo.css';

const Todo = observer(({ todo }) => (
  <div className="Todo-container">
    <div
      className={todo.completed ? 'todo-text-lineThrough' : 'todo-text'}
      onClick={() => todos.changeTaskStatus(todo.id)}
    >
      {todo.task}
    </div>
    <div className="todo-delete" onClick={() => todos.removeTask(todo.id)}>
      X
    </div>
  </div>
));

export default Todo;
