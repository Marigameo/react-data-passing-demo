import { useState } from 'react';
import './App.css';
import Form from './components/Form'
import Screen from './components/Screen'

function App() {
  
  const [isFormVisible, setFormVisible] = useState(true)
  const [name, setName] = useState('')
  const [movie, setMovie] = useState('')
  const [users, setUsers] = useState(null)
  const [isDataFetched, setDataFetched] = useState(false)

  const toggleForm = () => {
    setFormVisible(!isFormVisible)
  }

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => {
        setUsers(json)
        setDataFetched(true)
      })
  }

  return (
    <div className="App">
      <h1>Simple react data passing demo</h1>
      { isFormVisible ? <Form setName={setName} toggleForm={toggleForm} setMovie={setMovie}/> : <Screen name={name} movie={movie} toggleForm={toggleForm}/> }
      <hr style={{margin: '2rem'}}/>
      <h3>Fetching data from API</h3>
      <button onClick={fetchData}>Render data</button>
      { isDataFetched ?
      <div className="data-block">
        <h3>Rendering data fetched from dummy API</h3>
        <ul>
          {users.map(user => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
      </div>
      : null }
    </div>
  );
}

export default App;
