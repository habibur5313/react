import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Singers from './singer'
import Numbers from './singer'
import Books from './books'

function App() {
  const [count, setCount] = useState(0)
  const singers = [{name:'mamun',age: 31},
    {name:'munna',age: 43},{name: 'mohsin',age: 46}]
  const numbers = [34,23,654322,34,23]

  const books = [{name:'Physics',price: 131},
    {name:'biology',price: 143},{name: 'math',price: 1146}]
 

  return (
    <>
       <h1>Vite + React</h1>
     <Person></Person>
     {/* <Device name="laptop" Price="55000"></Device>
     <Device name="mobile" Price="5000"></Device>
     <Device name="laptop2" Price="53000"></Device>
     <Device name="laptop3" Price="50000"></Device>
     <Students grade="4" ></Students>
     <Students grade="10" ></Students>
     <Students grade="8" ></Students>
     <Students grade="6" ></Students>
     <Todo task={'react'} isDone={true}></Todo>
     <Todo task={'js'} isDone={false}></Todo>
     <Todo task={'next'} isDone={false}></Todo>
      
      { singers.map(singer => <Singers Singer={singer}></Singers>)} 
    {
      numbers.map(num => <Numbers number={num}></Numbers>)
    }*/}
     <Books books={books}></Books>
    </>
  )
}

const Person = () => {
  const age = 21
  const student = {name: 'mamun', age: 34}
  const numbers = [34, 34,234,34,2]
  return(
    <h1>I am wev developer. age:{age}. Studen name: {student.name} number:{numbers[3]}</h1>
  )
}

const Device = (profs) => {
  
  return (
 
      <h1 className='deviceStyle'>this device : {profs.name} Price : {profs.Price}</h1>
   
  )
}

const Students = ({grade}) => {
  console.log(grade);
  
  const studentStyle = {
    border : "2px solid",
    margin: "20px",
    padding: "20px",
    borderRadius: "50px"

  }
  return(
    <div style={studentStyle}>
      <h1>This is student class:{grade}</h1>
    </div>
  )
}
export default App
