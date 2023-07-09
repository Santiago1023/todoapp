import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { Input } from './components/Input';
import { Titles } from './components/Titles';

import './App.css';
import { useState, useEffect } from 'react';

function App() {

  // const data = [
  //   {
  //     "desc": "Primer todo para realizar dfasdfasdadadasdasdasd",
  //     "state": true,
  //   },
  //   {
  //     "desc": "Segundo todo para realizar asdjhadsjhasdhkasdkaas",
  //     "state": true,
  //   },
  //   {
  //     "desc": "Tercer todo para realizar",
  //     "state": true,
  //   },
  //   {
  //     "desc": "Cuarto todo para realizar",
  //     "state": true,
  //   },
    
  // ]

  const [totalTodos, setTotalTodos] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [completedTodos, setCompletedTodos] = useState(0);
  
  useEffect(() => {
    dataLocalStorage();
    console.log('Ejecutó metodo dataLocalStorage useEffect')
    console.log('todoList', todoList)
  }, []);

  useEffect(() => {
    const completedTodos = calculateCompletedTodos(todoList);
    console.log(todoList)
    setCompletedTodos(completedTodos.length);
    console.log('completedTodos: ', completedTodos, typeof(completedTodos));
    setTotalTodos(todoList.length);
  }, [todoList]);

  // useEffect(() => {
  //   console.log('todoList', todoList);
  // }, [todoList]);

  const calculateCompletedTodos = (data) => {
    return data.filter(todo => todo.state);
  }
  
  const dataLocalStorage = () => {
    const dataString = localStorage.getItem('data');
    console.log('dataString: ', dataString, typeof(dataString));
    if(dataString){
      const data = JSON.parse(dataString);
      console.log('Desde el metodo dataLocalStorage, data = ', data);
      setTodoList(data);
      console.log('Desde el metodo dataLocalStorage, todoList = ', todoList);
    }
    else{
      localStorage.setItem('data', JSON.stringify([]));
    }
    return
  }


  return (
    <div className='container'>
      <Titles completedTodos={completedTodos} totalTodos={totalTodos}/>
      <Input/>
      <TodoList>
        {todoList.map((todo) => {
          return <TodoItem key={todo.desc} text={todo.desc}/>
        })}
      </TodoList>
    </div>
  );
}

export default App;
