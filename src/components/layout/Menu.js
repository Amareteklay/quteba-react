import {NavLink} from 'react-router-dom';


function Menu(props) {
    return (
        <header>
            <nav className="deep-green" >
            <ul >
                <li className="Menu-list Logo" > Quteba </li>
                <li className="Menu-list" >
                <NavLink to="/" className="nav-link" activeClassName="is-active" exact={true}>Home</NavLink>
                </li >
                <li className="Menu-list" >
                <NavLink to="/about" className="nav-link" activeClassName="is-active">About</NavLink>
                </li >
                <li className="Menu-list" >
                <NavLink to="/contact" className="nav-link" activeClassName="is-active" >Contact</NavLink>
                </li >
            </ul>
        </nav >
        </header>
    );
}

export default Menu;