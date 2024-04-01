const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1, // 'Iphone 16'
    tag_id: 1, // 'electronics'
  },
  {
    product_id: 2, // 'Church Vest'
    tag_id: 2, // 'fashion'
  },
  {
    product_id: 3, // 'Leg Lamp'
    tag_id: 3, // 'home decor'
  },
  {
    product_id: 4, // 'Tent'
    tag_id: 4, // 'outdoor'
  },
  {
    product_id: 5, // 'Potato Masher'
    tag_id: 5, // 'kitchen'
  },
  {
    product_id: 6, // 'Pimple Cream'
    tag_id: 6, // 'health'
  },
  // Add more product-tags as needed
];

const seedProductTags = async () => {
 await ProductTag.bulkCreate(productTagData);
};

module.exports = seedProductTags;