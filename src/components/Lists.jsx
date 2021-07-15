import React, {useState} from 'react'

const List = props => {
    
    const [inputState, setInputState] = useState("")

    const {setListItems, listItems} = props

    const handleSubmit = e => {
        e.preventDefault()
        setListItems([...listItems,
             {
                 "title" : inputState,
                 "isComplete" : false
             }
        ])
        setInputState("")
    }
    
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text" 
                    onChange = {e => setInputState(e.target.value)}  
                    name="item" value ={inputState} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default List