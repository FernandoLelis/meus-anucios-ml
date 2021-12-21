import UIContainer from "./Components/UI/Container/Container";
import AnuncioCard from "./Components/Anuncio/Card/Card";
import Form from "./Components/Form/Form";
import "./App.css";
import { useState } from "react";

function App() {

  const [modal, setModal] = useState(false);

  const abrirModal = () => {
    setModal(!modal);
  };

  const anuncio = {
    "id": 1,
    "title": "Suporte para Celular Ajustável de Metal PH36 Multifuncional",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUqYAiDXWe9PRTFughuuX0hIQCqFgSLbpDA&usqp=CAU",
    "stock": 3,
    "custo": 170,
    "categoria": "Celulares e SmartFones",
    "tipo": "Clássico",
    "taxaImport": 0,
    "custoFrete": 20,    
    "margemLucro": 0,
    "lucroBrt": 0,
    "lucroLqd": 0
  };

  return (
    <div className="App">
      {
        modal ?
        <div className="modal"> 
          <div className="modalContent">
            <h3>Minha Modal</h3>
          </div>
        </div>
        :
        <div></div>
      } 
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
              <div className="col-sm-10">
                <input type="search" className="form-control form-control-sm" placeholder="Buscar" />
              </div>
              <div className="col-sm">
                <button type="button" className="btn btn-primary btn-sm"  onClick={() => abrirModal()}>Novo Anúncio</button>
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
