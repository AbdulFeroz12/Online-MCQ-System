/*const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');

// 📄 Get all exams (only title and description)
router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find({}, 'title description');
    res.json(exams);
  } catch (err) {
    console.error('[❌ GET /exams]', err);
    res.status(500).json({ error: 'Failed to fetch exams' });
  }
});

// 📄 Get a single exam by ID
router.get('/:id', async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) return res.status(404).json({ error: 'Exam not found' });

    res.json(exam);
  } catch (err) {
    console.error('[❌ GET /exams/:id]', err);
    res.status(500).json({ error: 'Failed to fetch exam' });
  }
});

module.exports = router;
*/


const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');

router.get('/', async (req, res) => {
  const exams = await Exam.find();
  res.json(exams);
});

router.get('/:id', async (req, res) => {
  const exam = await Exam.findById(req.params.id);
  if (!exam) return res.status(404).json({ error: 'Exam not found' });
  res.json(exam);
});

module.exports = router;
