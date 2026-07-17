import { Link } from "react-router-dom";
import COLORS from "../../theme/colors";

function HeroSection() {
    return (
        <section className="py-5">

            <div className="container">

                <div
                    className="rounded-4 p-5"
                    style={{
                        background: "#1E293B",
                        border: "1px solid #334155"
                    }}
                >

                    <span className="badge bg-primary mb-3">
                        Destacado
                    </span>

                    <h1
                        className="display-3 fw-bold"
                        style={{ color: "#F8FAFC" }}
                    >
                        Bienvenido a NewsCMS
                    </h1>

                    <p
                        className="lead mt-4"
                        style={{
                            color: "#94A3B8",
                            maxWidth: "700px"
                        }}
                    >
                        Un gestor de noticias moderno, desarrollado con React,
                        Express y MySQL, pensado para publicar información de
                        forma rápida, sencilla y profesional.
                    </p>

                    <div className="mt-4">

                        <Link
                            to="/"
                            className="btn btn-primary btn-lg me-3"
                        >
                            Leer noticias
                        </Link>

                        <Link
                            to="/login"
                            className="btn btn-outline-light btn-lg"
                        >
                            Iniciar sesión
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default HeroSection;