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
        <div>
            <label>Name
                <input
                    name='name'
                    type='text'
                    value={values.name}
                    onChange={handleChange}
            />
            </label>
            <label>Email
                <input
                    name='email'
                    type='email'
                    value=''
                    onChange={handleChange}
            />
            </label>
            <label>Role
                <select value={value.role} name="role" onChange={handleChange}>
                <option value="">-- Select a Role --</option>
                <option value="Sniper">Sniper</option>
                <option value="Heavy Weapons">Heavy Weapons</option>
                <option value="Demolitions">Demolitions</option>
                </select>
            </label>
        </div>
    </form>
    )}

    export default Form