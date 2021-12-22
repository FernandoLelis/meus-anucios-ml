import { useState } from "react";
import Modal from "react-modal";
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
    "id": 1,
    "title": "Suporte para Celular Ajustável de Metal PH36 Multifuncional",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUqYAiDXWe9PRTFughuuX0hIQCqFgSLbpDA&usqp=CAU",
    "stock": 3,
    "custo": 170,
    "categoria": "Celulares e SmartFones",
    "tipo": "Clássico",
    "taxaImport": false,
    "custoFrete": 20,    
    "margemLucro": 0,
  };

  return (
    <div className="App">
        <Modal 
        isOpen={modal}
        onRequestClose={fecharModal}
        className="modalContent">         
          <Form />        
        </Modal>
      <header>
        <UIContainer>
          <div>
            <h1>Meus Anúncios ML</h1>              
          </div>
            <div className="col-sm">
              <button type="button" className="btn btn-primary btn-sm"  onClick={abrirModal}>Novo Anúncio</button>
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
              <AnuncioCard anuncio={anuncio} />
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
