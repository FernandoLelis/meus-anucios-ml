import React from "react";
import "./Card.css";


export default function AnuncioCard({ anuncio }) {

    return(
        <div className="card">
            <div className="anuncioCard">            
                <img src={anuncio.imageUrl} alt={anuncio.title} className="anuncioCard-image"/>               
                <div className="anuncioCard-info">
                    <h4 className="card-title">{anuncio.title}</h4>
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
                            R$ 0{(0).toFixed(2)}                        
                        </div>
                        <div className="anuncioCard-lucroLqd">
                            <p>Ganhar:</p>
                            R$ {(0).toFixed(2)}                        
                        </div>
                    </footer>
                </div>
            </div>
        </div>     
    );
};