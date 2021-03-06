const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controllers');


//GET and POST routes @ /api/users
router.route('/').get(getUsers).post(createUser);

// GET one, PUT, and Delete routes @ /api/users/:id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

// add friend to user /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router