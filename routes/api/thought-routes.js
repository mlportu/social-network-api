const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controllers');


// /api/thoughts
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts/thoughtId
router.route('/').get(getSingleThought).put(updateThought);


// /api/thoughts/userId/thoughtId
router.route('/:userId/:thoughtId').delete(deleteThought);

module.exports = router;