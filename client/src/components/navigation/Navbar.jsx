import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg border-bottom"
            style={{
                background: "#111827",
                borderColor: "#334155"
            }}
        >
            <div className="container">

                <Link
                    className="navbar-brand fw-bold text-white"
                    to="/"
                >
                    📰 NewsCMS
                </Link>

                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbar"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">
                                Inicio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/login">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/register">
                                Registro
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;