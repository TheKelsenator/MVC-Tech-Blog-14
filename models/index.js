const User = require('./User');
const Library = require('./Library');
const Blog = require('./Blog');

Library.hasMany(Blog, {
  foreignKey: 'library_id',
});

Blog.belongsTo(Library, {
  foreignKey: 'library_id',
});

module.exports = { User, Library, Blog };
