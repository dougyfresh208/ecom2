const express = require('express');
const routes = require('./routes'); // Assuming routes are correctly defined in the routes directory
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes
app.use(routes);

// Sync Sequelize models to the database, then turn on the server
sequelize.sync({ force: false }) // Adjust force: false as needed
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
    process.exit(1); // Exit the process with an error code
  });

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Received SIGINT. Closing server gracefully...');
  sequelize.close()
    .then(() => {
      console.log('Database connection closed.');
      process.exit(0); // Exit the process with success code
    })
    .catch((err) => {
      console.error('Error closing database connection:', err);
      process.exit(1); // Exit the process with an error code
    });
});