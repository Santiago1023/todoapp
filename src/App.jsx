import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { Input } from './components/Input';
import { Titles } from './components/Titles';

function App() {

  const data = [
    {
      "desc": "Primer todo para realizar",
      "state": true,
    },
    {
      "desc": "Segundo todo para realizar",
      "state": true,
    },
    {
      "desc": "Tercer todo para realizar",
      "state": true,
    },
  ]
  
  return (
    <>
      <Titles/>
      <Input/>
      <TodoList>
        <TodoItem/>
      </TodoList>

    </>
  );
}

export default App;
