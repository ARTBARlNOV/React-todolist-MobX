/* eslint-disable import/no-extraneous-dependencies */
import { makeAutoObservable } from 'mobx';

class Todos {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        completed: false,
      };
      this.todos.push(newItem);
    }
  };

  removeTask = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  changeTaskStatus = (id) => {
    this.todos = this.todos.map((todo) => (todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo));
  };
}
export default new Todos();
