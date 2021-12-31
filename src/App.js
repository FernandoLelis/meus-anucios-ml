import React, { useState } from "react";
import Modal from "react-modal";
import { database } from "./Services/firebase";
import "./App.css";


import UIContainer from "./Components/UI/Container/Container";
import AnuncioCard from "./Components/Anuncio/Card/Card";
import Form from "./Components/Form";

Modal.setAppElement('#root')

function App() {

  const [modal, setModal] = useState(false);

  function abrirModal() {
    setModal(true);
  };

  function fecharModal() {
    setModal(false);
  };

  const anuncio = {
    "title": "Suporte para Celular Ajustável de Metal PH36 Multifuncional",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUqYAiDXWe9PRTFughuuX0hIQCqFgSLbpDA&usqp=CAU",
    "stock": 3,
    "custo": 170,
    "categoria": "Celulares e SmartFones",
    "tipo": "Clássico",
    "taxaImport": false,
    "freteGratis": false,
    "custoFrete": 20,    
    "margemLucro": 10,
  };

  const addEedit = obj => {
    database.child('anuncio').push(
      obj,
      error => {
        if(error) {
          console.log(error);
        }
      }
    )
  }  

  return (
    <div className="App">
        <Modal 
        isOpen={modal}
        onRequestClose={fecharModal}
        className="modalContent">         
          <Form addEedit={addEedit} />        
        </Modal>        
        <div className="addAnuncio" onClick={abrirModal}>
           +
        </div>  
      <header>
        <UIContainer>
          <div>
            <h1>Meus Anúncios ML</h1>              
          </div>                      
        </UIContainer>       
      </header>     
      <section>
        <UIContainer>
          <div className="sectionBox">
            <div className="row mb-3">
              <div className="col-sm-12">
                <input type="search" className="form-control" placeholder="Buscar" />
              </div>
            </div>  
            <div>
              <AnuncioCard />
            </div>
          </div>        
        </UIContainer>
      </section>
      <footer>
        <UIContainer>
        </UIContainer>      
      </footer>   
    </div>
  );
}

export default App;
