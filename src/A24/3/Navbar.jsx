import { Component } from "react";
import {Link} from 'react-router-dom';
class Navbar extends Component {
render() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <Link className="navbar-brand p-2" to="/home" >NewsSite</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cricket">Cricket</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/education">Education</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
}
export default Navbar
