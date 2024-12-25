import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            {/* Logotipo */}
            <div className="logo-name">
                <h3>Gym<span>bro</span></h3>
            </div>

            {/* Links de navegação */}
            <div className="options">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>

            {/* Ícone do carrinho */}
            <div className="cart">
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar;
