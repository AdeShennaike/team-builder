import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Form from './Form'

const teamFactsBe = [
  {name: 'Jada', email: 'gassy@gmail.com', role: 'Sniper'}, 
  {name: 'Justin', email: 'smiley@gmail.com', role: 'Heavy Weapons'},
  {name: 'Nyamekye', email: 'banku@gmail.com', role: 'Demolitions'}
] 


function App() {
  const [team, setTeam] = useState(teamFactsBe)
  const [values, setValues] = useState({name:'', email:'', role:''})
console.log(team)

const onSubmit = () => {
  setTeam([values, ...team])
  setValues({name:'', email:'', role:''})
}

const onChange = (name, value) => {
  setValues({...values, [name]: value})
}
  return (
    <div className="App">
     
      <h1>FactsBee</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {team.map((member, idx) =>{
        return(
        <div key={idx}>
          {member.name}, {member.role}, {member.email}
        </div>
        )
      })}
    </div>
  );
}

export default App;
