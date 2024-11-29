type Item = {
    name: string;
    id: number;
  };
  
  type Categories = {
    [key: string]: Item[];
  };

const Category : Categories = {   
        Foods: [
            {
                id: 1,
                name: "cafétéria",
            },
            {
                id: 2,
                name: "Pizzeria",
            },
            {
                id: 3,
                name: "Restaurant",
            },
            {
                id: 4,
                name: "crémerie",
            }
        ],
        Fêtes: [
            {
                id: 1,
                name: "cafétéria",
            },
            {
                id: 2,
                name: "Pizzeria",
            },
            {
                id: 3,
                name: "Restaurant",
            },
            {
                id: 4,
                name: "crémerie",
            }
        ],
        Médical: [
            {
                id: 1,
                name: "cafétéria",
            },
            {
                id: 2,
                name: "Pizzeria",
            },
            {
                id: 3,
                name: "Restaurant",
            },
            {
                id: 4,
                name: "crémerie",
            }
        ],
        beauty: [
            {
                id: 1,
                name: "cafétéria",
            },
            {
                id: 2,
                name: "Pizzeria",
            },
            {
                id: 3,
                name: "Restaurant",
            },
            {
                id: 4,
                name: "crémerie",
            }
        ]
};

export default Category;