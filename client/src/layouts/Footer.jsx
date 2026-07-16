function Footer() {
    return (
        <footer
            className="border-top py-4 mt-5"
            style={{
                borderColor: "#334155",
                background: "#111827"
            }}
        >
            <div className="container text-center">

                <small className="text-secondary">

                    © {new Date().getFullYear()} NewsCMS

                </small>

            </div>
        </footer>
    );
}

export default Footer;