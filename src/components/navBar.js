
import './navBar.css';

const NavBar = () => {
    return <body>
        <ul class="navbar">
            <img class="logo" src="../logo512.png" alt="logo" />
            <div class="categorias">
                <button><a href="https://www.google.com/">Quienes Somos</a></button>
                <button><a href="https://www.google.com/">Ubicacion</a></button>
                <button><a href="https://www.google.com/">Contacto</a></button>
            </div>
        </ul>
    </body>
}

export default NavBar;