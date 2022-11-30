const express = require('express');
const router = express.Router();

const UserModel = require('../models/UserModel');

router.post('/registration',
    function(req, res) {

        let newDocument = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        };

        UserModel
        .create(newDocument)
        .then(
            function(dbDocument){
                res.json(dbDocument)
            }
        )
        .catch(
            function(error){
                console.log('/registration error', error);

                res.send('An error occured');
            }
        );

    }
);

router.post('/find',
    function(req, res){
        UserModel
        .find(
            { "firstName": req.body.firstName }
        )
        .then(
            function(dbDocument){
                res.json(dbDocument)
            }
        )
        .catch(
            function(error){
                console.log('/find error', error);

                res.send('An error occured');
            }
        )
    }
);

router.put('/update',
    function(req, res){
        let updates = {}

        if(req.body.firstName){
            updates['firstName'] = req.body.firstName;
        };
        if(req.body.lastName){
            updates['lastName'] = req.body.lastName;
        };
        if(req.body.phone){
            updates['phone'] = req.body.phone;
        };

        UserModel
        .findOneAndUpdate(
            {
                "email": req.body.email
            },
            {
                $set: updates
            },
            {
                new: true
            }
        )
        .then(
            function(dbDocument){
                res.json(dbDocument)
            }
        )
        .catch(
            function(error){
                console.log('/users/update error', error);
                res.send('An error occured');
            }
        )
    }
);


router.put('/preferences',
    function(req, res){
        let preference = {}

        if(req.body.subscription){
            preference['subscription'] = req.body.subscription;
        };

        UserModel
        .findOneAndUpdate(
            {
                "email": req.body.email
            },
            {
                $set: preference
            },
            {
                new: true
            }
        )
        .then(
            function(dbDocument){
                res.json(dbDocument)
            }
        )
        .catch(
            function(error){
                console.log('/users/preferences error', error);
                res.send('An error occured');
            }
        )
    }
);



module.exports = router;