const authGuard = require("../auth/authGuard");
const bangleModel = require("../models/bangleModel");
const cloudinary = require("cloudinary");
const router = require("express").Router();

router.post("/add", authGuard, async(req,res) => {
    console.log(req.body);
    const { bangleName, bangleDescription, bangleCategory, banglePrice } = req.body;
    const { bangleImagea, bangleImageb, bangleImagec, bangleImaged } = req.files;
    if(!bangleName || !bangleDescription || !bangleCategory || !banglePrice){
        return res.status(422).json({error: "Please enter all fields"});
    }

const uploadedImage = await cloudinary.v2.uploader.upload(
    bangleImagea.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    bangleImageb.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    bangleImagec.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    bangleImaged.path,
    {
        folder: "enchantia",
        crop: "scale"
    },

);
    try{
        const newbangle = new bangleModel({
            bangname: bangleName,
            bangdescription: bangleDescription,
            bangcategory: bangleCategory,
            bangprice: banglePrice,
            bangimagea: uploadedImage.secure_url,
            bangimageb: uploadedImage.secure_url,
            bangimagec: uploadedImage.secure_url,
            bangimaged: uploadedImage.secure_url
        });
        await newbangle.save();
        res.status(201).json({ message: "Product Added Successfully"});  
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get all bangle products
router.get("/get_bangles", async (req, res) => {
    try{
        const bangles = await bangleModel.find({});
        res.status(200).json(bangles);
    }catch(error){
        console.lgo(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get single product
router.get("/get_bangle", async (req, res) => {
    try{
        const bangle = await bangleModel.findById(req.params.id);
        res.json(product);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal server Error"});
    }
});

//updating bangle
router.put("/update_bangle/:id", async(req,res)=>{
    console.log(req.body);
    const { bangleName, bangleDescription, bangleCategory, banglePrice }=req.body;
    const { bangleImagea, bangleImageb, bangleImagec, bangleImaged} = req.files;
    if(!bangleName || !bangleDescription || !bangleCategory || !banglePrice){
        return res.status(422).json({error: "Please enter all fields"});
    }

    try{
        if(bangleImagea){
            const uploadedImage = await cloudinary.v2.uploader.upload(
                bangleImagea.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                },
                bangleImageb.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                },
                bangleImagec.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                },
                bangleImaged.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                }
            );

            //update bangle
            const bangle = await bangleModel.findById(req.params.id);
                bangle.bangname = bangleName,
                bangle.bangdescription = bangleDescription,
                bangle.bangcategory = bangleCategory,
                bangle.bangprice = banglePrice,
                bangle.bangimagea = uploadedImage.secure_url,
                bangle.bangimageb = uploadedImage.secure_url,
                bangle.bangimagec = uploadedImage.secure_url,
                bangle.bangimaged = uploadedImage.secure_url
            
            await bangle.save();

            res.status(201).json({message: "product updated successfully"});
        } else{

            //update bangle
            const bangle = await bangleModel.findById(req.params.id)
                bangle.bangname = bangleName,
                bangle.bangdescription = bangleDescription,
                bangle.bangcategory = bangleCategory,
                bangle.bangprice = banglePrice,

                await bangle.save();
                
                res.status(201).json({ message: "Product updated successfully"});
        }
    }catch(error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//delete product
router.delete("/delete_bangle/:id", authGuard, async (req, res)=>{
    try{
        const bangle = await bangleModel.findById(req.params.id);
        await bangle.deleteOne();
        res.status(200).json({message: "Product deleted successfully"});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal Server Error"});
    }
});

module.exports = router;