import React from 'react'

const Form = (props) =>{
    const handleChange = evt => {
        const {name, value} = evt.target
        props.change(name, value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        props.submit()
    }

    return(
    <form onSubmit={handleSubmit}>
        <label>Name
            <input
                name='name'
                placeholder='NAME HERE!!!'
                value={props.name}
                onChange={handleChange}
        />
        </label>
        <label>Email
            <input
                name='email'
                placeholder='EMAIL HERE!!!'
                value={props.email}
                onChange={handleChange}
        />
        </label>
        <label>Role
            <select value={props.role} name="role" onChange={handleChange}>
            <option value="">-- Select a Role --</option>
            <option value="Sniper">Sniper</option>
            <option value="Heavy Weapons">Heavy Weapons</option>
            <option value="Demolitions">Demolitions</option>
            </select>
        </label>
        <input type='submit' value='Make the Team!!!'/>
    </form>
    )}

    export default Form