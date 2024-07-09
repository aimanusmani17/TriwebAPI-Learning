import FirstComponent from './components/FirstComponenet';
import Backdrop from './components/Backdrop';
import { useState } from "react";
// import Modal from 'react-bootstrap/Modal';




function App() {

  const[modalOpen, setModalOpen]=useState(false);

  const modalCloseHandler=()=>{
    setModalOpen(false);
  }

  const openModalHandler= ()=>{
    setModalOpen(true);
  }

  return (
   <div>
    <h1>This is my first application</h1>
    {modalOpen?<FirstComponent owner="Aiman" reason="this is demo app" closeModal={modalCloseHandler}/>:null}
    {modalOpen?<Backdrop />:null}
    <button onClick={openModalHandler}>open modal</button>
    
  
  </div>
  );
}

export default App;
