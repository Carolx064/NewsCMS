import COLORS from "../../theme/colors";

function ArticleContentSection({ article }) {
    return (
        <section className="py-5">
            <div className="container">

                <img
                    src={article.image}
                    alt={article.title}
                    className="img-fluid rounded mb-4"
                />

                {article.content.map((paragraph, index) => (
                    <p
                        key={index}
                        className="fs-5 mb-4"
                        style={{
                            color: COLORS.textSecondary,
                            lineHeight: "1.9"
                        }}
                    >
                        {paragraph}
                    </p>
                ))}

            </div>
        </section>
    );
}

export default ArticleContentSection;