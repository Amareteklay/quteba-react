import React from "react";


function Menu(props) {
    return (
        <nav className="deep-green" >
            <ul >
                <li className="Menu-list Logo" > Quteba </li>
                <li className="Menu-list" >
                    <a className="Menu-link" href="#"> Home </a>
                </li >
                <li className="Menu-list" >
                    <a className="Menu-link" href="#"> About </a>
                </li >
                <li className="Menu-list" >
                    <a className="Menu-link" href="#" > Contact </a>
                </li >
            </ul>
        </nav >
    );
}

export default Menu;