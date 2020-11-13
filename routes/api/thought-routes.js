const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
} = require('../../controllers/thought-controllers');


// /api/thoughts
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts/thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);;

// /api/thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);


module.exports = router;