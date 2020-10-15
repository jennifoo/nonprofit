const router = require("express").Router();
const postRoutes = require("./blog");

// Post routes
router.use("/post", postRoutes);

module.exports = router;