type Variants = {
    _id: string;
    sku: string;
    product: Products;
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
    options: Record<string, string>;
    price: number;
    quantity: number;
};

type Parsonalizer = {
    height: number;
    Width: number;
    font: string;
    text: string;
    color: string;
    materiel: string;
}

type Order = {
    _id: string;
    variant?: Variants;
    parsonalizer?: Parsonalizer;
    orderInfo: string;
    quantity: number;
    price: number;
}

type OrderInfo = {
    _id: string;
    fullname: string;
    phoneNumber: string;
    wilaya: string;
    adresse: string;
    email?: string;
    status: string;
    tracking?: string;
    orders: Order[];
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}