const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("you're in the index page")
});

module.exports = router;