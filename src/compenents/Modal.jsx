import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalClose } from '../reducers/modalReducer';
import { saveTodo } from '../reducers/todosReducer';

export default function Modal() {

  const modalActive = useSelector(state => state.modal.modalActive);
  const {id,value,active} = useSelector(state => state.modal.modalData);
  
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('');

  const dispatch = useDispatch()

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    setStatus(active);
  }, [active]);


  
  const save = () => {
      if(inputValue) {
        dispatch(saveTodo({
          id:id,
          value:inputValue,
          active:status
        }))
        dispatch(modalClose())
      }
  }

  return (

      modalActive ?
      <div className="absolute w-full h-full bg-[#ffffff1a] z-50 flex justify-center items-center p-2" >

        <div className="w-full max-w-xl bg-[#070F2B] rounded-md px-4 py-5">
        
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}  className={`text-white w-full bg-[#1B1A55] border border-white border-opacity-10 rounded-sm focus:outline-none p-2 mb-3`} />

        <div className="mb-1">
        <label htmlFor="activeSelect" className="text-white text-sm">Status</label>
        </div>

        <select value={status} onChange={(e) => setStatus(e.target.value)} id="activeSelect" className={`w-full bg-[#1B1A55] border border-white border-opacity-10 rounded-sm focus:outline-none p-2 text-white`}>
          <option value="active">Active</option>
          <option value="complete">Completed</option>
        </select>
           

            <div className="buttons flex mt-5">
              <div onClick={() => {dispatch(modalClose())}} className="cancel w-full text-center p-2 text-white bg-[#1B1A55] rounded-md cursor-pointer hover:opacity-60 transition ease-in-out">Cancel</div>
              <div onClick={() => {save()}} className="save w-full  ml-2 text-center p-2 text-white bg-green-600 rounded-md cursor-pointer hover:opacity-60 transition ease-in-out">Save</div>
            </div>

        </div>

      </div>:
      ''
      
  )
}
