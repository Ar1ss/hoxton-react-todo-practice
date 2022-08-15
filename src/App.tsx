import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        text: 'Go to the store',
        completed: true
      },
      {
        id: 2,
        text: 'Finish my app',
        completed: false
      },
      {
        id: 3,
        text: 'Go to the gym',
        completed: false
      },
      {
        id: 4,
        text: 'Feed the dog',
        completed: true
      },
      {
        id: 5,
        text: 'Go to the park',
        completed: false
      }
    ]
  )

  function addAtodo(text: string) {
    setTodos([...todos, { id: Math.random(), text, completed: false }])
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  return (
    <div className="App">
      <form className='todo-list'>
        <h1>Todo List</h1>

        <div className='add-todo'>
          <input className='input-text' type="text" placeholder="Add Todo" />


          <button
            type="submit"
            onClick={(todo) => {
              todo.preventDefault()
              setTodos([...todos, {
                id: todos.length + 1,
                text: todo.target.previousSibling.value,
                completed: false
              }])
            }}>Add</button>

        </div>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text}

              <input type="checkbox"
                onChange={() => toggleTodo(todo.id)}
                checked={todo.completed} />


            </li>
          ))}
        </ul>

        <h1>Completed Todos</h1>
        <ul>
          {todos.filter(todo => todo.completed).map(todo => (
            <li key={todo.id}>
              {todo.text}

              <input type="checkbox"
                onChange={() => toggleTodo(todo.id)}
                checked={todo.completed} />

              <button
                onClick={() => {
                  setTodos(
                    todos.filter(t => {
                      return t.id !== todo.id
                    })
                  )
                }}>Delete</button>
            </li>
          ))}
        </ul>


      </form>
    </div>
  )
}

export default App
