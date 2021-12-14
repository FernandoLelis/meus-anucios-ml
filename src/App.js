import UIContainer from "./Components/UI/Container/Container";
import AnuncioCard from "./Components/Anuncio/Card/Card";
import "./App.css";

function App() {

  const anuncio = {
    "id": 1,
    "title": "Suporte para Celular Ajustável de Metal PH36 Multifuncional",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUqYAiDXWe9PRTFughuuX0hIQCqFgSLbpDA&usqp=CAU",
    "estoque": 0,
    "custo": 0,
    "custoUnit": 0,
    "categoria": "Celulares e SmartFones",
    "tipo": "Clássico",
    "taxaImpot": 0,
    "custoFrete": 0,    
    "porcentagemLucro": 0,
    "price": 0,
    "lucroBrt": 0,
    "lucroLqd": 0
  };

  return (
   <>
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
          <AnuncioCard anuncio={anuncio} />
        </div>
        
      </UIContainer>
     </section>
      <footer>
      <UIContainer>
        Footer
      </UIContainer>
      </footer>    
     
   </>
  );
}

export default App;
