import { Link } from "react-router-dom";

function NewsCard({ article }) {
    return (
        <Link
            to={`/article/${article.id}`}
            className="text-decoration-none"
        >
            <article
                className="card h-100 shadow-sm"
                style={{
                    background: "#1E293B",
                    border: "1px solid #334155",
                    color: "#F8FAFC",
                    cursor: "pointer",
                    transition: "transform .2s ease"
                }}
            >
                <img
                    src={article.image}
                    alt={article.title}
                    className="card-img-top"
                    style={{
                        height: "220px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body">

                    <span className="badge bg-primary mb-3">
                        {article.category}
                    </span>

                    <h5 className="card-title fw-bold">
                        {article.title}
                    </h5>

                    <p
                        className="card-text"
                        style={{
                            color: "#94A3B8"
                        }}
                    >
                        {article.summary}
                    </p>

                </div>

                <div className="card-footer border-0 bg-transparent">

                    <small className="text-secondary">
                        {article.date}
                    </small>

                </div>

            </article>
        </Link>
    );
}

export default NewsCard;