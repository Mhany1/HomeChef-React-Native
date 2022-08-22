const PRODUCTS = [
    {
        id: 100,
        name: 'Asada Steak',
        price: 350,
        image: require('../assets/products/arr1.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'Italian Penne',
        price: 600,
        image: require('../assets/products/arr2.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'SweetHome Cupcake',
        price: 102,
        image: require('../assets/products/arr3.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 209,
        name: 'Chicken Lazone',
        price: 58,
        image: require('../assets/products/arr4.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 99,
        name: 'CLOSET COOKING',
        price: 91,
        image: require('../assets/products/arr6.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 126,
        name: 'BON APPETIT',
        price: 133,
        image: require('../assets/products/j1 (1).jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 111,
        name: 'SIMPLY RECIPES',
        price: 64,
        image: require('../assets/products/j1 (2).jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 122,
        name: 'TWO PEAS THEIR',
        price: 87,
        image: require('../assets/products/j1 (3).jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 12,
        name: 'REAL SIMPLE',
        price: 50,
        image: require('../assets/products/j1 (4).jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 2,
        name: 'Cupcake Soap',
        price: 43,
        image: require('../assets/products/j1 (5).jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    // {
    //     id: 100,
    //     name: 'Sweet recipes',
    //     price: 59,
    //     image: require('../assets/products/j1 (6) .jpg'),
    //     title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
    //     description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    // },
    {
        id: 108,
        name: 'Fride Chiken',
        price: 88,
        image: require('../assets/products/j1 (7).jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 155,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/products/arr1.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 1022,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/products/arr1.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 1023,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/products/arr1.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 1024,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/products/arr1.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 1028,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/products/arr1.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 10211,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/products/arr1.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 10258,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/products/arr1.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 10288,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/products/arr1.jpg'),
        title:'Boiled pasta with shrimps with vegetables and corn oil and chease.',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}