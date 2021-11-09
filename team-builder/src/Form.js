import React from 'react'

export default function Form(props){
    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target
    }

    return(
    <form>
        <div>
            <label>
                Name
                <input
                name='name'
                type='text'
                value=''
                onChange={onChange}
            />
            </label>
            <label>
                Email
                <input
                name='email'
                type='email'
                value=''
                onChange={onChange}
            />
            </label>
            <label>
                Role
                <select value={value.role} name="role" onChange={onChange}>
                <option value="">-- Select a Role --</option>
                <option value="Sniper">Sniper</option>
                <option value="Heavy Weapons">Heavy Weapons</option>
                <option value="Demolitions">Demolitions</option>
                </select>
            </label>
        </div>
    </form>
    )}