
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {
    return <ul className="navbar">
        <img className="logo" src="../logo512.png" alt="logo" />
        <div className="categorias">
            <button><a href="https://www.google.com/">Quienes Somos</a></button>
            <button><a href="https://www.google.com/">Ubicacion</a></button>
            <button><a href="https://www.google.com/">Contacto</a></button>
            <CartWidget />
        </div>
    </ul>

}

export default NavBar;