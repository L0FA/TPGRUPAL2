
import { Button, NavDropdown } from 'react-bootstrap';

function Barra(){

    return(

        <header classNameName="menu__wrapper">
        <div classNameName="menu__bar">
            <a href="#home" title="Home" aria-label="home" className="logo">
                <h3>BLOCKBUSTER</h3>
            </a>
            <nav>
                <ul classNameName="navigation hide">
                    <li>
                        <Button href="bootstrap.html" title="Inicio">
                            Inicio
                        </Button>
                    </li>
                    <li>
                        <Button href="#mis_favoritos" title="Mis_favoritos">
                            Mis favoritos
                        </Button>
                    </li>
  
                    <li>
                    <NavDropdown key = "Géneros">
                            
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                                <path
                                    d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z">
                                </path>
                            </svg>
                        <div className="dropdown__wrapper">
                            <div className="dropdown">
                                <ul className="list-items-with-description" id="lista1">
                                    <li>
                                        <div className="item-title">
                                            <h3>Acción</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Anime</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Cine de intriga</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Clásicas</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Cortos</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>De Argentina</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>De Hollywood</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Deportes</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Documentales</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Dramas</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Fantasía</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Fe y espiritualidad</h3>
                                        </div>
                                    </li>
                                </ul>
  
                                <ul className="list-items-with-description" id="lista2">
                                    <li>
                                        <div className="item-title">
                                            <h3>Independientes</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Internacionales</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Los favoritos de la crítica</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Música y musicales</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Navidad</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Para reír</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Para ver en familia</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Películas en español</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Pelis policiales</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Romances</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Sci-fi</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Terror</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </NavDropdown>
                   
                    </li>
                    <li>
                        <Button href="#ayuda" title="Ayuda">
                            Ayuda
                        </Button>
                    </li>
                </ul>
              </nav>
  
              <div>
                <Button id="botonSaludo">Recibí un Saludo.</Button>
              </div>
  
        </div>
        <div className="action-buttons hide">
            <Button href="Login.html" title="Log in" className="secondary">
                Iniciar sesión
            </Button>
            <Button href="#sign-up" title="Sign up" className="primary">
                Crear cuenta
            </Button>
        </div>
  
        <img className="menu-icon" src="bars-solid.svg" title="Burger Menu" alt="Burger Menu" onclick="toggleMenu(this)"/>
      </header>
    )
}

export default Barra;