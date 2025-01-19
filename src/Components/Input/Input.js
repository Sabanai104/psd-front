import "./Input.css"
import React from "react";

export const Input = () => {
    return (
        <div className="home-input-container">
            <input className="home-input" placeholder="Digite aqui..."/>
            <button className="home-button" type="submit"> Enviar</button>
        </div>
    )
}