// src/sections/home/LatestNewsSection.jsx

import NewsCard from "../../components/news/NewsCard";
import newsService from "../../services/newsService";

function LatestNewsSection() {
    const latestNews = newsService.getLatestNews();

    return (
        <section className="mt-5">
            <h2 className="fw-bold mb-4">
                Últimas noticias
            </h2>

            <div className="row g-4">
                {latestNews.map((article) => (
                    <div
                        key={article.id}
                        className="col-lg-4 col-md-6"
                    >
                        <NewsCard article={article} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default LatestNewsSection;