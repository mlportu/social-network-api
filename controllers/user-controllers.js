const { User } = require('../models');

const userController = {
    //get users
    getUsers(req, res) {
        User.find()
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err)=>{
                console.log(err);
                res.status(500).json(err);
            });
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.id })
          .then((dbUserData) => {
              //if no user with this id
            if (!dbUserData) {
              return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(dbUserData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
      // create a new user
      createUser(req, res) {
        User.create(req.body)
          .then((dbUserData) => {
            res.json(dbUserData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
      //update user by id
      updateUser(req, res) {
          User.findByIdAndUpdate({ _id: req.params.id}, {$set: req.body}, {new:true})
          .then(dbUserData => {
              if(!dbUserData) {
                  res.json(404).json({message: 'No user found with this id'});
                  return;
              }
              res.json(dbUserData);
          })
          .catch((err) => {
              console.log(err);
              res.status(500).json(err);          
            });
      },
      // detele user 
      deleteUser(req, res) {
        User.findByIdAndDelete({_id: req.params.id})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message:'No user found with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);          
        });
      }
};

module.exports = userController