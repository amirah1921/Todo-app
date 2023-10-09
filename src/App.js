import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import { db } from './firebase';
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from 'firebase/firestore';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      const todosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log('Todos data:', todosData);
      setTodos(todosData);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'todos'), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="App">
      <h2>TODO List App</h2>
      <form>
        <TextField
          id="outlined-basic"
          label="Make Todo"
          variant="outlined"
          style={{ margin: '0px 5px' }}
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addTodo}>
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.length === 0 ? (
          <p>No todos yet.</p>
        ) : (
          todos.map((item) => <Todo key={item.id} arr={item} />)
        )}
      </ul>
    </div>
  );
}

export default App;