import { useContext } from 'react'
import { ShopContext } from '../App'

import Basket from './Basket'

function Header() {

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="col-6 d-flex justify-content-start">
                <span className="navbar-brand mb-0 h1 p-3">C.Hooks</span>
            </div>
            <div className="col-6 d-flex justify-content-evenly">
                <span className="navbar-brand mb-0 h1 links">Home</span>
                <span className="navbar-brand mb-0 h1 links">About</span>
                <span className="navbar-brand mb-0 h1 links">Contact</span>
                <Basket />
            </div>
        </nav>
    )
}

export default Header