const sequelize = require('../config/connection');
const seedLibrary = require('./libraryData');
const seedBlogs = require('./blogData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLibrary();

  await seedBlogs();

  process.exit(0);
};

seedAll();
