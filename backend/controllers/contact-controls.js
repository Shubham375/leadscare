const contact = require("../models/contact-model");

const contactForm = async (req,res,next) => {
    try {
        const data = req.body;
        const submit = await contact.create(data);
        return res.status(200).json({msg:"Form submitted successfully",details:submit});
    } catch (error) {
        next({msg:"Form did not Submitted",details:error})
    }
};

module.exports = contactForm;