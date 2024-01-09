import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CreateTodo from './components/CreateTodo.jsx';
import Todos from './components/Todos.jsx';


function App() {
  const [todos, setTodos] = useState([])
  return <div>
  <CreateTodo></CreateTodo>
  <Todos todos={
    [{
      title:'asd',
      description:'asdasd',
      completed:false
    }]
  }></Todos>
</div>
    
  
}

export default App
