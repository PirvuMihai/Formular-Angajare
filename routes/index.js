const express = require(`express`);
const router = express.Router();

const UserRouter = require('./user');
const DepartamentRouter = require('./departament');

router.use(`/user`, UserRouter);
router.use('/departament', DepartamentRouter);

module.exports = router;