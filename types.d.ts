type Variants = {
    _id: string;
    color: string;
    resolution: string;
    reference: string;
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
    primaryImage?: string;
    images: string[];
    variants: Variants[];
    rate?: number;
    promotion?: number;
}