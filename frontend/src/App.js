import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [error, setError] = useState(false);
  const [templetes, setTempletes] = useState([]);
 


  useEffect(() => {
    const fecthData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/templetes');
        setTempletes(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fecthData();
  }, []);
  const printHandler = (e) => {
    e.preventDefault();
    const html = e.target.dataset.html;
    window.top.postMessage({ message: html }, '*');
  };
  return (
    <div className="App" id="teste">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">My Templates</span>
      </nav>
      <ul>
        {templetes.map((templete) => (
          <li
            key={templete.id}
            data-html={templete.html}
            onClick={printHandler}
          >{templete.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
