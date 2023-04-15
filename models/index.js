const User = require('./User');
const Library = require('./Library');
const Blog = require('./Blog');

Library.hasMany(Blog, {
  foreignKey: 'library_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(Library, {
  foreignKey: 'library_id',
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Library, Blog };
