import "./Input.css"
import React from "react";
import {GatewayServices} from "../../Services/GatewayServices";

export const Input = ({label, onChange}) => {
    const gatewayService = new GatewayServices()
    const sendWord = async () => {
        if(label !== "") {
            gatewayService.putWord(label)
            window.location.reload();
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