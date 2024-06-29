import {useState} from 'react'
import {  useDispatch  } from 'react-redux'
import { addTodo } from '../reducers/todosReducer';
import { nanoid } from 'nanoid'

export default function Form() {

  const [input, setInput] = useState('')
  const [inputDanger,setInputDanger] = useState(false)



  const dispatch = useDispatch()  
  const submitForm = () => {

      if(input) {
            if(inputDanger == true) {
              setInputDanger(false);
            }
            const data = {
              "id" : nanoid(),
              "value": input,
              "active": 'active'
            }
            dispatch(addTodo(data))
            setInput('')
      }else {
          setInputDanger(true);
      }

  }

  return (
    <div className="mt-12">
         <div className="flex">       
           <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className={`${inputDanger ? 'border-1 border-opacity-100 border-red-600' : ''}  w-full bg-[#1B1A55] border border-white border-opacity-10 rounded-sm focus:outline-none p-2`} />
           <button className="w-32 bg-[#201dc7] p-2 ml-2 rounded-sm hover:opacity-50 transition ease-in-out" onClick={submitForm} >Submit</button>
         </div>
    </div>
  )
}
