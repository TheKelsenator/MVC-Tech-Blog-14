const sequelize = require('../config/connection');
const seedLibrary = require('./libraryData');
const seedBlogs = require('./blogData');
const seedUsers = require('./userData');
const {User, Blog, Library }= require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });
  for (const library of seedLibrary) {
    await Library.create({
      ...library,
      library_id: library[seedLibrary.library],
    });
  }
  for (const blog of seedBlogs) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedAll();
