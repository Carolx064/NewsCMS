function Home() {
    return (
        <>

            <section className="py-5">

                <h1 className="display-3 fw-bold">

                    Bienvenido a NewsCMS

                </h1>

                <p
                    className="lead mt-4"
                    style={{
                        color: "#94A3B8"
                    }}
                >
                    Tu portal de noticias desarrollado con React,
                    Express y MySQL.
                </p>

                <button
                    className="btn btn-primary btn-lg mt-3"
                >
                    Explorar noticias
                </button>

            </section>

        </>
    );
}

export default Home;