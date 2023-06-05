const authGuard = require("../auth/authGuard");
const necklaceModel = require("../models/necklaceModel");

router.post("/add", authGuard, async(req,res) => {
    console.log(req.body);
    const { necklaceName, necklaceDescription, necklaceCategory, necklacePrice } = req.body;
    const { necklaceImagea, necklaceImageb, necklaceImagec, necklaceImaged } = req.files;
    if(!necklaceName || !necklaceDescription || !necklaceCategory || !necklacePrice){
        return res.status(422).json({error: "Please enter all fields"});
    }

const uploadedImage = await cloudinary.v2.uploader.upload(
    necklaceImagea.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    necklaceImageb.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    necklaceImagec.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    necklaceImaged.path,
    {
        folder: "enchantia",
        crop: "scale"
    },

);
    try{
        const newNecklace = new necklaceModel({
            necname: necklaceName,
            necdescription: necklaceDescription,
            neccategory: necklaceCategory,
            necprice: necklacePrice,
            necimagea: uploadedImage.secure_url,
            necimageb: uploadedImage.secure_url,
            necimagec: uploadedImage.secure_url,
            necimaged: uploadedImage.secure_url
        });
        await newNecklace.save();
        res.status(201).json({ message: "Product Added Successfully"});  
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get all necklace products
router.get("/get_necklaces", async (req, res) => {
    try{
        const necklaces = await necklaceModel.find({});
        res.status(200).json(necklaces);
    }catch(error){
        console.lgo(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});