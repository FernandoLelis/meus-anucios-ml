import React, { useState, useEffect } from "react";
import categorias from "../../../Services/categorias.json"
import { database } from "../../../Services/firebase";
import "./Card.css";


export default function AnuncioCard() { 
    
  const [dadosAnuncios, setDadosAnuncios] = useState({})

  useEffect( () => {
    database.child('anuncio').on('value', snapshot => {
        if(snapshot.val() !== null) {
            setDadosAnuncios({
                ...snapshot.val()
            })
        }
    })  
  }, []);
       
    return(
        <> 
            {
                Object.keys(dadosAnuncios).map(id => { 
                    return <div className="card" key={id}>
                        <div className="anuncioCard">            
                            <img src={dadosAnuncios[id].imageUrl} alt={dadosAnuncios[id].title} className="anuncioCard-image"/>               
                            <div className="anuncioCard-info">
                                <h5 className="card-title">{dadosAnuncios[id].title}</h5>
                                <footer className="anuncioCard-footer">
                                    <div className="anuncioCard-price">
                                        <p>Vender:</p>  
                                        R$ {
                                            (
                                                0
                                            ).toFixed(2)
                                        }                   
                                    </div>
                                    <div className="anuncioCard-lucroBrt">
                                        <p>Receber:</p>
                                        R$ {(0).toFixed(2)}                        
                                    </div>
                                    <div className="anuncioCard-lucroLqd">
                                        <p>Ganhar:</p>
                                        R$ {(0).toFixed(2)}                        
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