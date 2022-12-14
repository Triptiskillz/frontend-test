import { Component } from "react";
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        const { brands } = this.props;
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand p-2" to="/all/1" >LAPTOPS</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {brands.map((brand) => (
                                <li className="nav-item" key={brand}>
                                    <Link className="nav-link" to={`/all/1?brand=${brand}`}> {brand}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

            </>
        )
    }
}
export default Navbar
