const Product = require('../../moldel/productModel')

//add product
const addProduct=async(req,res,next)=>{
    const {name,image,brand,category,description,price,countInStock,rating,numReviews}=req.body;
    const user="65985a5339e2db02ea260564"
    const productExist=await Product.findOne({name});
    if(productExist){
        res.status(400);
        const error=new Error("Product Already Exists!");
        next(error);
    }else{
        const product=await Product.create({name,user,image,brand,category,description,price,countInStock,rating,numReviews});
        if(product){
            res.status(201).json({
                _id:product._id,
                name:product.name,
                image:product.image,
                brand:product.brand,
                category:product.category,
                description:product.description,
                price:product.price,
                countInStock:product.countInStock,
            });
        }else{
            res.status(404);
            const err=new Error("Product Not Found");
            next(err);
        }
    }
}


//edit product
const editProduct = async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        const err = new Error("Product Not Found");
        next(err);
    }
}

module.exports = { editProduct,addProduct }