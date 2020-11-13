const { Thought, User } = require('../models');
const { db } = require('../models/User');

const thoughtController = {
    //get all comments
    getThoughts(req, res) {
        Thought.find()
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },
    //get thought by id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.id})
            .then((dbThoughtData) => {
                if(!dbThoughtData) {
                    return res.status(404).json({message: 'no thought with this id'});
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
        })
    },
    //add new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if(!dbUserData) {
                    return res.status(404).json({message: 'no thought with this id'});
                }
                res.json({ message: 'Thought added successfully' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },
     //update a thought by id
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.id }, {set: req.body}, { new: true })
            .then((dbThoughtData) => {
                if(!dbThoughtData) {
                    return res.status(404).json({message: 'no thought with this id'});
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    //remove thought by id
    deleteThought(req, res) {
        Thought.findByIdAndRemove({ _id: req.params.id })
            .then((dbThoughtData) => {
                if(!dbThoughtData) {
                    return res.status(404).json({message: 'no thought with this id'});
                }
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $pull: { thoughts: dbThoughtData._id } },
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if(!dbUserData) {
                    return res.status(404).json({message: 'no thought with this id'});
                }
                res.json({ message: 'Thought deleted successfully' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    }
}

module.exports = thoughtController;