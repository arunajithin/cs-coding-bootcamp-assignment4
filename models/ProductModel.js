const mongoose = require('mongoose');

//Schema
const ProductSchema = new mongoose.Schema(
    {
        brandName: {
            type: String,
            required: true,
        },
        modelName: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        color: {
            type: String,
            required: true,
        }
    }
);


//Model
const ProductModel = mongoose.model('products', ProductSchema);

// Export the model
module.exports = ProductModel;