import {Link, NavLink} from 'react-router-dom';
import CartWidget from './cardWidget/CartWidget';
import React from 'react';



const NavBar = () => {
  return (
    <div className="container bg-dark " id="navbar">
    <div className="row">
                <div className="col-6">
                    <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to={"/"}><img src="https://i.pinimg.com/originals/cf/26/32/cf2632cd8a31f66a169784def7c9b02a.png" alt="tecno" width={100} /></Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={"/category/Todos"} >Todos</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/PartesDeArriba"}>Partes de Arriba</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/PartesDeAbajo"}>Partes de Abajo</NavLink>
                                        </li>
                                        
                                    </ul>
                                    </div>
                                </div>
                    </nav>
                </div>
                <div className="col-6 d-flex justify-content-end  align-items-center">
                    <Link to='/cart'> <CartWidget/> </Link>
                </div>        
    </div>
</div>
  )
}

export default NavBar