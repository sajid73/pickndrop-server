const express = require("express");
const router = express.Router();
const { signup, signin, findMe, findAll, updateUser, deleteUser } = require("../controllers/user.controller");
router.route("/").get(findAll);
router.route("/:id").patch(updateUser);
router.route("/:id").delete(deleteUser);
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/me").post(findMe);

module.exports = router;
