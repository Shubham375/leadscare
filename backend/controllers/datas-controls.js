const packages = require("../models/package-model");

const packsCard = async(req, res, next) => {
    try {
        const data = await packages.find();
        res.status(200).json(data);
    } catch (error) {
        next({ msg: error })
    }
};

module.exports = { packsCard };