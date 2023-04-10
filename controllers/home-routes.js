const router = require('express').Router();
const { Library, Blog } = require('../models');

// GET all libraries for homepage
router.get('/', async (req, res) => {
  try {
    const dbLibraryData = await Library.findAll({
      include: [
        {
          model: Blog,
          attributes: ['title', 'contents', 'post_creator', 'date_created'],
        },
      ],
    });

    const libraries = dbLibraryData.map((library) =>
      library.get({ plain: true })
    );
    res.render('homepage', {
      libraries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one library
router.get('/library/:id', async (req, res) => {
  try {
    const dbLibraryData = await Library.findByPk(req.params.id, {
      include: [
        {
          model: Blog,
          attributes: [
            'id',
            'title',
            'contents',
            'post_creator',
            'date_created',
            'library_id',
          ],
        },
      ],
    });

    const library = dbLibraryData.get({ plain: true });
    res.render('library', { library, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
router.get('/blog/:id', async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id);

    const blog = dbBlogData.get({ plain: true });
    res.render('blog', { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
