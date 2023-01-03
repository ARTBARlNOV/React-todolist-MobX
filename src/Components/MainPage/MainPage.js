import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../Todolist/Todolist';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="main-container">
      <div className="main-container-name">TODOLIST</div>
      <AddTodo />
      <TodoList />
    </div>
  );
}
