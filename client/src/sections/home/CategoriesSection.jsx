const categories = [
    "Política",
    "Economía",
    "Tecnología",
    "Deportes",
    "Cultura",
    "Internacional",
    "Opinión",
    "Sociedad"
];

function CategoriesSection() {
    return (
        <section className="mt-5">

            <h2 className="fw-bold mb-4">
                Categorías
            </h2>

            <div className="d-flex flex-wrap gap-3">

                {categories.map((category) => (

                    <button
                        key={category}
                        className="btn btn-outline-light rounded-pill px-4"
                    >
                        {category}
                    </button>

                ))}

            </div>

        </section>
    );
}

export default CategoriesSection;