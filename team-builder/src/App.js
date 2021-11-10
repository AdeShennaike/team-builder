import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Form from './Form'

const teamFactsBe = [
  {name: 'Jada', email: 'kjdhlka@gmail.com', role: 'Sniper'}, 
  {name: 'Justin', email: 'kjdhlka@gmail.com', role: 'Heavy Weapons'},
  {name: 'Nyamekye', email: 'kjdhlka@gmail.com', role: 'Demolitions'}
] 


function App() {
  const [team, setTeam] = useState(teamFactsBe)
  const [values, setValues] = useState({name:'', email:'', role:''})
console.log(team)

const onSubmit = () => {
  setTeam([values, ...team])
}

const onChange = (name, value) => {
  setValues({...values, [name]: value})
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Team Builder App!!</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
      />
    </div>
  );
}

export default App;
