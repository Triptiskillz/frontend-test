import { Component } from "react";
class Navbar extends Component {
render() {
    let { count } = this.props;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand p-2" href="#">AllProduct</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Products   <span className="badge badge-pill badge-success">{count}</span></a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
}
export default Navbar