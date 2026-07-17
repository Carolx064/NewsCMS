import COLORS from "../../theme/colors";

function ArticleHeaderSection({ article }) {
    return (
        <section
            className="py-5"
            style={{
                borderBottom: `1px solid ${COLORS.border}`,
            }}
        >
            <div className="container">
                <span
                    className="badge mb-3"
                    style={{
                        background: COLORS.primary,
                    }}
                >
                    {article.category}
                </span>

                <h1
                    className="display-5 fw-bold mb-3"
                    style={{
                        color: COLORS.text,
                    }}
                >
                    {article.title}
                </h1>

                <p
                    className="mb-0"
                    style={{
                        color: COLORS.textSecondary,
                    }}
                >
                    Por <strong>{article.author}</strong> · {article.date}
                </p>
            </div>
        </section>
    );
}

export default ArticleHeaderSection;