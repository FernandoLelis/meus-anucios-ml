import React from "react";
import categorias from "../../../Services/categorias.json"
import { database } from "../../../Services/firebase";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import "./Card.css";


export default function AnuncioCard(props) { 

  const deletarAnuncio = key => {
      if(window.confirm('Deseja realmente deletar esse anúncio?')) {
          database.child(`anuncio/${key}`).remove(
              err => {
                  if(err) {
                      console.log(err);
                    }
                }
            )
        };
    };
       
    return(
        <> 
            {
                Object.keys(props.dadosAnuncios).map(id => { 
                    return <div className="card" key={id}>
                        <div className="anuncioCard">            
                            <img src={props.dadosAnuncios[id].imageUrl} alt={props.dadosAnuncios[id].title} className="anuncioCard-image"/>               
                            <div className="anuncioCard-info">
                                <div className="anuncioCard-header">
                                    <h1 className="anuncioCard-title">{props.dadosAnuncios[id].title}</h1>                         
                                    <span className="anuncioCard-price">
                                        R$ {
                                            (
                                                0
                                            ).toFixed(2)
                                        }                   
                                    </span>
                                </div>
                                <footer className="anuncioCard-footer">                                    
                                    <div className="anuncioCard-lucroBrt">
                                        <p>Receber:</p>
                                        R$ {(0).toFixed(2)}                        
                                    </div>
                                    <div className="anuncioCard-lucroLqd">
                                        <p>Ganhar:</p>
                                        R$ {(0).toFixed(2)}                        
                                    </div>
                                    <div className="anuncioCard-edit">
                                        <button className="btn btn-primary btn-sm" onClick={ () => props.setIdAtual(id, props.openModal()) } >
                                            <FaPen alt="Editar" className="icons" /> 
                                        </button>                       
                                    </div>
                                    <div className="anuncioCard-del" onClick={ () => deletarAnuncio(id) }> 
                                        <button className="btn btn-danger btn-sm">
                                            <FaTrash alt="Deletar" className="icons" /> 
                                        </button>                        
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                })
            }
        </> 
    );
};