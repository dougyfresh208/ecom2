const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'electronics',
  },
  {
    tag_name: 'fashion',
  },
  {
    tag_name: 'home decor',
  },
  {
    tag_name: 'outdoor',
  },
  {
    tag_name: 'kitchen',
  },
  {
    tag_name: 'health',
  },
  // You can add more tags as needed.
];

const seedTags = async () => {
 await Tag.bulkCreate(tagData);
};

module.exports = seedTags;