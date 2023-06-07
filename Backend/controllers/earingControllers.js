const authGuard = require("../auth/authGuard");
const earingModel = require("../models/earingModel");
const cloudinary = require("cloudinary");
const router = require("express").Router();

router.post("/add", authGuard, async(req,res) => {
    console.log(req.body);
    const { earingName, earingDescription, earingCategory, earingPrice } = req.body;
    const { earingImagea, earingImageb, earingImagec, earingImaged } = req.files;
    if(!earingName || !earingDescription || !earingCategory || !earingPrice){
        return res.status(422).json({error: "Please enter all fields"});
    }

const uploadedImage = await cloudinary.v2.uploader.upload(
    earingImagea.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    earingImageb.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    earingImagec.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    earingImaged.path,
    {
        folder: "enchantia",
        crop: "scale"
    },

);
    try{
        const newearing = new earingModel({
            earname: earingName,
            eardescription: earingDescription,
            earcategory: earingCategory,
            earprice: earingPrice,
            earimagea: uploadedImage.secure_url,
            earimageb: uploadedImage.secure_url,
            earimagec: uploadedImage.secure_url,
            earimaged: uploadedImage.secure_url
        });
        await newearing.save();
        res.status(201).json({ message: "Product Added Successfully"});  
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get all earing products
router.get("/get_earings", async (req, res) => {
    try{
        const earings = await earingModel.find({});
        res.status(200).json(earings);
    }catch(error){
        console.lgo(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get single product
router.get("/get_earing", async (req, res) => {
    try{
        const earing = await earingModel.findById(req.params.id);
        res.json(product);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal server Error"});
    }
});

//updating earing
router.put("/update_earing/:id", async(req,res)=>{
    console.log(req.body);
    const { earingName, earingDescription, earingCategory, earingPrice }=req.body;
    const { earingImagea, earingImageb, earingImagec, earingImaged} = req.files;
    if(!earingName || !earingDescription || !earingCategory || !earingPrice){
        return res.status(422).json({error: "Please enter all fields"});
    }

    try{
        if(earingImagea){
            const uploadedImage = await cloudinary.v2.uploader.upload(
                earingImagea.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                },
                earingImageb.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                },
                earingImagec.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                },
                earingImaged.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                }
            );

            //update earing
            const earing = await earingModel.findById(req.params.id);
                earing.earname = earingName,
                earing.eardescription = earingDescription,
                earing.earcategory = earingCategory,
                earing.earprice = earingPrice,
                earing.earimagea = uploadedImage.secure_url,
                earing.earimageb = uploadedImage.secure_url,
                earing.earimagec = uploadedImage.secure_url,
                earing.earimaged = uploadedImage.secure_url
            
            await earing.save();

            res.status(201).json({message: "product updated successfully"});
        } else{

            //update earing
            const earing = await earingModel.findById(req.params.id)
                earing.earname = earingName,
                earing.eardescription = earingDescription,
                earing.earcategory = earingCategory,
                earing.earprice = earingPrice,

                await earing.save();
                
                res.status(201).json({ message: "Product updated successfully"});
        }
    }catch(error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//delete product
router.delete("/delete_earing/:id", authGuard, async (req, res)=>{
    try{
        const earing = await earingModel.findById(req.params.id);
        await earing.deleteOne();
        res.status(200).json({message: "Product deleted successfully"});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal Server Error"});
    }
});

module.exports = router;