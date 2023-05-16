// import
const controller = require("../controllers/controller");
const { Router } = require("express");
const cors = require("cors")

// init router
const router = Router();

// routes
    // get
router.get("/", controller.home_get);

router.get("/login", controller.login_get);

router.get("/signup", controller.signup_get);

    // post
router.post("/login", controller.login_post);

router.post("/signup", controller.signup_post);

    // 404
router.use(controller.error404);

// export
module.exports = router;