import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { database } from "./Services/firebase";
import logoFL from "./Components/img/logoFL.png";
import "./App.css";


import UIContainer from "./Components/UI/Container/Container";
import AnuncioCard from "./Components/Anuncio/Card/Card";
import Form from "./Components/Form";

Modal.setAppElement('#root')

function App() {

  const [modal, setModal] = useState(false);
  let [dadosAnuncios, setDadosAnuncios] = useState({})
  let [idAtual, setIdAtual] = useState('')

  useEffect( () => {
    database.child('anuncio').on('value', snapshot => {
        if(snapshot.val() !== null) {
            setDadosAnuncios({
                ...snapshot.val()
            })
        } else {
            setDadosAnuncios({});
        }
})  
  }, []); 

  function abrirModal() {
    setModal(true);
  };

  function closeModal() {
    setModal(false);
  };

  const addEedit = obj => {

    if (idAtual === '') {
      database.child('anuncio').push(
        obj,
        error => {
          if(error) {
            console.log(error);
          }
        }
      ) 
    } else {
      database.child(`anuncio/${idAtual}`).set(
        obj,
        err => {
          if(err) {
            console.log(err)
          }
        }
      )
    }
    
  } 

  return (
    <div className="App">
      <Modal 
        isOpen={modal}
        onRequestClose={closeModal}
        className="modalContent"
      > 
          <div className="modal-header" onClick={ closeModal }>
              <h5 className="modal-title">Dados do anúncio</h5>
              <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>                        
          </div>          
          <Form { ...({ addEedit, idAtual, dadosAnuncios }) } />          
      </Modal>        
      <div className="addAnuncio" onClick={ () => abrirModal(setIdAtual(''))}>
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
              <AnuncioCard { ...({ abrirModal, setIdAtual, dadosAnuncios, setDadosAnuncios }) } />
            </div>
          </div>        
        </UIContainer>
      </section>
      <footer>
        <UIContainer> 
          <div className="copyright">
            <span>Desenvolvido por:</span>
            <img className="logoFL" alt="Logo" src={logoFL} />
          </div>
        </UIContainer>      
      </footer>   
    </div>
  );
}

export default App;
