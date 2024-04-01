const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Clothing',
  },
  {
    category_name: 'Home Decor'
  },
  {
    category_name:'Outdoor Gear' 
  },
  {
    category_name: "Kitchen Essentials"
  },
  {
    category_name: "Health and Beauty",
    },
];
  // Add more categories as needed

const seedCategories = async () =>{
 await Category.bulkCreate(categoryData);
}; 

module.exports = seedCategories;