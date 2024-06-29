import { useAutoAnimate } from '@formkit/auto-animate/react'
import ListItem from './ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { filterTodo } from '../../reducers/todosReducer';


export default function List() {
  const [parent] = useAutoAnimate(/* optional config */)

  const dispatch = useDispatch();
  const todos = useSelector(state => {
    if (state.todosReducer.filter === 'all') {
      return state.todosReducer.todos; // all todos
    } else if (state.todosReducer.filter === 'active') {
      return state.todosReducer.todos.filter(todo => todo.active == 'active'); // active todos
    } else if (state.todosReducer.filter === 'completed') {
      return state.todosReducer.todos.filter(todo => todo.active == 'complete'); // completed todos
    }
    return [];
  });

  const filterType = useSelector(state => state.todosReducer.filter)

  const handleFilter = filterType => {
    dispatch(filterTodo(filterType));
  };


  return (
    <div className="mt-5" ref={parent}>
      <ul className="flex">
        <li className={`p-2 cursor-pointer ${filterType != 'all' ? 'opacity-50 ' : ''}  hover:opacity-100 ease-in-out transition`} onClick={() => handleFilter('all')}>
          All
        </li>
        <li className={`p-2 cursor-pointer ${filterType != 'active' ? 'opacity-50 ' : ''}  hover:opacity-100 ease-in-out transition`} onClick={() => handleFilter('active')}>
          Active
        </li>
        <li className={`p-2 cursor-pointer ${filterType != 'completed' ? 'opacity-50 ' : ''}  hover:opacity-100 ease-in-out transition`} onClick={() => handleFilter('completed')}>
          Completed
        </li>
      </ul>

      {todos.slice().reverse().map(({ id, value, active }) => (
        <ListItem key={id} value={value} active={active} id={id}></ListItem>
      ))}
    </div>
  );
}
