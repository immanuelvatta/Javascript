const Product = require('../models/product.model');

//TODO get all
module.exports.findAllProducts = async(req,res) => {
    try{
        const productList = await Product.find();
        res.json(productList)
        console.log(productList)
    }catch(err){
        res.json(err);
    }
};

//TODO get one by id
module.exports.findOneProduct = async (req, res) => {
    try {
        const oneProduct = await Product.findOne({ _id: req.params.id });
        res.json({oneProduct});
    } catch (err) {
        res.json(err);
    }
};

//TODO create
module.exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json({newProduct});
    } catch (err) {
        res.json(err);
    }
};

//TODO update by id
// module.exports.updateProduct =(req,res) => {
//     Product.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new:  true, runValidators: true }
//     )
//         .then(updatedProduct => {
//             res.json({product: updatedProduct})
//         })
//         .catch(err => {
//             res.json(err)
//         });
// }
module.exports.updateProduct = async(req,res) => {
    try{
        const updatedProduct = await Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new:  true, runValidators: true }
        );
        res.json({updatedProduct})
    }catch (err){
        res.json(err);
    }
};

//TODO delete by id
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({result})
        })
        .catch(err =>{
            res.json(err)
        });
};