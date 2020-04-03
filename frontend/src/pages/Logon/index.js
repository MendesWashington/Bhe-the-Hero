import React from   'react';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroImg from '../../assets/heroes.png';

import  './styles.css';

function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>
                <form >
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder="Your ID"/>
                    <button className="button" type="submit">Login</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Have no registration
                        
                    </Link>
                </form>
            </section>
            <img className="imgHero" src={heroImg} alt="Heros"/>
        </div>
    );
}

export default Logon;