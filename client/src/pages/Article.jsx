// src/pages/Article.jsx

import { useParams } from "react-router-dom";

import newsService from "../services/newsService";

import ArticleHeaderSection from "../sections/article/ArticleHeaderSection";
import ArticleContentSection from "../sections/article/ArticleContentSection";
import RelatedNewsSection from "../sections/article/RelatedNewsSection";

function Article() {
    const { id } = useParams();

    const article = newsService.getNewsById(id);

    if (!article) {
        return (
            <div className="container py-5">
                <h2>Artículo no encontrado</h2>
                <p>La noticia que buscas no existe.</p>
            </div>
        );
    }

    const relatedNews = newsService.getRelatedNews(id);

    return (
        <>
            <ArticleHeaderSection article={article} />

            <ArticleContentSection article={article} />

            <RelatedNewsSection news={relatedNews} />
        </>
    );
}

export default Article;