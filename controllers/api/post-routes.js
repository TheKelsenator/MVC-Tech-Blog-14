const router = require('express').Router();
const { Post, Comment } = require('../../models');

// ENDPOINT
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: Comment }],
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE new post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE comment
router.post('/:id/comment', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      post_id: req.params.id,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE 
router.delete('/:id', async (req, res) => {
  try {
    const newPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;