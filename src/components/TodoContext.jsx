import { createContext, useState, useEffect } from "react";

const TodoContext = createContext();

function TodoProvider({children}){
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <TodoContext.Provider value={{
            filterTodoList,
            setFilterTodoList,
            totalTodos,
            setTotalTodos,
            todoList,
            setTodoList,
            completedTodos,
            setCompletedTodos,
            searchValue,
            setSearchValue,
            openModal,
            setOpenModal,
            handleCheck,
            handleDelete
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider};