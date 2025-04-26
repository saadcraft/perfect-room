type Variants = {
    _id: string;
    sku: string;
    product: string;
    options: Record<string, string>;
    quntity: number;
    price: number;
}

type Products = {
    _id: string;
    title: string;
    description: string;
    quntity?: number;
    category: string;
    lowPrice: number;
    updatedAt?: string;
    primaryImage: string;
    images: string[];
    attributes: Record<string, string[]>;
    variants: Variants[];
    rate?: number;
    promotion?: number;
}

type CartItem = {
    id: string;
    name: string;
    image: string;
    sku: string;
    price: number;
    quantity: number;
};