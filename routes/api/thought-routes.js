const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controllers');


// /api/thoughts/userId
router.route('/:userId').get(getThoughts).post(createThought);

router.route('/:userId/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;