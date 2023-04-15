const router = require('express').Router();
const { Blog, Comment, Library, User } = require('../models');

// GET all libraries for homepage
router.get('/', async (req, res) => {
  try {
    const libraryData = await Library.findAll({
      include: [
        {
          model: Blog,
          attributes: [
            'title', 
            'contents', 
            'user_id', 
            'publish_date'
          ],
        },
      ],
    });

    const libraries = libraryData.map((library) =>
      library.get({ plain: true })
    );
    res.render('Library', {
      libraries,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one library
router.get('/library/:id', async (req, res) => {
  try {
    const libraryData = await Library.findByPk(req.params.id, {
      include: [
        {
          model: Blog,
          attributes: [
            'id',
            'title',
            'contents',
            'user_id',
            'publish_date',
            'library_id',
          ],
        },
      ],
    });

    const library = libraryData.get({ plain: true });
    res.render('library', { 
      library, 
      style: 'blog.css',
      logged_in: req.session.logged_in, 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    const blog = blogData.get({ plain: true });
    res.render('blog', { 
      blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post', async (req, res) => {
  try {
    const postsData = await User.findByPk(req.session.user_id, {
      // attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });
    const posts = postsData.get({ plain: true });
    res.render('post', {
      ...posts,
      style: 'posts.css',
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;































      // {
      //   where: {
      //     library_id: req.params.id // here trying to load all blogs that match the selected library id
      //   },
      // },