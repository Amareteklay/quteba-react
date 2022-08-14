import React from "react";

function Footer(props) {
    return (< div className="footer bg-dark text-white mt-5 py-3" >
        <row >
            <div className="col-4 d-inline-block" >
                <h2 >Menu </h2>
                <ul>
                    <li className="Menu-list">Home </li>
                    <li className="Menu-list">About </li>
                    <li className="Menu-list">Contact </li>
                </ul >
            </div>
            <div className="col-4 d-inline-block" >
            <h2 >Social </h2>
                <ul>
                    <li className="Menu-list">LinkedIn </li>
                    <li className="Menu-list">GitHub </li>
                    <li className="Menu-list">Twitter </li>
                </ul >
            </div>
            <div className="col-4 d-inline-block" >
            <h2 >Contact </h2>
                <ul>
                    <li className="Menu-list">Email: amareteklay@mail.com </li>
                    <li className="Menu-list">Mobile: +000000000 </li>
                </ul >
            </div>
        </row>
    </div >
    );
}

export default Footer;