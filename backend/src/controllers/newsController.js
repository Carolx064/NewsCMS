import newsService from "../services/newsService.js";

export function getAllNews(req, res) {
    const news = newsService.getAllNews();

    res.status(200).json({
        success: true,
        data: news
    });
}