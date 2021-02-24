import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
name: 'Martin',
email:'admin@apple.com',
password: bcrypt.hashSync('12345', 8),
isAdmin: true,
 },
 {
    name: 'John',
    email:'user@example.com',
    password: bcrypt.hashSync('12345', 8),
    isAdmin: false,
     },
  
    ],
    products: [
        {
            name: 'Coca-Cola Horse and Buggy',
            image: '/images/horse.jpg',
            price:3750,
            countInStock: 1,
            rating: 4.5,
            numReviews: 19,
            description: 'Mixed-media Sculpture on Canvas 200cm by 180cm'
        },
        {
            name: 'Dakar Cityscape',
            image: '/images/LomanCoast.jpg',
            price:1900,
            countInStock: 1,
            rating: 4,
            numReviews: 10,
            description: '100cm by 40cm',
        },
        {
            name: 'Wireframe family Tree',
            image: '/images/LomanWireFrame.jpg',
            price:2800,
            countInStock: 1,  
            rating: 5,
            numReviews: 32,
            description: '220cm by 160cm',
        },
        {
            name: 'Saly Fisherman',
            image: '/images/pirogue.jpg',
            price:1300,
            countInStock: 1,
            rating: 4.5,
            numReviews: 8,
            description: '150cm by 70cm',
        },
        {
            name: 'Ceiling Mobile',
            image: '/images/mobile.jpg',
            price:950,
            countInStock: 1,
            rating: 4.5,
            numReviews: 16,
            description: '120cm by 100cm',
        },
        {
            name: 'Panel Installation',
            image: '/images/installation.jpg',
            price:8000,
            countInStock: 0,
            rating: 4.5,
            numReviews: 41,
            description: '100cm by 200cm',
        },
        {
            name: 'Malcom X',
            image: '/images/malcolmx.jpg',
            price:500,
            countInStock: 3,
            rating: 4.5,
            numReviews: 41,
            description: '100cm by 60cm',
        },
        {
            name: 'Mango Pool',
            image: '/images/mangopool.jpg',
            price:500,
            countInStock: 1,
            rating: 4.5,
            numReviews: 11,
            description:'100cm by 60cm',
        },
       
        {
            name: 'Self-Portrait',
            image: '/images/selfP.jpg',
            price:1000,
            countInStock: 1,
            rating: 4,
            numReviews: 11,
            description: '100cm by 60cm',
        },
        {
            name: 'Mosque Restoration',
            image: '/images/mosque.jpg',
            price:1000,
            countInStock: 1,
            rating: 3.5,
            numReviews: 32,
            description: '100cm by 60cm',
        },
        {
            name: 'Ndidi Woods',
            image: '/images/ndidiwalk.jpg',
            price:500,
            countInStock: 0,
            rating: 4.5,
            numReviews: 6,
            description: '100cm by 60cm',
        },
    
        {
            name: 'Niles B-Ball',
            image: '/images/NilesBballSq.jpg',
            price:1000,
            countInStock: 4,
            rating: 5,
            numReviews: 9,
            description: '100cm by 60cm',
        },
    ],
};

export default data;