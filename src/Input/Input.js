import React from 'react'
import './Input.css'

const Input = ({onAddItem}) => {
    return(
        <div>
            <form onSubmit={onAddItem}>
                <input type='text' ref={node => this.textValue = node } placeholder='შეიყვანეთ'/>
                <button type ='submit' >დამატება</button>
            </form>
        </div>
    );
}

export default Input;