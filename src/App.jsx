import './style.css'


// compenents
import Form from './compenents/Form'
import List from './compenents/list/List'
import Modal from './compenents/Modal'

function App() {
  return(
   <>
    <Modal></Modal>

    <div className='container mx-auto text-white max-w-screen-lg p-4'>
      <div className="title text-white text-center text-5xl mt-12 font-bold">TodoList+</div>
      <Form />
      <List />
    </div>
   </>
  )

}



export default App