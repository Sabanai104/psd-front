import "./Input.css"
import React from "react";
import {GatewayServices} from "../../Services/GatewayServices";

export const Input = ({label, onChange, setWords, words}) => {
    const gatewayService = new GatewayServices()
    const sendWord = async () => {
        if(label !== "") {
            gatewayService.putWord(label)
            setWords([...words, {word: label, count: 0}])
        }
    }

    return (
        <div className="home-input-container">
            <input
                className="home-input"
                placeholder="Digite aqui..."
                value={label}
                onChange={onChange}
            />
            <button
                className="home-button"
                type="submit"
                onClick={sendWord}
            >
                Enviar
            </button>
        </div>
    )
}