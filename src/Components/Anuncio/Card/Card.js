import React from "react";
import "./Card.css";


export default function AnuncioCard({ anuncio }) {
    return(
        <div className="anuncioCard">
           
            <img src={anuncio.imageUrl}  className="anuncioCard-image"/>    
           
            <div className="anuncioCard-info">
                <h1 className="anuncioCard-title">{anuncio.title}</h1>
                <span className="anuncioCard-categoria">{anuncio.categoria}</span>
                <footer className="anuncioCard-footer">
                    <div className="anuncioCard-price">
                        <p>Preço</p>  
                        R$ {anuncio.price.toFixed(2)}                    
                    </div>
                    <div className="anuncioCard-lucroBrt">
                        <p>Lucro Bruto</p>
                        R$ {anuncio.lucroBrt.toFixed(2)}                        
                    </div>
                    <div className="anuncioCard-lucroLqd">
                        <p>Lucro Liquito</p>
                        R$ {anuncio.lucroLqd.toFixed(2)}                        
                    </div>
                </footer>
            </div>
           
        </div>
    );
};