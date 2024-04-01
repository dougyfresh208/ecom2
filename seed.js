const sequelize = require('./config/connection');
const seedCategories = require('./seeders/category-seeds');
const seedProducts = require('./seeders/product-seeds');
const seedTags = require('./seeders/tag-seeds');
const seedProductTags = require('./seeders/productTag-seeds');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');
  
    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    await seedProductTags();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
