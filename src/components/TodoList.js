import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addTodo, deleteTodo, editTodo } from "../actions/todoActions";
import './TodoList.css';

const TodoList = () => {
  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTask, setEditingTask] = useState("");

  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      dispatch(addTodo({
        task: task.trim(),
        completed: false
      }));
      setTask("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id, task) => {
    setEditingId(id);
    setEditingTask(task);
  };

  const handleUpdateTodo = () => {
    dispatch(editTodo(editingId, { task: editingTask }));
    setEditingId(null);
    setEditingTask("");
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingTask}
                  onChange={(e) => setEditingTask(e.target.value)}
                />
                <button onClick={handleUpdateTodo}>Update</button>
              </>
            ) : (
              <>
                <span>{todo.task}</span>
                <button onClick={() => handleEditTodo(todo.id, todo.task)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
