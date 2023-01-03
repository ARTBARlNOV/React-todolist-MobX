import React from 'react';
import { observer } from 'mobx-react-lite';
import Todo from '../Todo/Todo';
import './TodoList.css';
import todos from '../../store/todos';

const TodoList = observer(() => (
  <div className="todolist-container">
    {todos.todos.map((todo) => (
      <div key={todo.id}>
        <Todo todo={todo} />
      </div>
    ))}
  </div>
));

export default TodoList;
