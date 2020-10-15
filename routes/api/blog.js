const router = require("express").Router();
const postController = require("../../controllers/postController");


// Matchers with "api/post"
router
  .route("/")
  .get(postController.findAll)
  .post(postController.create);


  module.exports = router;