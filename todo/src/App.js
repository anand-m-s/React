

import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddToDo = () => {
    if (!toDo.trim()) return;
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setToDo('');
  };

  const handleDeleteToDo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handleEditToDo = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSaveEdit = () => {
    setToDos(
      toDos.map((todo) =>
        todo.id === editId ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Schedule task here :) </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="Add item..."
        />
        <i onClick={handleAddToDo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div key={obj.id} className="todo">
            <div className="left">
              <input
                onChange={(e) => {
                  setToDos(
                    toDos.map((todo) =>
                      todo.id === obj.id
                        ? { ...todo, status: e.target.checked }
                        : todo
                    )
                  );
                }}
                value={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              {editId === obj.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <p>{obj.text}</p>
              )}
            </div>
            <div className="right">
              {editId === obj.id ? (
                <i onClick={handleSaveEdit} className="fas fa-check"></i>
              ) : (
                <i
                  onClick={() => handleEditToDo(obj.id, obj.text)}
                  className="fas fa-pen"
                ></i>
              )}
              <i
                onClick={() => handleDeleteToDo(obj.id)}
                className="fas fa-times"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
