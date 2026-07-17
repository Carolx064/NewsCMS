import mockCategories from "../data/mockCategories";

const categoryService = {
    getAllCategories() {
        return mockCategories;
    }
};

export default categoryService;