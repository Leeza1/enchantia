const authGuard = require("../auth/authGuard");
const productModel = require("../models/productModel");
const router = require("express").Router();
const cloudinary = require("cloudinary");


router.post("/add", authGuard, async (req, res) => {
    console.log(req.body);
    const { productName, productDescription, productCategory, productPrice} = req.body;
    const { productImage } = req.files;
    if(!productName || !productDescription || !productCategory || !productPrice){
        return res.status(422).json({error: "Please enter all fields"});
    }

    const uploadedImage = await cloudinary.v2.uploader.upload(
        productImage.path,
        {
            folder: "enchantia",
            crop: "scale"
        },
    );

    try{
        const newProduct = new productModel({
            name: productName,
            description: productDescription,
            category: productCategory,
            price: productPrice,
            image: uploadedImage.secure_url
        });
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully" });
    }catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//  get all products
router.get("/get_products", async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// get single product
router.get("/get_product/:id", async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// updating product
router.put("/update_product/:id", async (req, res) => {
    console.log(req.body);
    const { productName, productDescription, productCategory, productPrice } = req.body;
    const { productImage } = req.files;
    if (!productName || !productDescription || !productCategory || !productPrice) {
        return res.status(422).json({ error: "Please add all the fields" });
    }

    try {

        if(productImage){
            const uploadedImage = await cloudinary.v2.uploader.upload(
                productImage.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                },
            );
            
            //  update product
            const product = await productModel.findById(req.params.id);
                product.name= productName,
                product.description= productDescription,
                product.category= productCategory,
                product.price= productPrice,
                product.image= uploadedImage.secure_url
    
            await product.save();
    
            res.status(201).json({ message: "Product updated successfully" });
        } else{
            
            //  update product
            const product = await productModel.findById(req.params.id);
            product.name = productName;
            product.description = productDescription;
            product.category = productCategory;
            product.price = productPrice; 
    
            await product.save();
    
            res.status(201).json({ message: "Product updated successfully" });
        }
       

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// delete product
router.delete("/delete_product/:id", authGuard, async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        await product.deleteOne();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;