import React from 'react';
import './Home.css';
import { HomeTitle } from "../Components/HomeTitle/HomeTitle";
import { Input } from "../Components/Input/Input";

const Home = () => {
    const item = [0,1,2,3,4,5,6,7,8,9];
    return (
        <div className="home-container">
            <HomeTitle />

            <Input />

            <div className="home-list-container">
                <p className="home-list-title">Lista de sla o que</p>
                {
                    item.map((item, index) => (
                        <div key={item} className="home-list-item-container" />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;
