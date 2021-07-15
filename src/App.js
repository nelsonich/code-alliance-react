import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.codealliance.loc/api/get-searched-cities")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },
        (error) => {
          setLoading(true);
        }
      )
  }, [])


  return (
    <div>
      {
        loading ? <p>loading..</p> : <ul>
            {
              data?.map((item, index) => {
                return <li key={index}>{item.name}</li>
              })
            }
        </ul>
      }
    </div>
  );
}

export default App;
