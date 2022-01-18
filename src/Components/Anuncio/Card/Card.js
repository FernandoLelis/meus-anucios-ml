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

////////////////////Inicio dos Calculos////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    const valorUnit = (
                        parseFloat(props.dadosAnuncios[id].custo / props.dadosAnuncios[id].estoque)
                    );
                    const lucroLqt = (
                        parseFloat(props.dadosAnuncios[id].margemLucro !== '' ? valorUnit * (props.dadosAnuncios[id].margemLucro / 100) : 0)
                    );
                    const valorTipo = (
                        parseFloat(props.dadosAnuncios[id].categoria > -1 
                        ? (categorias[props.dadosAnuncios[id].categoria][props.dadosAnuncios[id].tipo])
                        : 0)
                    );
                    const calcularFreteGratis = (
                        parseFloat((props.dadosAnuncios[id].taxas && props.dadosAnuncios[id].taxas.frete) ? props.dadosAnuncios[id].custoFrete : 0)
                    );
                    
                    const calcularTaxaImport = (
                        parseFloat((props.dadosAnuncios[id].taxas && props.dadosAnuncios[id].taxas.import) ? props.dadosAnuncios[id].custoTaxaImport : 0)
                    );
                    const lucroBrt = (
                        ((valorUnit + lucroLqt) + calcularFreteGratis + calcularTaxaImport)
                    );
////////////////////Fim dos Calculos////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    return <div className="card" key={id}>
                        <div className="anuncioCard">                                       
                            <img src={props.dadosAnuncios[id].imageUrl} alt={props.dadosAnuncios[id].title} className="anuncioCard-image"/>               
                            <div className="anuncioCard-info">
                                <div className="anuncioCard-header">
                                    <h1 className="anuncioCard-title">{props.dadosAnuncios[id].title}</h1>                         
                                    <span className="anuncioCard-price">
                                        R$ { 
                                            (
                                                valorTipo
                                            ).toFixed(2)
                                        }                   
                                    </span>
                                </div>
                                <footer className="anuncioCard-footer">                                    
                                    <div className="anuncioCard-lucroBrt">
                                        <p>Receber:</p>
                                        R$ {
                                            (
                                                lucroBrt
                                            ).toFixed(2)
                                            }                        
                                    </div>
                                    <div className="anuncioCard-lucroLqd">
                                        <p>Ganhar:</p>
                                        R$ {
                                            (
                                                lucroLqt
                                            ).toFixed(2)
                                        }                        
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