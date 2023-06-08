const authGuard = require("../auth/authGuard");
const productModel = require("../models/productModel");
const router = require("express").Router();
const cloudinary = require("cloudinary");


router.post("/add", authGuard, async (req, res) => {
    console.log(req.body);
    const { productName, productDescription, productCategory, productPrice, productDetailDescription} = req.body;
    const { productImagea} = req.files;
    if(!productName || !productDescription || !productCategory || !productPrice || !productDetailDescription){
        return res.status(422).json({error: "Please enter all fields"});
    }

    // const uploadedImagea = await cloudinary.v2.uploader.upload(
    //     productImagea.path,
    //     {
    //         folder: "enchantia",
    //         crop: "scale"
    //     },
        
    // );


    // const uploadedImageb = await cloudinary.v2.uploader.upload(
    //     productImageb.path,
    //     {
    //         folder: "enchantia",
    //         crop: "scale"
    //     },
        
    // );
    // const uploadedImagec = await cloudinary.v2.uploader.upload(
    //     productImagec.path,
    //     {
    //         folder: "enchantia",
    //         crop: "scale"
    //     },
        
    // );

    try{
        // let productImages = [...req.body.images];
        // let imagesBuffer = [];
        // for (let i=0; i< images.length; i++){
        //     const uploadedImagea = await cloudinary.v2.uploader.upload(
        //         productImage[i],
        //         {
        //             folder: "enchantia",
        //             crop: "scale"
        //         },
                
        //     );
        //     imagesBuffer.push({
        //         public_id: uploadedImagea.public_id,
        //         url: uploadedImagea.secure_url
        //     })
        // }
        // req.body.productImages = imagesBuffer

        const newProduct = new productModel({
            name: productName,
            description: productDescription,
            category: productCategory,
            price: productPrice,
            detaildescription: productDetailDescription,
            imagea: uploadedImagea.secure_url
           // imageb: uploadedImageb.secure_url,
            //imagec: uploadedImagec.secure_url
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
    const { productName, productDescription, productCategory, productPrice, productDetailDescription } = req.body;
    const { productImagea, productImageb, productImagec } = req.files;
    if (!productName || !productDescription || !productCategory || !productPrice || !productDetailDescription) {
        return res.status(422).json({ error: "Please add all the fields" });
    }

    try {

        if(productImagea ){
            const uploadedImagea = await cloudinary.v2.uploader.upload(
                productImagea.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                },
                
            );
            // const uploadedImageb = await cloudinary.v2.uploader.upload(
            //     productImageb.path,
            //     {
            //         folder: "enchantia",
            //         crop: "scale"
            //     },
                
            // );
            // const uploadedImagec = await cloudinary.v2.uploader.upload(
            //     productImagec.path,
            //     {
            //         folder: "enchantia",
            //         crop: "scale"
            //     },
                
            // );
            
            //  update product
            const product = await productModel.findById(req.params.id);
                product.name= productName,
                product.description= productDescription,
                product.category= productCategory,
                product.price= productPrice,
                product.detaildescription= productDetailDescription,
                product.imagea= uploadedImagea.secure_url,
                // product.imageb= uploadedImageb.secure_url,
                // product.imagec= uploadedImagec.secure_url
    
            await product.save();
    
            res.status(201).json({ message: "Product updated successfully" });
        } else{
            
            //  update product
            const product = await productModel.findById(req.params.id);
            product.name = productName;
            product.description = productDescription;
            product.category = productCategory;
            product.price = productPrice; 
            product.detaildescription=productDetailDescription;
    
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