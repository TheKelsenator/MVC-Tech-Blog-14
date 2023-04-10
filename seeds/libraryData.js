const { Library } = require('../models');

const librarydata = [
  {
    name: 'Future of Work',
  },
  {
    name: 'Social Media',
  },
  {
    name: 'Tech Policy',
  },
  {
    name: 'Privacy',
  },
  {
    name: 'Innovation',
  },
];

const seedLibrary = () => Library.bulkCreate(librarydata);

module.exports = seedLibrary;
