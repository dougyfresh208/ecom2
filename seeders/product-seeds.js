const { Product } = require('../models');

const productData = [
  {
    product_name: 'Iphone 16',
    price: 5000.99,
    stock: 14,
    category_id: 1, // Assuming this is the ID for 'Apparel' or similar category
  },
  {
    product_name: 'Church Vest',
    price: 90.0,
    stock: 25,
    category_id: 2, // Assuming this is the ID for 'Footwear' or similar category
  },
  {
    product_name: 'Leg Lamp',
    price: 22.99,
    stock: 12,
    category_id: 3, // Assuming this is the ID for 'Accessories' or similar category
  },
  {
    product_name: "Tent",
    price: 78.0,
    stock: 10,
    category_id: 4 
  },
  {
    product_name:"Potato Masher",
    price: 39.99,
    stock: 7,
    category_id: 5
  },
  {
    product_name:'Pimple Cream',
    price: 1500.99,
    stock: 5,
    category_id: 6
  }
  // Add more products as needed
];

const seedProducts = async () => {
 await Product.bulkCreate(productData);
 };
module.exports = seedProducts;
