const express = require('express');
const router = express.Router();

const ProductModel = require('../models/ProductModel.js');

router.post('/add',
    function(req, res){
        let newDocument = {
            "brandName": req.body.brandName,
            "modelName": req.body.modelName,
            "price": req.body.price,
            "color": req.body.color
        };

        ProductModel
        .create(newDocument)
        .then(
            function(dbDocument){
                res.json(dbDocument)
            }
        )
        .catch(
            function(error){
                console.log('/addproduct error', error);

                res.send('An error occured');
            }
        );
    }
);

router.post('/find',
    function(req, res){
        ProductModel
        .find(
            { "brandName": req.body.brandName }
        )
        .then(
            function(dbDocument){
                res.json(dbDocument)
            }
        )
        .catch(
            function(error){
                console.log('/findproduct error', error);

                res.send('An error occured');
            }
        )
    }
);

module.exports = router;