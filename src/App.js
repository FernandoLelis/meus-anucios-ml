import UIContainer from "./Components/UI/Container/Container";
import "./App.css";

function App() {
  return (
   <>
     <header>
      <UIContainer>
        <h1>Título</h1>
        <hr />
      </UIContainer>       
     </header>     
     <section>
      <UIContainer>
        Section 
        <hr />
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
