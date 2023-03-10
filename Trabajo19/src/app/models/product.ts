export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}

export interface Category{
    id: number;
    name: string;
    typeImg: string;
}