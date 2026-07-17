// src/pages/Article.jsx

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import mockNews from "../data/mockNews";

import ArticleHeaderSection from "../sections/article/ArticleHeaderSection";
import ArticleContentSection from "../sections/article/ArticleContentSection";
import RelatedNewsSection from "../sections/article/RelatedNewsSection";

function Article() {
    const { id } = useParams();

    useEffect(() => {
        console.log("Artículo cargado:", id);
    }, [id]);

    const article = mockNews.find(
        (news) => news.id === Number(id)
    );

    if (!article) {
        return (
            <div className="container py-5">
                <h2>Artículo no encontrado</h2>
                <p>La noticia que buscas no existe.</p>
            </div>
        );
    }

    const relatedNews = mockNews.filter(
        (news) => news.id !== article.id
    );

    return (
        <>
            <ArticleHeaderSection article={article} />

            <ArticleContentSection article={article} />

            <RelatedNewsSection news={relatedNews} />
        </>
    );
}

export default Article;