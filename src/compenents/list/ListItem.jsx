
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/16/solid'
import {  useDispatch  } from 'react-redux'
import { removeTodo } from '../../reducers/todosReducer';
import {modalOpen} from '../../reducers/modalReducer'

export default function ListItem( {id, value, active} ) {

    const dispatch = useDispatch();

    const deleteTodo = () => {
      dispatch(removeTodo(id))
    }

    const editTodo = () => {
      dispatch(modalOpen({
        id:id,
        value:value,
        active:active
      }))
    }

    return (
    <div >
        <div className="w-full bg-[#1B1A55] p-2 text-white rounded-md mt-3 flex justify-between items-center border border-white border-opacity-10" >
           <div className="title">{value}</div>
           <div className="buttons flex justify-center items-center">
                <span className={`badge text-sm ${active == 'active' ? 'bg-blue-600' : 'bg-green-600'} py-1 px-2 rounded-md mr-3`}>{active == 'active' ? 'Active' : 'Completed'}</span>
                <div onClick={() => editTodo()} className="edit  p-2   rounded-md cursor-pointer hover:opacity-65 transition ease-in-out">
                <PencilSquareIcon className="size-5 text-white" />
                </div>
                <div onClick={deleteTodo} className="delete  p-2  rounded-md cursor-pointer hover:opacity-65 transition ease-in-out" >
                <TrashIcon className="size-5 text-white" />
                </div>
            
           </div>
        </div>
    </div>


  )
}
