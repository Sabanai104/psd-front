import React, {useEffect, useState} from 'react';
import './Home.css';
import { HomeTitle } from "../Components/HomeTitle/HomeTitle";
import { Input } from "../Components/Input/Input";
import { GatewayServices } from "../Services/GatewayServices";

const Home = () => {
    const [words, setWords] = useState([]);
    const [label, setLabel] = useState("");
    const gatewayServices = new GatewayServices()

    useEffect(() => {
        const getWords = async () => {
            const data = await gatewayServices.getAllWords()
            setWords(data.words)
        }

        getWords();
    }, []);

    return (
        <div className="home-container">
            <HomeTitle />

            <Input
                label={label}
                onChange={e => setLabel(e.target.value)}
                words={words}
                setWords={setWords}
            />

            <div className="home-list-container">
                <p className="home-list-title">Lista de sla o que</p>
                {
                    !!words.length && words.map((item) => (
                        <div key={item.word} className="home-list-item-container">
                            {item.word}
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Home;
