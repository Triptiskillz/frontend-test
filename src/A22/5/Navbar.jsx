import { Component } from "react";
import {Link} from 'react-router-dom';
class Navbar extends Component {
render() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand p-2" to="/" >Mobiles</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/mobiles">All Brand</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mobiles/Xiaomi">Xiaomi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mobiles/Sumsung">Samsung</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mobiles/Realme">Realme</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mobiles/Oppo">Oppo</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
}
export default Navbar
