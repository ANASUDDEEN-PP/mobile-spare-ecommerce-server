const brandModel = require("../Models/brandModel");

exports.createBrand = async(req, res) => {
    try{
        const { name, date, image, imageName } = req.body;
        await brandModel.create({
            name, date, image, imageName
        })
        return res.status(200).json({
            message : `${name} brand is Created Successfully`
        })
    } catch(err){
        return res.status(500).json({
            message : "Internal Server Error",
            err
        })
    }
}

exports.getBrands = async(req, res) => {
    try{
        const brand = await brandModel.find({}).lean();
        return res.status(200).json({
            brand
        })
    }catch(err){
        return res.status(500).json({
            message : "Internal Server error",
            err
        })
    }
}

exports.updateBrand = async(req, res) => {
    try{
        const { id } = req.params;
        const { name, date, image, imageName } = req.body;

        if(!id || !await brandModel.findById(id))
            return res.status(202).json({message : "Invalid Id"});

        await brandModel.findByIdAndUpdate(
            { _id : id },
            { $set:{
                name, date, image, imageName
            }},
            { new: true }
        );
        return res.status(200).json({
            message : "Brand Updated..."
        })
    }catch(err){
        return res.status(500).json({
            message : "Internal Server error",
            err
        })
    }
}

exports.deleteBrand = async(req, res) => {
    try{
        const { id } = req.params;

        if(!id || !await brandModel.findById(id))
            return res.status(202).json({message : "Invalid Id"});

        await brandModel.findByIdAndDelete(id);
        return res.status(200).json({
            message : "Brand Deleted...."
        })
    }catch(err){
        return res.status(500).json({
            message : "Internal Server error",
            err
        })
    }
}