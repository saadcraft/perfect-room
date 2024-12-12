type Products = {
    id: number;
    name: string;
    price: number;
    currency: string;
    quantity: number;
    product_photo: string;
    star_rating: string;
    promotion: number;
  };


  const Product : Products[] = [
    {
        id: 1,
        name: "coffée with neon led #1",
        price: 12000,
        currency: "DA",
        quantity: 20,
        product_photo: "/images/promos/promo1.jpg",
        star_rating: '4.7',
        promotion: 40
    },
    {
        id: 2,
        name: "Beauty with neon led #2",
        price: 11500,
        currency: "DA",
        quantity: 20,
        product_photo: "/images/promos/promo2.jpg",
        star_rating: '4.7',
        promotion: 30
    },
    {
        id: 3,
        name: "Gym model with neon led #3",
        price: 10500,
        currency: "DA",
        quantity: 20,
        product_photo: "/images/promos/promo3.jpg",
        star_rating: '4.7',
        promotion: 20
    },
    {
        id: 4,
        name: "congrats with neon led #4",
        price: 10500,
        currency: "DA",
        quantity: 20,
        product_photo: "/images/promos/promo4.jpg",
        star_rating: '4.7',
        promotion: 15
    },
    {
        id: 5,
        name: "coffée with neon led #5",
        price: 11500,
        currency: "DA",
        quantity: 20,
        product_photo: "/images/promos/promo5.jpg",
        star_rating: '4.7',
        promotion: 25
    },
    {
        id: 6,
        name: "Airline model with neon led #6",
        price: 12500,
        currency: "DA",
        quantity: 20,
        product_photo: "/images/promos/promo6.jpg",
        star_rating: '4.7',
        promotion: 30
    },
    {
        id: 7,
        name: "Playstation logo with neon led #7",
        price: 11000,
        currency: "DA",
        quantity: 20,
        product_photo: "/images/promos/promo7.jpg",
        star_rating: '4.7',
        promotion: 10
    },
    {
        id: 8,
        name: "Zeus model with neon led #8",
        price: 10500,
        currency: "DA",
        quantity: 20,
        product_photo: "/images/promos/promo8.jpg",
        star_rating: '4.7',
        promotion: 35
    }
  ]
export default Product;



