const express = require("express");
const router = express.Router();
const { getAll, addVehicle, updateVehicleInfo } = require("../controllers/vehicle.controller");

router.route("/").get(getAll);
router.route("/add").post(addVehicle);
router.route("/:id").patch(updateVehicleInfo);

module.exports = router;