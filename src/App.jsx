import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { Input } from './components/Input';
import { Titles } from './components/Titles';

import './App.css';
import { useState, useEffect } from 'react';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
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
  //   {
  //     "desc": "Quinto todo para realizar",
  //     "state": false,
  //   },
  //   {
  //     "desc": "Sexto todo para realizar",
  //     "state": false,
  //   },
    
  // ]

  const [totalTodos, setTotalTodos] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [completedTodos, setCompletedTodos] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [filterTodoList, setFilterTodoList] = useState([]);
  
  useEffect(() => {
    dataLocalStorage();
    console.log('Ejecutó metodo dataLocalStorage useEffect')
    console.log('todoList', todoList)
    console.log('todoList', filterTodoList)
  }, []);

  useEffect(() => {
    const completedTodos = calculateCompletedTodos(todoList);
    console.log(todoList)
    setCompletedTodos(completedTodos.length);
    console.log('completedTodos: ', completedTodos, typeof(completedTodos));
    setTotalTodos(todoList.length);
  }, [todoList]);

  useEffect(() =>{
    const timer = setTimeout(()=>{
      console.log('Filtrando desde el useEffect');
      const filterValues = todoList.filter(todo => {
        if (searchValue.trim() === "") {
          // Si no hay texto en el input, muestra todos los todos
          return true;
        } else {
          // Si hay texto en el input, filtra los todos que coincidan con el texto
          return todo.desc.toLowerCase().includes(searchValue.toLowerCase());
        }
      });
      setFilterTodoList(filterValues);
      console.log('filterValues: ', filterValues);
    }, 500)
    return () => clearTimeout(timer);

  }, [searchValue, todoList]);

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
      setFilterTodoList(data);
      console.log('Desde el metodo dataLocalStorage, todoList = ', todoList);
      console.log('Desde el metodo dataLocalStorage, filterTodoList = ', filterTodoList);
    }
    else{
      localStorage.setItem('data', JSON.stringify([]));
    }
    return
  }
  const handleCheck = (index) => {
    const updatedList = [...todoList];
    console.log('antes: ',updatedList);
    updatedList[index].state = !updatedList[index].state;
    console.log('despues: ',updatedList);
    setTodoList(updatedList);
    localStorage.setItem('data', JSON.stringify(updatedList));
  };
  const handleDelete = (index) => {
    const updatedList = [...todoList];
    console.log('antes: ',updatedList);
    updatedList.splice(index, 1);
    // updatedList[index].state = !updatedList[index].state;
    console.log('despues: ',updatedList);
    setTodoList(updatedList);
    localStorage.setItem('data', JSON.stringify(updatedList));
  };
  
  

  return (
    <div className='container'>
      <Titles completedTodos={completedTodos} totalTodos={totalTodos}/>
      <Input onChange = {(event) => {
        setSearchValue(event.target.value);
      }}
      value = {searchValue}
      />
      <TodoList>
        {filterTodoList.map((todo,index) => {
          return (
          <TodoItem 
            // key={todo.desc}
            key={index}
            text={todo.desc} 
            onCheck={() => handleCheck(index)} 
            state={todo.state} 
            onDelete={() => handleDelete(index)} 
          />)
        })}
      </TodoList>

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      {openModal && (
        <Modal>
          <TodoForm openModal={openModal} setOpenModal={setOpenModal} todoList={todoList} setTodoList={setTodoList}/>
        </Modal>
      )}

    </div>
  );
}

export default App;
