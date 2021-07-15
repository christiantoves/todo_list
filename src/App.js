import {useState} from 'react'
import Display from './components/Display'
import List from './components/Lists'


function App() {

  const[listItems, setListItems] = useState([])

  const handleDelete = idx => {
    const filteredList = listItems.filter((item, i) => i != idx)
    setListItems(filteredList)
  }
  const handleChange = idx => {
    const copy = [...listItems]
    copy[idx].isComplete = !copy[idx].isComplete
    setListItems(copy)
  }
  return (
    <div className="App">
        <List listItems = {listItems} setListItems = {setListItems}/>
        {
          listItems.map((item, i) => {
          return <Display key={i} 
                          index = {i}
                          item ={item}
                          handleDelete = {handleDelete}
                          handleChange = {handleChange}
                          />
        })
        }
    </div>
  );
}

export default App;
