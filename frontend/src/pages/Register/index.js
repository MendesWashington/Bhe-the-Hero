import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import  './styles.css';

function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft  size={16} color="#E02041"/>
                        I am registration
                    </Link>
                </section>
                <form>
                    <input type="text"  placeholder="Nome da ONG."/>
                    <input type="email" placeholder="E-mail da ONG."/>
                    <input type="number" placeholder="Whatsapp."/>

                    <div className="input-group">
                        <input placeholder="Cidade da ONG."/>
                        <input placeholder="UF" style={{width: 80}} />
                    </div>
                    <button className="button">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;