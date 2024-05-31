
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, removeTodo } from './actions/todoActions';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    const newTodo = { text: 'New Todo' };
    console.log('Adding Todo:', newTodo);
    dispatch(addTodo(newTodo));
  };

  const handleRemoveTodo = (id) => {
    console.log('Removing Todo ID:', id);
    dispatch(removeTodo(id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
