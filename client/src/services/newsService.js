// src/services/newsService.js

import mockNews from "../data/mockNews";

const newsService = {
    getAllNews() {
        return mockNews;
    },

    getNewsById(id) {
        return mockNews.find(
            (news) => news.id === Number(id)
        );
    },

    getRelatedNews(id) {
        return mockNews.filter(
            (news) => news.id !== Number(id)
        );
    },

    getLatestNews(limit = 6) {
        return mockNews.slice(0, limit);
    }
};

export default newsService;