const router = require("express").Router();
const authGuard = require("../auth/authGuard");
const productModal = require("../models/productModal");
const product = require ("../models/productModal");
const cloudinary = require('cloudinary'); 

//create a add product route
router.post("/add",authGuard, async(req,res) =>{
    console.log(req.body);
    //destructing
    const {productName, productPrice, productCategory, productDescription} = req.body;
    const {productImage} = req.files;

    //validation
    if(!productName || !productPrice || !productCategory || !productDescription  ||!productImage){
        return res.json({msg:"Please enter all the fileds"});
    }
    try{
        //upload Image to cloudinary
        const uploadedImage = await cloudinary.v2.uploader.upload(
            productImage.path,{
                folder:"prime",
                crop:"scale"
            },
        );
    
        //create a new product
        const newProduct = new productModal({
            name: productName,
            price: productPrice,
            category: productCategory,
            description: productDescription,
            image: uploadedImage.secure_url,
        });
        //save the product
        newProduct.save();
        res.json("Product registered successfully");

    } catch(error) {
        res.json("Product registration failed");
    }
});

//get all products
router.get("/get_products", async (req,res) =>{
    try{
        const products = await productModal.find({});
        res.json(products);
    } catch (error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get single products
router.get("/get_product/:id", async (req,res) =>{
    try{
        const product = await productModal.findById(req.params.id);
        res.json(product);
    } catch (error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}
)

//updating products
router.put("/update_product/:id", async (req,res) =>{
    console.log(req.body);
    //destructing
    const {productName, productPrice, productCategory, productDescription} = req.body;
    const {productImage} = req.files;

    //validation
    if(!productName || !productPrice || !productCategory || !productDescription  ||!productImage){
        return res.json({msg:"Please enter all the fileds"});
    }
    try{
       
        //update product
        const product = new productModal.findById(req.params.id);
            product.name = productName,
            product.price = productPrice,
            product.category = productCategory,
            product.description = productDescription,
            product.image = uploadedImage.secure_url,
        
        //save the updateproduct
        await product.save();
        res.json("Product registered successfully");

    } catch(error) {
        res.json("Product registration failed");
    }
}
)

//delete product
router.delete("/delete_product/:id", async (req,res) => {
    try{
        const product = await productModal .findById(req.params.id);
        await product.deleteOne();
        res.status(200).json ({message: "Product deleted sucesfully"});
    }  catch(error) {
        console.log(error);
        res.status(200).json("Product delete failed");
    }
});
module.exports = router;
