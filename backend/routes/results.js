
/*const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const Exam = require('../models/Exam');

router.post('/', async (req, res) => {
  const { user, exam_id, answers } = req.body;
  const exam = await Exam.findById(exam_id);

  let score = 0;
  const processedAnswers = answers.map(ans => {
    const q = exam.questions.id(ans.question_id);
    const is_correct = q.correct_option === ans.selected_option;
    if (is_correct) score++;
    return { ...ans, is_correct };
  });

  const result = new Result({ user, exam_id, score, answers: processedAnswers });
  await result.save();
  res.json({ score, result });
});

module.exports = router;*/

// const express = require('express');
// const router = express.Router();
// const Result = require('../models/Result');
// const Exam = require('../models/Exam');

// router.post('/', async (req, res) => {
//   try {
//     const { user, exam_id, answers } = req.body;

//     const exam = await Exam.findById(exam_id);
//     if (!exam) return res.status(404).json({ error: 'Exam not found' });

//     let score = 0;

//     console.log("📥 Submitted Answers:", answers);
    
//     const processedAnswers = answers.map(ans => {
//       const matchedQuestion = exam.questions.find(q => {
//         // Fix: Ensure both are strings before comparing
//         return q.question_id.toString() === ans.question_id.toString();
//       });

//       let is_correct = false;

//       if (matchedQuestion) {
//         const correct = Number(matchedQuestion.correct_option);
//         const selected = Number(ans.selected_option);
//         is_correct = correct === selected;

//         if (is_correct) score++;

//         console.log('✅ Check:', {
//           question_id: ans.question_id,
//           correct_option: correct,
//           selected_option: selected,
//           matched: is_correct
//         });
//       } else {
//         console.log('❌ Question not found for:', ans.question_id);
//       }

//       return {
//         // question_id: ans.question_id,
//         // selected_option: ans.selected_option,
//         is_correct
//       };
//     });

//     const result = new Result({
//       user,
//       exam_id,
//       score,
//       answers: processedAnswers
//     });

//     await result.save();
//     res.json({ score, result });

//   } catch (err) {
//     console.error('[❗ Submit Error]', err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;

/*
const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const Exam = require('../models/Exam');

router.post('/', async (req, res) => {
  try {
    const { user, exam_id, answers } = req.body;

    const exam = await Exam.findById(exam_id);
    if (!exam) return res.status(404).json({ error: 'Exam not found' });

    let score = 0;

    console.log("📥 Submitted Answers:", answers);

    const processedAnswers = answers.map(ans => {
      const matchedQuestion = exam.questions.find(q =>
        q.question_id.toString() === ans.question_id.toString()
      );

      let is_correct = false;

      if (matchedQuestion) {
        const correct = Number(matchedQuestion.correct_option);
        const selected = Number(ans.selected_option);
        is_correct = correct === selected;

        if (is_correct) score++;

        console.log('✅ Check:', {
          question_id: ans.question_id,
          correct_option: correct,
          selected_option: selected,
          matched: is_correct,
        });
      } else {
        console.log('❌ Question not found for:', ans.question_id);
      }

      return {
        question_id: ans.question_id,         // ✅ Must include in saved document
        selected_option: ans.selected_option, // ✅ Must include in saved document
        is_correct,
      };
    });

    const result = new Result({
      user,
      exam_id,
      score,
      answers: processedAnswers,
    });
  console.log(score)
    await result.save();
    res.json({ score, result });

  } catch (err) {
    console.error('[❗ Submit Error]', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
*/
const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const Exam = require('../models/Exam');



router.post('/', async (req, res) => {
  try {
    const { user, exam_id, answers } = req.body;

    const exam = await Exam.findById(exam_id);
    if (!exam) return res.status(404).json({ error: 'Exam not found' });

    let score = 0;

    console.log("📥 Submitted Answers:", answers);

   /* const processedAnswers = answers.map(ans => {
  const matchedQuestion = exam.questions.find(q =>
    q._id.toString() === ans.question_id.toString()  // ✅ FIXED HERE
  );
  console.log("🚨 Checking Answer:", {
  submitted: ans,
  matched_id: matchedQuestion?._id,
  correct_option: matchedQuestion?.correct_option,
  selected_option: ans.selected_option});


      let is_correct = false;

      if (matchedQuestion) {
        const correct = Number(matchedQuestion.correct_option);
        const selected = Number(ans.selected_option);
        is_correct = correct === selected;

        if (is_correct) score++;
        console.log("Submitted:", ans);
        console.log("Matched with:", matchedQuestion);
        console.log("Correct Option:", matchedQuestion?.correct_option);

        console.log('✅ Check:', {
          question_id: ans.question_id,
          correct_option: correct,
          selected_option: selected,
          matched: is_correct,
        });
      } else {
        console.log('❌ Question not found for:', ans.question_id);
      }

      return {
        question_id: ans.question_id,
        selected_option: ans.selected_option,
        is_correct,
      };
    });*/

    const processedAnswers = answers.map(ans => {
  const matchedQuestion = exam.questions.find(q =>
  q.question_id.toString() === ans.question_id.toString()
);


  let is_correct = false;

  console.log('🚨 Checking Answer:', {
    submitted: ans,
    matched_id: matchedQuestion?._id,
    correct_option: matchedQuestion?.correct_option,
    selected_option: ans.selected_option
  });

  if (matchedQuestion) {
    const correct = Number(matchedQuestion.correct_option);
    const selected = Number(ans.selected_option);
    is_correct = correct === selected;
    if (is_correct) score++;
  } else {
    console.log('❌ Question not found for:', ans.question_id);
  }

  return {
    question_id: ans.question_id,
    selected_option: ans.selected_option,
    is_correct,
  };
});


    const result = new Result({
      user,
      exam_id,
      score,
      answers: processedAnswers,
    });

    await result.save();
    console.log('✅ Final Score:', score);

    res.json({ score, result });

  } catch (err) {
    console.error('[❗ Submit Error]', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
