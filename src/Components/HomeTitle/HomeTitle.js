import MainImage from "../../Assets/main_image.svg";
import "./HomeTitle.css"
import React from "react";

export const HomeTitle = () => {
    return (
        <div className="home-title-container">
            <div className="home-title-info-container">
                <div>
                    <p className="home-title">
                        Lorem, ipsum dolor sit ametad
                    </p>
                    <p className="home-subtitle">
                        Escreva algo abaixo bla bla bla para que bla bla bla
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