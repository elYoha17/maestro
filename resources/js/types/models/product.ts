export type Product = {
    id: number;
    name: string;
    sku: string;
    price: number;
    created_at?: string;
    updated_at?: string;
};

export type ProductFormData = {
    name: string;
    sku: string;
    price: string;
};
