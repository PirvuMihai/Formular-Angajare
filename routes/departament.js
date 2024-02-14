const express = require('express');

const router = express.Router();

const DepartamentController = require('../controllers').DepartamentController;

router.post("/", DepartamentController.addDepartament);
router.get("/", DepartamentController.getAllDepartamente);
router.get("/:id", DepartamentController.getDepartamentById);
router.delete("/:id", DepartamentController.deleteDepartament);

module.exports = router;