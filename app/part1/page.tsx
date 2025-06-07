'use client';

import { useEffect, useState } from 'react';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Part1Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(setTodos);
  }, []);

  async function addTodo() {
    if (!newTodo.trim()) return;
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo }),
    });
    const addedTodo = await res.json();
    setTodos(prev => [...prev, addedTodo]);
    setNewTodo('');
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">📝 Todo List</h1>
      <ul className="list-disc pl-6">
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="New todo"
        className="border p-2 mt-2"
      />
      <button onClick={addTodo} className="ml-2 bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </main>
  );
}
