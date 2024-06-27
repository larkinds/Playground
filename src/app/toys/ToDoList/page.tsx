'use client';
import { FormEvent, useState } from 'react';
import ToDo from './todo';

export default function ToDoList() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<{ note: string; key: string }[]>([]);

  function addTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //match whitespace characters, then see if that array is the same length as the input string

    let notAnEmptyString = /(\S)/g.test(inputValue);
    if (notAnEmptyString) {
      let newKey = crypto.randomUUID();
      let todosCopy = [...todos, { note: inputValue, key: newKey }];
      setTodos(todosCopy);
      setInputValue('');
    }
  }

  function removeTodo(key: string) {
    let todosCopy = [...todos].filter((todo) => todo.key !== key);
    console.log(todosCopy);
    setTodos(todosCopy);
  }

  return (
    <>
      <h1>Classic... A ToDo List</h1>

      <form action="submit" onSubmit={addTodo}>
        <input
          style={{ color: 'darkmagenta', borderRadius: '2%' }}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          style={{
            height: 42,
            width: 42,
            borderRadius: 50,
            border: '2px solid lightpink',
            marginLeft: ".3em"
          }}
          disabled={!inputValue}
        >
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <ToDo
            key={todo.key}
            id={todo.key}
            note={todo.note}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </>
  );
}
