import NewsCard from "../../components/news/NewsCard";

const latestNews = [
    {
        id: 1,
        title: "React 19 ya está disponible",
        description: "La nueva versión incorpora mejoras importantes en rendimiento y experiencia de desarrollo.",
        category: "Tecnología",
        date: "18 Jul 2026",
        image: "https://picsum.photos/600/400?random=1"
    },
    {
        id: 2,
        title: "Express 6 continúa evolucionando",
        description: "El framework más utilizado para Node.js sigue mejorando su rendimiento.",
        category: "Programación",
        date: "17 Jul 2026",
        image: "https://picsum.photos/600/400?random=2"
    },
    {
        id: 3,
        title: "MySQL sigue siendo una referencia",
        description: "Millones de aplicaciones siguen utilizando MySQL como base de datos.",
        category: "Base de datos",
        date: "16 Jul 2026",
        image: "https://picsum.photos/600/400?random=3"
    }
];

function LatestNewsSection() {
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