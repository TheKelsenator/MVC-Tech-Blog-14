const { Library } = require('../models');

const librarydata = [
  {
    name: 'How-to Post',
  },
  {
    name: 'Product Reviews',
  },
  {
    name: 'Current Trends',
  },
  {
    name: 'Video Tutorials',
  },
  {
    name: 'Service Updates',
  },
];

const seedLibrary = () => Library.bulkCreate(librarydata);

module.exports = seedLibrary;
