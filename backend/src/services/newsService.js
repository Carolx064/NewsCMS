const mockNews = [
    {
        id: 1,
        title: "Primera noticia",
        category: "Tecnología"
    },
    {
        id: 2,
        title: "Segunda noticia",
        category: "Deportes"
    },
    {
        id: 3,
        title: "Tercera noticia",
        category: "Economía"
    }
];

const newsService = {
    getAllNews() {
        return mockNews;
    }
};

export default newsService;