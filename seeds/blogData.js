const { Blog } = require('../models');

const blogdata = [
  {
    title: '',
    contents: '',
    post_creator: '',
    date_created: '',
    // option to leave a comment
    library_id: 1,
  },
  {
    title: '',
    contents: '',
    post_creator: '',
    date_created: '',
    // option to leave a comment
    library_id: 3,
  },  {
    title: '',
    contents: '',
    post_creator: '',
    date_created: '',
    // option to leave a comment
    library_id: 1,
  },  {
    title: '',
    contents: '',
    post_creator: '',
    date_created: '',
    // option to leave a comment
    library_id: 4,
  },  {
    title: '',
    contents: '',
    post_creator: '',
    date_created: '',
    // option to leave a comment
    library_id: 2,
  },  {
    title: '',
    contents: '',
    post_creator: '',
    date_created: '',
    // option to leave a comment
    library_id: 5,
  },  {
    title: '',
    contents: '',
    post_creator: '',
    date_created: '',
    // option to leave a comment
    library_id: 5,
  },  {
    title: '',
    contents: '',
    post_creator: '',
    date_created: '',
    // option to leave a comment
    library_id: 3,
  },  {
    title: '',
    contents: '',
    post_creator: '',
    date_created: '',
    // option to leave a comment
    library_id: 2,
  },  {
    title: '',
    contents: '',
    post_creator: '',
    date_created: '',
    // option to leave a comment
    library_id: 1,
  },  {
    title: '',
    contents: '',
    post_creator: '',
    date_created: '',
    // option to leave a comment
    library_id: 4,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
