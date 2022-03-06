import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [error, setError] = useState(false);
  const [templetes, setTempletes] = useState([]);
  const [templeteMessage, setTempleteMessage] = useState([])
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
    const name = e.target.dataset.name;
    window.top.postMessage({ message: name }, '*');
  };

  return (
    <div className="App" id="teste">
      <ul>
        {templetes.map((templete) => (
          <li
            key={templete.id}
            data-name={templete.name}
            onClick={printHandler}
          >{templete.name} id {templete.id}
          </li>
        ))}
      </ul>
    </div>

  );
}

export default App;
