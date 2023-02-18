import React from 'react';
import "./home.css";
import pic1 from "../../../assets/1.jpg";

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__container grid">
                <img src={pic1} />
            </div>
        </section>
    )
}

export default Home;