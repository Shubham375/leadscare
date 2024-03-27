const schema = require("../validators/auth-validator");

const validate = (schema) => async (req,res,next)=>{
    try {
        const parse = await schema.parseAsync(req.body)
        req.body = parse;
        next()
    } catch (err) {
        next({status:400,details:err.errors[0].message,msg:"Invalid Credential"})
    }
}

module.exports = validate;