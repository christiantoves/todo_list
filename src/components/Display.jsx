import React from 'react'


const Display = props => {
    const {index, item, handleDelete, handleChange } = props
    
    const style = {
        "textDecoration" : "line-through"
    }
    return(
        <div>
            <fieldset>
                <legend>To-Do List</legend>
                {
                (item.isComplete)? <h3 style ={style}> {item.title}</h3> : <h3>{item.title}</h3>
                }
                <input type="checkbox" checked = {item.isComplete} onChange = {() => handleChange(index)}/>
                <button onClick = { () => handleDelete(index)}>Delete</button>
            </fieldset>
        </div>
    )
}
export default Display