const router = require("express").Router();
const postRoutes = require("./blog");
// const userRoutes = require("./user")


// Post routes
router.use("/post", postRoutes);
// router.use("/user", userRoutes);
// router.use("/portal", portRoutes);

module.exports = router;