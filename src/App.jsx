import { Titles } from './components/Titles';
import { Input } from './components/Input';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { TodoContext, TodoProvider } from './components/TodoContext';
import { useContext } from 'react';
import './App.css';

function App() {
  const {filterTodoList, handleCheck, handleDelete, openModal, setOpenModal} = useContext(TodoContext);

  return (
      <div className='container'>
        <Titles/> 
        <Input/>
        <TodoList>
          {filterTodoList.map((todo,index) => {
            return (
            <TodoItem 
              key={index}
              text={todo.desc} 
              state={todo.state} 
              onCheck={() => handleCheck(index)} 
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
            <TodoForm/>
          </Modal>
        )}
      </div>
  );
}
function MainApp() {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}

export default MainApp;

