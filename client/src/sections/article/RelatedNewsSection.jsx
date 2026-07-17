import NewsCard from "../../components/news/NewsCard";

function RelatedNewsSection({ news }) {
    return (
        <section className="py-5">
            <div className="container">

                <h2 className="mb-4 fw-bold">
                    Noticias relacionadas
                </h2>

                <div className="row g-4">

                    {news.map((article) => (

                        <div
                            key={article.id}
                            className="col-md-4"
                        >
                            <NewsCard article={article} />
                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default RelatedNewsSection;