
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom"


const NavBar = () => {
    return <ul className="navbar">
        <Link to="/">
        <img className="logo" src="../logo512.png" alt="logo" />
        </Link>
        <div className="categorias">
            <button><NavLink to="/categorias/alimento">Alimeto</NavLink></button>
            <button><NavLink to="/cateogrias/indumentaria">Indumentaria</NavLink></button>
            <button><NavLink to="/cateogrias/juguetes">Juguetes</NavLink></button>
            <CartWidget />
        </div>
    </ul>

}

export default NavBar;