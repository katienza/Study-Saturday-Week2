const router = require('express').Router();
const Student = require('../db/models/student');


router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch(err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    if (!Student) {
      const student = req.params.id;
      res.json(student);
    } else {
      res.status(404).json('Not Found');
    }
  } catch(err) {
    next(err);
  }

});
module.exports = router;
