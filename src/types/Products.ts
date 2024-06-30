export interface Products {
    category: string;
    flavor: string;
    id: number;
    name: string;
    price: number;
    stock: number;
}

export type Items = {
    name: string;
    price: string;
    quantity: number;
};

export type Orders = {
    date: string;
    id: string;
    items: Items[];
    total: string;
}
