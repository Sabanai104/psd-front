import MainImage from "../../Assets/main_image.svg";
import "./HomeTitle.css"
import React from "react";

export const HomeTitle = () => {
    return (
        <div className="home-title-container">
            <div className="home-title-info-container">
                <div>
                    <p className="home-title">
                        Dicionário de Palavras
                    </p>
                    <p className="home-subtitle">
                        Escreva uma palavra abaixo e veja ela aparecendo na lista!
                    </p>
                </div>
                <p className="home-assignes">
                    Trabalho feito pelos estudantes: Gabriel Sabanai, Luíza Esteves, Rafael Xavier, Júlio César e João Henrique.
                </p>
            </div>

            <img src={MainImage} alt="Imagem principal" className="home-image" />
        </div>
    )
}